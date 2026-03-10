// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: ["/*"],
  exclude: ["/sitemap*.xml"]
};

// ../../.nvm/versions/node/v24.11.1/lib/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/macuser/astro_wk/astro-starter-pro/.wrangler/tmp/pages-jwjQhV/bundledWorker-0.9766190205779163.mjs";
import { isRoutingRuleMatch } from "/Users/macuser/.nvm/versions/node/v24.11.1/lib/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/macuser/astro_wk/astro-starter-pro/.wrangler/tmp/pages-jwjQhV/bundledWorker-0.9766190205779163.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=70n3d2w292u.js.map
