import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    const siteName = domain.replace('www.', '').split('.')[0];
    const capitalizedSite = siteName.charAt(0).toUpperCase() + siteName.slice(1);

    // Predefined known sites that block scraping, with static info
    const knownSites = {
      'linkedin.com': {
        title: 'LinkedIn Profile',
        favicon: 'https://static.licdn.com/sc/h/akt4ae504epesldzj74dzyed8',
        imageUrl: null,
      },
      'facebook.com': {
        title: 'Facebook Page',
        favicon: 'https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico',
        imageUrl: null,
      },
      'instagram.com': {
        title: 'Instagram Post',
        favicon: 'https://static.cdninstagram.com/rsrc.php/v3/yR/r/lam-fZmwmvn.png',
        imageUrl: null,
      },
      'twitter.com': {
        title: 'Twitter Post',
        favicon: 'https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png',
        imageUrl: null,
      },
      'medium.com': {
        title: 'Medium Article',
        favicon: 'https://medium.com/favicon.ico',
        imageUrl: null,
      },
    };

    for (const siteDomain in knownSites) {
      if (domain.includes(siteDomain)) {
        // Try to append last path segment to title if meaningful
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        if (pathParts.length > 0) {
          const lastPart = pathParts[pathParts.length - 1].replace(/-/g, ' ');
          if (lastPart && lastPart.length > 3) {
            knownSites[siteDomain].title += `: ${lastPart.charAt(0).toUpperCase() + lastPart.slice(1)}`;
          }
        }
        return res.status(200).json(knownSites[siteDomain]);
      }
    }

    // Fetch page HTML for other sites
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
      },
      timeout: 8000,
      maxRedirects: 5,
    });

    const $ = cheerio.load(response.data);

    // Extract title with fallbacks
    let title =
      $('title').text().trim() ||
      $('meta[property="og:title"]').attr('content') ||
      $('meta[name="twitter:title"]').attr('content') ||
      $('h1').first().text().trim() ||
      `${capitalizedSite} Page`;

    title = title.replace(/\s+/g, ' ').trim();
    if (title.length > 100) {
      title = title.substring(0, 97) + '...';
    }

    // Extract favicon with fallbacks
    let favicon =
      $('link[rel="icon"]').attr('href') ||
      $('link[rel="shortcut icon"]').attr('href') ||
      $('link[rel="apple-touch-icon"]').attr('href') ||
      `//${domain}/favicon.ico`;

    // Make favicon URL absolute if relative
    if (favicon && !favicon.startsWith('http') && !favicon.startsWith('//')) {
      favicon = favicon.startsWith('/')
        ? `${urlObj.protocol}//${domain}${favicon}`
        : `${urlObj.protocol}//${domain}/${favicon}`;
    }

    // Extract image URL with fallbacks
    let imageUrl =
      $('meta[property="og:image"]').attr('content') ||
      $('meta[name="twitter:image"]').attr('content') ||
      $('link[rel="image_src"]').attr('href') ||
      $('img[src]').first().attr('src') ||
      null;

    // Make image URL absolute if relative
    if (imageUrl && !imageUrl.startsWith('http') && !imageUrl.startsWith('//')) {
      imageUrl = imageUrl.startsWith('/')
        ? `${urlObj.protocol}//${domain}${imageUrl}`
        : `${urlObj.protocol}//${domain}/${imageUrl}`;
    }

    return res.status(200).json({ title, favicon, imageUrl });
  } catch (error) {
    console.error('Error extracting link data:', error);

    // Fallback: build title & favicon based on URL domain and path
    try {
      const urlObj = new URL(url);
      const domain = urlObj.hostname;
      const siteName = domain.replace('www.', '').split('.')[0];
      const capitalizedSite = siteName.charAt(0).toUpperCase() + siteName.slice(1);

      const pathParts = urlObj.pathname.split('/').filter(Boolean);
      let pathInfo = '';
      if (pathParts.length > 0) {
        const lastPart = pathParts[pathParts.length - 1].replace(/-/g, ' ');
        if (lastPart && lastPart.length > 3) {
          pathInfo = `: ${lastPart.charAt(0).toUpperCase() + lastPart.slice(1)}`;
        }
      }

      return res.status(200).json({
        title: `${capitalizedSite} Page${pathInfo}`,
        favicon: `${urlObj.protocol}//${domain}/favicon.ico`,
        imageUrl: null,
      });
    } catch {
      return res.status(200).json({
        title: url,
        favicon: null,
        imageUrl: null,
      });
    }
  }
}
