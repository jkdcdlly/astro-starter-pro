import ogImage from "../assets/og-image.png";
import { Locale, ui } from "../i18n";

export const siteConfig = {
  name: "War 3 Maps",
  url: "https://war3maps.net",
  author: "War3Maps",
  twitter: "@War3Maps",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com/devgelo-labs/astro-starter-pro",
    discord: "https://discord.gg/Uk6xsSFE",
  },
  getDescription: (lang: Locale = "en") => {
    return ui[lang].site?.description || "不只是地图下载站，而是属于所有War3玩家和作者的共同家园";
  },
  getNavLinks: (lang: Locale = "en") => {
    return ui[lang].site?.nav || [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Services", href: "/services" },
      { text: "Blog", href: "/blog" },
      { text: "Contact", href: "/contact" },
      { text: "Widgets", href: "/widgets" },
    ];
  },
  getLocale: (lang: Locale = "en") => {
    return lang === "zh" ? "zh_CN" : "en_US";
  },
};
