/**
 * The NavigationMutator plugin enables a third level of navigation in Docusaurus (on top of the built-in support for two levels).
 * 
 * INSTALLATION
 * ------------
 * To install the plugin, simply import this file in the docusaurus.config.js file as follows (changing the path if necessary):
 * 
 * module.exports = {
 *   ...
 *   plugins: [
 *     require.resolve('./plugins/navigation-level-3')
 *   ],
 *   ...
 * };
 * 
 * USAGE
 * -----
 * To use the plugin, add your level 1 and 2 navigation items as usual in the docusaurus.config.js file. For level 3 navigation
 * items, add an 'items' array to your level 2 parent item consisting of pairs of strings representing each item's title and
 * link respectively. After this array, remember to add '.join("|")' to concatenate this array into a single string.
 * 
 * Note: It is optional for level 1 and 2 navigation items to have a link (i.e. 'to' attribute) but it is required for level 3
 * items. In other words, your level 3 items must represent actual pages that can be navigated to, whereas level 1 and 2 items
 * can either represent actual pages or just categories (for sub-items) visible in the navigation bar. If a level 1 or 2 item
 * has no sub-items (e.g. 'Category 2' in the example below), then it must have a link (i.e. only leaf nodes must have links).
 * 
 * EXAMPLE
 * -------
 * This example will define a 3 level navigation system with the following structure:
 * 
 * Example (Level 1)  <-- no link
 * ├── Category 1 (Level 2)  <-- no link
 * │   └── Item 1A (Level 3)
 * │   └── Item 1B (Level 3)
 * │   └── Item 1C (Level 3)
 * ├── Category 2 (Level 2)  <-- link
 * └── Category 3 (Level 2)  <-- link
 *     └── Item 3A (Level 3)
 *     └── Item 3B (Level 3)
 * 
 * The code for this structure would be in the docusaurus.config.js file as follows:
 * 
 * module.exports = {
 *   ...
 *   themeConfig: {
 *     navbar: {
 *       ...
 *       items: [
 *         {
 *           activeBasePath: 'example',
 *           label: 'Example (Level 1)',
 *           position: 'left',
 *           items: [
 *             {
 *               activeBasePath: 'example/category1',
 *               label: 'Category 1 (Level 2)',
 *               items: [
 *                 'Item 1A (Level 3)', '/example/category1/item1a',
 *                 'Item 1B (Level 3)', '/example/category1/item1b',
 *                 'Item 1C (Level 3)', '/example/category1/item1c'
 *               ].join("|")
 *             },
 *             {
 *               to: 'example/category2/',
 *               activeBasePath: 'example/category2',
 *               label: 'Category 2 (Level 2)',
 *             },
 *             {
 *               to: 'example/category3/',
 *               activeBasePath: 'example/category3',
 *               label: 'Category 3 (Level 2)',
 *               items: [
 *                 'Item 3A (Level 3)', '/example/category3/item3a',
 *                 'Item 3B (Level 3)', '/example/category3/item3a'
 *               ].join("|")
 *             }
 *           ]
 *         },
 *       ],
 *     },
 *     ...
 *   },
 *   ...
 * };
 * 
 */

module.exports = function (context) {
  const { siteConfig } = context;  // Siteconfig is the content of docusaurus.config.js
  const { themeConfig } = siteConfig;

  return {
    name: 'docusaurus-plugin-navigation-level-3',
    injectHtmlTags: () => { // Adds additional HTML to every page
      return {
        headTags: [
          {
            tagName: 'style',
            attributes: {
              type: 'text/css',
            },
            innerHTML: `
            /* NAVBAR STYLES */
            /* display expand arrow to right of dropdown level 2 links that have level 3 sub-items */
            a.dropdown__link[items]::after{
              background: var(--ifm-menu-link-sublist-icon) 50% / 2rem 2rem;
              content: ' ';
              display: block;
              float: right;
              height: 1.0rem;
              width: 1.0rem;
              margin-top: 0.215rem;
              filter: var(--ifm-menu-link-sublist-icon-filter);
              transform: rotate(90deg);
            }
          
            /* position level 3 submenu to the right of level 2 parent link */
            ul.dropdown__submenu__list {
              left: 100%;
              top: auto;
              margin-top: -2.7rem;
              margin-left: -0.5rem;
              visibility: hidden !important; /* !important flag required to override displaying the level 3 submenu on level 1 hover */
              opacity: 0 !important;
              transform: scale(.8) !important;
            }
          
            /* display level 3 submenu of hover of level 2 parent link or the submenu itself */
            li.dropdown__submenu__parent:hover ul.dropdown__submenu__list, ul.dropdown__submenu__list:hover {
              opacity: 1 !important;
              transform: scale(1) !important;
              visibility: visible !important;
            }
      
            /* SIDEBAR STYLES */
            /* apply default styles to all active items not just those that are not(.menu__link--sublist) */
            .menu__link--active {
              background: var(--ifm-menu-color-background-active);
            }
            `,
          },
          {
            tagName: 'script',
            attributes: {
              src: 'https://code.jquery.com/jquery-3.5.1.min.js',
              integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
              crossorigin: 'anonymous'
            }
          },
          {
            tagName: 'script',
            innerHTML: `
            class NavigationMutator {

              constructor() {
            
                // NAVBAR CONSTANTS
                this.NAVBAR_SUBMENU_CLASS = "dropdown__menu dropdown__submenu__list";
                this.NAVBAR_LINK_CLASS = "dropdown__link";
                this.NAVBAR_LINK_ACTIVE_PATH_CLASS = "navbar__link--active"; // class for link representing parent of currently selected page (i.e. active base path)
                this.NAVBAR_LINK_CURRENT_PAGE_CLASS = "dropdown__link--active"; // class for link representing currently selected page (i.e. active page)
                this.NAVBAR_SELECTOR = "nav.navbar";
                this.NAVBAR_EXPANDABLE_LINK_SELECTOR = this.NAVBAR_SELECTOR + " a." + this.NAVBAR_LINK_CLASS + "[items]";
            
                // SIDEBAR CONSTANTS
                this.SIDEBAR_ITEM_HEIGHT = 36; // height in pixels of items in the sidebar (used to calculate height changes on expand/collapse of items)
                this.SIDEBAR_LIST_PADDING = 4; // padding in pixels on top and bottom of sublists in the sidebar (also used in height change calculations)
                this.SIDEBAR_SUBMENU_CLASS = "menu__list";
                this.SIDEBAR_LINK_CLASS = "menu__link";
                this.SIDEBAR_LINK_ACTIVE_PATH_CLASS = this.NAVBAR_LINK_ACTIVE_PATH_CLASS;
                this.SIDEBAR_LINK_CURRENT_PAGE_CLASS = "menu__link--active";
                this.SIDEBAR_LINK_COLLAPSED_CLASS = "menu__list-item--collapsed";
                this.SIDEBAR_SELECTOR = "div.navbar-sidebar";
                this.SIDEBAR_EXPANDABLE_LINK_SELECTOR = this.SIDEBAR_SELECTOR + " a." + this.SIDEBAR_LINK_CLASS + "[items]";
            
                // OTHER CONSTANTS
                this.MUTATED_FLAG = "data-mutated"; // attribute to apply to links once they are mutated (indicating that mutation does not need to be executed again)
              
                // ATTRIBUTES
                this.ready = false;
                this.count = 0;
            
              }
            
              // check if there is any level 3 navigation on this page (wait up 1 second) and, if there is, inject styles and execute mutator
              init() {
                if($(this.NAVBAR_EXPANDABLE_LINK_SELECTOR + ", " + this.SIDEBAR_EXPANDABLE_LINK_SELECTOR).length > 0) {
                  this.ready = true;
                } else if (this.count < 10) {
                  setTimeout(this.init.bind(this), 100);
                  this.count++;
                }
                if(this.ready){
                  this.wait();
                }
              }
            
              // wait until there are no mutated links (i.e. old page unload complete) and the navbar is present (i.e. new page load complete) to mutate the navigation system
              wait() {
                if (
                  this.ready &&
                  $(this.NAVBAR_SELECTOR).length > 0 &&
                  $(this.NAVBAR_EXPANDABLE_LINK_SELECTOR + "[" + this.MUTATED_FLAG + "], " + this.SIDEBAR_EXPANDABLE_LINK_SELECTOR + "[" + this.MUTATED_FLAG + "]").length == 0
                ) {
                  this.mutate();
                } else {
                  setTimeout(this.wait.bind(this), 100);
                }
              }
            
              // mutate both the navbar (desktop) and sidebar (mobile) to display level 3 navigation links
              mutate() {
            
                var mutator = this;
            
                // get the HTML for the level 3 list to be inserted into either the navbar or sidebar
                var getListL3HTML = function(type, linkL2, linkInfoL3) {
                  var isNavBar = (type == "navbar");
                  var html = "<ul class='" + (isNavBar ? mutator.NAVBAR_SUBMENU_CLASS : mutator.SIDEBAR_SUBMENU_CLASS) + "'>";
                  for(var i = 0; i < linkInfoL3.length; i += 2) {
                    var title = linkInfoL3[i];
                    var href = linkInfoL3[i+1];
                    var classes = (isNavBar ? mutator.NAVBAR_LINK_CLASS : mutator.SIDEBAR_LINK_CLASS);
                    if(window.location.href.match(new RegExp("(.)+" + href.replace("/", "\\/") + "(\/)?"))) {
                      classes += " " + (isNavBar ? mutator.NAVBAR_LINK_CURRENT_PAGE_CLASS : mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS);
                      linkL2.addClass(isNavBar ? mutator.NAVBAR_LINK_ACTIVE_PATH_CLASS : mutator.SIDEBAR_LINK_ACTIVE_PATH_CLASS);
                      linkL2.removeClass(isNavBar ? mutator.NAVBAR_LINK_CURRENT_PAGE_CLASS : mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS);
                      if(!isNavBar) {
                        var linkL1 = linkL2.closest("ul").prev("a");
                        linkL1.addClass(mutator.NAVBAR_LINK_ACTIVE_PATH_CLASS);
                      }
                    }
                    html += "<li " + (isNavBar ? "" : "class='menu__list-item'") + "><a class='" + classes + "' href='" + href + "'>" + title + "</a></li>";
                  }
                  html += "</ul>";
                  return html;
                }
            
                // get the number of items in a level 2 list and its sublists (level 3) that are currently visible
                var getListL2NumVisibleItems = function(listL2) {
                  if(listL2.parent().hasClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS)) {
                    return 0;
                  } else {
                    var itemsL3 = listL2.children("li");
                    var count = 0;
                    itemsL3.each(function() {
                      var itemL3 = $(this);
                      count++;
                      var listL3 = itemL3.children("ul");
                      if(!itemL3.hasClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS) && listL3.length == 1) {
                        count += getListL2NumVisibleItems(listL3);
                      }
                    });
                    return count;
                  }
                }
            
                // NAVBAR MUTATION (DESKTOP)
                $(mutator.NAVBAR_EXPANDABLE_LINK_SELECTOR + ":not([" + mutator.MUTATED_FLAG + "])").each(function() {
            
                  var itemL2 = $(this).parent();
                  var linkL2 = $(this);
                  var linkInfoL3 = $(this).attr("items").split("|");
            
                  itemL2.append(getListL3HTML("navbar", linkL2, linkInfoL3));
                  itemL2.addClass("dropdown__submenu__parent");
            
                  linkL2.attr(mutator.MUTATED_FLAG, true);
            
                });
            
                // SIDEBAR MUTATION (MOBILE)
                $(mutator.SIDEBAR_EXPANDABLE_LINK_SELECTOR + ":not([" + mutator.MUTATED_FLAG + "])").each(function() {
            
                  var itemL2 = $(this).parent();
                  var linkL1 = $(this).closest("ul").prev("a");
                  var linkL2 = $(this);
                  var linkInfoL3 = $(this).attr("items").split("|");
            
                  if(window.location.href.match(new RegExp("(.)+" + linkL1.attr("href").replace("/", "\\/") + "(\/)?"))) {
                    linkL1.addClass(mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS);
                  }
                  
                  itemL2.append(getListL3HTML("sidebar", linkL2, linkInfoL3));
                  itemL2.addClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
            
                  // expand/collapse a level 2 link in the sidebar
                  linkL2.on("click", function() {
                    var listL1 = $("div.menu > ul." + mutator.SIDEBAR_SUBMENU_CLASS);
                    var listL2 = itemL2.parent();
                    var listL3 = itemL2.find("ul." + mutator.SIDEBAR_SUBMENU_CLASS);
                    var heightChange = ((linkInfoL3.length/2) * mutator.SIDEBAR_ITEM_HEIGHT + mutator.SIDEBAR_LIST_PADDING);
                    itemL2.toggleClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
                    if(itemL2.hasClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS)) {
                      listL1.css("height", (listL1.height() - heightChange) + "px");
                      listL2.css("height", (listL2.height() - heightChange) + "px");
                      listL3.css("height", "");
                    } else {
                      listL1.css("height", (listL1.height() + heightChange) + "px");
                      listL2.css("height", (listL2.height() + heightChange) + "px");
                      listL3.css("height", heightChange + "px");
                    }
                    if(linkL2.hasClass(mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS) || !linkL2.is("[href]")) { 
                      return false; 
                    } 
                  });
            
                  linkL2.addClass("menu__link--sublist");
                  linkL2.attr(mutator.MUTATED_FLAG, true);
            
                });
            
                // expand/collapse a level 1 link in the sidebar
                $("div.menu > ul > li > ul").prev("a").on("click", function() {
                  var linkL1 = $(this);
                  if(linkL1.hasClass(mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS) || !linkL1.is("[href]")) {
                    var itemL1 = linkL1.parent();
                    var listL1 = $("div.menu > ul." + mutator.SIDEBAR_SUBMENU_CLASS);
                    var listL2 = linkL1.next("ul");
                    itemL1.toggleClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
                    var numItems = getListL2NumVisibleItems(listL2);
                    var heightChange = (numItems * mutator.SIDEBAR_ITEM_HEIGHT + mutator.SIDEBAR_LIST_PADDING);
                    if(itemL1.hasClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS)) {
                      listL1.css("height", (listL1.height() - heightChange) + "px");
                      listL2.css("height", (listL2.height() - heightChange) + "px");
                    } else {
                      listL1.css("height", (listL1.height() + heightChange) + "px");
                      listL2.css("height", (listL2.height() + heightChange) + "px");
                    }
                    return false;
                  }
                });
            
                // expand all parent links of an active link in the sidebar on page load (i.e. display breadcrumb trail)
                $("a." + mutator.SIDEBAR_LINK_ACTIVE_PATH_CLASS + ", a." + mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS)
                  .parents("li." + mutator.SIDEBAR_LINK_COLLAPSED_CLASS)
                  .removeClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
            
                // set the height of all menus in the sidebar on page load (i.e. initialise heights for expand/collapse animations)
                $("ul." + mutator.SIDEBAR_SUBMENU_CLASS).each(function(idx) {
                  $(this).css("height", $(this).height());
                });
            
                // bind all navigation clicks to call the navigation mutator (i.e. update navbar and sidebar on react page change)
                $("a").on("click", function() { mutator.wait(); });
              }
            
            }
            
            // run the navigation mutator on page load
            $(function() {
              var mutator = new NavigationMutator();
              mutator.init();
            });
            `
          },
        ],
      }
    },
  }
}