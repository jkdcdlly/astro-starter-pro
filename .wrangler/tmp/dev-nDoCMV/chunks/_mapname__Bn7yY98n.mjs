globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, q as unescapeHTML } from './astro/server_pRuMz8GF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Blkb5wVP.mjs';
import { g as getLangFromUrl, a as ui, d as defaultLang } from './site_DYYsYBcp.mjs';

const $$Astro = createAstro("https://war3maps.net/");
function getStaticPaths() {
  const languages = Object.keys(ui).filter((lang) => lang !== defaultLang);
  return languages.map((lang) => ({
    params: { lang, id: "1", mapname: "map" },
    props: { lang }
  }));
}
const $$mapname = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$mapname;
  const params = Astro2.params;
  const mapId = params.id;
  params.mapname;
  const lang = getLangFromUrl(Astro2.url);
  let db = null;
  try {
    if (Astro2.locals?.runtime?.env?.DB) {
      db = Astro2.locals.runtime.env.DB;
    } else if (Astro2.locals?.DB) {
      db = Astro2.locals.DB;
    }
  } catch (e) {
    console.log("Failed to get DB from Astro.locals");
  }
  const cacheKey = new URL(Astro2.request.url);
  let cache = null;
  try {
    if (typeof caches !== "undefined") {
      cache = await caches.open("astro-cache");
    }
  } catch (e) {
    console.log("Cache not available");
  }
  let mapData = null;
  if (cache) {
    try {
      const cachedResponse = await cache.match(cacheKey);
      if (cachedResponse) {
        mapData = await cachedResponse.json();
      }
    } catch (e) {
      console.log("Cache read failed, fetching fresh data");
    }
  }
  if (!mapData && db) {
    try {
      const sql = "SELECT * FROM wc3_maps_complete WHERE id = ?";
      mapData = await db.prepare(sql).bind(parseInt(mapId)).first();
      if (cache && mapData) {
        try {
          const response = new Response(JSON.stringify(mapData), {
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
      console.error("Error fetching map data:", error);
    }
  }
  if (!mapData) {
    console.log("No map data found - db available:", !!db);
  }
  Astro2.response.headers.set("Cache-Control", "public, max-age=300, s-maxage=300");
  if (!mapData) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": mapData.name, "lang": lang }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="container mx-auto px-4"> <!-- Header --> <div class="text-center mb-12"> <h1 class="text-3xl font-bold mb-4">${mapData.name}</h1> <p class="text-muted-foreground">by ${mapData.author || "Unknown"}</p> </div> <!-- Main Content --> <div class="flex flex-col lg:flex-row gap-8"> <!-- Left Column - Map Info --> <div class="w-full lg:w-1/3"> <!-- Map Preview --> <div class="mb-6"> <img${addAttribute(`https://wc3maps.com/static/maps/${mapData.id}/archive/war3mapMap.jpg`, "src")}${addAttribute(mapData.name, "alt")} class="w-full rounded-lg shadow-md" onerror="this.src='https://via.placeholder.com/400x300?text=No+Preview';"> </div> <!-- Action Buttons --> <div class="flex gap-4 mb-6"> <a${addAttribute(`https://wc3maps.com/map/${mapData.id}`, "href")} target="_blank" rel="noopener noreferrer" class="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
Download
</a> <a${addAttribute(`https://wc3maps.com/map/${mapData.id}`, "href")} target="_blank" rel="noopener noreferrer" class="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
Download on WC3Maps
</a> </div> <!-- Map Details --> <div class="bg-card border border-border rounded-lg p-4 mb-6"> <h3 class="font-semibold mb-4">Map Details</h3> <div class="grid grid-cols-2 gap-4"> <div> <p class="text-sm text-muted-foreground">Status</p> <p class="font-medium">${mapData.parsed ? "Parsed" : "Not Parsed"}</p> </div> <div> <p class="text-sm text-muted-foreground">Game Version</p> <p class="font-medium">${mapData.build || "Unknown"}</p> </div> <div> <p class="text-sm text-muted-foreground">Version</p> <p class="font-medium">${mapData.format_version || "Unknown"}</p> </div> <div> <p class="text-sm text-muted-foreground">Script</p> <p class="font-medium">${mapData.script === 1 ? "Lua" : "JASS"}</p> </div> <div> <p class="text-sm text-muted-foreground">Size</p> <p class="font-medium">${mapData.size ? `${(mapData.size / 1024 / 1024).toFixed(2)} MB` : "Unknown"}</p> </div> <div> <p class="text-sm text-muted-foreground">Saves</p> <p class="font-medium">${mapData.saves || 0}</p> </div> </div> </div> <!-- Statistics --> <div class="bg-card border border-border rounded-lg p-4"> <h3 class="font-semibold mb-4">Statistics</h3> <div class="space-y-4"> <div> <div class="flex justify-between mb-1"> <p class="text-sm text-muted-foreground">Downloads</p> <p class="font-medium">${mapData.downloads || 0}</p> </div> <div class="w-full bg-muted rounded-full h-2"> <div class="bg-primary h-2 rounded-full" style="width: 70%"></div> </div> </div> <div> <div class="flex justify-between mb-1"> <p class="text-sm text-muted-foreground">Hosted Total</p> <p class="font-medium">${mapData.hosted_total || 0}</p> </div> <div class="w-full bg-muted rounded-full h-2"> <div class="bg-primary h-2 rounded-full" style="width: 50%"></div> </div> </div> <div> <div class="flex justify-between mb-1"> <p class="text-sm text-muted-foreground">Hosted This Month</p> <p class="font-medium">${mapData.hosted_month || 0}</p> </div> <div class="w-full bg-muted rounded-full h-2"> <div class="bg-primary h-2 rounded-full" style="width: 30%"></div> </div> </div> </div> </div> </div> <!-- Right Column - Description --> <div class="w-full lg:w-2/3"> <!-- Description --> <div class="bg-card border border-border rounded-lg p-6 mb-6"> <h3 class="font-semibold mb-4">Description</h3> <div class="prose max-w-none"> ${mapData.description ? renderTemplate`<div>${unescapeHTML(mapData.description.replace(/\n/g, "<br>"))}</div>` : renderTemplate`<p>No description available</p>`} </div> </div> <!-- Map Information --> <div class="bg-card border border-border rounded-lg p-6 mb-6"> <h3 class="font-semibold mb-4">Map Information</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <h4 class="font-medium mb-2">Basic Info</h4> <ul class="space-y-2"> <li class="flex justify-between"> <span class="text-muted-foreground">Author:</span> <span>${mapData.author || "Unknown"}</span> </li> <li class="flex justify-between"> <span class="text-muted-foreground">Players:</span> <span>${mapData.player_count || 1}</span> </li> <li class="flex justify-between"> <span class="text-muted-foreground">Tileset:</span> <span>${mapData.tileset || "Unknown"}</span> </li> <li class="flex justify-between"> <span class="text-muted-foreground">Size:</span> <span>${mapData.width}x${mapData.height} (${mapData.playable_width}x${mapData.playable_height} playable)</span> </li> </ul> </div> <div> <h4 class="font-medium mb-2">Technical</h4> <ul class="space-y-2"> <li class="flex justify-between"> <span class="text-muted-foreground">Graphics:</span> <span>${mapData.graphics === 2 ? "HD" : mapData.graphics === 1 ? "SD" : "SD & HD"}</span> </li> <li class="flex justify-between"> <span class="text-muted-foreground">Triggers:</span> <span>${mapData.has_triggers ? "Yes" : "No"}</span> </li> <li class="flex justify-between"> <span class="text-muted-foreground">Cheats:</span> <span>${mapData.cheats ? "Allowed" : "Not Allowed"}</span> </li> <li class="flex justify-between"> <span class="text-muted-foreground">Team Count:</span> <span>${mapData.team_count || 1}</span> </li> </ul> </div> </div> </div> <!-- Tags --> ${mapData.tags && renderTemplate`<div class="bg-card border border-border rounded-lg p-6"> <h3 class="font-semibold mb-4">Tags</h3> <div class="flex flex-wrap gap-2"> ${mapData.tags.split(",").map((tag) => renderTemplate`<span class="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"> ${tag.trim()} </span>`)} </div> </div>`} </div> </div> </div> </section> ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/map/[id]/[mapname].astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/map/[id]/[mapname].astro";
const $$url = "/[lang]/map/[id]/[mapname]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$mapname,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$mapname as $, _page as _ };
