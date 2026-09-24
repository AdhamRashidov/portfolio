# CLAUDE.md - Project Context & Rules

## 1. Project Overview
- **Project Name**: Adham's Portfolio
- **Description**: Personal developer portfolio website displaying projects, technical stack, GitHub repositories, and contact details.
- **Main Goal**: High performance, responsive UI, clean architecture, and modular client-side structure.

---

## 2. Tech Stack & Dependencies
- **Framework**: React (Vite) + TypeScript
- **Styling**: Tailwind CSS / Shadcn UI / Lucide Icons
- **Deployment**: Vercel (Pure Frontend architecture, no backend)
- **Data Persistence**: Static JSON files located in `src/data/` (`projects.json`, `death.json`)
- **API Services**: GitHub API integration via `src/hooks/gitHubService.ts` to fetch dynamic repository details

---

### 3. Data Architecture & Archive Rules
1. **Active Data**: Static project details **MUST** stay inside `src/data/projects.json` (`categories` — tab ro'yxati tartibi; har bir loyiha `category` maydoni bilan bog'lanadi). Bo'limni olib tashlash uchun `categories` dan yozuvni o'chiring; yangi bo'lim qo'shish uchun `categories` ga yozuv va mos `category` li loyihalar qo'shing.
2. **Archived Projects (CRITICAL)**: `src/data/death.json` is strictly an offline archive for deleted/abandoned projects. **NEVER** import or use `death.json` anywhere in production components (like `projects.tsx`).
3. **No Hardcoded Content**: Do not hardcode raw portfolio data into JSX components. Always pull active project data from `projects.json`.

---

## 4. Directory & File Architecture
Strictly adhere to this directory structure when adding or modifying files:

```text
src/
├── components/          # Reusable UI components
│   ├── common/          # Common layout wrappers (Header.tsx, Footer.tsx)
│   └── ui/              # Low-level Shadcn UI elements (button.tsx, badge.tsx, dialog.tsx, sheet.tsx)
├── custom/              # Custom specialized project components
├── data/                # Static JSON datasets (projects.json, death.json)
├── hooks/               # Custom hooks & client-side API integrations (gitHubService.ts)
├── layout/              # Page layouts & main wrappers (main-layout.tsx)
├── lib/                 # Shared utilities and helper configs (utils.ts)
├── pages/               # Page components and sections
│   ├── sections/        # Modular page sections (about.tsx, contact.tsx, projects.tsx, stack.tsx)
│   └── home.tsx         # Main home page component
├── types/               # TypeScript interfaces & definitions (types.ts)
├── utils/               # Utility components & helpers (copyButton.tsx, themetoggle.tsx)
├── App.tsx              # Root application component
├── main.tsx             # Application entry point
└── index.css            # Global CSS styles and Tailwind imports