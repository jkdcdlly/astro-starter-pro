globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../../../renderers.mjs';

const GET = async ({ url, locals }) => {
  const query = url.searchParams.get("q") || "";
  if (!query.trim()) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  let db = null;
  try {
    if (locals?.runtime?.env?.DB) {
      db = locals.runtime.env.DB;
    } else if (locals?.DB) {
      db = locals.DB;
    }
  } catch (e) {
    console.log("Failed to get DB:", e);
  }
  if (!db) {
    return new Response(JSON.stringify({ error: "Database not available" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const sql = `SELECT DISTINCT author FROM wc3maps_map_list WHERE author IS NOT NULL AND author != '' AND author LIKE ? ORDER BY author LIMIT 5`;
    const result = await db.prepare(sql).bind(`%${query}%`).all();
    const authors = result.results?.map((row) => row.author).filter(Boolean) || [];
    return new Response(JSON.stringify(authors), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60"
      }
    });
  } catch (error) {
    console.error("Error searching authors:", error);
    return new Response(JSON.stringify({ error: "Failed to search authors" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
