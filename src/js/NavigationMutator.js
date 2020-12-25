import $ from "jquery";
import location from 'location-href'; 

class NavigationMutator {

  constructor() {

    // CONSTANTS
    this.SIDEBAR_ITEM_HEIGHT = 36;
    this.SIDEBAR_LIST_PADDING = 4;
    this.NAVBAR_SUBMENU_CLASS = "dropdown__menu dropdown__submenu__list";
    this.NAVBAR_LINK_CLASS = "dropdown__link";
    this.NAVBAR_LINK_ACTIVE_PATH_CLASS = "navbar__link--active"; // class for link representing parent page (i.e. active base path)
    this.NAVBAR_LINK_CURRENT_PAGE_CLASS = "dropdown__link--active"; // class for link representing current page (i.e. active page)
    this.SIDEBAR_SUBMENU_CLASS = "menu__list";
    this.SIDEBAR_LINK_CLASS = "menu__link";
    this.SIDEBAR_LINK_ACTIVE_PATH_CLASS = this.NAVBAR_LINK_ACTIVE_PATH_CLASS; // class for link representing parent page (i.e. active base path)
    this.SIDEBAR_LINK_CURRENT_PAGE_CLASS = "menu__link--active"; // class for link representing current page (i.e. active page)
    this.SIDEBAR_LINK_COLLAPSED_CLASS = "menu__list-item--collapsed";
    this.NAVBAR_SELECTOR = "nav.navbar";
    this.NAVBAR_EXPANDABLE_LINK_SELECTOR = `${this.NAVBAR_SELECTOR} a.${this.NAVBAR_LINK_CLASS}[items]`;
    this.SIDEBAR_SELECTOR = "div.navbar-sidebar";
    this.SIDEBAR_EXPANDABLE_LINK_SELECTOR = `${this.SIDEBAR_SELECTOR} a.${this.SIDEBAR_LINK_CLASS}[items]`;
    this.MUTATED_FLAG = "data-mutated";

    // CSS
    this.STYLES = `
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
    
      ul.dropdown__submenu__list {
        left: 100%;
        top: auto;
        margin-top: -2.7rem;
        margin-left: -0.5rem;
        visibility: hidden !important; /* !important flag required to override displaying the level 3 submenu on level 1 hover */
        opacity: 0 !important;
        transform: scale(.8) !important;
      }
    
      li.dropdown__submenu__parent:hover ul.dropdown__submenu__list, ul.dropdown__submenu__list:hover {
        opacity: 1 !important;
        transform: scale(1) !important;
        visibility: visible !important;
      }
    `;
  
    // ATTRIBUTES
    this.ready = false;
    this.count = 0;

  }

  init() {
    if($(`${this.NAVBAR_EXPANDABLE_LINK_SELECTOR}, ${this.SIDEBAR_EXPANDABLE_LINK_SELECTOR}`).length > 0) {
      this.ready = true;
    } else if (this.count < 10) {
      setTimeout(this.init.bind(this), 100);
      this.count++;
    }
    if(this.ready){
      $("body").append(`<style type="text/css">${this.STYLES}</style>`); // inject CSS styles
      this.wait();
    }
  }

  wait() {
    if (
      this.ready &&
      $(this.NAVBAR_SELECTOR).length > 0 &&
      $(`${this.NAVBAR_EXPANDABLE_LINK_SELECTOR}[${this.MUTATED_FLAG}], ${this.SIDEBAR_EXPANDABLE_LINK_SELECTOR}[${this.MUTATED_FLAG}]`).length == 0
    ) {
      this.mutate();
    } else {
      setTimeout(this.wait.bind(this), 100);
    }
  }

  mutate() {

    var mutator = this;

    var getMenuHTML = function(type, parent, items) {
      var isNavBar = (type == "navbar");
      var html = `<ul class='${isNavBar ? mutator.NAVBAR_SUBMENU_CLASS : mutator.SIDEBAR_SUBMENU_CLASS}'>`;
      for(var i = 0; i < items.length; i += 2) {
        var title = items[i];
        var href = items[i+1];
        var classes = (isNavBar ? mutator.NAVBAR_LINK_CLASS : mutator.SIDEBAR_LINK_CLASS);
        if(location().endsWith(href)) {
          classes += ` ${isNavBar ? mutator.NAVBAR_LINK_CURRENT_PAGE_CLASS : mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS}`;
          parent.addClass(isNavBar ? mutator.NAVBAR_LINK_ACTIVE_PATH_CLASS : mutator.SIDEBAR_LINK_ACTIVE_PATH_CLASS);
          parent.removeClass(isNavBar ? mutator.NAVBAR_LINK_CURRENT_PAGE_CLASS : mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS);
        }
        html += `<li ${isNavBar ? "" : "class='menu__list-item'"}><a class='${classes}' href='${href}'>${title}</a></li>`;
      }
      html += "</ul>";
      return html;
    }

    // NAVBAR MUTATION (DESKTOP)
    $(`${mutator.NAVBAR_EXPANDABLE_LINK_SELECTOR}:not([${mutator.MUTATED_FLAG}])`).each(function(idx) {

      var container = $(this).parent();
      var parentLink = $(this);
      var childLinks = $(this).attr("items").split("|");

      container.append(getMenuHTML("navbar", parentLink, childLinks));
      container.addClass("dropdown__submenu__parent");

      parentLink.attr(mutator.MUTATED_FLAG, true);

    });

    // SIDEBAR MUTATION (MOBILE)
    $(`${mutator.SIDEBAR_EXPANDABLE_LINK_SELECTOR}:not([${mutator.MUTATED_FLAG}])`).each(function(idx) {

      var container = $(this).parent();
      var parentLink = $(this);
      var childLinks = $(this).attr("items").split("|");
      
      container.append(getMenuHTML("sidebar", parentLink, childLinks));
      container.addClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);

      parentLink.on("click", function() { 
        var sublist = container.find("ul.menu__list");
        var heightChange = ((childLinks.length/2) * mutator.SIDEBAR_ITEM_HEIGHT + mutator.SIDEBAR_LIST_PADDING);
        if(container.hasClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS)) {
          container.removeClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
          sublist.css("height", heightChange + "px");
        } else {
          container.addClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
          sublist.css("height", "");
        }
        if(parentLink.hasClass(mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS) || !parentLink.is("[href]")) { 
          return false; 
        } 
      });

      parentLink.addClass("menu__link--sublist");
      parentLink.attr(mutator.MUTATED_FLAG, true);

    });

    $(`a.${mutator.SIDEBAR_LINK_ACTIVE_PATH_CLASS}, a.${mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS}`).parent().removeClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
    $(`a.${mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS}`).parent().find(`ul.${mutator.SIDEBAR_SUBMENU_CLASS}`).each(function(idx) {
      $(this).css("height", $(this).height());
    });

    $("a").on("click", function() { mutator.wait(); });
  }

}

$(function() {
  var mutator = new NavigationMutator();
  mutator.init();
});