globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, z as renderSlot } from './astro/server_pRuMz8GF.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { class: className, href, ...rest } = Astro2.props;
  const Tag = href ? "a" : "div";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "class:list": [
    "bg-card p-8 rounded-2xl border border-border shadow-sm transition-all hover:border-primary/50",
    className
  ], ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
