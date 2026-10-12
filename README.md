# Assad Hamid / ePortfolio

AcademicPages-style static portfolio, based on the supplied CV and using its portrait. The design follows https://shilezhang.github.io/ using the AcademicPages / Minimal Mistakes theme. Theme license is retained in dist/LICENSE. No Zhang-specific biography, publications, images, tracking, or demo posts are included.

## Edit
Update build.py and run `python3 build.py` . For standalone editing, edit the HTML inside dist and assets/custom.css directly; no build is needed. The source-assets folder retains the CV, portrait, reference CSS, and license needed to rebuild.

## GitHub Pages
The separate delivery ZIP contains the publish-ready contents of dist at its root, plus these instructions.
1. Sign in to github.com/assad-hamid and create a public repository named **assad-hamid.github.io**.
2. Extract the delivery ZIP. Upload its contents (not the enclosing folder) to the repository root and commit to main. Include the assets, cv, publications, portfolio, year-archive, and sitemap folders.
3. Open repository Settings → Pages. Under Build and deployment choose Deploy from a branch, select main and / (root), then Save.
4. After GitHub finishes deploying, visit https://assad-hamid.github.io/.

## Content
Pages: home, CV, publications, portfolio, three project details, blog archive, sitemap, and 404. All links are relative for portability. Email, GitHub, and CV download links work without a backend. Mobile Follow button reveals contact links. Publications and blog pages are intentionally empty until real entries are provided.

## Verification
Checked internal HTML links and local asset targets, page titles, CV byte equality, and absence of reference-person content. Browser visual QA was unavailable in the build environment.
