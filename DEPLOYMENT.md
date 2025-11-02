# Firebase Hosting Deployment Guide

This project is configured to deploy to Firebase Hosting.

## Prerequisites

✅ Firebase CLI is installed  
✅ You are logged in to Firebase  
✅ Build process tested and working

## Initial Setup (First Time Only)

1. **Initialize Firebase Hosting:**
   ```bash
   firebase init hosting
   ```

2. **When prompted, follow these selections:**
   - **Select a Firebase project:** Choose an existing project or create a new one
     - You can select from: `devroadai` or `eduhabit-64507`, or create a new project
   - **What do you want to use as your public directory?** → Type: `dist` (this is already configured)
   - **Configure as a single-page app?** → Type: `Yes`
   - **Set up automatic builds and deploys with GitHub?** → Type: `No` (optional, you can set this up later)
   - **File dist/index.html already exists. Overwrite?** → Type: `No`

3. **The `.firebaserc` file will be created automatically** with your project configuration.

## Deployment Steps

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase Hosting:**
   ```bash
   firebase deploy --only hosting
   ```

3. **Your site will be live at:** `https://[your-project-id].web.app` and `https://[your-project-id].firebaseapp.com`

## Quick Deploy Script

You can also add this to your `package.json` scripts section:
```json
"deploy": "npm run build && firebase deploy --only hosting"
```

Then deploy with:
```bash
npm run deploy
```

## Files Created

- `firebase.json` - Firebase configuration (already created)
- `.firebaserc` - Your Firebase project selection (created during init)
- `.gitignore` - Excludes build artifacts and Firebase config

## Troubleshooting

- If you get build errors, make sure all dependencies are installed: `npm install`
- If Firebase deploy fails, make sure you're logged in: `firebase login`
- To see your deployment history: `firebase hosting:channel:list`

