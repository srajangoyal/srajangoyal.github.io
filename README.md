# Srajan Goyal — Academic Homepage

A minimalist static academic homepage, ready for GitHub Pages. It has no build step and no JavaScript framework. The downloadable source ZIP contains the deployable website files at its top level.

## Preview locally

Open `index.html` in a web browser, or serve the extracted directory with any static server. If you are working from the development project rather than the downloadable ZIP, the corresponding files are inside `dist/`.

## Publish to GitHub Pages

1. Use the public repository `srajangoyal/srajangoyal.github.io`.
2. Unzip the download and copy its website files (`index.html`, `styles.css`, `script.js`, `.nojekyll`, and `assets/`) to the root of that repository (so `index.html` is at the root). If you are using the development project, copy the **contents** of `dist/` instead.
3. Commit and push the changes to `main`.
4. In repository **Settings → Pages**, select **Deploy from a branch**, `main`, `/ (root)`.
5. Visit `https://srajangoyal.github.io/` after deployment completes.

No npm, Jekyll, Hugo, or bundler is required.
The empty `.nojekyll` file tells GitHub Pages to serve the files without Jekyll processing.

### Update an existing deployment

For the v8 update, the smaller `academic-homepage-update-v8.zip` contains the updated HTML, current stylesheet, revised public CV, README and `.nojekyll`. It includes the preceding v6 and v7 changes, so it works whether or not those updates have already been uploaded. Extract it, then drag its **contents** (not the enclosing folder or ZIP) into **Add file → Upload files** at the repository root, and commit them together. GitHub replaces same-path files while leaving the videos and other existing assets untouched. The complete website is in `academic-homepage-github-pages-v8.zip`.

Keep an existing `CNAME` file when using a custom domain. After committing, wait for the corresponding **pages build and deployment** run to succeed before checking the live site. A commit is not the same as a completed deployment. If needed, hard-refresh the browser with Ctrl+Shift+R.

The stylesheet and CV links use the query suffix `?v=8` so a browser requests the current assets after the new HTML has deployed. The underlying filenames remain unchanged.

## Edit content

- `index.html`: biography, research, publications, background, contact links, metadata.
- `styles.css`: color palette, spacing, typography, responsive design.
- `script.js`: mobile navigation, expanding research cards, and the footer year.
- `assets/figures/`: research-method diagrams and the editable SVG traffic interaction in the opening section.
- `assets/videos/`: three original CARLA simulation videos, plus lightweight poster images.
- `assets/Srajan_Goyal_Academic_CV.pdf`: public academic CV, with Education followed by Research and Engineering Experience, then Publications. The references section is omitted.

The page uses Google Fonts when available, with local system-font fallbacks. The opening figure is an editable vector schematic (`assets/figures/overtaking-interaction.svg`), not a simulation snapshot. It illustrates an ego intending to pass stationary car2 while policy-controlled car1 approaches in the adjacent lane. The dashed ego path denotes an intended manoeuvre, not a prescribed ADS trajectory or a reconstruction of one of the videos. The adjacent link leads to the actual CARLA recordings.

The introduction names Dr. Stefano Tonetta as supervisor. The institutional address `sgoyal@fbk.eu` is visible in the header, introduction and contact section, with working email links. The scenario link is a larger, high-contrast button.

The Research Perspective statement is shortened from the paragraph supplied by the owner: “Autonomy is not just about making machines more capable. It is about making our confidence in them more deserved—through evidence and accountability.” It is presented as a research perspective without attribution to a historical figure. It expresses a research motivation, not a claim of unconditional safety guarantees.

### Research section

Research interests use four topic-led bullet points, combining personal beliefs (“I believe”), methods developed (“I develop”), and open research directions (“I am interested in” and “I investigate”). The topics are formal verification, adaptive scenario generation, runtime failure analysis, and probabilistic model refinement. The linked [Sagar Malhotra homepage](https://countinglogic.github.io/) informed the topic-plus-explanation style, not the research claims.

Adaptive testing is described as an existing contribution: “I have developed adaptive testing methods that respond to the ADS during execution.” The experience heading is “Research and Engineering Experience” throughout the current website and public CV.

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
- [x] Remove academic referees' contact details from the public CV, including unused referee-email hyperlink relationships.
- [x] Display `sgoyal@fbk.eu` on the homepage and in the CV, as requested by the owner. The CV also retains the original personal email.
- [x] Update `collision.mp4` using the owner's explanation of the car1-induced hazard and collision with static car2.
- [ ] Confirm that the five research figures are the ones you want to publish from the NEST talk.
- [ ] Optionally add a profile photograph and GitHub link. Scholar, ORCID and LinkedIn URLs are taken from the academic CV.
- [ ] Decide whether to retain the visiting PhD/background and additional-publication details.
- [x] Remove the preview banner and presentation/preparation notes from the public page.
- [ ] Update search and social metadata if you change the site title or main research summary.

## Research and publication data used

The main personal details, chronology, additional publications and social URLs come from the finalized `Srajan_Goyal_TU_Wien_Academic_CV_rev11.pdf` and corresponding DOCX prepared for the NEST application in September 2026. The webpage research-interest bullets expand the owner's established research description. The public CV was updated from the DOCX to move experience before publications, retain the five-page academic layout, correct the approved role titles, and add the institutional email; publication entries were preserved unchanged. The experience heading was subsequently simplified to “Research and Engineering Experience.” The original application files were not modified.

- SEFM 2026 accepted paper: [conference's accepted-papers list](https://sefm-conference.github.io/2026/acceptedpapers/).
- Science of Computer Programming 2025: [DOI](https://doi.org/10.1016/j.scico.2024.103253).
- SEFM 2024: [DOI](https://doi.org/10.1007/978-3-031-77382-2_25).
- FMAS 2023: [DOI](https://doi.org/10.4204/EPTCS.395.8).
- ORCID: [Srajan Goyal](https://orcid.org/0009-0005-2189-7026).

The four highlighted publications are those most relevant to the current PhD. Six other works from the CV are in an expandable section. A 2026 author PDF link was transferred from the submitted CV but could not be independently fetched during this update.

The five methodology images were taken from the user's `NEST_Interview_20min_OrderedBackups.pdf` (slides 3, 6, 12, 17 and 19). Slides 12 and 19 are diagram-only crops: their old slide titles, footer and explanatory text are not displayed. The contract figure has the editable HTML title “Contract-based failure analysis.” The ongoing-research text draws on the mismatch-driven refinement discussion on slide 20 without reproducing its flow diagram. These provenance details are maintained here for the site owner, not presented as website copy. The opening traffic schematic was created specifically for the website. All three video files are supplied originals.
