globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, z as renderSlot } from './astro/server_pRuMz8GF.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    href,
    type = "button",
    class: className = "",
    "aria-label": ariaLabel,
    ...rest
  } = Astro2.props;
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl";
  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90 transform hover:scale-105 shadow-lg shadow-primary/20",
    secondary: "bg-muted text-foreground border border-border hover:bg-muted/80",
    tertiary: "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const classes = [baseStyles, variants[variant], sizes[size], className].join(
    " "
  );
  const Tag = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "type": href ? void 0 : type, "href": href, "class": classes, "aria-label": ariaLabel, ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
