globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, z as renderSlot, a as renderTemplate } from './astro/server_pRuMz8GF.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const $$WidgetWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const {
    id,
    isDark = false,
    containerClass = "",
    bg = "",
    classes = {}
  } = Astro2.props;
  const wrapperClasses = {
    container: containerClass,
    ...classes
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(["relative not-prose scroll-mt-[72px]", bg, { dark: isDark }], "class:list")}> <div${addAttribute([
    "relative mx-auto max-w-7xl px-4 md:px-6 text-default py-8 md:py-12",
    wrapperClasses.container
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/widgets/WidgetWrapper.astro", void 0);

export { $$WidgetWrapper as $ };
