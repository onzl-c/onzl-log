const CONFIG = {
  // profile setting (required)
  profile: {
    name: "onzl",
    image: "/totoro.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "security engineer",
    bio: "hello *.*",
    email: ,
    linkedin: ,
    github: ,
    instagram: "onzl.c",
  },
  projects: [
    {
      name: `detect malicious package and library with ml`,
      href: "https://github.com/weArePotato/WHS2_WeArePotato",
    },
  ],
  // blog setting (required)
  blog: {
    title: "onzl-log",
    description: "welcome to onzl-log! >.<",
    scheme: "light", // 'light' | 'dark' | 'system'
    followSystemTheme: false, // If true, the appearance will be changed according to the system theme on first visit your blog.
  },

  // CONFIG configration (required)
  link: "https://onzl-log.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "onzl-c/morethan-log",
      "issue-term": "og:title",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
