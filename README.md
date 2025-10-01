This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# MovieQueen: Веб-додаток для пошуку фільмів

Це навчальний проєкт. Додаток дозволяє переглядати списки популярних фільмів, фільтрувати їх за жанром, шукати за назвою та переглядати детальну інформацію по кожному фільму.

NEXT_PUBLIC_API_BASE_TMDB_KEY=0ebe859b205b8657fbc7a49befd7e067
NEXT_PUBLIC_API_BASE_TMDB_URL=https://api.themoviedb.org/3

## 🚀 Основний функціонал

* **Перегляд популярних фільмів:** Головна сторінка відображає список найпопулярніших фільмів на даний момент.
* **Фільтрація за жанром:** Навігаційне меню дозволяє обрати жанр і переглянути список відповідних фільмів.
* **Детальна інформація:** Клік на картку фільму переводить на окрему сторінку з повним описом, рейтингом та постером.
* **Пошук:** Інтерактивний пошук по назві фільму з оновленням URL.
* **Пагінація:** Можливість переглядати різні сторінки списків фільмів.

## 🛠️ Використані технології та концепції

Цей проєкт побудований з акцентом на сучасні практики розробки з **Next.js App Router**.

### Основний стек:
* **Next.js 13+** (App Router)
* **React 18**
* **TypeScript**

### Ключові концепції Next.js:
* **Серверні Компоненти (Server Components):** Більшість компонентів та всі сторінки рендеряться на сервері для максимальної продуктивності та SEO.
* **Клієнтські Компоненти (Client Components):** Використовуються лише для інтерактивних елементів (`"use client";`), таких як пошук та зірковий рейтинг.
* **Інкрементальна статична регенерація (ISR):** Списки фільмів та сторінки деталей кешуються і періодично оновлюються у фоні (`revalidate`), забезпечуючи баланс між швидкістю та актуальністю даних.
* **Динамічна маршрутизація:** Для створення сторінок деталей (`/movie/[id]`).
* **Оптимізація:** Вбудована оптимізація зображень (`<Image>`), шрифтів (`next/font`) та навігації (`<Link>`).

### Робота з API:
* **The Movie Database (TMDB) API**
* Асинхронні запити за допомогою **`fetch`** на сервері.

### Стилізація:
* **CSS Модулі** та глобальні стилі