export interface Article {
  title: string;
  cn: string;
  abstract: string;
  readingTime: string;
  href: string;
  image: string;
}

export interface ResumeEntry {
  title: string;
  org: string;
  period: string;
  points: string[];
  titleEn?: string;
  orgEn?: string;
  pointsEn?: string[];
}

export const profile = {
  name: "Terry",
  portrait: "/assets/portrait.jpg",
  publicBio:
    "Terry，现居广州。过去数年先后负责产品方向、独立工作室运营与长期写作计划，目前专注于把“表达”这件事做得更好——无论是在产品里，还是在纸上。",
  publicBioShort:
    "产品方向 / 独立运营 / 长期写作，现居广州。",
  city: "Guangzhou / 广州",
  careerSpan: "2020 — 至今",
  fields: ["产品方向 Product Direction", "视觉创作 Visual / CGI", "写作与叙事 Writing", "项目运营 Operations"],
  valueOffered:
    "在模糊问题里建立秩序：从 0 到 1 定义方向，把复杂的事讲到所有人都能行动。",
  currentFocus: "PTG 产品与《你看得见天空的颜色吗》的再版修订。",
  workingStyle: [
    "原则先于功能：先写清楚不做什么",
    "小范围深度验证，而非大范围浅层铺开",
    "文字是所有思考的终点，也是起点",
  ],
} as const;

export const featuredArticle: Article = {
  title: "The Interface Is the Argument",
  cn: "界面即论点",
  abstract:
    "每一个界面都是一次论证：它告诉你什么重要、什么可以忽略、你是谁。这篇文章讨论为什么做产品本质上是写作文——只不过评卷人是时间。",
  readingTime: "12 min",
  href: "/work/archive-of-questions/",
  image: "/assets/article-interface.jpg",
};

export const resume = {
  summaryCn:
    "产品方向与内容创作者。五年跨产品、运营与写作的经验，擅长在模糊问题中定义方向并推动落地。",
  summaryEn:
    "Product direction lead and writer. Five years across product, operations, and long-form writing — defining direction in ambiguous problems and shipping it.",
  work: [
    {
      title: "项目方向负责人",
      org: "语者 Yuzhe",
      period: "2023 — 2024",
      points: [
        "定义项目方向与边界，把控整体落地节奏",
        "建立双周试用者访谈机制，以原话驱动决策",
        "主导三次方向评审，收缩功能范围至核心场景",
      ],
      titleEn: "Project Direction Lead",
      orgEn: "Yuzhe",
      pointsEn: [
        "Defined project direction and scope boundaries; owned delivery cadence",
        "Built a bi-weekly user interview loop driving decisions with verbatim feedback",
        "Led three direction reviews; narrowed scope to the core scenario",
      ],
    },
    {
      title: "运营负责人",
      org: "独立工作室",
      period: "2022 — 2023",
      points: [
        "负责客户沟通、排期、预算与交付质量",
        "建立轻量项目管理机制，支撑并行项目交付",
      ],
      titleEn: "Operations Lead",
      orgEn: "Independent Studio",
      pointsEn: [
        "Owned client communication, scheduling, budgeting, and delivery quality",
        "Set up a lightweight PM system supporting parallel projects",
      ],
    },
  ] as ResumeEntry[],
  projects: [
    {
      title: "PTG — 产品方向与负责人",
      org: "进行中",
      period: "2024 — 至今",
      points: ["从 0 到 1 定义产品方向与信息架构"],
      titleEn: "PTG — Product Direction & Owner",
      orgEn: "Ongoing",
      pointsEn: ["Defined product direction and information architecture from 0 to 1"],
    },
    {
      title: "《你看得见天空的颜色吗》— 作者",
      org: "已完本",
      period: "2024",
      points: ["十二章长篇，关于感知、语言与边界"],
      titleEn: "Can You See the Color of the Sky — Author",
      orgEn: "Completed",
      pointsEn: ["A twelve-chapter book on perception, language, and boundaries"],
    },
  ] as ResumeEntry[],
  education: [
    {
      title: "文学与计算机交叉背景（占位 / placeholder）",
      org: "—",
      period: "2016 — 2020",
      points: ["请在 data/profile.ts 中替换为真实教育经历"],
      titleEn: "Literature & CS interdisciplinary background (placeholder)",
      orgEn: "—",
      pointsEn: ["Replace with real education history in data/profile.ts"],
    },
  ] as ResumeEntry[],
  languages: [
    { cn: "中文（母语）", en: "Chinese (Native)" },
    { cn: "英文（工作语言）", en: "English (Working proficiency)" },
  ],
  skills: [
    { cn: "产品方向与信息架构", en: "Product direction & IA" },
    { cn: "长内容写作与编辑", en: "Long-form writing & editing" },
    { cn: "视觉创作（CGI / 图像）", en: "Visual creation (CGI / imagery)" },
    { cn: "项目运营与协作接口", en: "Operations & cross-team interface" },
  ],
};
