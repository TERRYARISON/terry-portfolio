export interface Book {
  slug: string;
  title: string;
  cn?: string;
  year: string;
  status: string;
  theme: string;
  thesis: string;
  synopsis: string;
  completionDate: string;
  excerpt: string;
  cover: string;
  featured?: boolean;
}

export const books: Book[] = [
  {
    slug: "can-you-see-the-color-of-the-sky",
    title: "Can You See the Color of the Sky",
    cn: "你看得见天空的颜色吗",
    year: "2024",
    status: "已完本 / Completed",
    theme: "感知、语言与边界",
    thesis: "我们用来描述世界的语言，也在悄悄决定我们能看见什么。",
    synopsis:
      "这是一本关于感知边界的书。从一次关于“天空到底是什么颜色”的争论出发，书中穿行于语言、记忆与视觉之间，追问一个看似简单的问题：我们看见的，是世界本身，还是我们描述世界的方式？全书由十二个章节组成，每一章从一个日常场景进入，最终抵达一个无法被轻易回答的问题。",
    completionDate: "2024 年 11 月",
    excerpt:
      "“你说天空是蓝色的，”她放下杯子，“可你上一次真正看它，是什么时候？” 我想反驳，却发现自己记起的只是“蓝色”这个词，而不是任何一片具体的天空。",
    cover: "/assets/book-sky.jpg",
    featured: true,
  },
  {
    slug: "the-slow-machine",
    title: "The Slow Machine",
    cn: "慢机器",
    year: "2023",
    status: "已完本 / Completed",
    theme: "效率崇拜与抵抗",
    thesis: "在一个奖励速度的系统里，慢是一种需要练习的能力。",
    synopsis:
      "一部中篇小说。主人公是一台被设计来“永不着急”的机器，在一个一切都被加速的城市里，它的慢成了最大的故障，也成了唯一的答案。",
    completionDate: "2023 年 8 月",
    excerpt: "城市给它做了二十七次检修，没有查出任何故障。它只是拒绝着急，而这一点不在任何一份维修手册里。",
    cover: "/assets/book-slow-machine.jpg",
  },
  {
    slug: "notes-on-disappearing",
    title: "Notes on Disappearing",
    cn: "消失笔记",
    year: "2023",
    status: "已完本 / Completed",
    theme: "记忆与告别",
    thesis: "告别不是失去的反义词，而是记忆的另一种保存方式。",
    synopsis:
      "一本散文集，记录三年里那些逐渐消失的事物：一条老街、一种方言的口音、一种不再被使用的软件界面。每篇笔记都是一次小小的挽留。",
    completionDate: "2023 年 3 月",
    excerpt: "我写下这些，不是因为它们重要，而是因为消失这件事太安静了，安静到需要有人专门记一笔。",
    cover: "/assets/book-notes.jpg",
  },
  {
    slug: "a-field-guide-to-strangers",
    title: "A Field Guide to Strangers",
    cn: "陌生人野外手册",
    year: "2022",
    status: "已完本 / Completed",
    theme: "城市与相遇",
    thesis: "陌生人是城市里唯一没有被标注的风景。",
    synopsis:
      "以“田野观察”的姿态写下的城市笔记：便利店夜班店员、末班地铁上的乘客、公园长椅的常客。一本关于如何在人群中重新学会好奇的书。",
    completionDate: "2022 年 10 月",
    excerpt: "观察手册第一条：不要问路。问路得到的是答案，而迷路得到的才是故事。",
    cover: "/assets/book-strangers.jpg",
  },
  {
    slug: "the-garden-inside",
    title: "The Garden Inside",
    cn: "体内花园",
    year: "2021",
    status: "已完本 / Completed",
    theme: "身体、技术与共生",
    thesis: "当技术开始生长进身体，我们谈论的其实是园艺。",
    synopsis:
      "一组介于随笔与科幻之间的短篇，想象技术与有机体共生的若干种未来：植入记忆的藤蔓、会开花的芯片、需要浇水的假肢。",
    completionDate: "2021 年 6 月",
    excerpt: "园丁从不命令玫瑰开放。好的技术也一样——它提供土壤，然后学会等待。",
    cover: "/assets/book-garden.jpg",
  },
  {
    slug: "letters-never-sent",
    title: "Letters Never Sent",
    cn: "未寄出的信",
    year: "2020",
    status: "已完本 / Completed",
    theme: "未说出口的话",
    thesis: "每一封没寄出的信，都寄达了写信的人自己。",
    synopsis:
      "第一部完本作品。三十六封永远不会寄出的信，写给亲人、故人、陌生人和未来的自己。一次关于表达本身的练习。",
    completionDate: "2020 年 12 月",
    excerpt: "这封信我写了四年。也许它从来没有想过要被寄出——它只是想被写完。",
    cover: "/assets/book-letters.jpg",
  },
];

export function getBook(slug: string) {
  return books.find((b) => b.slug === slug);
}

export function adjacentBooks(slug: string) {
  const i = books.findIndex((b) => b.slug === slug);
  return {
    prev: i > 0 ? books[i - 1] : undefined,
    next: i >= 0 && i < books.length - 1 ? books[i + 1] : undefined,
  };
}

export const booksMeta = {
  countLabel: "~10 completed works",
  countLabelCn: "约 10 部完本作品",
  yearRange: "2020 — 2024",
  intro: {
    en: "Completed books and fiction — written slowly, finished anyway.",
    cn: "完本书籍与小说作品——写得慢，但都写完了。",
  },
};
