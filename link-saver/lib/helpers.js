import axios from 'axios'
import cheerio from 'cheerio'

export async function getMetadata(url) {
  try {
    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)

    // Get favicon
    let favicon = $('link[rel="icon"]').attr('href') || 
                 $('link[rel="shortcut icon"]').attr('href') || 
                 $('link[rel="apple-touch-icon"]').attr('href')

    // Handle relative favicon URLs
    if (favicon && !favicon.startsWith('http')) {
      const urlObj = new URL(url)
      favicon = favicon.startsWith('/') 
        ? `${urlObj.protocol}//${urlObj.host}${favicon}`
        : `${urlObj.protocol}//${urlObj.host}/${favicon}`
    }

    const metadata = {
      title: $('meta[property="og:title"]').attr('content') || 
             $('title').text() || 
             url,
      description: $('meta[property="og:description"]').attr('content') || 
                  $('meta[name="description"]').attr('content') || 
                  '',
      favicon: favicon || `${new URL(url).origin}/favicon.ico`,
      image: $('meta[property="og:image"]').attr('content') || 
             $('meta[name="twitter:image"]').attr('content') || 
             null
    }

    return metadata
  } catch (error) {
    console.error('Error fetching metadata:', error)
    return {
      title: url,
      description: '',
      favicon: null,
      image: null
    }
  }
}