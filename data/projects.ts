export type ProjectCategory = "product" | "visual" | "project";

export interface Project {
  slug: string;
  name: string;
  cn?: string;
  category: ProjectCategory;
  type: string;
  oneLiner: string;
  status: string;
  role: string;
  year: string;
  featured?: boolean;
  image: string;
  summary: string[];
  highlights: string[];
  /** External link, optional */
  link?: string;
}

/**
 * NOTE FOR OWNER: quantifiable results below are clearly marked as
 * placeholder data — replace with verifiable figures before publishing.
 */
export const projects: Project[] = [
  {
    slug: "ptg",
    name: "PTG",
    category: "product",
    type: "Product / Tool",
    oneLiner: "一个把复杂流程压缩成一次操作的产品工具。",
    status: "进行中 / Ongoing",
    role: "产品方向与负责人",
    year: "2024 — 至今",
    featured: true,
    image: "/assets/project-ptg.jpg",
    summary: [
      "PTG 起源于一个观察：大多数工具在功能上不断叠加，却很少删除任何东西。PTG 尝试做相反的事——用更少的界面完成同一件事。",
      "作为产品方向负责人，我负责从问题定义、信息架构到落地节奏的全过程。当前版本正在小范围试运行中。",
    ],
    highlights: [
      "从 0 到 1 定义产品方向与信息架构",
      "核心流程从 7 步压缩到 1 步（占位数据 / placeholder）",
      "试运行用户周留存 62%（占位数据 / placeholder）",
    ],
  },
  {
    slug: "terry-visual-studies",
    name: "Terry Visual Studies",
    category: "visual",
    type: "Visual / CGI",
    oneLiner: "一组关于光、晶体与有机形态的视觉研究。",
    status: "持续更新 / Ongoing",
    role: "创作者",
    year: "2023 — 至今",
    featured: true,
    image: "/assets/project-visual.jpg",
    summary: [
      "Terry Visual Studies 是一个长期视觉练习项目：以晶体、植物与光为母题，探索数字材质在暗场中的表现边界。",
      "本站的多数视觉素材即出自这一系列研究。",
    ],
    highlights: [
      "累计产出 40+ 组视觉实验（占位数据 / placeholder）",
      "形成本站统一的暗色晶体视觉语言",
    ],
  },
  {
    slug: "archive-of-questions",
    name: "Archive of Questions",
    cn: "问题档案馆",
    category: "project",
    type: "Editorial / Web",
    oneLiner: "一个收集并整理“好问题”的线上档案项目。",
    status: "已完成 / Completed",
    role: "策划与制作",
    year: "2023",
    image: "/assets/project-archive.jpg",
    summary: [
      "比起答案，我更在意问题的质量。这个项目把三年里收集的问题按主题归档，形成一份可以反复翻阅的公共档案。",
    ],
    highlights: [
      "收录 120+ 条问题，分 9 个主题（占位数据 / placeholder）",
      "独立完成策划、设计与开发",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const products = projects.filter((p) => p.category === "product");
export const visuals = projects.filter((p) => p.category === "visual");
export const selectedProjects = projects.filter((p) => p.category === "project");
