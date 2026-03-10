globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_pRuMz8GF.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BnDcpYFQ.mjs';
import { $ as $$Card } from './Card_DEHvWcHf.mjs';
import { $ as $$Headline } from './Headline_DCQ5fomZ.mjs';
import { $ as $$Icon } from './Icon_Dg5RQyl_.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const $$ServiceList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceList;
  const {
    services = [],
    title = "",
    subtitle = "",
    tagline = "",
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const { container: containerClassProp = "", ...otherClasses } = classes;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": ` ${containerClassProp}`, "bg": bg, "classes": otherClasses }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-3xl mx-auto text-center"
  } })} ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${services.map((s) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "group relative overflow-hidden hover:bg-muted/50 hover:shadow-md" }, { "default": async ($$result3) => renderTemplate` <div class="absolute -right-4 -top-4 text-8xl opacity-10 transition-transform group-hover:scale-110 group-hover:rotate-12 select-none"> ${renderComponent($$result3, "Icon", $$Icon, { "name": s.icon, "class": "w-32 h-32" })} </div> <div class="text-left relative z-10"> <div class="text-4xl mb-6 text-primary"> ${renderComponent($$result3, "Icon", $$Icon, { "name": s.icon, "class": "w-12 h-12" })} </div> <h3 class="text-2xl font-bold text-foreground mb-4"> ${s.title} </h3> <p class="text-muted-foreground leading-relaxed"> ${s.description} </p> <button class="mt-8 text-primary font-semibold flex items-center gap-2 group/btn hover:underline transition-all">
View details
<span class="transition-transform group-hover/btn:translate-x-1">
→
</span> </button> </div> ` })}`)} </div> ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/widgets/ServiceList.astro", void 0);

export { $$ServiceList as $ };
