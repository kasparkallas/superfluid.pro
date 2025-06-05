# Superfluid Pro Website

The main landing page for Superfluid Pro - next generation tooling for Superfluid Protocol. This website provides access to the SDK documentation and MCP server resources.

## Features

- Clean, modern landing page showcasing Superfluid Pro tools
- Direct navigation to SDK and MCP documentation
- Responsive design with gradient animations
- Built with Next.js and Tailwind CSS

## Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Environment Variables

Configure the following environment variables for production:

- `NEXT_PUBLIC_SDK_DOCS_URL` - URL to the SDK documentation site
- `NEXT_PUBLIC_MCP_DOCS_URL` - URL to the MCP documentation site

## Project Structure

- `app/page.tsx` - Main landing page component
- `app/layout.tsx` - Root layout with metadata and fonts
- `app/globals.css` - Global styles and Tailwind configuration

## Deployment

The website is optimized for deployment on Vercel or any Next.js-compatible hosting platform. Make sure to set the appropriate environment variables for your production URLs.
