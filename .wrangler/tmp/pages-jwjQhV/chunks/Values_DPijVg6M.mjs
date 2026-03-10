globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_pRuMz8GF.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BnDcpYFQ.mjs';
import { $ as $$Card } from './Card_DEHvWcHf.mjs';
import { $ as $$Headline } from './Headline_DCQ5fomZ.mjs';
import { $ as $$Icon } from './Icon_Dg5RQyl_.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const $$Values = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Values;
  const {
    items = [],
    columns = 2,
    title,
    subtitle,
    tagline,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const { container: containerClassProp = "", ...otherClasses } = classes;
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-4"
  };
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": ` ${containerClassProp}`, "bg": bg, "classes": otherClasses }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-3xl mx-auto text-center"
  } })} ${maybeRenderHead()}<div${addAttribute(`grid ${gridCols[columns]} gap-8 text-left`, "class")}> ${items.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": async ($$result3) => renderTemplate`${item.icon && renderTemplate`<div class="mb-4 text-primary text-4xl"> ${renderComponent($$result3, "Icon", $$Icon, { "name": item.icon, "class": "w-12 h-12" })} </div>`}<h3 class="text-xl font-bold text-foreground mb-2"> ${item.title} </h3> <p class="text-sm text-muted-foreground"> ${item.description} </p> ` })}`)} </div> ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/widgets/Values.astro", void 0);

export { $$Values as $ };
