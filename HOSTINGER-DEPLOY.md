# Upload AYAM to Hostinger

This ZIP contains the complete Next.js website source, local images and fonts,
and the contact number +966 55 450 0138. Hostinger installs dependencies and builds
the website during deployment.

## Upload

1. In Hostinger hPanel, open Websites > Add Website > Deploy Web App.
2. Select Upload your website files and upload `ayaam-hostinger.zip`.
3. Confirm these settings where requested:

   | Setting | Value |
   | --- | --- |
   | Framework | Next.js |
   | Node.js | 24.x |
   | Project root | ZIP root (where package.json is located) |
   | Install command | npm ci |
   | Build command | npm run build |
   | Start command | npm start |
   | Build output | .next |

4. If setting environment variables, use the values below. The phone, email and
   domain already have these defaults in the source:

   ```text
   NEXT_PUBLIC_DISPATCH_PHONE=966554500138
   NEXT_PUBLIC_CONTACT_EMAIL=info@ayam-alazdihar.com
   NEXT_PUBLIC_SITE_URL=https://ayam-alazdihar.com
   ```

   If deploying on a different permanent domain, change NEXT_PUBLIC_SITE_URL
   before the build. Add actual TGA license, CR and VAT numbers only if available;
   their example values are intentionally blank.

5. Click Deploy and connect your domain using Hostinger's domain settings.
6. Check the homepage, language switch, fleet, contact page and booking preview.
   Check that telephone links use +966554500138 and WhatsApp links use
   https://wa.me/966554500138.

This application needs Node.js hosting; uploading it through the ordinary
public_html File Manager does not run the application. Language preferences use
server cookies and a server action. Hostinger currently supports managed Node.js
deployment on Business and Cloud plans. A VPS can also run it with manual setup.

The ZIP omits node_modules, local build caches, private .env files, and screenshots.
It includes .env.example as a reference; no database is required.

Official upload instructions:
https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/
