globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, q as unescapeHTML } from './astro/server_pRuMz8GF.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Headline;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {},
    titleAs = "h2"
  } = Astro2.props;
  const {
    container = "max-w-xl",
    title: titleClass = "text-3xl md:text-4xl",
    subtitle: subtitleClass = "text-xl",
    tagline: taglineClass = ""
  } = classes;
  const Title = titleAs;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(`mb-4 ${container}`, "class")}>${tagline && renderTemplate`<div${addAttribute(`inline-flex items-center gap-2 px-3 py-1 text-primary text-lg font-semibold ${taglineClass}`, "class")}>${tagline}</div>`}${title && renderTemplate`${renderComponent($$result, "Title", Title, { "class": `font-bold tracking-tight text-foreground mb-4 ${titleClass}` }, { "default": async ($$result2) => renderTemplate`${unescapeHTML(title)}` })}`}${subtitle && renderTemplate`<p${addAttribute(`text-muted-foreground ${subtitleClass}`, "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/ui/Headline.astro", void 0);

export { $$Headline as $ };
