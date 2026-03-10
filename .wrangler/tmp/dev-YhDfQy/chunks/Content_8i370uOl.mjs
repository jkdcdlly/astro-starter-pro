globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, z as renderSlot } from './astro/server_pRuMz8GF.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BnDcpYFQ.mjs';
import { $ as $$Image } from './_astro_assets_DeTyZ-Cv.mjs';
import { $ as $$Headline } from './Headline_DCQ5fomZ.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Content;
  const {
    title,
    subtitle,
    tagline,
    description = [],
    image,
    imageAlt = "",
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const { container: containerClassProp = "", ...otherClasses } = classes;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-4xl mx-auto px-4 ${containerClassProp}`, "bg": bg, "classes": otherClasses }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center"> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle || (Array.isArray(description) ? description.join(" ") : description), "tagline": tagline, "classes": {
    container: "mb-8",
    title: "text-4xl md:text-6xl font-bold mb-2",
    subtitle: "text-lg text-muted-foreground"
  } })} ${image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": imageAlt, "class": "rounded-3xl shadow-2xl mx-auto mt-6 border border-border/50 aspect-video object-cover" })}`} ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/widgets/Content.astro", void 0);

export { $$Content as $ };
