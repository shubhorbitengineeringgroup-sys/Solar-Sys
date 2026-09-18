# SOLARSYS LLP — Clean Energy Website

Official website for **SOLARSYS LLP** ([solarsysllp.com](https://solarsysllp.com/)), engineered with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. Fully mobile-responsive and configured for automated deployment to GitHub Pages with custom domain support.

---

## 🚀 Step-by-Step GitHub & GitHub Pages Deployment Guide

Since you do not currently have a GitHub repository created, follow these exact steps to launch the website live:

### 1. Create a New Repository on GitHub
1. Go to [GitHub.com](https://github.com/new) and log in.
2. Click **New repository**.
3. Name it (e.g., `solarsys-radiant-web` or `solarsys-website`).
4. Choose **Public** (required for free GitHub Pages).
5. Do **NOT** check "Initialize this repository with a README", `.gitignore`, or license (the codebase already has them).
6. Click **Create repository**.

### 2. Push Your Local Code to Your New GitHub Repository
In your terminal (inside this project folder), run:

```bash
# Rename current origin or set the new remote URL:
git remote set-url origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git

# Verify remote URL:
git remote -v

# Ensure you are on main branch:
git branch -M main

# Push your code:
git push -u origin main
```

*(If prompted, authenticate using your GitHub Personal Access Token or browser login).*

---

### 3. Enable GitHub Pages Deployment via GitHub Actions
Once the repository is pushed:
1. In your GitHub repository, navigate to **Settings** (top menu).
2. On the left sidebar, click **Pages**.
3. Under **Build and deployment** > **Source**, change from `Deploy from a branch` to:
   👉 **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` will automatically trigger and build the site on every push to `main`!
5. You can monitor the deployment under the **Actions** tab.

---

### 4. Custom Domain Setup (`solarsysllp.com`)

The build automatically generates `CNAME` containing `solarsysllp.com` in `public/CNAME`.

In your domain registrar (GoDaddy, Namecheap, Cloudflare, Hostinger, etc.), configure the following DNS records for **`solarsysllp.com`**:

#### A Records (Apex Domain `@`):
| Type | Host | Points To | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | 3600 (or Auto) |
| **A** | `@` | `185.199.109.153` | 3600 (or Auto) |
| **A** | `@` | `185.199.110.153` | 3600 (or Auto) |
| **A** | `@` | `185.199.111.153` | 3600 (or Auto) |

#### CNAME Record (`www` subdomain):
| Type | Host | Points To | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `<YOUR_GITHUB_USERNAME>.github.io` | 3600 (or Auto) |

#### Enforce HTTPS:
Once DNS propagates (typically 5 to 30 minutes), go to **Settings** > **Pages** in your GitHub repo and check **Enforce HTTPS**.

---

## 🛠️ Local Development & Testing

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:8080)
npm run dev

# Run unit tests
npm test

# Run ESLint check
npm run lint

# Build production bundle
npm run build
```

---

## 📱 Mobile Responsiveness Features
- **Adaptive Layouts**: Full viewport compatibility from small mobile devices (320px) up to ultra-wide 4K monitors.
- **Fluid Navigation**: Responsive header with hamburger toggle for mobile/tablet screens and smooth anchor scrolling offset for fixed navbar.
- **Touch-Friendly Controls**: Minimum 44px touch targets across buttons, links, and forms.
- **Form Usability**: Styled inputs configured with proper font sizes to prevent iOS Safari auto-zoom.
- **SPA Routing Fallback**: Automatic `404.html` generator ensures client-side routes (e.g. `/product/:id`) reload seamlessly on GitHub Pages.
