globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from './astro/server_pRuMz8GF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Blkb5wVP.mjs';
import { $ as $$ServiceList } from './ServiceList_BmQBCS15.mjs';
import { $ as $$Content } from './Content_8i370uOl.mjs';
import { $ as $$Content2 } from './Content2_BJcS_WxT.mjs';
import { g as getLangFromUrl, u as useTranslations, a as ui } from './site_DYYsYBcp.mjs';

const webDevImg = new Proxy({"src":"/_astro/web-dev.B4Oz-Fdq.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/services/web-dev.webp";
							}
							
							return target[name];
						}
					});

const seoImg = new Proxy({"src":"/_astro/seo.CG14LT4m.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/services/seo.webp";
							}
							
							return target[name];
						}
					});

const consultingImg = new Proxy({"src":"/_astro/consulting.Db-qX1D1.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/services/consulting.webp";
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
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const services = [
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
  const metadata = {
    title: t("services.title"),
    description: t("services.description")
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "metadata": metadata, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", $$Content, { "tagline": t("services.tagline"), "title": t("services.title"), "description": [
    t("services.intro.description")
  ] })} ${renderComponent($$result2, "ServiceList", $$ServiceList, { "services": services, "classes": { container: "pt-0 md:pt-0" } })} ${renderComponent($$result2, "Content", $$Content, { "tagline": t("services.webDevelopment.tagline"), "title": t("services.webDevelopment.title"), "description": [
    t("services.webDevelopment.longDescription")
  ], "classes": { container: "pb-0 md:pb-0" } })} ${renderComponent($$result2, "Content2", $$Content2, { "items": [
    {
      title: t("services.webDevelopment.responsive"),
      description: t("services.webDevelopment.responsiveDesc")
    },
    {
      title: t("services.webDevelopment.performance"),
      description: t("services.webDevelopment.performanceDesc")
    }
  ], "image": webDevImg, "imageAlt": "Modern Web Development", "classes": { container: "pt-0 md:pt-0" } }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h3 class="text-2xl font-bold tracking-tight sm:text-3xl mb-2"> ${t("services.webDevelopment.title")} </h3> ${t("services.webDevelopment.longDescription")}` })} ` })} ${renderComponent($$result2, "Content2", $$Content2, { "isReversed": true, "items": [
    {
      title: t("services.seo.audit"),
      description: t("services.seo.auditDesc")
    },
    {
      title: t("services.seo.content"),
      description: t("services.seo.contentDesc")
    }
  ], "image": seoImg, "imageAlt": "SEO Strategies" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight sm:text-3xl mb-2"> ${t("services.seo.title")} </h3> ${t("services.seo.longDescription")}` })} ` })} ${renderComponent($$result2, "Content2", $$Content2, { "items": [
    {
      title: t("services.consulting.transformation"),
      description: t("services.consulting.transformationDesc")
    },
    {
      title: t("services.consulting.architecture"),
      description: t("services.consulting.architectureDesc")
    }
  ], "image": consultingImg, "imageAlt": "Technology Consulting" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight sm:text-3xl mb-2"> ${t("services.consulting.title")} </h3> ${t("services.consulting.longDescription")}` })} ` })} ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/services.astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/services.astro";
const $$url = "/[lang]/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Services as $, _page as _ };
