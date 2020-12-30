# Docusaurus Plugin: Navigation Level 3

The navigation-level-3 plugin enables a third level of navigation in Docusaurus (on top of 
the built-in support for two levels). It achieves this by injecting a JQuery script into all 
pages of the website which mutates the navigation bar (on desktop) and the side bar menu (on 
mobile) to display a third level of navigation links. The required styles are also 
automatically injected.

Level 3 navigation items are defined in the `docusaurus.config.js` file in a similar fashion
to level 1 and level 2 items. However, please see the documentation and example below which
explains the differences.

## Installation

To install the plugin, simply import this file in the `docusaurus.config.js` file as follows 
(changing the path if necessary):

```javascript
module.exports = {
  // ...
  plugins: [
    require.resolve('./plugins/navigation-level-3')
  ],
  // ...
};
```

## Compatibility

### Supported Version
- **@docusaurus/core**: 2.0.0-alpha.70
- **@docusaurus/preset-classic**: 2.0.0-alpha.70

This plugin was written for, and verified to work with, the above-mentioned version of Docusaurus. 
Compatibility with future releases of Docusaurus is not guaranteed due to the nature of the
implementation. 

If updating Docusaurus causes this plugin to break, it is most likely because of changes to
either the HTML structure of Docusaurus's navigation elements or their associated CSS classes
and styles. The plugin's mutation process depends on a specific set of JQuery selectors 
which must be updated accordingly if they are changed. Most of these selectors have been
declared as constants at the top of the injected script.

One other potential breaking change worth investigating, if the above does not resolve 
compatibility issues, is that level 3 sub-items declared in the `docusaurus.config.js` file
are not being published as a String to the `items` attribute of the level 2 links in the
generated HTML. The plugin's mutation process depends on accessing sub-items from this
attribute. If this is the issue you are facing, a pretty hefty rewrite of the plugin will
be needed which accessing sub-items directly from the `siteConfig` variable before script
injection (i.e. it will have to be handled in the plugin and outside of the injected JQuery
script).

## Usage

To use the plugin, add your level 1 and 2 navigation items as usual in the `docusaurus.config.js` 
file. For level 3 navigation items, add an `items` array to your level 2 parent item consisting 
of pairs of strings representing each item's title and link respectively. After this array, 
remember to add `.join("|")` to concatenate this array into a single string.

**Note**: It is optional for level 1 and 2 navigation items to have a link (i.e. `to` attribute) 
but it is required for level 3 items. In other words, your level 3 items must represent actual 
pages that can be navigated to, whereas level 1 and 2 items can either represent actual pages or 
just categories (for sub-items) which are only visible in the navigation bar. However, if a 
level 1 or 2 item has no sub-items (e.g. 'Category 2' in the example below), then it must have a 
link (i.e. all leaf nodes must have links).

## Example

This example will define a 3 level navigation system with the following structure:

```
Example (Level 1)  <-- no link
├── Category 1 (Level 2)  <-- no link
│   └── Item 1A (Level 3)
│   └── Item 1B (Level 3)
│   └── Item 1C (Level 3)
├── Category 2 (Level 2)  <-- link
└── Category 3 (Level 2)  <-- link
    └── Item 3A (Level 3)
    └── Item 3B (Level 3)
```

The code for this structure would be in the `docusaurus.config.js` file as follows:

```javascript
module.exports = {
  // ...
  themeConfig: {
    navbar: {
      // ...
      items: [
        {
          activeBasePath: 'example',
          label: 'Example (Level 1)',
          position: 'left',
          items: [
            {
              activeBasePath: 'example/category1',
              label: 'Category 1 (Level 2)',
              items: [
                'Item 1A (Level 3)', '/example/category1/item1a',
                'Item 1B (Level 3)', '/example/category1/item1b',
                'Item 1C (Level 3)', '/example/category1/item1c'
              ].join("|")
            },
            {
              to: 'example/category2/',
              activeBasePath: 'example/category2',
              label: 'Category 2 (Level 2)',
            },
            {
              to: 'example/category3/',
              activeBasePath: 'example/category3',
              label: 'Category 3 (Level 2)',
              items: [
                'Item 3A (Level 3)', '/example/category3/item3a',
                'Item 3B (Level 3)', '/example/category3/item3a'
              ].join("|")
            }
          ]
        },
      ],
    },
    // ...
  },
  // ...
};
```