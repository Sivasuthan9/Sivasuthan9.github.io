# Sivasuthan9.github.io

Personal website of Sivasuthan Sukumar: https://sivasuthan9.github.io/

Plain HTML and CSS, no build step. GitHub Pages serves the `main` branch as it is.

## Files

```
Sivasuthan9.github.io/
├── index.html            home page: bio, news, research, projects, publications, experience, education
├── stylesheet.css        styles for all pages
├── downloads.js          reads the Hugging Face download counts when a page opens
├── images/               files the home page uses: profile photo, icon, project thumbnails
├── fovea/                Fovea-4B project page (sivasuthan9.github.io/fovea/)
│   ├── index.html
│   └── images/           figures used only on that page
├── .nojekyll             serve the files as they are, without Jekyll
└── README.md
```

Each project with a full page gets its own folder with an `index.html` and an `images/` folder, so its address is
`sivasuthan9.github.io/<project>/`. Put files such as a CV or posters in a `data/` folder.

## Updating

- **Photo:** add a square photo as `images/profile.jpg`. Until then the page shows initials (`images/profile.svg`).
- **News:** add a `<li>` at the top of the News list in `index.html`.
- **Project:** copy one `<tr>` block in the Projects table of `index.html`. For a full project page, copy the `fovea/` folder.
- **Publication:** copy one `<p class="pub">` block in the Publications section.
- **Downloads:** the counts update in the browser. Update the fallback numbers in the HTML from time to time.

## Preview

```sh
python3 -m http.server 8000    # then open http://localhost:8000
```

## Credit

Website template from Jathushan Rajasegaran ([brjathu.github.io](https://brjathu.github.io/)), whose source is from
Jon Barron ([jonbarron.info](https://jonbarron.info/)).
