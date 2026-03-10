globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate, q as unescapeHTML, m as maybeRenderHead, y as renderScript, r as renderComponent, z as renderSlot, C as renderHead } from './astro/server_pRuMz8GF.mjs';
import { s as siteConfig, g as getLangFromUrl, u as useTranslations, b as getLocalizedPath, l as languages } from './site_DYYsYBcp.mjs';
/* empty css                         */

const $$Astro$5 = createAstro("https://war3maps.net/");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title,
    description,
    canonical,
    ogImage = siteConfig.ogImage,
    ignoreTitleTemplate = false,
    lang: propsLang
  } = Astro2.props;
  const lang = propsLang || getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const siteName = t("site.name");
  const siteDescription = t("site.description");
  const ogImageSrc = typeof ogImage === "string" ? ogImage : ogImage.src;
  const fullTitle = title && !ignoreTitleTemplate ? `${title} | ${siteName}` : title || siteName;
  const finalDescription = description || siteDescription;
  const canonicalURL = canonical ?? new URL(Astro2.url.pathname, siteConfig.url).toString();
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${fullTitle}</title><meta name="title"${addAttribute(fullTitle, "content")}><meta name="description"${addAttribute(finalDescription, "content")}><meta name="author"${addAttribute(siteConfig.author, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(finalDescription, "content")}><meta property="og:image"${addAttribute(new URL(ogImageSrc, siteConfig.url), "content")}><meta property="og:locale"${addAttribute(siteConfig.locale, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(fullTitle, "content")}><meta property="twitter:description"${addAttribute(finalDescription, "content")}><meta property="twitter:image"${addAttribute(new URL(ogImageSrc, siteConfig.url), "content")}>${renderTemplate`<meta property="twitter:creator"${addAttribute(siteConfig.twitter, "content")}>`}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/seo/Seo.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://war3maps.net/");
const $$Schema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Schema;
  const { type, data } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  let schema = {};
  if (type === "WebSite") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.getDescription(lang),
      author: {
        "@type": "Person",
        name: siteConfig.author
      },
      sameAs: [siteConfig.socialLinks.twitter, siteConfig.socialLinks.github]
    };
  } else if (type === "BlogPosting") {
    schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description: data.description,
      image: data.image,
      datePublished: data.pubDate,
      author: {
        "@type": "Person",
        name: data.author
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": data.url
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          // Placeholder, ideally should be a real logo URL
          url: new URL("/favicon.svg", siteConfig.url).toString()
        }
      }
    };
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)));
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/seo/Schema.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="theme-toggle-btn relative rounded-full p-2 text-foreground transition-colors hover:bg-foreground/10 focus:outline-none" aria-label="Toggle theme"> <!-- Sun icon --> <svg class="sun-icon hidden h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="4"></circle> <path d="M12 2v2"></path> <path d="M12 20v2"></path> <path d="m4.93 4.93 1.41 1.41"></path> <path d="m17.66 17.66 1.41 1.41"></path> <path d="M2 12h2"></path> <path d="M20 12h2"></path> <path d="m6.34 17.66-1.41 1.41"></path> <path d="m19.07 4.93-1.41 1.41"></path> </svg> <!-- Moon icon --> <svg class="moon-icon hidden h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path> </svg> </button> ${renderScript($$result, "/Users/macuser/astro_wk/astro-starter-pro/src/components/ui/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/ui/ThemeToggle.astro", void 0);

const $$Astro$3 = createAstro("https://war3maps.net/");
const $$LanguageToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageToggle;
  const { currentLocale } = Astro2.props;
  const otherLocale = currentLocale === "en" ? "zh" : "en";
  const currentUrl = new URL(Astro2.request.url);
  let path = currentUrl.pathname;
  path = path.replace(/^\/(en|zh)\//, "/");
  const otherLocaleUrl = getLocalizedPath(path, otherLocale);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(otherLocaleUrl, "href")} class="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted"> <span class="sr-only">Switch to ${languages[otherLocale]}</span> <span>${otherLocale === "en" ? "EN" : "\u4E2D\u6587"}</span> </a>`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/ui/LanguageToggle.astro", void 0);

const $$Astro$2 = createAstro("https://war3maps.net/");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentUrl = new URL(Astro2.request.url);
  const currentLocale = getLangFromUrl(currentUrl);
  const t = useTranslations(currentLocale);
  const navLinks = Array.isArray(t("site.nav")) ? t("site.nav") : siteConfig.navLinks;
  function getLocalizedHref(href, locale) {
    if (href.startsWith("http")) return href;
    return getLocalizedPath(href, locale);
  }
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 z-50 w-full border-b border-border bg-background md:bg-background/50 md:backdrop-blur"> <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"> <div class="flex items-center gap-2"> <a${addAttribute(getLocalizedHref("/", currentLocale), "href")} class="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"> ${siteConfig.name} </a> </div> <!-- Desktop Menu --> <div class="hidden md:block"> <div class="ml-10 flex items-baseline space-x-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(getLocalizedHref(link.href, currentLocale), "href")} class="text-sm font-medium text-foreground transition-colors hover:text-primary"> ${link.text} </a>`)} </div> </div> <div class="hidden md:flex items-center gap-4"> ${renderComponent($$result, "LanguageToggle", $$LanguageToggle, { "currentLocale": currentLocale })} <!-- <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full bg-foreground/10 px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-foreground/20"
            >
                GitHub
            </a> --> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> <!-- Mobile Menu Button --> <div class="md:hidden flex items-center"> ${renderComponent($$result, "LanguageToggle", $$LanguageToggle, { "currentLocale": currentLocale })} <button id="mobile-menu-button" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-white hover:bg-white/10 focus:outline-none transition-colors" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">Open main menu</span> <!-- Icon when menu is closed --> <svg id="menu-icon-closed" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <!-- Icon when menu is open --> <svg id="menu-icon-open" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <div class="ml-2"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> </div> </div> <div class="hidden md:hidden" id="mobile-menu"> <div class="space-y-1 border-b border-border bg-background/90 px-2 pb-3 pt-2 sm:px-3"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(getLocalizedHref(link.href, currentLocale), "href")} class="block rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-white/10 hover:text-primary"> ${link.text} </a>`)} <a${addAttribute(siteConfig.socialLinks.github, "href")} target="_blank" class="block rounded-md px-3 py-2 text-base font-medium text-blue-400 transition-colors hover:cursor-pointer hover:bg-blue-500/10 hover:text-blue-300">GitHub</a> </div> </div> </nav> ${renderScript($$result, "/Users/macuser/astro_wk/astro-starter-pro/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/layout/Navbar.astro", void 0);

const $$Astro$1 = createAstro("https://war3maps.net/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const siteDescription = siteConfig.getDescription(lang);
  return renderTemplate`${maybeRenderHead()}<footer class="mt-20 border-t border-border bg-card"> <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"> <div class="flex flex-col items-center justify-between gap-8 md:flex-row"> <div class="flex flex-col items-center gap-2 md:items-start"> <span class="text-lg font-bold text-foreground">${siteConfig.name}</span> <p class="text-sm text-muted-foreground"> ${siteDescription} </p> </div> <div class="flex items-center gap-6"> <!-- <a
                    href={siteConfig.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-muted-foreground transition-colors hover:text-primary"
                    >Twitter</a
                >
                <a
                    href={siteConfig.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-muted-foreground transition-colors hover:text-primary"
                    >GitHub</a
                > --> <a${addAttribute(siteConfig.socialLinks.discord, "href")} target="_blank" rel="noopener noreferrer" class="text-muted-foreground transition-colors hover:text-primary">Discord</a> </div> </div> <div class="mt-8 border-t border-border pt-8 text-center text-xs text-muted-foreground">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${siteConfig.author}. All rights reserved.
</div> </div> </footer>`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/layout/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://war3maps.net/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, ogImage, canonical, metadata, lang } = Astro2.props;
  const finalTitle = metadata?.title || title;
  const finalDescription = metadata?.description || description;
  const finalOgImage = metadata?.ogImage || ogImage;
  const finalCanonical = metadata?.canonical || canonical;
  const finalIgnoreTitleTemplate = metadata?.ignoreTitleTemplate || false;
  const finalLang = lang || siteConfig.lang;
  return renderTemplate(_a || (_a = __template(["<html", ' class="scroll-smooth"> <head>', "", "", '<script>\n            const getTheme = () => {\n                if (\n                    typeof localStorage !== "undefined" &&\n                    localStorage.getItem("theme")\n                ) {\n                    return localStorage.getItem("theme");\n                }\n                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n                    return "dark";\n                }\n                return "light";\n            };\n\n            const theme = getTheme();\n            if (theme === "light") {\n                document.documentElement.setAttribute("data-theme", "light");\n            } else {\n                document.documentElement.setAttribute("data-theme", "dark");\n            }\n            window.localStorage.setItem("theme", theme);\n        <\/script>', '</head> <body class="bg-background text-foreground antialiased selection:bg-blue-500/30 dark:selection:text-blue-200"> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded-md bg-primary px-4 py-2 text-white shadow-lg ring-2 ring-white">\nSkip to content\n</a> <div class="relative flex min-h-screen flex-col overflow-x-hidden"> <!-- Background Glow --> <div class="pointer-events-none fixed inset-0 z-0 hidden md:block"> <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15)_0%,transparent_50%)]"></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15)_0%,transparent_50%)]"></div> </div> ', ' <main id="main-content" class="relative z-10 grow pt-[72px]"> ', " </main> ", ` </div> <!-- Google tag (gtag.js) --> <script src="https://www.googletagmanager.com/gtag/js?id=G-H7WJNW0X2L"><\/script> <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-H7WJNW0X2L');
        <\/script> </body> </html>`])), addAttribute(finalLang, "lang"), renderComponent($$result, "Seo", $$Seo, { "title": finalTitle, "description": finalDescription, "ogImage": finalOgImage, "canonical": finalCanonical, "ignoreTitleTemplate": finalIgnoreTitleTemplate, "lang": finalLang }), renderComponent($$result, "Schema", $$Schema, { "type": "WebSite", "data": {} }), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/macuser/astro_wk/astro-starter-pro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Schema as a };
