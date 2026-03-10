globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, z as renderSlot } from './astro/server_pRuMz8GF.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BnDcpYFQ.mjs';
import { $ as $$Image } from './_astro_assets_DeTyZ-Cv.mjs';
import { $ as $$Icon } from './Icon_Dg5RQyl_.mjs';
import { $ as $$Headline } from './Headline_DCQ5fomZ.mjs';
import { $ as $$Button } from './Button_DZvBu4Sj.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const $$Content2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Content2;
  const {
    title,
    subtitle,
    tagline,
    description = [],
    image,
    imageAlt = "",
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
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${containerClassProp}`, "bg": bg, "classes": otherClasses }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-7xl ${isReversed ? "md:flex-row-reverse" : ""} md:flex md:gap-16`, "class")}> <div class="md:basis-1/2 self-center text-left"> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle || (Array.isArray(description) ? description.join(" ") : description), "tagline": tagline, "titleAs": "h2", "classes": {
    container: "mb-8",
    title: "text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-heading",
    subtitle: "text-lg text-muted-foreground"
  } })}  ${!isAfterContent && renderTemplate`${renderSlot($$result2, $$slots["default"])}`} ${items && items.length > 0 && renderTemplate`<div class="space-y-8 my-8"> ${items.map(
    ({
      title: titleItem,
      description: descriptionItem,
      icon,
      iconClass
    }) => renderTemplate`<div class="flex"> <div class="shrink-0"> <div${addAttribute(`flex items-center justify-center w-10 h-10 rounded-full ${iconClass ? iconClass : "bg-primary/10 text-primary"}`, "class")}> ${icon ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:check", "class": "w-5 h-5" })}`} </div> </div> <div class="ml-4"> ${titleItem && renderTemplate`<h3 class="text-lg font-medium leading-6"> ${titleItem} </h3>`} ${descriptionItem && renderTemplate`<p class="mt-2 text-muted-foreground"> ${descriptionItem} </p>`} </div> </div>`
  )} </div>`} ${Array.isArray(actions) && actions.length > 0 && renderTemplate`<div class="mt-8 flex flex-col sm:flex-row gap-4"> ${actions.map((action) => renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": action.href, "variant": action.variant, "aria-label": action.ariaLabel, "class": "w-full sm:w-auto" }, { "default": async ($$result3) => renderTemplate`${action.icon && renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": action.icon, "class": "w-5 h-5 mr-2 -ml-1" })}`}${action.text}` })}`)} </div>`}  ${isAfterContent && renderTemplate`${renderSlot($$result2, $$slots["default"])}`} </div> <div class="md:basis-1/2 self-center mt-10 md:mt-0" aria-hidden="true"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": imageAlt, "inferSize": true, "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg" })} </div>`} </div> </div> ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/widgets/Content2.astro", void 0);

export { $$Content2 as $ };
