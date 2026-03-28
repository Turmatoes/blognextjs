# blognextjs
Bài tập Blog Next.JS

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue)

## Project Structure

```text
blognextjs/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── page.tsx             # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── blog/
│   │   ├── page.tsx             # Blog listing
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── [slug]/
│   │       ├── page.tsx         # Post detail
│   │       ├── loading.tsx
│   │       └── @comments/
│   │           └── default.tsx  # Parallel route
│   │   └── category/
│   │       └── [category]/
│   │           └── page.tsx
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts         # Contact form API
│   │   └── posts/
│   │       ├── route.ts         # Posts API
│   │       └── [slug]/
│   │           └── route.ts     # Post Detail API
│   ├── layout.tsx               # Root layout
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── blog/
│   │   ├── PostCard.tsx         # Client component
│   │   ├── PostList.tsx         # Server component
│   │   ├── PostContent.tsx
│   │   ├── CategoryBadge.tsx
│   │   └── SearchBar.tsx        # Client componentcó sử dụng useDebounce
│   ├── forms/
│   │   ├── ContactForm.tsx      # Client component
│   │   └── CommentForm.tsx      # Client component
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       └── Card.tsx
├── hooks/
│   └── useDebounce.ts           # Custom Debounce hook (Mới thêm)
├── lib/
│   ├── api.ts                   # API functions
│   ├── utils.ts                 # Utility functions
│   ├── validations.ts           # Zod schemas
│   └── constants.ts
├── types/
│   └── index.ts                 # TypeScript types
├── data/
│   └── posts.json               # Mock data
├── public/
│   ├── images/
│   │   ├── placeholder.jpg
│   │   └── posts/
│   └── favicon.ico
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

1. `npm install`
2. `npm run dev`
