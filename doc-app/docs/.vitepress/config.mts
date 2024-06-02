import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Shorty.Docs/",
  title: "Shorty Docs",
  description: "Documentation for the link shortening service",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Api", link: "/api/" },
    ],
    sidebar: [
      {
        text: "About",
        items: [
          { text: "About", link: "/api/" },
        ],
      },
    {
      text: "Admin",
      items: [
        { text: "Domains", link: "/api/admin/domains.md" },
      ],
    },
    {
      text: "User",
      items: [
        { text: "Subdomains", link: "/api/user/subdomains.md" },
        { text: "Links", link: "/api/user/links.md" },
        { text: "Tags", link: "/api/user/tags.md" },
        { text: "Analytics", link: "/api/user/analytics.md" },
      ],
    },
      {
        text: "Anonymous",
        items: [
          { text: "Redirects", link: "/api/anonymous/redirects.md" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/orgs/ElixorTeam/repositories?q=Shorty&sort=&type=all",
      },
    ],
  },
});
