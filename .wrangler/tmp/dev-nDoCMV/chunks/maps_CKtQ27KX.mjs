globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, y as renderScript } from './astro/server_pRuMz8GF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Blkb5wVP.mjs';
import { g as getLangFromUrl, u as useTranslations } from './site_DYYsYBcp.mjs';

class DatabaseService {
  /**
   * Get the database instance
   */
  getDB() {
    try {
      if (typeof Astro !== "undefined" && Astro.locals) {
        if (Astro.locals?.runtime?.env?.DB) {
          return Astro.locals.runtime.env.DB;
        } else if (Astro.locals?.DB) {
          return Astro.locals.DB;
        }
      }
      if (typeof env !== "undefined" && env.DB) {
        return env.DB;
      }
    } catch (e) {
      console.log("Failed to get DB:", e);
    }
    return null;
  }
  /**
   * Execute a prepared statement with bindings
   */
  async execute(sql, params = []) {
    const db = this.getDB();
    if (!db) {
      console.log("Database not initialized");
      return null;
    }
    try {
      const result = await db.prepare(sql).bind(...params).all();
      return result.results;
    } catch (error) {
      console.error("Error executing query:", error);
      return null;
    }
  }
  /**
   * Execute a prepared statement and return the first result
   */
  async executeFirst(sql, params = []) {
    const db = this.getDB();
    if (!db) {
      console.log("Database not initialized");
      return null;
    }
    try {
      const result = await db.prepare(sql).bind(...params).first();
      return result;
    } catch (error) {
      console.error("Error executing query:", error);
      return null;
    }
  }
  /**
   * Get total count of records matching the query
   */
  async getCount(table, whereClause = "", params = []) {
    const sql = `SELECT COUNT(*) as count FROM ${table} ${whereClause}`;
    const result = await this.executeFirst(sql, params);
    return result?.count || 0;
  }
}
const dbService = new DatabaseService();

const $$Astro = createAstro("https://war3maps.net/");
const $$Maps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Maps;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const url = new URL(Astro2.request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const author = Astro2.url?.searchParams?.get("author");
  const users = Astro2.url?.searchParams?.get("users");
  const flags = Astro2.url?.searchParams?.get("flags");
  let whereClause = " WHERE group_id > 0 ";
  const args = [];
  if (author) {
    whereClause += " AND author = ?";
    args.push(author);
  }
  if (users) {
    whereClause += " AND users >= ?";
    args.push(parseInt(users));
  }
  if (flags) {
    whereClause += " AND flags = ?";
    args.push(parseInt(flags));
  }
  const limit = 12;
  const offset = (page - 1) * limit;
  let totalCount = 0;
  let maps = [];
  const cacheKey = new URL(url.toString());
  let cache = null;
  try {
    if (typeof caches !== "undefined") {
      cache = await caches.open("astro-cache");
    }
  } catch (e) {
    console.log("Cache not available");
  }
  if (cache) {
    try {
      const cachedResponse = await cache.match(cacheKey);
      if (cachedResponse) {
        const cachedData = await cachedResponse.json();
        totalCount = cachedData.totalCount;
        maps = cachedData.maps;
        console.log("Loaded from cache");
      }
    } catch (e) {
      console.log("Cache read failed, fetching fresh data");
    }
  }
  if (!maps.length) {
    try {
      totalCount = await dbService.getCount("wc3maps_map_list", whereClause, args);
      const mapsSql = `SELECT id, name, author, users, flags, downloads, hosted_total FROM wc3maps_map_list ${whereClause} ORDER BY id DESC LIMIT ? OFFSET ?`;
      const mapsArgs = [...args, limit, offset];
      const mapsResult = await dbService.execute(mapsSql, mapsArgs);
      maps = mapsResult || [];
      if (cache) {
        try {
          const cacheData = { totalCount, maps };
          const response = new Response(JSON.stringify(cacheData), {
            headers: {
              "Cache-Control": "public, max-age=300, s-maxage=300"
            }
          });
          await cache.put(cacheKey, response);
        } catch (e) {
          console.log("Cache write failed");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  if (maps.length === 0) {
    console.log("No maps found at the end - db available:", !!dbService.getDB());
    console.log("=== END DEBUG ===");
  }
  Astro2.response.headers.set("Cache-Control", "public, max-age=300, s-maxage=300");
  const totalPages = Math.ceil(totalCount / limit);
  const generatePageUrl = (pageNum) => {
    const newUrl = new URL(Astro2.url.toString());
    newUrl.searchParams.set("page", pageNum.toString());
    return newUrl.pathname + newUrl.search;
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Browse Maps", "lang": lang }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="container mx-auto px-4"> <!-- Header --> <div class="text-center mb-12"> <h1 class="text-3xl font-bold mb-4">${t("BrowseMaps")}</h1> <p class="text-muted-foreground">Discover custom Warcraft III maps and find your next adventure.</p> </div> <!-- Main Content --> <div class="flex flex-col lg:flex-row gap-8"> <!-- Filters --> <div class="w-full lg:w-64 shrink-0"> <div class="bg-card border border-border rounded-lg p-4"> <h3 class="font-semibold mb-4">Filters</h3> <!-- Author Filter --> <div class="mb-6 relative"> <label class="block text-sm font-medium mb-2">Author</label> <input type="text" id="author-input" placeholder="Search author..."${addAttribute(author || "", "value")} class="w-full px-3 py-2 border border-border rounded-md bg-background" autocomplete="off"> <div id="author-suggestions" class="absolute z-10 w-full mt-1 bg-background border border-border rounded-md shadow-lg hidden"></div> </div> ${renderScript($$result2, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/maps.astro?astro&type=script&index=0&lang.ts")} <!-- Users Filter --> <div class="mb-6"> <label class="block text-sm font-medium mb-2">Minimum Users</label> <select class="w-full px-3 py-2 border border-border rounded-md bg-background" onchange="window.location.href = this.value"> <option value="?page=1">All</option> <option value="?page=1&users=100"${addAttribute(users === "100", "selected")}>100+</option> <option value="?page=1&users=500"${addAttribute(users === "500", "selected")}>500+</option> <option value="?page=1&users=1000"${addAttribute(users === "1000", "selected")}>1000+</option> <option value="?page=1&users=5000"${addAttribute(users === "5000", "selected")}>5000+</option> </select> </div> <!-- Flags Filter --> <div class="mb-6"> <label class="block text-sm font-medium mb-2">Flags</label> <select class="w-full px-3 py-2 border border-border rounded-md bg-background" onchange="window.location.href = this.value"> <option value="?page=1">All</option> <option value="?page=1&flags=0"${addAttribute(flags === "0", "selected")}>None</option> <option value="?page=1&flags=1"${addAttribute(flags === "1", "selected")}>Flag 1</option> <option value="?page=1&flags=2"${addAttribute(flags === "2", "selected")}>Flag 2</option> <option value="?page=1&flags=3"${addAttribute(flags === "3", "selected")}>Flag 3</option> </select> </div> </div> </div> <!-- Map Grid --> <div class="flex-1"> <!-- Results Info --> <div class="flex justify-between items-center mb-6"> <div class="text-sm text-muted-foreground">
Showing ${offset + 1}-${Math.min(offset + limit, totalCount)} of ${totalCount} maps
</div> <div class="flex items-center"> <span class="text-sm mr-2">Sort by:</span> <select class="px-3 py-1 border border-border rounded-md bg-background text-sm"> <option>Most Recent</option> <option>Most Popular</option> <option>Most Downloaded</option> </select> </div> </div> <!-- Maps Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${maps.map((map) => renderTemplate`<div${addAttribute(map.id, "key")} class="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"> <a${addAttribute(`/map/${map.id}/${map.name}`, "href")}> <!-- Map Preview --> <div class="h-48 overflow-hidden"> <img${addAttribute(`https://wc3maps.com/static/maps/${map.id}/archive/war3mapMap.jpg`, "src")}${addAttribute(map.name, "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" fetchpriority="high" onerror="this.src='https://via.placeholder.com/400x225?text=No+Preview';"> </div> <!-- Map Info --> <div class="p-4"> <h3 class="font-medium mb-1 truncate">${map.name}</h3> <p class="text-sm text-muted-foreground mb-3">by ${map.author || "Unknown"}</p> <div class="flex justify-between text-xs text-muted-foreground"> <span>Players: ${map.users}</span> <span>Downloads: ${map.downloads}</span> </div> </div> </a> </div>`)} </div> <!-- Pagination --> ${totalPages > 1 && renderTemplate`<div class="flex justify-center mt-12"> <div class="flex items-center space-x-2"> ${page > 1 && renderTemplate`<a${addAttribute(generatePageUrl(page - 1), "href")} class="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
Previous
</a>`} ${Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
    let pageNum = i + 1;
    if (totalPages > 5) {
      if (page > 3) {
        pageNum = Math.min(page - 2 + i, totalPages);
      }
    }
    return renderTemplate`<a${addAttribute(pageNum, "key")}${addAttribute(generatePageUrl(pageNum), "href")}${addAttribute(`px-4 py-2 border border-border rounded-md ${pageNum == page ? "bg-primary text-primary-foreground" : "hover:bg-muted"} transition-colors`, "class")}> ${pageNum} </a>`;
  })} ${page < totalPages && renderTemplate`<a${addAttribute(generatePageUrl(page + 1), "href")} class="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
Next
</a>`} </div> </div>`} </div> </div> </div> </section> ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/maps.astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/maps.astro";
const $$url = "/[lang]/maps";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Maps,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Maps as $, _page as _ };
