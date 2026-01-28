# Magic MCP Setup Guide

**Package:** `@21st-dev/magic`  
**Status:** ✅ Installed as dev dependency

## Configuration Steps

### 1. Open Cursor Settings
- Go to **Cursor Settings** → **Features** → **MCP**
- Click **"+ Add New MCP Server"**

### 2. Configure Magic Server
Fill in the following:

- **Name:** `Magic` (or any nickname you prefer)
- **Type:** `stdio`
- **Command:** `npx @21st-dev/magic`

**Alternative (if using local install):**
- **Command:** `node_modules/.bin/magic` (if you prefer using the local install)

### 3. Activate
- Click the **refresh** button to populate the tool list
- Magic should now appear in your available MCP servers
- You may need to restart Cursor for changes to take effect

## How to Use

Once configured, Magic will be available as a tool I can use when you:

1. **Ask for component generation:**
   - "Create a hero section component"
   - "Generate a feature card with TypeScript"

2. **Explicitly request Magic:**
   - "Use Magic to create a button component"
   - "Generate this with Magic"

3. **Describe components naturally:**
   - "I need a card component with an image, title, and description"

## What Magic Generates

Magic will generate:
- TypeScript React components
- Tailwind CSS styling
- Component library patterns (similar to shadcn/ui)
- Real-time preview capability

## Important Notes

- Magic is **on-demand** - it's not always running
- I'll use it automatically when relevant to component generation requests
- Generated code will need refinement to match your design system:
  - Color tokens (`bg-primary` not raw colors)
  - Component patterns (function keyword, named exports)
  - Your `.cursorrules` conventions

## Verification

After setup, test it by asking:
- "Create a simple card component using Magic"
- "Generate a hero section with TypeScript"

If Magic is properly configured, I'll be able to use it as a tool in our conversations.

---

**Last Updated:** 2025-01-XX  
**Package Version:** Check `package.json` for installed version
