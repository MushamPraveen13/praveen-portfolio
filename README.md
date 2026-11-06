# Praveen Kumar Musham — AI & Data Science Portfolio

A responsive React + Vite portfolio built around the supplied resume, real profile photo, Methodist College photographs, and original certificates.

## Run in Replit
1. Create a new **React / Vite** Replit project (or import this folder).
2. Upload/extract the contents of this project into the Replit workspace.
3. Open the Shell and run: `npm install`
4. Run: `npm run dev`
5. For a production build: `npm run build`

## Publish free with GitHub Pages
1. Create a new **public** GitHub repository, for example `praveen-portfolio`.
2. Upload the contents of this project folder to the repository root (not the containing folder).
3. Commit the files to the `main` branch.
4. Open the repository **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **GitHub Actions**.
6. The included `.github/workflows/deploy.yml` will install dependencies, build the site, and publish it automatically after a push to `main`.
7. When the workflow finishes, GitHub will show your live website URL in **Settings → Pages**.

The Vite config uses relative asset paths so the site works at a GitHub Pages project URL. You can also run it locally with `npm install` and `npm run dev`, or create a production build with `npm run build`.

## Included assets
- `public/assets/images/profile-photo.png` — supplied profile photo.
- `public/assets/images/methodist-college-building.jpg` and `methodist-campus-view.png` — supplied college photographs.
- `public/assets/images/innomatics-ml-workshop-certificate.jpg` — supplied Innomatics workshop certificate.
- `public/assets/certificates/` — original supplied PDF certificates.

The certificate gallery displays 11 PDF certificate documents and one workshop certificate image. The duplicate Deloitte PDF is kept in the assets folder but only one card is displayed.

## Resume
Open `/resume.html` from the deployed website. Use **Print / Save as PDF** in the browser to create a PDF copy. The portfolio does not pretend that a separate uploaded resume PDF was supplied.

## Contact form
The contact form uses a `mailto:` action and opens the visitor's email application with a prepared message. It does not store messages or submit them to a server. For server-side submissions, connect a trusted form backend and keep API keys in environment variables.

## Personal information and accuracy
Content is based on the supplied resume and certificate files. No skill proficiency percentages, project performance metrics, awards, or unprovided achievements are invented. Internship and workshop records are labelled according to their source documents.

## Important before publishing
- Review all personal details and dates.
- The Zoho CRM internship dates and responsibilities follow the resume supplied.
- Add any additional certificates only if you have the original files.
- The Methodist College logo was not supplied, so the design uses a PM monogram instead of an invented logo.
