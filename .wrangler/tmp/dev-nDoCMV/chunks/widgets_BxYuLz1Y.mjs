globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from './astro/server_pRuMz8GF.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Blkb5wVP.mjs';
import { $ as $$Hero } from './Hero_CCu6qvUI.mjs';
import { $ as $$Features } from './Features_Drhez1vV.mjs';
import { $ as $$Content } from './Content_8i370uOl.mjs';
import { $ as $$Content2 } from './Content2_BJcS_WxT.mjs';
import { $ as $$ServiceList } from './ServiceList_BmQBCS15.mjs';
import { $ as $$Values } from './Values_DPijVg6M.mjs';
import { g as getLangFromUrl, u as useTranslations, a as ui } from './site_DYYsYBcp.mjs';

const aboutImage = new Proxy({"src":"/_astro/about-office.9QFwfrpt.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/astro_wk/astro-starter-pro/src/assets/images/about-office.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://war3maps.net/");
function getStaticPaths() {
  const languages = Object.keys(ui);
  return languages.map((lang) => ({
    params: { lang },
    props: { lang }
  }));
}
const $$Widgets = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Widgets;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const heroProps = {
    title: t("widgets.hero.title"),
    tagline: "Hero",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    actions: [
      {
        text: "Get Started",
        href: "https://github.com/devgelo-labs/astro-starter-pro",
        variant: "primary",
        icon: "lucide:github"
      },
      {
        text: "View Details",
        href: "#",
        variant: "secondary",
        icon: "lucide:arrow-right"
      }
    ]
  };
  const featuresProps = {
    title: "Quis Nostrud Exercitation",
    subtitle: "Ullamco laboris nisi ut aliquip ex ea commodo",
    tagline: "Features",
    features: [
      {
        title: "Lorem Ipsum",
        description: "Dolor sit amet, consectetur adipiscing elit.",
        icon: "lucide:box"
      },
      {
        title: "Sed Do Eiusmod",
        description: "Tempor incididunt ut labore et dolore magna aliqua.",
        icon: "lucide:check"
      },
      {
        title: "Ut Enim Ad",
        description: "Minim veniam, quis nostrud exercitation ullamco.",
        icon: "lucide:eye"
      }
    ]
  };
  const contentProps = {
    title: "Duis Aute Irure Dolor",
    description: [
      "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    ],
    tagline: "Content",
    image: aboutImage,
    imageAlt: "Placeholder image",
    isReversed: false,
    actions: [
      {
        text: "Call to Action",
        href: "#",
        variant: "primary",
        icon: "lucide:github"
      },
      {
        text: "View details",
        href: "#",
        variant: "secondary",
        icon: "lucide:arrow-right"
      }
    ]
  };
  const content2Props = {
    title: "Duis Aute Irure Dolor",
    description: [
      "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    ],
    tagline: "Content2",
    image: aboutImage,
    imageAlt: "Placeholder image",
    isReversed: false,
    actions: [
      {
        text: "Call to Action",
        href: "#",
        variant: "primary",
        icon: "lucide:github"
      },
      {
        text: "View details",
        href: "#",
        variant: "secondary",
        icon: "lucide:arrow-right"
      }
    ]
  };
  const content2InvertedProps = {
    items: [
      {
        title: "Open Source",
        description: "Developed under the MIT license, free for personal and commercial use.",
        icon: "lucide:github",
        iconClass: "bg-indigo-500/10 text-indigo-400"
      },
      {
        title: "Community Driven",
        description: "Built with the feedback and contributions of the developer community.",
        icon: "lucide:users",
        iconClass: "bg-orange-500/10 text-orange-400"
      },
      {
        title: "Regular Updates",
        description: "Continuously improved with the latest technologies and best practices.",
        icon: "lucide:refresh-cw",
        iconClass: "bg-teal-500/10 text-teal-400"
      }
    ],
    image: aboutImage,
    imageAlt: "Community and Open Source",
    isReversed: true,
    actions: [
      {
        text: "Call to Action",
        href: "#",
        variant: "primary",
        icon: "lucide:github"
      },
      {
        text: "View details",
        href: "#",
        variant: "secondary",
        icon: "lucide:arrow-right"
      }
    ],
    title: "Open Source",
    subtitle: "Built with the feedback and contributions of the developer community.",
    tagline: "Content2"
  };
  const serviceListProps = {
    services: [
      {
        title: "Voluptatem Accusantium",
        description: "Doloremque laudantium, totam rem aperiam.",
        icon: "lucide:rocket"
      },
      {
        title: "Ipsa Quae Ab",
        description: "Illo inventore veritatis et quasi architecto.",
        icon: "lucide:lightbulb"
      },
      {
        title: "Beatae Vitae Dicta",
        description: "Sunt explicabo. Nemo enim ipsam voluptatem.",
        icon: "lucide:wrench"
      }
    ],
    title: "Services that will help you achieve your goals",
    subtitle: "What we offer",
    tagline: "Services"
  };
  const valuesProps = {
    items: [
      {
        title: "Corporate",
        description: "Curabitur dignissim, felis non sollicitudin molestie, urna mauris pellentesque velit, ut eleifend."
      },
      {
        title: "Creative",
        description: "Aenean condimentum finibus mauris, a fermentum justo pan eget. Sed ultricies, neque quis."
      },
      {
        title: "Startups",
        description: "Donec sed orci tincidunt, aliquam nisl a, condimentum nunc. Nulla varius ex nec ante feugiat."
      },
      {
        title: "SaaS",
        description: "Phasellus tristique, elit dapibus cursus facilisis, lorem augue fringilla nunc, vitae fermentum."
      },
      {
        title: "Education",
        description: "In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et."
      },
      {
        title: "Real Estate",
        description: "Fusce at massa nec sapien auctor gravida in in tellus. Vivamus a tristique metus, et molestie."
      }
    ],
    columns: 3,
    tagline: "Values",
    title: "What defines us",
    subtitle: "Principles that guide our daily work"
  };
  const metadata = {
    title: "Widgets - Astro Starter Pro",
    description: "Showcase of available components and widgets.",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { ...heroProps })} ${renderComponent($$result2, "Features", $$Features, { ...featuresProps })} ${renderComponent($$result2, "Content", $$Content, { ...contentProps })} ${renderComponent($$result2, "Content2", $$Content2, { ...content2Props })} ${renderComponent($$result2, "Content2", $$Content2, { ...content2InvertedProps })} ${renderComponent($$result2, "ServiceList", $$ServiceList, { ...serviceListProps })} ${renderComponent($$result2, "Values", $$Values, { ...valuesProps })} ` })}`;
}, "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/widgets.astro", void 0);

const $$file = "/Users/macuser/astro_wk/astro-starter-pro/src/pages/[lang]/widgets.astro";
const $$url = "/[lang]/widgets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Widgets,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Widgets as $, _page as _ };
