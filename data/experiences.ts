export type ExperienceGroup =
  | "Project Direction"
  | "Business & Operations"
  | "Content & Storytelling"
  | "Collaboration";

export interface Experience {
  slug: string;
  name: string;
  cn?: string;
  group: ExperienceGroup;
  time: string;
  role: string;
  summary: string;
  featured?: boolean;
  image?: string;
}

export interface YuzheCaseStudy {
  name: string;
  cn: string;
  accent: "cyan" | "pink";
  time: string;
  background: string;
  collaborators: string[];
  role: string;
  responsibilities: string[];
  problem: string;
  actions: string[];
  keyJudgments: string[];
  results: { metric: string; value: string; note: string }[];
  materials: { src: string; caption: string }[];
  nextSlug: string;
}

/**
 * NOTE FOR OWNER: all quantifiable results are placeholder data —
 * replace with verifiable figures before publishing.
 */
export const experiences: Experience[] = [
  {
    slug: "yuzhe",
    name: "Yuzhe",
    cn: "语者",
    group: "Project Direction",
    time: "2023 — 2024",
    role: "项目方向负责人",
    summary:
      "一个围绕语言表达与人机协作的项目。我负责整体方向、关键判断与落地节奏，与设计师、工程师和内容合作者共同推进。",
    featured: true,
    image: "/assets/exp-yuzhe.jpg",
  },
  {
    slug: "studio-operations",
    name: "Independent Studio Operations",
    cn: "独立工作室运营",
    group: "Business & Operations",
    time: "2022 — 2023",
    role: "运营负责人",
    summary:
      "负责一个小型独立工作室的日常运营：客户沟通、排期、预算与交付质量，建立了轻量但可靠的项目管理机制。",
  },
  {
    slug: "serial-essays",
    name: "Serial Essays Program",
    cn: "专栏写作计划",
    group: "Content & Storytelling",
    time: "2021 — 2023",
    role: "主笔",
    summary:
      "为期两年的专栏写作计划，围绕技术、身份与想象力持续输出长文，训练了稳定的长内容生产能力。",
  },
  {
    slug: "cross-team-initiatives",
    name: "Cross-team Initiatives",
    cn: "跨团队协作项目",
    group: "Collaboration",
    time: "2020 — 2022",
    role: "协作方 / 接口人",
    summary:
      "在多个跨团队项目中担任接口人角色，负责对齐目标、翻译语言差异，并在信息不完整时推动决策。",
  },
];

export const yuzheCase: YuzheCaseStudy = {
  name: "Yuzhe",
  cn: "语者",
  accent: "cyan",
  time: "2023 — 2024",
  background:
    "语者诞生于一个具体的困境：越来越多的人用机器辅助表达，但表达本身却变得越来越相似。我们希望做一件事——让工具放大一个人原本的声音，而不是替换成另一种声音。",
  collaborators: ["产品设计师 ×1", "工程师 ×2", "内容合作者 ×2", "早期试用者社群"],
  role: "项目方向负责人",
  responsibilities: [
    "定义项目方向与不做什么的边界",
    "拆解阶段目标并把控落地节奏",
    "在关键分歧点上做出最终判断",
    "维护与早期试用者的直接沟通",
  ],
  problem:
    "市面上大多数表达辅助工具都在优化“产出的正确性”，却忽略了“表达的辨识度”。用户得到的是更顺滑的文字，失去的是自己的语气。语者要解决的问题是：如何让辅助存在，但不覆盖。",
  actions: [
    "把“保留作者语气”写成可检验的产品原则，而不是一句口号",
    "将功能范围收缩到一个核心场景，砍掉三条看似诱人的支线",
    "建立双周试用者访谈机制，用原话而非票数做决策依据",
    "主导了三次方向评审，其中一次否决了已经开发两周的方案",
  ],
  keyJudgments: [
    "判断一：辅助的“可见度”必须可调——用户要知道机器参与了哪里",
    "判断二：宁可小范围深度使用，不做大范围浅层增长",
    "判断三：内容质量的决定权必须留在人这一侧",
  ],
  results: [
    { metric: "核心场景留存", value: "58%", note: "占位数据 / placeholder — 发布前请替换" },
    { metric: "深度试用者", value: "120+ 人", note: "占位数据 / placeholder — 发布前请替换" },
    { metric: "方向迭代", value: "3 轮", note: "占位数据 / placeholder — 发布前请替换" },
  ],
  materials: [
    { src: "/assets/exp-yuzhe-1.jpg", caption: "早期方向白板：原则先于功能" },
    { src: "/assets/exp-yuzhe-2.jpg", caption: "试用者访谈记录摘录" },
  ],
  nextSlug: "studio-operations",
};

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}

export const experienceGroups: ExperienceGroup[] = [
  "Project Direction",
  "Business & Operations",
  "Content & Storytelling",
  "Collaboration",
];

export const groupLabels: Record<ExperienceGroup, string> = {
  "Project Direction": "项目方向",
  "Business & Operations": "商业与运营",
  "Content & Storytelling": "内容与叙事",
  Collaboration: "协作",
};
