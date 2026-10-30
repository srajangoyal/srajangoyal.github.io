# Srajan Goyal — Academic Homepage

A minimalist static academic homepage, ready for GitHub Pages. It has no build step and no JavaScript framework. The downloadable source ZIP contains the deployable website files at its top level.

## Preview locally

Open `index.html` in a web browser, or serve the extracted directory with any static server. If you are working from the development project rather than the downloadable ZIP, the corresponding files are inside `dist/`.

## Publish to GitHub Pages

1. Create a public repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Unzip the download and copy its website files (`index.html`, `styles.css`, `script.js`, `.nojekyll`, and `assets/`) to the root of that repository (so `index.html` is at the root). If you are using the development project, copy the **contents** of `dist/` instead.
3. Commit and push the changes to `main`.
4. In repository **Settings → Pages**, select **Deploy from a branch**, `main`, `/ (root)`.
5. Visit `https://YOUR_GITHUB_USERNAME.github.io` after deployment completes.

No npm, Jekyll, Hugo, or bundler is required.
The empty `.nojekyll` file tells GitHub Pages to serve the files without Jekyll processing.

## Edit content

- `index.html`: biography, research, publications, background, contact links, metadata.
- `styles.css`: color palette, spacing, typography, responsive design.
- `script.js`: mobile navigation, expanding research cards, and the footer year.
- `assets/figures/`: research-method diagrams and the editable SVG traffic interaction in the opening section.
- `assets/videos/`: three original CARLA simulation videos, plus lightweight poster images.
- `assets/Srajan_Goyal_Academic_CV.pdf`: a public-facing version of the academic CV with its references section removed.

The page uses Google Fonts when available, with local system-font fallbacks. The opening figure is an editable vector schematic (`assets/figures/overtaking-interaction.svg`), not a simulation snapshot. It illustrates an ego intending to pass stationary car2 while policy-controlled car1 approaches in the adjacent lane. The dashed ego path denotes an intended manoeuvre, not a prescribed ADS trajectory or a reconstruction of one of the videos. The adjacent link leads to the actual CARLA recordings.

### Research section

The three main contributions have expandable explanations:

1. **VIVAS** — workflow, ordered temporal coverage, scenario generation, concretization and monitoring.
2. **Contract-based failure analysis** — LTL assume–guarantee contracts, OCRA/nuXmv design-time refinement checks, runtime monitoring and iterative failure analysis.
3. **PGTG** — probabilistic model checking, policy synthesis, abstract–concrete matching and online CARLA testing.

The simulation gallery is labelled **PGTG / ongoing research**: an ego executing lane changes and overtaking with two non-ego vehicles. The current research text addresses iterative refinement of the MDP and concretization from simulation feedback, and the analysis of hazardous states along policy executions. The three provided recordings are embedded as local MP4 files:

| Website heading | Source file | Weather / context |
| --- | --- | --- |
| Crash scenario: Front/Intermediate-lane | `P_FRONT_MID-eta0.9-ClearNoon-1.mp4` | Clear Noon |
| Crash scenario: Rear/Left-lane | `P_REAR_LANE0-eta0.5-HardRainTwilight-2.mp4` | Hard Rain, Twilight |
| Indirect hazard: collision with static car2 | `collision.mp4` | A policy controlling car1 brings the ego into a hazardous state, leading to a collision with stationary car2; scenario description confirmed by the owner |

The first two captions describe the collision target for policy synthesis, rather than displaying internal property identifiers. The gallery has no small header above each title and no separate eta or duration labels. Known weather is retained below each description; the weather for `collision.mp4` is not specified. Original video filenames are unchanged.

The tested ego agent is **TransFuser V6 (TFv6), from the LEAD project**. The gallery links to the [official LEAD project](https://ln2697.github.io/lead/) and the [paper-release / TFv6 code](https://github.com/kesai-labs/lead/tree/cvpr2026). The latter is used instead of assuming that the current main branch matches the tested TFv6 implementation.

The videos use HTML5 controls with `preload="metadata"`; browsers may still fetch more data according to their own policies. Each full-resolution file is preserved rather than recompressed. Total video size is approximately 32 MB. This is within the current GitHub repository and Pages limits, but can make a visit to all three videos bandwidth-intensive; Git LFS is **not** used, because its pointer files cannot be played directly by a static GitHub Pages site.

To replace a video, use the same path or update the `<source src>` in `index.html`; adjust the poster image and caption as needed. To update research diagrams, replace the relevant image in `assets/figures/` and check the captions and alt text. The `dist/` prefix applies to these paths when working from the development project.

## Before publishing: review checklist

- [ ] Confirm the name, affiliations, thesis title, and short bio.
- [ ] Verify the more technical research project summaries accurately reflect your intended emphasis.
- [ ] Check the publication entries and confirm that the SEFM 2026 author-PDF link remains publicly available.
- [x] Remove academic referees' contact details from the public PDF: the references section was redacted, including its underlying PDF text.
- [ ] Confirm the personal email address in the public CV is the address you want displayed.
- [x] Update `collision.mp4` using the owner's explanation of the car1-induced hazard and collision with static car2.
- [ ] Confirm that the five research figures are the ones you want to publish from the NEST talk.
- [ ] Optionally add a profile photograph and GitHub link. Scholar, ORCID and LinkedIn URLs are taken from the academic CV.
- [ ] Decide whether to retain the visiting researcher/background and earlier-publication details.
- [x] Remove the preview banner and presentation/preparation notes from the public page.
- [ ] Update search and social metadata if you change the site title or main research summary.

## Research and publication data used

The main personal details, chronology, research interests, earlier publications, social URLs, and CV PDF come from the finalized `Srajan_Goyal_TU_Wien_Academic_CV_rev11.pdf` prepared for the NEST application in September 2026. The research-interest paragraph matches the CV text.

- SEFM 2026 accepted paper: [conference's accepted-papers list](https://sefm-conference.github.io/2026/acceptedpapers/).
- Science of Computer Programming 2025: [DOI](https://doi.org/10.1016/j.scico.2024.103253).
- SEFM 2024: [DOI](https://doi.org/10.1007/978-3-031-77382-2_25).
- FMAS 2023: [DOI](https://doi.org/10.4204/EPTCS.395.8).
- ORCID: [Srajan Goyal](https://orcid.org/0009-0005-2189-7026).

The four highlighted publications are those most relevant to the current PhD. Six other works from the CV are in an expandable section. A 2026 author PDF link was transferred from the submitted CV but could not be independently fetched during this update.

The five methodology images were taken from the user's `NEST_Interview_20min_OrderedBackups.pdf` (slides 3, 6, 12, 17 and 19). Slides 12 and 19 are diagram-only crops: their old slide titles, footer and explanatory text are not displayed. The contract figure has the editable HTML title “Contract-based failure analysis.” The ongoing-research text draws on the mismatch-driven refinement discussion on slide 20 without reproducing its flow diagram. These provenance details are maintained here for the site owner, not presented as website copy. The opening traffic schematic was created specifically for the website. All three video files are supplied originals.
