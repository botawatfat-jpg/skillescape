# Why This Empty Folder Exists

This empty `pages` folder is required to prevent Next.js from treating `src/pages` as a Pages Router directory when using the App Router.

**DO NOT DELETE THIS FOLDER.**

## Context

When using Next.js App Router with Feature-Sliced Design (FSD):
- The `app/` folder in the project root is the Next.js App Router
- The `src/pages/` folder is part of the FSD architecture (not Next.js Pages Router)
- This empty `pages/` folder prevents conflicts between the two

For more information, see `CONTEXT.md` in the project root.

