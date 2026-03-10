globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, z as renderSlot } from './astro/server_pRuMz8GF.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BnDcpYFQ.mjs';
import { $ as $$Headline } from './Headline_DCQ5fomZ.mjs';

const $$Astro = createAstro("https://war3maps.net/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = await Astro2.slots.render("title"),
    tagline,
    description = await Astro2.slots.render("description"),
    actions = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const { container: containerClassProp = "" } = classes;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `min-h-[calc(100vh-72px)] flex flex-col justify-center ${containerClassProp}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center"> ${tagline && renderTemplate`<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6"> <span class="relative flex h-2 w-2" aria-hidden="true"> <span class="absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75 animate-ping motion-reduce:animate-none"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-primary"></span> </span> ${tagline} </div>`} ${(title || description) && renderTemplate`${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": description, "titleAs": "h1", "classes": {
    container: "mb-0 max-w-none",
    title: "text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6",
    subtitle: "max-w-2xl mx-auto text-xl text-muted-foreground mb-10"
  } })}`} <!-- <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
            {
                Array.isArray(actions) &&
                    actions.length > 0 &&
                    actions.map((action) => (
                        <Button
                            href={action.href}
                            variant={action.variant as "primary" | "secondary"}
                            size="lg"
                            aria-label={action.ariaLabel}
                            class="w-full sm:w-auto"
                        >
                            {action.icon && (
                                <Icon
                                    name={action.icon}
                                    class="w-5 h-5 mr-2 -ml-1"
                                />
                            )}
                            {action.text}
                        </Button>
                    ))
            }
        </div> --> </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/widgets/Hero.astro", void 0);

export { $$Hero as $ };
