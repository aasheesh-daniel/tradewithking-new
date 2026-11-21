# Trade With King - deploy on Cloudflare Pages (free , no sleep)

The website is fully static now (no server , no database). Quote requests go to the owner by email.

## 1. GitHub
Put this whole folder in ONE repo (twk-frontend , .github , .gitignore). Branch: main.
git add . ; git commit -m "message" ; git push   -> CI checks the build , Cloudflare redeploys.

## 2. Cloudflare Pages
Workers & Pages -> Create -> Pages -> Connect to Git -> choose the repo.
  Root directory : twk-frontend
  Build command  : npm run build
  Output dir     : dist
Save and Deploy. (Node 20 comes from twk-frontend/.node-version)
If you already made the D1 database and the DB binding earlier , they are not used anymore. You can delete them (optional).

## 3. Domain
Pages project -> Custom domains -> Set up a domain -> tradewithking.in and follow the DNS steps.

## Things the client can change later (all inside twk-frontend/src/data)
- content.js : program , price , benefits , FAQ , email , Discord / Telegram links , yellow moving line text , signature picture (signatureImage)
- legal.js   : Privacy Policy , Terms , Refund Policy , Risk Disclosure text and the effective date
- Real signature picture: put it in twk-frontend/public (example signature.png) and write "/signature.png" in signatureImage.

## Run on your laptop
cd twk-frontend , npm install , npm run dev
