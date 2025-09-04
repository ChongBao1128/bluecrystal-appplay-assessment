# Interview Assessment

This is a **Next.js** project for my interview assessment.  
It demonstrates the use cases with dynamic routes, remote image optimization, `getServerSideProps`, `getStaticProps`, `getStaticPaths` and mock API integration.

## Features

- Pages Router with TypeScript
- Dynamic blog posts (`/blogs/[slug]`) fetching mock data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Optimized remote images using `next/image`
- SSR & SSG support (`getServerSideProps`, `getStaticProps`, `getStaticPaths`)
- Mock authentication for `/dashboard` page
- Logout functionality with secure cookies
- Fully responsive layout

## Folder Structure

```
web/
├── src/
│ ├── pages/
│ │ ├── api/
│ │ │ ├── login.ts
│ │ │ └── logout.ts
│ │ ├── blogs/
│ │ │ └── [slug].tsx
│ │ ├── posts/
│ │ │ └── [id].tsx
│ │ ├── dashboard/
│ │ │ └── index.tsx
│ │ ├── users/
│ │ │ └── index.tsx
│ │ └── index.tsx
│ ├── lib/
│ │ └── auth.ts
│ ├── styles/
│ └── public/
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md

```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd web
````

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description                       |
| ------- | --------------------------------- |
| `dev`   | Runs the development server       |
| `build` | Builds the project for production |
| `start` | Starts the production server      |
| `lint`  | Runs ESLint                       |

---

## Remote Image Optimization

This project uses `next/image` to optimize external images.
Make sure your allowed domains are configured in `next.config.ts`:

```ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "picsum.photos", // example CDN
      pathname: "/**",
    },
  ],
}
```

* Only trusted public image URLs are used.
* Avoid exposing private or sensitive images.

---

## Mock Authentication

* Login page: `/login`
* Dashboard page: `/dashboard` (protected)
* Logout clears authentication cookies
* Uses mock credentials for demonstration purposes

> **Note:** This is for development/testing only. Do not use mock credentials in production.

---

## Security & Public Safety

* No secrets, API keys, or credentials are included.
* Only public mock APIs (`JSONPlaceholder`, `Picsum Photos`) are used.
* Safe to share publicly.

---

## License

This project is open source under the **MIT License**.

```

---

This README:  
- ✅ Uses only safe public URLs and APIs  
- ✅ Describes project features and folder structure clearly  
- ✅ Includes instructions for setup and running locally  
- ✅ Makes security explicit for a public repository  

---

If you want, I can also **add a small “Blog Preview” section with sample screenshots or links to live demos** while keeping it fully public-safe. This usually makes a README look more professional.  

Do you want me to do that?
```
