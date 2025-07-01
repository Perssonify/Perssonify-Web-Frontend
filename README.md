# Perssonify Next.js

## Project Overview
This is the Perssonify website built with Next.js 15, using the App Router, TypeScript, Tailwind CSS, and modern best practices.

## Key Features
- Global Header and Footer on every page
- Dark mode toggle (client-side, persists across navigation)
- Modular, scalable component structure
- Optimized images and accessibility best practices

## Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```
2. **Run the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```
3. **Build for production:**
   ```sh
   pnpm build
   # or
   npm run build
   ```

## Troubleshooting Internal Server Errors

If you see an **Internal Server Error** (500) or a blank page, check the following:

### 1. JSX Syntax Errors
- Make sure all JSX tags are properly opened and closed.
- Every opening tag (e.g. `<div>`) must have a matching closing tag (`</div>`).
- Fragments (`<>...</>`) must be closed.
- No stray or incomplete tags (e.g. `</section` instead of `</section>`).

### 2. Component Exports
- Every component file should have a default export, e.g. `export default Hero;` at the end.
- The export name should match the import name in other files.

### 3. File/Folder Naming
- File and folder names are **case-sensitive** on some systems and in Vercel deployments.
- Make sure your imports match the actual file names exactly.

### 4. Image Imports
- Images in the `public/` directory should be referenced as `/image.png` (not imported with `import ... from ...`).
- Example: `<Image src="/Logo-Teal.png" ... />`

### 5. Lint and Type Errors
- Run `pnpm lint` or `npm run lint` to check for errors.
- Fix all reported issues before deploying.

### 6. Check the Console/Logs
- Run `pnpm dev` and check your terminal for errors.
- Open the browser console (F12) for client-side errors.
- On Vercel, check the deployment logs for stack traces.

### 7. Next.js Documentation
- [Next.js Error Reference](https://nextjs.org/docs/messages)
- [App Router Docs](https://nextjs.org/docs/app)

## Common Fixes
- If you edit a component and get a 500 error, check for missing/extra tags or missing `export default`.
- If you see a module not found error for an image, use the public directory path.
- If you see a parsing error, check for stray `<` or `>` or misplaced JSX.

## Need More Help?
- Ask your team or check the Next.js Discord/Community.
- Revert to a previous working commit and re-apply changes step by step.
