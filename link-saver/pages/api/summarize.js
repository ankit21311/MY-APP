export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const summary = await getSummaryFromJinaAI(url);
    return res.status(200).json({ summary });
  } catch (error) {
    console.error('Error generating summary:', error);

    try {
      const urlObj = new URL(url);
      const domain = urlObj.hostname.replace('www.', '');
      const siteName = domain.split('.')[0];
      const capitalizedSite = siteName.charAt(0).toUpperCase() + siteName.slice(1);

      const pathParts = urlObj.pathname.split('/').filter(Boolean);
      let contextHint = '';
      if (pathParts.length > 0) {
        const lastPath = pathParts[pathParts.length - 1].replace(/[-_]/g, ' ').trim();
        if (lastPath && lastPath.length > 3 && !/^\d+$/.test(lastPath)) {
          contextHint = ` about "${lastPath.charAt(0).toUpperCase() + lastPath.slice(1)}"`;
        }
      }

      return res.status(200).json({
        summary: `Summary temporarily unavailable. This is content from ${capitalizedSite}${contextHint}.`,
      });
    } catch {
      return res.status(200).json({
        summary: 'Summary temporarily unavailable. Please check the original content.',
      });
    }
  }
}

async function getSummaryFromJinaAI(url) {
  try {
    let targetUrl = url.replace(/^https?:\/\//, '');
    const encodedTarget = encodeURIComponent(targetUrl);

    const response = await fetch(`https://r.jina.ai/http://${encodedTarget}`, {
      method: 'GET',
      headers: { Accept: 'text/plain' },
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const summary = await response.text();
    if (!summary || summary.trim().length < 10) {
      throw new Error('Received empty or too short summary');
    }

    let trimmed = summary.trim();
    if (trimmed.length > 500) {
      const sentences = trimmed.match(/[^.!?]+[.!?]+/g) || [];
      trimmed = sentences.length > 3 ? sentences.slice(0, 3).join(' ') : trimmed.slice(0, 500) + '...';
    }

    return trimmed;
  } catch (error) {
    console.error('Error calling Jina AI:', error);
    throw error;
  }
}
