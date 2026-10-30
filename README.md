# Sivasuthan9.github.io

Personal website of Sivasuthan Sukumar: https://sivasuthan9.github.io/

Plain HTML and CSS, no build step. GitHub Pages serves the `main` branch as it is.

## Files

| Path | Content |
|---|---|
| `index.html` | Home page: bio, news, research, projects, publications, experience, education |
| `fovea.html` | Fovea-4B project page |
| `stylesheet.css` | Styles for both pages |
| `downloads.js` | Reads the Hugging Face download counts when a page opens; the numbers written in the HTML are the fallback |
| `images/` | Profile picture, project thumbnails and figures |

## Updating

- **Photo:** add a square photo as `images/profile.jpg`. Until then the page shows initials (`images/profile.svg`).
- **News:** add a `<li>` at the top of the News list in `index.html`.
- **Project:** copy one `<tr>` block in the Projects table of `index.html`. For a full project page, copy `fovea.html`.
- **Publication:** copy one `<p class="pub">` block in the Publications section.
- **Downloads:** the counts update in the browser. Update the fallback numbers in the HTML from time to time.

## Preview

```sh
python3 -m http.server 8000    # then open http://localhost:8000
```

## Credit

Website template from Jathushan Rajasegaran ([brjathu.github.io](https://brjathu.github.io/)), whose source is from
Jon Barron ([jonbarron.info](https://jonbarron.info/)).
