globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_pRuMz8GF.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BnDcpYFQ.mjs';
import { $ as $$Icon } from './Icon_Dg5RQyl_.mjs';
import { $ as $$Card } from './Card_DEHvWcHf.mjs';
import { $ as $$Headline } from './Headline_DCQ5fomZ.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Features;
  const {
    features = [],
    title,
    subtitle,
    tagline,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const { container: containerClassProp = "mt-50", ...otherClasses } = classes;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": ` ${containerClassProp}`, "bg": bg, "classes": otherClasses }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-3xl mx-auto text-center"
  } })} ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${features.map((feature) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate`${feature.icon && renderTemplate`<div${addAttribute(`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${feature.iconClass ? feature.iconClass : "bg-primary/10 text-primary"}`, "class")}> ${renderComponent($$result3, "Icon", $$Icon, { "name": feature.icon, "class": "w-6 h-6" })} </div>`}<h3 class="text-xl font-bold text-foreground mb-3"> ${feature.title} </h3> <p class="text-muted-foreground text-sm"> ${feature.description} </p> ` })}`)} </div> ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/widgets/Features.astro", void 0);

export { $$Features as $ };
