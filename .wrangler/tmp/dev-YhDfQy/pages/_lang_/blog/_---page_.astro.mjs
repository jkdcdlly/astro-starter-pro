globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_pRuMz8GF.mjs';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_Blkb5wVP.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_DLHwMOCU.mjs';
import { $ as $$Headline } from '../../../chunks/Headline_DCQ5fomZ.mjs';
import { $ as $$PostItem } from '../../../chunks/PostItem_DYLP9j3p.mjs';
import { $ as $$Icon } from '../../../chunks/Icon_Dg5RQyl_.mjs';
import { g as getLangFromUrl, u as useTranslations, a as ui } from '../../../chunks/site_DYYsYBcp.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://war3maps.net/");
async function getStaticPaths() {
  const languages = Object.keys(ui);
  const paths = [];
  for (const lang of languages) {
    paths.push({
      params: { lang, page: void 0 },
      props: { lang }
    });
    for (let i = 2; i <= 3; i++) {
      paths.push({
        params: { lang, page: i.toString() },
        props: { lang }
      });
    }
  }
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const blogEntries = await getCollection("blog");
  const sortedPosts = blogEntries.filter((post) => post.data && post.data.pubDate).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const pageParam = Astro2.params.page;
  const currentPage = pageParam ? parseInt(pageParam) : 1;
  const pageSize = 6;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const blog = sortedPosts.slice(startIndex, endIndex);
  const lastPage = Math.ceil(sortedPosts.length / pageSize);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < lastPage ? currentPage + 1 : null;
  const prevUrl = prevPage ? `/${lang}/blog/${prevPage}` : null;
  const nextUrl = nextPage ? `/${lang}/blog/${nextPage}` : null;
  const metadata = {
    title: t("blog.title"),
    description: t("blog.description")
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "metadata": metadata, "lang": lang }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative px-4 py-8 sm:px-6 lg:px-8 md:py-12"> <div class="absolute inset-0 z-0"> <div class="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-pink-500/5"></div> </div> <div class="relative mx-auto max-w-5xl"> ${renderComponent($$result2, "Headline", $$Headline, { "tagline": t("blog.tagline"), "title": t("blog.title"), "subtitle": t("blog.subtitle"), "classes": {
    container: "mb-12 text-center",
    title: "font-heading mb-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl",
    subtitle: "mx-auto max-w-3xl text-xl text-muted-foreground"
  } })} <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${blog.map((post) => renderTemplate`${renderComponent($$result2, "PostItem", $$PostItem, { "post": post })}`)} </div> ${(prevUrl || nextUrl) && renderTemplate`<div class="flex justify-between mt-12"> ${prevUrl ? renderTemplate`<a${addAttribute(prevUrl, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-muted-foreground bg-card border border-border rounded-lg hover:bg-muted hover:text-foreground transition-colors"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-left", "class": "w-4 h-4 mr-2" })}
Previous
</a>` : renderTemplate`<span></span>`} <div class="flex items-center text-sm text-muted-foreground">
Page ${currentPage} of ${lastPage} </div> ${nextUrl ? renderTemplate`<a${addAttribute(nextUrl, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-muted-foreground bg-card border border-border rounded-lg hover:bg-muted hover:text-foreground transition-colors">
Next
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:arrow-right", "class": "w-4 h-4 ml-2" })} </a>` : renderTemplate`<span></span>`} </div>`} </div> </section> ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/blog/[...page].astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/blog/[...page].astro";
const $$url = "/[lang]/blog/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
