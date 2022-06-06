
# Changelog

## v2.0 (date)
This is our biggest update of Cloud since its release and we will cover here every change made. Please note that due to the nature of the starter kits it was impossible to do incremental updates so bear with us on this one.

### What's improved
- Every section is switched to a fieldset for easier maintenance. Now you can create new collections with only a few sections or easily add more.
- Removed the `flexgap` plugin and switched to grid.
- Added default value for the `picture` component and refactored the code.
- Switched toggles to revealer fieldtype in some cases to mitigate errors with the new versions of Statamic.

### What's new
- Modified price. We balanced the price of our starter kit to match the prices on the marketplace. We added 18 new sets and highly improved the code quality.
- Updated Dependencies
- 404 Page customizable from Globals
- Newsletter Section ( 4 sets )
- Stats Section ( 4 sets )
- FAQ Section ( 4 sets )
- Page Headers ( 3 variants )


## v1.8 (2022-03-17)

This release updates the frontend packages and ensures compatibility with the new version of Statamic v3.3

### What's improved
- Updated Dependencies


## v1.7 (2021-12-14)
This release updates to use Tailwind v3 and also updates some breaking changes, namely the flex-grow, flex-shrink classes and the config.

### What's improved
- Updated to Tailwind v3
- Updated Dependencies

### What's coming 
We are working on adding a 404 page, along with a config on the Theme settings so you can easily change the content.


## v1.6 (2021-12-03)

### What's new
- Updated Dependencies


## v1.5 (2021-10-26)
This is a small release focused on improving the DX for the blog section. The `title` field is now required and the `description` is optional, thus making it a bit more flexible.

### What's improved
- Blog section, fixes issue #10 


## v.1.4 (2021-10-25)
This release updates the minor versions of dependencies and fixed some issues with components.

### What's improved
- Updated `cta_5`
- Updated typo in `arrow_link`
- Updated typo in `lead` component, closes #9


## v.1.3 (2021-10-11)
This release adds a responsive image partial to improve the Google Lighthouse score. All images used in the starter kit now are converted to use the new partial. Thanks a lot to [Statamic Peak](https://github.com/studio1902/statamic-peak) for the responsive partial.

### What's improved
- Switched all `img` elements to use the new `picture` partial.

### What's new
- Added new `picture` partial to generate responsive images.


## v.1.2 (2021-10-08)
This release adds a new Pricing Section as suggested by this [idea](https://github.com/lucky-media/cloud/discussions/3) in the Discussions.

### What's improved
- Updated Dependencies

### What's new
- Pricing Section (3 Sets)

### What's coming
We are working on adding a responsive image partial, which will render all the images in webp and jpeg/png fallbacks. This will greatly improve the Lighthouse score.


## v.1.1 (2021-09-26)
We are sorry for the missed `v1.0` release but we are kicking it off with the `v1.1`.

### What's improved
- Updated dependencies
- A small fix on the layout file.

### What's new
- We no longer serve the custom font ( Mulish ) directly from Google Fonts. Thanks for the tip to @ahoiroman, we now use [FontSource](https://fontsource.org/) for self-hosting the fonts . We will also update the Readme file to reflect this recent change. 

### What's coming
- We are working on a Pricing section
