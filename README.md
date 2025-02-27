# Next.js Blog

这是一个使用 Next.js 构建的博客应用。

## 项目结构

```
├── app/                    # Next.js 13+ App Router
│   ├── api/                # API 路由
│   ├── blog/               # 博客相关页面
│   ├── categories/         # 分类相关页面
│   ├── tool/               # 工具相关页面
│   └── layout.tsx          # 根布局组件
├── components/             # 组件目录
│   ├── blog-detail/        # 博客详情相关组件
│   ├── common/             # 通用组件
│   ├── home/               # 首页相关组件
│   ├── layout/             # 布局相关组件
│   ├── shared/             # 共享组件
│   └── ui/                 # UI 基础组件
├── data/                   # 数据文件
│   ├── posts/              # 博客文章数据
│   ├── tools/              # 工具相关数据
│   └── types/              # 类型定义
├── hooks/                  # 自定义 Hooks
├── lib/                    # 工具库
├── public/                 # 静态资源
├── styles/                 # 样式文件
└── utils/                  # 工具函数
    └── i18n/               # 国际化相关

## 开发规范

1. 组件规范
   - 所有组件使用 TypeScript
   - 组件按功能模块分类存放
   - UI 基础组件统一放在 components/ui 目录

2. 样式规范
   - 使用 Tailwind CSS
   - 全局样式在 app/globals.css

3. 数据管理
   - 静态数据存放在 data 目录
   - API 接口统一在 app/api 目录

4. 工具函数
   - 通用工具函数放在 utils 目录
   - 核心工具库放在 lib 目录

5. 国际化
   - 翻译文件统一管理在 utils/i18n 目录

## 技术栈

- Next.js 13+
- TypeScript
- Tailwind CSS
- Shadcn UI