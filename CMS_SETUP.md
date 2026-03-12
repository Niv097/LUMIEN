# Lumien CMS Setup Guide

This website is now connected to **Sanity CMS** - a headless content management system that lets you edit all website content without touching code.

## Quick Start

### 1. Get Sanity Credentials

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Create a new project (or use existing)
3. Note down:
   - **Project ID** (looks like: `abc12345`)
   - **Dataset** (usually: `production`)
   - **API Token** (create one with read permissions)

### 2. Add Environment Variables

Create/edit `.env.local` in the project root:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Access the CMS Studio

Once configured, visit: `http://localhost:3000/studio`

This opens the Sanity Studio where you can edit all content.

## What's Editable via CMS?

All pages now fetch content from Sanity:

- **Home Page** (`homePage` schema)
  - Hero badge, headline, paragraph
  - Stats, about section, feature cards
  - CTA section text and buttons

- **Solutions Page** (`solutionsPage` schema)
  - Page heading and subheading
  - Solution cards with icons

- **Platform Page** (`platformPage` schema)
  - Page heading and modules
  - Reliability features

- **Developers Page** (`developersPage` schema)
  - Domain label, headings
  - Feature cards and guides

- **Company Page** (`companyPage` schema)
  - Mission, stats, values
  - Team section content

- **Careers Page** (`careersPage` schema)
  - Job openings
  - Benefits section

- **Navbar** (`navbar` schema)
  - CTA button label
  - Dropdown menus
  - Simple navigation links

- **Footer** (`footer` schema)
  - Storytelling line
  - Footer columns and links
  - Copyright text

## Deployment

When deploying to production:

1. Add the same environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Deploy the website
3. Access the studio at `yourdomain.com/studio`

## Content Fallback

If Sanity CMS is not configured or returns no data, the website uses default content built into the code. This ensures the site always works even without CMS connection.

## Need Help?

- Sanity Docs: [sanity.io/docs](https://sanity.io/docs)
- Check the browser console for any CMS connection errors
- Verify environment variables are set correctly
