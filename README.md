# 11ty Presentations

## Overview

- Each slide is its own markdown file located in [`src/content/slides`](/src/content/slides) and named after its position in the presentation (e.g. the file `0.md` is the first slide).
- Each slide contains one piece of frontmatter that determines the layout of the slide. The `layoutTemplate` property takes an array of strings which are mapped to CSS classes.
- 11ty creates a collection containing all markdown files in `src/content/slides`.
- `src/index.njk` uses nunjucks templating to map each slide in the collection to a HTML `<article>`.

## Summary of `package.json` scripts

- `yarn dev` - Run the development server.
- `yarn build` - Generates the presentation inside the `dist` folder.

## Keyboard navigation in the presentation

- <kbd>&#8592;</kbd> - Previous slide.
- <kbd>&#8594;</kbd> or <kbd>space</kbd> - Next Slide

### Disabling space bar navigation

If the slide contains an interactive element that requries the use of the spacebar for functionality, the spacebar navigation can be disabled for that slide by adding `'no-spacebar'` to the layoutTemplate array in the slide's markdown file.

## Adding React components to slides

- All React logic is located in `src/react`.
- Each component has its own folder.
- `app.js` is used to render each component using `ReactDOM.render`.
- Markdown files that use React components will include:

  ```html
  <div class="react-container" id="counter"></div>
  ```

  Where the id is the name of the component.

## Slide Layouts

The currently supported layouts are:

- title-slide
- vertical-split
- header-and-content
- no-spacebar


