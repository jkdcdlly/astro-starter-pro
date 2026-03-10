globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_pRuMz8GF.mjs';
import { $ as $$Maps$1 } from '../chunks/maps_Bq8c-dRW.mjs';
import { d as defaultLang } from '../chunks/site_DYYsYBcp.mjs';
export { renderers } from '../renderers.mjs';

const $$Maps = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 默认语言为 en -->${renderComponent($$result, "MapsTemplate", $$Maps$1, { "lang": defaultLang })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/maps.astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/maps.astro";
const $$url = "/maps";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Maps,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
