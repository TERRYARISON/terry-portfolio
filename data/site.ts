export interface NavItem {
  en: string;
  cn: string;
  href: string;
}

export interface SiteIndexCard {
  key: string;
  title: string;
  cn: string;
  description: string;
  href: string;
}

export const site = {
  name: "TERRY",
  slogan: {
    en: "All of this is me. None of it is all of me.",
    cn: "这里的一切都属于我，却没有任何一部分足以定义我。",
  },
  description: {
    en: "Selected work, experience, books, and ideas.",
    cn: "精选作品、经历、书籍与观点。",
  },
  contactLine: {
    en: "For work, projects, and conversations worth having.",
    cn: "关于工作、项目，以及一次值得发生的交流。",
  },
  email: "hello@terry.example.com",
  city: "Guangzhou / 广州",
  timezone: "GMT+8",
} as const;

export const navItems: NavItem[] = [
  { en: "WORK", cn: "作品", href: "/work/" },
  { en: "EXPERIENCE", cn: "经历", href: "/experience/" },
  { en: "BOOKS", cn: "书库", href: "/books/" },
  { en: "ABOUT", cn: "关于", href: "/about/" },
  { en: "RESUME", cn: "简历", href: "/resume/" },
  { en: "CONTACT", cn: "联系", href: "/contact/" },
];

export const siteIndexCards: SiteIndexCard[] = [
  {
    key: "work",
    title: "WORK",
    cn: "作品",
    description: "产品、视觉与其他完成项目。",
    href: "/work/",
  },
  {
    key: "experience",
    title: "EXPERIENCE",
    cn: "经历",
    description: "职业、商业和项目经历。",
    href: "/experience/",
  },
  {
    key: "books",
    title: "BOOKS",
    cn: "书库",
    description: "完本书籍与小说作品。",
    href: "/books/",
  },
  {
    key: "profile",
    title: "PROFILE",
    cn: "档案",
    description: "About、Resume 与 Contact。",
    href: "/about/",
  },
];

export const socialLinks = [
  { label: "Email", href: "mailto:hello@terry.example.com" },
  { label: "GitHub", href: "https://github.com/terry-example" },
  { label: "X / Twitter", href: "https://x.com/terry-example" },
  { label: "WeChat", href: "/contact/" },
];
