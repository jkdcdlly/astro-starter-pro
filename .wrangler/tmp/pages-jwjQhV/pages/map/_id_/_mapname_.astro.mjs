globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_pRuMz8GF.mjs';
import { $ as $$mapname$1 } from '../../../chunks/_mapname__Bn7yY98n.mjs';
import { d as defaultLang } from '../../../chunks/site_DYYsYBcp.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const Astro = $$Astro;
function getStaticPaths() {
  const params_str = Astro.url.pathname.split("/map/")[1];
  params_str.split("/")[0];
  return {
    params: { id: params_str.split("/")[0], mapname: params_str.split("/")[0] || "" }
  };
}
const $$mapname = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$mapname;
  const { params } = Astro2.props;
  return renderTemplate`<!-- 直接渲染多语言组件，强制传入默认语言 -->${renderComponent($$result, "MapTemplate", $$mapname$1, { "lang": defaultLang, "params": { ...params, lang: defaultLang } })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/map/[id]/[mapname].astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/map/[id]/[mapname].astro";
const $$url = "/map/[id]/[mapname]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$mapname,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
