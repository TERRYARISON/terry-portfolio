# ASSETS.md — 素材清单与替换指南

本站所有视觉素材位于 `/public/assets/`，当前均为程序化生成的占位图。
替换方式：用同名文件覆盖即可，**无需改动任何代码**。建议保持相同宽高比。

| 文件 | 建议尺寸 | 用途 | AI 生成提示词（可直接使用） |
|---|---|---|---|
| `hero-terry.jpg` | 2400×1350 | 首页 Hero 主视觉（全站封面，最高视觉强度） | Cinematic CGI portrait of a young man in profile, his silhouette dissolving into glowing crystal filaments and cherry blossoms, cyan #7EF0FF and pink #FF7EC7 light dots floating in pure black background, ethereal glass texture, editorial fashion photography style, ultra detailed, dark moody atmosphere |
| `portrait.jpg` | 900×1200 | About / 首页 About preview 的真实职业肖像（**必须替换为真人照片**） | 用本人真实职业照替换；若需临时生成：Professional editorial portrait of a young Asian man, dark studio background, soft cyan rim light on one side, subtle pink fill light, calm confident expression, high-end magazine style |
| `book-sky.jpg` | 800×1200 | 《你看得见天空的颜色吗》封面（书库主角，最大封面） | Book cover design, dark background, a crystal flower blooming with cyan light filaments, minimal serif typography space at bottom, cyan and pink glow particles, premium editorial design |
| `book-slow-machine.jpg` | 800×1200 | 《慢机器》封面 | Book cover, dark background, a slow mechanical gear made of pink glowing glass, minimal, premium editorial |
| `book-notes.jpg` | 800×1200 | 《消失笔记》封面 | Book cover, dark background, dissolving paper fragments turning into cyan light particles, minimal, premium editorial |
| `book-strangers.jpg` | 800×1200 | 《陌生人野外手册》封面 | Book cover, dark background, distant silhouettes in pink-lit fog, minimal, premium editorial |
| `book-garden.jpg` | 800×1200 | 《体内花园》封面 | Book cover, dark background, organic vines merging with cyan circuitry, bioluminescent flowers, premium editorial |
| `book-letters.jpg` | 800×1200 | 《未寄出的信》封面 | Book cover, dark background, an envelope sealed with pink glowing wax, floating light dots, premium editorial |
| `project-ptg.jpg` | 1600×1000 | PTG 项目主图（WORK 区最大卡片） | Abstract product concept visual, dark background, a single crystalline interface panel floating with cyan glow edges, precision and clarity, high-end tech editorial |
| `project-visual.jpg` | 1600×1000 | Terry Visual Studies 主图 | CGI art study, crystal human torso with cherry blossoms growing through it, pink and cyan bioluminescence on black, museum-grade digital art |
| `project-archive.jpg` | 1600×1000 | Archive of Questions 项目图 | Dark editorial visual, floating index cards with silver light edges on black background, archival mood |
| `exp-yuzhe.jpg` | 1600×1000 | 语者 经历主图（EXPERIENCE featured） | Real material photo placeholder: a workshop table with printed conversation transcripts and a laptop, dark ambient light, documentary style — 建议替换为真实材料照片 |
| `exp-yuzhe-1.jpg` | 1600×1000 | 语者 detail 材料图 1（白板/过程） | 建议替换为真实白板或过程照片 |
| `exp-yuzhe-2.jpg` | 1600×1000 | 语者 detail 材料图 2（访谈记录） | 建议替换为真实访谈/文档照片 |
| `article-interface.jpg` | 1600×1000 | Perspective 特色文章配图 | Dark editorial illustration, a translucent glass interface panel hovering over black, cyan edge light, conceptual |
| `contact-echo.jpg` | 1600×1000 | Contact 页背景（呼应首页视觉，中等强度） | Wide dark cinematic background, sparse cyan and pink light dots drifting like distant stars, minimal, calm |
| `visual-1.jpg` / `visual-2.jpg` / `visual-3.jpg` | 1200×900 | WORK → Visual 区画廊图 | CGI visual study variations: crystal filaments / glass flowers / light threads on pure black, cyan-pink palette |
| `ambient.mp3` | 任意（循环） | 首页角落声音开关的环境音（默认静音，可选） | 不使用 AI 生成；建议 CC0 环境音，如缓慢合成器 pad 循环 |

## 规则
- 所有图片保持**暗底（近 #050505）+ 青/粉光**的统一语言。
- 书页与简历页不放人物肖像——书是主角。
- About 页必须使用**真实肖像**，不可用 CGI 替代。
- 替换后无需重新构建数据结构，直接 `npm run build` 即可。
