globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, d as addAttribute, a as renderTemplate } from './astro/server_pRuMz8GF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Blkb5wVP.mjs';
import { g as getLangFromUrl, u as useTranslations, a as ui, d as defaultLang, s as siteConfig } from './site_DYYsYBcp.mjs';
import { $ as $$Hero } from './Hero_CCu6qvUI.mjs';
import { $ as $$Features } from './Features_Drhez1vV.mjs';
import { $ as $$Icon } from './Icon_Dg5RQyl_.mjs';
import { $ as $$Headline } from './Headline_DCQ5fomZ.mjs';
import { $ as $$Content } from './Content_8i370uOl.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BnDcpYFQ.mjs';
import { $ as $$Image } from './_astro_assets_DeTyZ-Cv.mjs';

const $$Astro$2 = createAstro("https://war3maps.net/");
const $$FeatureVote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeatureVote;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const features = [
    { id: 1, votes: 120 },
    { id: 2, votes: 98 },
    { id: 3, votes: 85 },
    { id: 4, votes: 76 },
    { id: 5, votes: 65 },
    { id: 6, votes: 54 },
    { id: 7, votes: 43 },
    { id: 8, votes: 32 },
    { id: 9, votes: 21 },
    { id: 10, votes: 10 }
  ];
  const sortedFeatures = [...features].sort((a, b) => b.votes - a.votes);
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-4"> <div class="max-w-7xl mx-auto"> ${renderComponent($$result, "Headline", $$Headline, { "title": t("widgets.featureVote.title"), "tagline": t("widgets.featureVote.tagline"), "classes": {
    container: "max-w-3xl mx-auto text-center"
  } })} <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${sortedFeatures.map((feature) => renderTemplate`<div class="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"${addAttribute(feature.id, "data-id")}> <div class="flex justify-between items-center mb-4"> <h3 class="text-lg font-medium">${t("widgets.featureVote.features")[feature.id - 1]}</h3> <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"> ${feature.votes} ${t("widgets.featureVote.votes")} </span> </div> <button class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-background border border-border rounded-md hover:bg-muted transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:thumbs-up", "class": "w-4 h-4" })} ${t("widgets.featureVote.vote")} </button> </div>`)} </div> </div> </div> </section>`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/widgets/FeatureVote.astro", void 0);

const war31 = new Proxy({"src":"/_astro/war3-1.BSKxknfR.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/index-war3map/war3-1.jpg";
							}
							
							return target[name];
						}
					});

const war32 = new Proxy({"src":"/_astro/war3-2.BPciAFZA.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/index-war3map/war3-2.jpg";
							}
							
							return target[name];
						}
					});

const war33 = new Proxy({"src":"/_astro/war3-3.pKZJubFM.jpg","width":800,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/index-war3map/war3-3.jpg";
							}
							
							return target[name];
						}
					});

const war34 = new Proxy({"src":"/_astro/war3-4.B8kLqXz5.jpg","width":800,"height":450,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/index-war3map/war3-4.jpg";
							}
							
							return target[name];
						}
					});

const war35 = new Proxy({"src":"/_astro/war3-5.lGCQr_jF.jpg","width":800,"height":450,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/index-war3map/war3-5.jpg";
							}
							
							return target[name];
						}
					});

const war36 = new Proxy({"src":"/_astro/war3-6.wCLtSNdB.jpg","width":800,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/index-war3map/war3-6.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://war3maps.net/");
const $$Content3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Content3;
  const {
    title,
    subtitle,
    tagline,
    description = [],
    image,
    imageAlt = "",
    images = [],
    actions = [],
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg"),
    items = [],
    isAfterContent = false
  } = Astro2.props;
  const { container: containerClassProp = "", ...otherClasses } = classes;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${containerClassProp}`, "bg": bg, "classes": otherClasses }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-7xl md:flex md:gap-16`, "class")}> ${Array.isArray(items) && items.length > 0 && items.map((item) => renderTemplate`<div class="md:basis-1/2 self-center mt-10 md:mt-0" aria-hidden="true"> <div class="relative m-auto max-w-4xl"> ${renderComponent($$result2, "Image", $$Image, { "src": item.image, "alt": item.title, "inferSize": true, "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg" })} </div> </div>`)} </div> ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/widgets/Content3.astro", void 0);

const $$Astro = createAstro("https://war3maps.net/");
function getStaticPaths() {
  const languages = Object.keys(ui).filter((lang) => lang !== defaultLang);
  return languages.map((lang) => ({
    params: { lang },
    props: { lang }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const metadata = {
    title: `${siteConfig.name} \u2014 The next step for your project`,
    description: "A modern and professional template for your web projects with Astro and Tailwind CSS. Boost your development with a solid foundation.",
    ignoreTitleTemplate: true
  };
  [
    {
      title: t("services.webDevelopment.title"),
      description: t("services.webDevelopment.description"),
      icon: "lucide:globe"
    },
    {
      title: t("services.seo.title"),
      description: t("services.seo.description"),
      icon: "lucide:search"
    },
    {
      title: t("services.consulting.title"),
      description: t("services.consulting.description"),
      icon: "lucide:rocket"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "metadata": metadata, "lang": lang }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-12 bg-muted/50"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto"> <form class="relative"> <input type="text"${addAttribute(t("search.placeholder"), "placeholder")} class="w-full px-6 py-4 pr-12 rounded-full border border-border bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"> <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-full bg-primary text-white font-medium transition-colors hover:bg-primary/90"> ${t("search.button")} </button> </form> </div> </div> </section> ${renderComponent($$result2, "Hero", $$Hero, { "title": `${t("hero.title")}`, "tagline": t("hero.tagline"), "description": t("hero.description"), "actions": [
    {
      text: t("hero.getStarted"),
      href: "https://github.com/devgelo-labs/astro-starter-pro",
      variant: "primary",
      icon: "lucide:github"
    },
    {
      text: t("hero.ourServices"),
      href: `/${lang}/services`,
      variant: "secondary",
      icon: "lucide:arrow-right",
      ariaLabel: "Learn more about our services"
    }
  ] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Features", $$Features, { "tagline": t("features.tagline"), "title": t("features.title"), "subtitle": t("features.subtitle"), "features": [
    {
      title: t("features.optimizedSeo"),
      description: t("features.optimizedSeoDesc"),
      icon: "lucide:scan-search",
      iconClass: "bg-blue-500/10 text-blue-400"
    },
    {
      title: t("features.highPerformance"),
      description: t("features.highPerformanceDesc"),
      icon: "lucide:zap",
      iconClass: "bg-purple-500/10 text-purple-400"
    },
    {
      title: t("features.tailwind"),
      description: t("features.tailwindDesc"),
      icon: "lucide:palette",
      iconClass: "bg-pink-500/10 text-pink-400"
    }
  ] })} ` })} ${renderComponent($$result2, "Content", $$Content, { "tagline": t("index.mapRecommendation"), "title": t("index.featuredMaps"), "classes": { container: "pb-0 md:pb-0" } })} ${renderComponent($$result2, "Content3", $$Content3, { "items": [
    {
      title: t("index.mapSize"),
      description: t("index.mapSizeValue"),
      icon: "lucide:ruler",
      iconClass: "bg-blue-500/10 text-blue-400",
      image: war31
    },
    {
      title: t("index.support"),
      description: t("index.supportValue"),
      icon: "lucide:zap",
      iconClass: "bg-purple-500/10 text-purple-400",
      image: war32
    }
  ] })} ${renderComponent($$result2, "Content3", $$Content3, { "items": [
    {
      title: t("index.mapSize"),
      description: t("index.mapSizeValue"),
      icon: "lucide:ruler",
      iconClass: "bg-blue-500/10 text-blue-400",
      image: war33
    },
    {
      title: t("index.support"),
      description: t("index.supportValue"),
      icon: "lucide:zap",
      iconClass: "bg-purple-500/10 text-purple-400",
      image: war34
    }
  ] })} ${renderComponent($$result2, "Content3", $$Content3, { "items": [
    {
      title: t("index.mapSize"),
      description: t("index.mapSizeValue"),
      icon: "lucide:ruler",
      iconClass: "bg-blue-500/10 text-blue-400",
      image: war35
    },
    {
      title: t("index.support"),
      description: t("index.supportValue"),
      icon: "lucide:zap",
      iconClass: "bg-purple-500/10 text-purple-400",
      image: war36
    }
  ] })}  ${renderComponent($$result2, "FeatureVote", $$FeatureVote, { "lang": lang })} ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/index.astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
