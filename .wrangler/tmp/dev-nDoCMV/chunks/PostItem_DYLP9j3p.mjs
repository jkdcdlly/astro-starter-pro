globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_pRuMz8GF.mjs';
import { r as renderEntry } from './_astro_content_DLHwMOCU.mjs';

const $$Astro$1 = createAstro("https://war3maps.net/");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, class: className = "text-sm" } = Astro2.props;
  return renderTemplate`${tags && Array.isArray(tags) && renderTemplate`${maybeRenderHead()}<ul${addAttribute(["flex flex-wrap gap-2", className], "class:list")}>${tags.map((tag) => renderTemplate`<li class="inline-block relative"><a${addAttribute(`/blog/tags/${tag}`, "href")} class="inline-block bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground px-3 py-1 rounded-full border border-border transition-colors duration-200">
#${tag}</a></li>`)}</ul>`}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/ui/Tags.astro", void 0);

const $$Astro = createAstro("https://war3maps.net/");
const $$PostItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostItem;
  const { post } = Astro2.props;
  const { remarkPluginFrontmatter } = await renderEntry(post);
  const readingTime = remarkPluginFrontmatter?.minutesRead ? `${Math.ceil(remarkPluginFrontmatter.minutesRead)} min read` : "";
  return renderTemplate`${maybeRenderHead()}<article class="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"> <div class="relative h-48 w-full overflow-hidden"> ${post.data.image && renderTemplate`<img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105">`} </div> <div class="flex flex-1 flex-col p-6"> <div class="flex-1"> <p class="text-sm font-medium text-primary"> ${post.data.author} </p> <a${addAttribute(`/blog/${post.id}`, "href")} class="mt-2 block"> <p class="text-xl font-semibold text-foreground group-hover:underline"> ${post.data.title} </p> <p class="mt-3 text-base text-muted-foreground line-clamp-3"> ${post.data.description} </p> </a> </div> <div class="mt-6 flex items-center"> <div class="shrink-0"> <span class="sr-only"> ${post.data.author} </span> </div> <div class=""> <div class="flex space-x-1 text-sm text-muted-foreground"> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")}> ${post.data.pubDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  })} </time> ${readingTime && renderTemplate`<span aria-hidden="true">&bull;</span>`} ${readingTime && renderTemplate`<span>${readingTime}</span>`} </div> </div> </div> ${post.data.tags && renderTemplate`<div class="mt-4"> ${renderComponent($$result, "Tags", $$Tags, { "tags": post.data.tags })} </div>`} </div> </article>`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/blog/PostItem.astro", void 0);

export { $$PostItem as $ };
