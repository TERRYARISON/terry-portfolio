# TERRY — 个人作品集网站

> All of this is me. None of it is all of me. / 这里的一切都属于我，却没有任何一部分足以定义我。

一个静态导出的个人作品集：作品（WORK）、经历（EXPERIENCE）、书库（BOOKS）、关于（ABOUT）、简历（RESUME）、联系（CONTACT）。暗色底 + 青/粉辉光的双语（中英混排）编辑风格。

技术栈：**Next.js 14.2（App Router）+ TypeScript + Tailwind CSS 3.4 + Framer Motion 11**，静态导出（`output: 'export'`），无后端、无数据库。

## 文件树

```
terry/
├── app/                    # 路由与页面
│   ├── layout.tsx          # 根布局（字体、Nav、Footer）
│   ├── globals.css         # 设计系统基础样式（glass / eyebrow / print 等）
│   ├── page.tsx            # 首页
│   ├── not-found.tsx       # 404
│   ├── work/               # 作品列表 + [slug] 详情
│   ├── experience/         # 经历列表 + [slug] 详情
│   ├── books/              # 书库列表 + [slug] 书籍详情
│   ├── about/              # 关于
│   ├── resume/             # 简历（中英切换 + 打印友好）
│   └── contact/            # 联系
├── components/             # 共享组件
│   ├── Nav.tsx             # 固定顶部导航（no-print）
│   ├── Footer.tsx          # 页脚（no-print）
│   ├── Reveal.tsx          # 滚动显现动画（尊重 reduced-motion）
│   ├── GlassCard.tsx       # 玻璃拟态卡片（可作为链接）
│   ├── SectionHeader.tsx   # 章节标题（ eyebrow + 英中标题 ）
│   ├── GlowBackdrop.tsx    # 环境辉光背景（纯 CSS）
│   ├── ResumeView.tsx      # 简历内容 + 中英切换（client）
│   ├── CopyEmail.tsx       # 复制邮箱按钮（client）
│   └── MouseGlow.tsx / SoundToggle.tsx
├── data/                   # ★ 全部内容都在这里，改内容只改这里
│   ├── site.ts             # 站点信息、导航、社交链接、联系语句
│   ├── profile.ts          # 个人简介、领域、工作方式、简历数据（中英）
│   ├── projects.ts         # WORK 项目数据
│   ├── experiences.ts      # EXPERIENCE 经历数据
│   └── books.ts            # 书籍数据（含 booksMeta / adjacentBooks）
├── public/
│   ├── assets/             # 全部图片素材（同名覆盖即可替换）
│   └── resume/             # 简历 PDF（resume-cn.pdf / resume-en.pdf）
├── ASSETS.md               # 素材清单与替换指南
├── next.config.mjs         # output:'export'、trailingSlash、images.unoptimized
└── tailwind.config.ts      # 色板、字体、max-w-site 等设计令牌
```

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## 如何改内容

**只编辑 `/data/*.ts`，不需要碰任何页面代码。**

| 文件 | 管什么 |
|---|---|
| `data/site.ts` | 站名、slogan、联系语句（contactLine）、邮箱、城市/时区、导航项、社交链接 |
| `data/profile.ts` | 肖像路径、公开简介、城市、职业跨度、领域（fields）、工作方式、价值主张、当前重心；以及**简历全部内容**（summary / work / projects / education / languages / skills，中英双语字段） |
| `data/projects.ts` | WORK 页的每个项目：标题、描述、图片、链接等 |
| `data/experiences.ts` | EXPERIENCE 页的每段经历：机构、时间、要点、材料图 |
| `data/books.ts` | 每本书：slug、标题（英/中）、年份、状态、主题、论点（thesis）、简介、完成时间、节选、封面；`featured: true` 的那本会作为书库页主打。新增书籍只需在数组里加一项，详情页与上下本导航自动生成 |

## 如何替换素材

按 **ASSETS.md** 的清单，用**同名文件**覆盖 `/public/assets/` 中的图片即可，无需改任何代码。建议保持相同宽高比、暗底 + 青/粉光的统一视觉语言。

注意：`portrait.jpg`（About 页）必须使用**真实职业肖像**；书籍封面与简历页不放人物肖像。

## 简历 PDF 替换

将正式简历 PDF 覆盖到：

- `/public/resume/resume-cn.pdf`（中文版）
- `/public/resume/resume-en.pdf`（英文版）

简历页的下载按钮会直接引用这两个文件。在线简历的文字内容则来自 `data/profile.ts` 的 `resume` 对象。

## 构建与部署

```bash
npm run build
```

构建产物为纯静态文件，输出到 **`out/`** 目录（`next.config.mjs` 中 `output: 'export'`）。

**部署到 Vercel：**

1. 把仓库推到 GitHub/GitLab；
2. 在 Vercel 中 Import Project，框架预设选 **Next.js**（自动识别，无需额外配置）；
3. 点击 Deploy 即可。后续每次 push 会自动重新部署。

因为产物是纯静态的，也可以把 `out/` 部署到任意静态托管（Netlify、Cloudflare Pages、OSS/CDN 等）。

## 设计系统速览

**色板（tailwind.config.ts）**

| 名称 | 值 | 用途 |
|---|---|---|
| `ink` | `#050505` | 全站底色 |
| `ink-soft` / `ink-card` | `#0B0B0E` / `#101014` | 次级底 / 卡片底 |
| `cyan.glow` | `#7EF0FF` | 主辉光色 |
| `pink.glow` | `#FF7EC7` | 次辉光色 |
| `mist` / `mist-dim` | `#B9B9C3` / `#7A7A86` | 正文灰 / 弱化灰 |

**字体**

- `font-display`：Playfair Display（英文大标题、衬线）
- `font-body`：Inter（英文正文）
- `font-cnserif`：Noto Serif SC（中文衬线、引用、论点）
- `font-cnsans`：Noto Sans SC（中文正文）

**语言模式**：双语混排——英文衬线大字 + 中文字幕；唯一例外是 `/resume`，提供完整中文与英文两个版本（页面内切换）。

**通用样式类（globals.css）**：`.glass` / `.glass-hover`（玻璃卡片）、`.eyebrow`（小号大写眉题）、`.hairline`（渐变细线）、`.display-italic`（青粉渐变斜体）、`.prose-terry`（正文段落）、`.glow-orb` / `.drift`（环境辉光）。

**动效约定**：只用 Framer Motion 的淡入上移（`Reveal`，0.9s，`cubic-bezier(0.22,1,0.36,1)`）与 CSS 环境动画（drift / kenburns / pulse-soft）；无 scroll-jacking、无 WebGL/canvas 粒子。`prefers-reduced-motion` 时所有动画自动降级（globals.css 与 `Reveal` 均已处理）。

**视觉强度分级**：首页 HIGH（全幅视觉 + 环境动效）→ BOOKS / ABOUT / CONTACT MEDIUM（辉光背景 + 玻璃卡片）→ 书籍详情 LOW（封面与文字为主角）→ RESUME MINIMAL（克制、打印友好，`.print-page` + `.no-print` 控制打印输出为白底黑字）。
