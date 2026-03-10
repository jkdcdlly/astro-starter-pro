globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute } from './astro/server_pRuMz8GF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Blkb5wVP.mjs';
import { g as getImage } from './_astro_assets_DeTyZ-Cv.mjs';
import { $ as $$Content2 } from './Content2_BJcS_WxT.mjs';
import { $ as $$Values } from './Values_DPijVg6M.mjs';
import { g as getLangFromUrl, u as useTranslations, a as ui } from './site_DYYsYBcp.mjs';

const azerothImage = new Proxy({"src":"/_astro/azeroth.BzlbTiO5.jpg","width":2048,"height":1152,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/about/azeroth.jpg";
							}
							
							return target[name];
						}
					});

const lichkingImage = new Proxy({"src":"/_astro/lichking.gQWl1qwT.jpg","width":5472,"height":3072,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/about/lichking.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://war3maps.net/");
function getStaticPaths() {
  const languages = Object.keys(ui);
  return languages.map((lang) => ({
    params: { lang },
    props: { lang }
  }));
}
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const metadata = {
    title: t("about.title"),
    description: t("about.description")
  };
  const values = [
    {
      title: t("about.values.mission"),
      description: t("about.values.missionDesc")
    },
    {
      title: t("about.values.community"),
      description: t("about.values.communityDesc")
    },
    {
      title: t("about.values.forPlayers"),
      description: t("about.values.forPlayersDesc")
    },
    {
      title: t("about.values.forCreators"),
      description: t("about.values.forCreatorsDesc")
    },
    {
      title: t("about.values.vision"),
      description: t("about.values.visionDesc")
    },
    {
      title: t("about.values.builtByCommunity"),
      description: t("about.values.builtByCommunityDesc")
    }
  ];
  const optimizedImage = await getImage({
    src: azerothImage,
    format: "webp"
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "metadata": metadata, "lang": lang }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Content2", $$Content2, { "title": t("about.title"), "description": [
    t("about.story.content")
  ], "tagline": t("about.story.title"), "image": azerothImage, "imageAlt": "Azeroth landscape", "actions": [
    {
      text: t("about.actions.contact"),
      href: `/${lang}/contact`,
      variant: "primary",
      icon: "lucide:mail"
    }
  ] })} ${renderComponent($$result2, "Values", $$Values, { "items": values, "columns": 3, "tagline": t("about.values.tagline"), "title": t("about.values.title"), "subtitle": t("about.values.subtitle") })} ${renderComponent($$result2, "Content2", $$Content2, { "title": t("about.finalWords.title"), "description": [
    t("about.finalWords.content")
  ], "tagline": t("about.finalWords.tagline"), "image": lichkingImage, "isReversed": true, "imageAlt": "Lich King" })}  `, "head": async ($$result2) => renderTemplate`<link rel="preload"${addAttribute(optimizedImage.src, "href")} as="image">` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/about.astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/about.astro";
const $$url = "/[lang]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$About as $, _page as _ };
