# Workspace Rules: Mandatory Skill Execution Policies

Before starting any implementation, the agent **MUST** load and follow the corresponding local/global skills. Do **NOT** implement these tasks using raw memory, stock templates, or default parameters. 100% strict adherence is required.

Additionally, in the final response summary after completing any task, the agent **MUST** include a dedicated "**🛠️ Applied Skills & Rules**" section listing exactly which skills were loaded and followed during the task execution.

## ⚠️ Mandatory Context Gathering & Planning Rules
1. **Clarify Before Action**: Before writing any code or generating an implementation plan, the agent **MUST** restate its understanding of the task, highlight any potential ambiguities, and wait for the user to confirm the context.
2. **Comprehensive Roadmaps**: Every `implementation_plan.md` **MUST** include a detailed, line-item checklist of all specific files, imports, assets, and validation tests needed to reach the goal. Placeholder tasks, shorthand descriptions, or skipping files is strictly forbidden.

## 🎯 Task-to-Skill Mapping Policies

### 1. UI & Visual Polish Tasks
*   **Trigger**: Any task modifying CSS styles, component aesthetics, card styles, or spacing.
*   **Mandatory Skills**: `ui-ux-pro-max`, `ui-polish`, `frontend-design`.
*   **Policy**: You must run the visual polish pass checking contrast values (>4.5:1), grid alignment (8px grid), and visual depth checks.

### 2. Tailwind & CSS Tokens
*   **Trigger**: Custom themes, Tailwind configuration files, or layout class edits.
*   **Mandatory Skills**: `tailwind-design-system`, `ckm-ui-styling`.
*   **Policy**: You must align classes with Tailwind best practices, avoiding arbitrary values in favor of defined theme variables.

### 3. Animations & Easing transitions
*   **Trigger**: Entrance animations, menu collapses, or route transitions.
*   **Mandatory Skills**: `framer-motion`, `vercel-react-view-transitions`.
*   **Policy**: Enforce premium cubic-bezier easing curves (`cubic-bezier(0.16, 1, 0.3, 1)`) and limit motion to translation offsets under 1%.

### 4. Next.js Routing & Page Scaffolding
*   **Trigger**: Adding routes, pages, or layout files in React/Next.js.
*   **Mandatory Skills**: `nextjs-app-router-patterns`, `next-best-practices`, `new-page`.
*   **Policy**: Follow strict RSC boundaries, handle loading/error fallback boundaries, and define clean SEO tags.

### 5. Supabase & Database Schema
*   **Trigger**: Generating migrations, modifying tables, or changing queries.
*   **Mandatory Skills**: `supabase`, `supabase-automation`, `supabase-postgres-best-practices`.
*   **Policy**: Enforce Row Level Security (RLS) policies on every table and audit query paths to ensure high indexing performance.

### 6. Authentication & Sessions
*   **Trigger**: Login redirects, user tokens, or session checking.
*   **Mandatory Skills**: `nextjs-supabase-auth`.
*   **Policy**: Standardize SSR auth state checking and secure cookie verification.

### 7. Deployment & Performance Checks
*   **Trigger**: Production compilation, vercel configuration, or caching.
*   **Mandatory Skills**: `vercel-optimize`, `deploy-check`, `deploy-to-vercel`.
*   **Policy**: Audit bundle sizes, optimize image loading, and verify routing files (`vercel.json`) before deploying.

### 8. Testing & Auditing
*   **Trigger**: End-to-end tests or site audits.
*   **Mandatory Skills**: `e2e-testing-patterns`, `test-driven-development`, `seo-audit`, `web-design-guidelines`.
*   **Policy**: Build stable mock setups and audit accessibility landmarks before releasing.

### 9. GSAP & Scroll-Driven Animations
*   **Trigger**: Sequential, timeline, hover-based, or scroll-triggered animations.
*   **Mandatory Skills**: `gsap-core`, `gsap-scrolltrigger`, `gsap-react`, `gsap-timeline`, `gsap-utils`.
*   **Policy**: Clean up timelines on React unmounts using `useGSAP` or gsap context to prevent memory leaks, and use transforms instead of layout triggers.

### 10. 3D Elements & WebGL Canvas (R3F)
*   **Trigger**: Canvas setups, loading glTF/3D models, lights, postprocessing, or custom GLSL shaders.
*   **Mandatory Skills**: `three-js`, `r3f-fundamentals`, `r3f-animation`, `r3f-physics`, `r3f-loaders`, `r3f-shaders`.
*   **Policy**: Enforce proper texture disposal, keep geometry vertex count minimized, and secure Rapier physics state coordination.

### 11. React Video Compositions (Remotion)
*   **Trigger**: Video generation, compositions, subtitle track alignments, or custom canvas drawings.
*   **Mandatory Skills**: `remotion-best-practices`.
*   **Policy**: Maintain frame-rate constraints and synchronize subtitle tracks to prevent audio desync during server-side compilation.

## 🔒 Mandatory Workspace Rules (Bypass & Git Commits)

### 12. Git Commits and Pushes
*   **Trigger**: Staging, committing, or pushing code modifications in git.
*   **Policy**: The agent **MUST NOT** run `git commit` for minor modifications or Tier 1 tasks involving less than 5 files. These changes must remain in the working tree as local uncommitted modifications. The agent **CAN** stage and commit changed files locally **ONLY** when a task modifies 5 or more files. When committing, the agent **MUST** ensure that `.gitignore` is properly updated to ignore temporary files (like resumes, planning folders, or graphs). However, the agent **MUST NOT** run `git push` under any circumstances. The user will run the `git push` command manually through the terminal.

