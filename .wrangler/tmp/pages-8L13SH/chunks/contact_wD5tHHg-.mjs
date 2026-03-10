globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_pRuMz8GF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Blkb5wVP.mjs';
import { $ as $$Features } from './Features_Drhez1vV.mjs';
import { $ as $$Content } from './Content_8i370uOl.mjs';
import { $ as $$Button } from './Button_DZvBu4Sj.mjs';
import { g as getLangFromUrl, u as useTranslations, a as ui } from './site_DYYsYBcp.mjs';

const $$Astro$1 = createAstro("https://war3maps.net/");
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Form;
  const { action = "#", method = "POST" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form${addAttribute(action, "action")}${addAttribute(method, "method")} class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-foreground/80 mb-2">Name</label> <input type="text" name="name" id="name" autocomplete="name" required class="block w-full rounded-xl border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 transition-all border outline-none focus:ring-4" placeholder="Your name"> </div> <div> <label for="email" class="block text-sm font-medium text-foreground/80 mb-2">Email</label> <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-xl border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 transition-all border outline-none focus:ring-4" placeholder="your@email.com"> </div> <div> <label for="message" class="block text-sm font-medium text-foreground/80 mb-2">Message</label> <textarea name="message" id="message" rows="4" required class="block w-full rounded-xl border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 transition-all border outline-none focus:ring-4 resize-none" placeholder="How can we help you?"></textarea> </div> <div> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "size": "lg", "class": "w-full sm:w-auto" }, { "default": ($$result2) => renderTemplate`
Send message
` })} </div> </form>`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/components/ui/Form.astro", void 0);

const $$Astro = createAstro("https://war3maps.net/");
function getStaticPaths() {
  const languages = Object.keys(ui);
  return languages.map((lang) => ({
    params: { lang },
    props: { lang }
  }));
}
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const metadata = {
    title: t("contact.title"),
    description: t("contact.description")
  };
  const visionText = [t("contact.description")];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "metadata": metadata, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", $$Content, { "tagline": t("contact.tagline"), "title": t("contact.title"), "description": visionText })} ${maybeRenderHead()}<div class="mx-auto max-w-xl bg-card border border-border rounded-3xl p-8 shadow-sm mb-12 md:mb-16"> ${renderComponent($$result2, "Form", $$Form, {})} </div> ${renderComponent($$result2, "Features", $$Features, { "tagline": t("contact.means.tagline"), "title": t("contact.means.title"), "subtitle": t("contact.means.subtitle"), "classes": { container: "pt-0 md:pt-0" }, "features": [
    {
      title: t("contact.means.phone"),
      description: t("contact.means.phoneNumber"),
      icon: "lucide:phone",
      iconClass: "bg-green-500/10 text-green-400"
    },
    {
      title: t("contact.means.email"),
      description: t("contact.means.emailAddress"),
      icon: "lucide:mail",
      iconClass: "bg-yellow-500/10 text-yellow-400"
    },
    {
      title: t("contact.means.location"),
      description: t("contact.means.locationText"),
      icon: "lucide:map-pin",
      iconClass: "bg-red-500/10 text-red-400"
    },
    {
      title: t("contact.means.personalized"),
      description: t("contact.means.personalizedDesc"),
      icon: "lucide:user-check",
      iconClass: "bg-blue-500/10 text-blue-400"
    },
    {
      title: t("contact.means.technical"),
      description: t("contact.means.technicalDesc"),
      icon: "lucide:wrench",
      iconClass: "bg-purple-500/10 text-purple-400"
    },
    {
      title: t("contact.means.strategic"),
      description: t("contact.means.strategicDesc"),
      icon: "lucide:briefcase",
      iconClass: "bg-pink-500/10 text-pink-400"
    }
  ] })} ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/contact.astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/contact.astro";
const $$url = "/[lang]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Contact as $, _page as _ };
