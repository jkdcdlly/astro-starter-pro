import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals, url }) => {
  const SITE_URL = process.env.SITE_URL || 'https://war3maps.net/';
  
  let db: D1Database | null = null;

  try {
    if (locals?.runtime?.env?.DB) {
      db = locals.runtime.env.DB;
    } else if ((locals as any)?.DB) {
      db = (locals as any).DB;
    }
  } catch (e) {
    console.log('Failed to get DB:', e);
  }

  const staticPages = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/about/', changefreq: 'monthly', priority: '0.8' },
    { loc: '/maps/', changefreq: 'daily', priority: '0.9' },
    { loc: '/blog/', changefreq: 'daily', priority: '0.8' },
  ];

  let mapUrls: Array<{ loc: string; changefreq: string; priority: string }> = [];

  if (db) {
    try {
      const sql = 'SELECT id, name FROM wc3maps_map_list WHERE id > 0 ORDER BY id DESC LIMIT 10000';
      const result = await db.prepare(sql).all();
      
      mapUrls = (result.results || []).map((row: any) => ({
        loc: `/map/${row.id}/${encodeURIComponent(row.name)}/`,
        changefreq: 'weekly',
        priority: '0.7'
      }));
    } catch (error) {
      console.error('Error fetching maps for sitemap:', error);
    }
  }

  const allUrls = [...staticPages, ...mapUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(item => `  <url>
    <loc>${SITE_URL.replace(/\/$/, '')}${item.loc}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
