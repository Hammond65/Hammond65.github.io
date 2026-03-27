# Hammond Lee — Personal Website

A GitHub Pages personal website with an Apple-inspired **liquid glass** design featuring blog posts, project showcases, and contact information.

**Live:** [https://hammond65.github.io](https://hammond65.github.io)

---

## Quick Start

1. Push this folder to a repository named `Hammond65.github.io` (or any repo with GitHub Pages enabled).
2. In the repo **Settings → Pages**, set Source to **Deploy from a branch** and select `main` / `root`.
3. The site will be live within a minute.

---

## File Structure

```
├── index.html          # Home page
├── blog.html           # Blog listing
├── projects.html       # Projects showcase
├── contact.html        # Contact form
├── admin.html          # Blog post generator tool
├── css/
│   ├── style.css       # Main styles (liquid glass theme)
│   └── animations.css  # Scroll reveals, hover effects
├── js/
│   ├── main.js         # Navigation, scroll effects, post loading
│   └── posts-data.js   # Blog post metadata array
└── posts/
    ├── ddpm.html
    ├── arcface.html
    ├── mimicmotion.html
    ├── lama.html
    ├── consisid.html
    └── text-diffusion.html
```

---

## How to Update the Website

### Edit Page Content
Open any `.html` file and modify the content inside the `<section>` tags. The liquid glass styling is applied automatically via CSS classes.

### Change Personal Info
- **Name & subtitle:** Edit the `.hero` section in `index.html`
- **About cards:** Edit the `.about-grid` section in `index.html`
- **Contact info:** Edit the `.contact-info` section in `contact.html`
- **Footer:** The footer appears in every HTML file

### Add or Edit a Project
Open `projects.html` and add a new card inside `.projects-grid`:

```html
<a href="https://your-link.com" target="_blank" class="glass-card project-card fade-in-up">
    <div class="project-icon">🔬</div>
    <h3>Project Name</h3>
    <p>Short description of the project.</p>
    <span class="project-link">View Project &rarr;</span>
</a>
```

---

## How to Add a New Blog Post

### Option A: Use the Blog Manager UI

1. Open `admin.html` in your browser (or visit `your-site/admin.html`).
2. Fill in the post title, tag, date, excerpt, and HTML content.
3. Click **Generate Blog Post**.
4. Copy the **posts-data.js entry** and add it to the top of the array in `js/posts-data.js`.
5. Copy the **HTML file content** and save it as `posts/your-post-id.html`.
6. Commit and push.

### Option B: Manual Steps

**Step 1 — Add metadata to `js/posts-data.js`:**

Open `js/posts-data.js` and add a new object at the **beginning** of the `blogPosts` array:

```javascript
const blogPosts = [
    {
        id: "my-new-post",
        title: "My New Blog Post Title",
        tag: "Research Topic",
        date: "2026-04-01",
        excerpt: "A brief description shown on the blog listing card.",
        file: "posts/my-new-post.html"
    },
    // ... existing posts
];
```

**Step 2 — Create the HTML file:**

Create `posts/my-new-post.html`. Copy an existing post file (e.g., `posts/lama.html`) as a template, then replace:
- The `<title>` tag
- The tag span text
- The `<h1>` title
- The date in `.blog-post-meta`
- Everything inside `.blog-post-content`

**Step 3 — Commit and push:**

```bash
git add posts/my-new-post.html js/posts-data.js
git commit -m "Add blog post: My New Blog Post Title"
git push
```

The post will automatically appear on the Blog page and in the Recent Posts section on the home page.

---

## Customization

### Colors
All colors are defined as CSS variables at the top of `css/style.css`:

```css
:root {
    --color-primary: #7dd3fc;    /* Sky blue — headings, links */
    --color-secondary: #c4b5fd;  /* Lavender — accents */
    --color-accent: #f0abfc;     /* Pink — highlights */
    --color-bg: #0f172a;         /* Dark navy background */
}
```

### Glass Effect
Adjust the glass morphism intensity:

```css
:root {
    --glass-bg: rgba(255, 255, 255, 0.08);   /* Panel opacity */
    --glass-blur: 20px;                        /* Blur amount */
    --glass-border: rgba(255, 255, 255, 0.15); /* Border opacity */
}
```

---

## Tech Stack

- Pure HTML / CSS / JavaScript (no build tools)
- Google Fonts (Inter)
- CSS `backdrop-filter` for glass morphism
- IntersectionObserver API for scroll animations
- Fully responsive (mobile & desktop)

---

## License

Personal use. Content and design by Hammond Lee.
