# Deployment Guide

This guide will help you deploy your React portfolio to Vercel.

## Issues Fixed

The following issues that commonly cause blank pages have been resolved:

1. **Content Security Policy (CSP)** - Completely removed to prevent resource blocking
2. **Security Measures** - All security features disabled to prevent interference
3. **Routing Configuration** - Added proper routing for single-page applications
4. **Build Configuration** - Simplified build process for reliable deployment

## Deploy to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   npm run deploy:vercel
   ```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect it's a Vite project and deploy

## Troubleshooting

### If you still see a blank page:

1. **Check Browser Console** - Look for JavaScript errors
2. **Check Network Tab** - Ensure all resources are loading
3. **Verify Build Output** - Make sure the build completed successfully
4. **Check Routing** - Ensure the routing configuration is correct

### Common Issues:

1. **Missing Assets** - Ensure all assets are in the `public` folder
2. **Routing Issues** - Vercel handles SPA routing automatically
3. **Build Errors** - Check that all dependencies are installed correctly

### For Vercel:

- Check the Vercel deployment logs
- Ensure `vercel.json` is in the root directory
- Verify the build command is correct

## Environment Variables

If you need to add environment variables:

### Vercel:

- Add them in the Vercel dashboard under Project Settings > Environment Variables

## Performance Optimization

The build is already optimized with:

- Code splitting
- Minification
- Tree shaking
- Asset optimization

## Security Note

**All security measures have been disabled for deployment compatibility.** This includes:

- Content Security Policy (CSP)
- Developer tools detection
- Right-click blocking
- Console output blocking

The application will work normally but without the security features. You can re-enable them later if needed by modifying the security files.
