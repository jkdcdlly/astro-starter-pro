globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from './astro/server_pRuMz8GF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Blkb5wVP.mjs';
import { $ as $$Hero } from './Hero_CCu6qvUI.mjs';
import { g as getLangFromUrl, u as useTranslations, a as ui, d as defaultLang } from './site_DYYsYBcp.mjs';

const $$Astro = createAstro("https://war3maps.net/");
function getStaticPaths() {
  const languages = Object.keys(ui).filter((lang) => lang !== defaultLang);
  return languages.map((lang) => ({
    params: { lang },
    props: { lang }
  }));
}
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const metadata = {
    title: t("404.title"),
    description: "The page you're looking for doesn't exist.",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "metadata": metadata, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": `<h1 class="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-[12rem] font-extrabold tracking-tighter mb-4">404</h1>`, "description": t("404.description"), "actions": [
    {
      variant: "primary",
      text: "Back to Home",
      href: "/",
      icon: "lucide:home"
    },
    {
      variant: "secondary",
      text: "Contact",
      href: "/contact",
      icon: "lucide:phone"
    }
  ] })} ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/404.astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/404.astro";
const $$url = "/[lang]/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$404 as $, _page as _ };
