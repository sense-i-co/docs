import $ from "jquery";
import location from 'location-href'; 

class NavigationMutator {

  constructor() {
    // Constants
    this.SIDEBAR_ITEM_HEIGHT = 36;
    this.SIDEBAR_LIST_PADDING = 4;
    this.NAVBAR_LINK_CLASS = "dropdown__link";
    this.NAVBAR_LINK_ACTIVE_PATH_CLASS = "navbar__link--active"; // class for link representing parent page (i.e. active base path)
    this.NAVBAR_LINK_CURRENT_PAGE_CLASS = "dropdown__link--active"; // class for link representing current page (i.e. active page)
    this.SIDEBAR_LINK_CLASS = "menu__link";
    this.SIDEBAR_LINK_ACTIVE_PATH_CLASS = this.NAVBAR_LINK_ACTIVE_PATH_CLASS; // class for link representing parent page (i.e. active base path)
    this.SIDEBAR_LINK_CURRENT_PAGE_CLASS = "menu__link--active"; // class for link representing current page (i.e. active page)
    this.SIDEBAR_LINK_COLLAPSED_CLASS = "menu__list-item--collapsed";
    this.NAVBAR_SELECTOR = "nav.navbar";
    this.NAVBAR_EXPANDABLE_LINK_SELECTOR = `${this.NAVBAR_SELECTOR} a.${this.NAVBAR_LINK_CLASS}[items]`;
    this.SIDEBAR_SELECTOR = "div.navbar-sidebar";
    this.SIDEBAR_EXPANDABLE_LINK_SELECTOR = `${this.SIDEBAR_SELECTOR} a.${this.SIDEBAR_LINK_CLASS}[items]`;
    this.MUTATED_FLAG = "data-mutated";
  
    // Attributes
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
    if(this.ready) this.wait();
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
    // desktop navbar
    var mutator = this;
    $(`${mutator.NAVBAR_EXPANDABLE_LINK_SELECTOR}:not([${mutator.MUTATED_FLAG}])`).each(function(idx) {
      var parent = $(this).parent();
      var items = $(this).attr("items").split("|");
      var html = "<ul class='dropdown__menu dropdown__menu__level3'>";
      for (var i = 0; i < items.length; i += 2) {
        var title = items[i];
        var href = items[i+1];
        var classes = mutator.NAVBAR_LINK_CLASS;
        if (location().endsWith(href)) {
          classes += ` ${mutator.NAVBAR_LINK_CURRENT_PAGE_CLASS}`;
          $(this).addClass(mutator.NAVBAR_LINK_ACTIVE_PATH_CLASS);
          $(this).removeClass(mutator.NAVBAR_LINK_CURRENT_PAGE_CLASS);
        }
        html += `<li><a class='${classes}' href='${href}'>${title}</a></li>`;
      }
      html += "</ul>";
      parent.append(html);
      parent.addClass("dropdown__submenu");
      $(this).attr(mutator.MUTATED_FLAG, true);
    });
    // mobile sidebar
    $(`${mutator.SIDEBAR_EXPANDABLE_LINK_SELECTOR}:not([${mutator.MUTATED_FLAG}])`).each(function(idx) {
      var self = $(this);
      var parent = $(this).parent();
      var items = $(this).attr("items").split("|");
      var html = "<ul class='menu__list'>";
      for (var i = 0; i < items.length; i += 2) {
        var title = items[i];
        var href = items[i+1];
        var classes = mutator.SIDEBAR_LINK_CLASS;
        if (location().endsWith(href)) {
          classes += ` ${mutator.SIDEBAR_LINK_ACTIVE_PATH_CLASS} ${mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS}`;
          $(this).addClass(mutator.SIDEBAR_LINK_ACTIVE_PATH_CLASS);
          $(this).removeClass(mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS);
        }
        html += `<li class='menu__list-item'><a class='${classes}' href='${href}'>${title}</a></li>`;
      }
      html += "</ul>";
      parent.append(html);
      parent.addClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
      $(this).on("click", function() { 
        var sublist = parent.find("ul.menu__list");
        var heightChange = ((items.length/2)*mutator.SIDEBAR_ITEM_HEIGHT+mutator.SIDEBAR_LIST_PADDING);
        if(parent.hasClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS)) {
          parent.removeClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
          sublist.css("height", heightChange + "px");
        } else {
          parent.addClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
          sublist.css("height", "");
        }
        if(self.hasClass(mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS) || !self.is("[href]")) { 
          return false; 
        } 
      });
      $(this).addClass("menu__link--sublist");
      $(this).attr(mutator.MUTATED_FLAG, true);
    });
    $(`a.${this.SIDEBAR_LINK_CLASS}.${mutator.SIDEBAR_LINK_ACTIVE_PATH_CLASS}, 
       a.${this.SIDEBAR_LINK_CLASS}.${mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS}`).parent().removeClass(mutator.SIDEBAR_LINK_COLLAPSED_CLASS);
    $(`a.${this.SIDEBAR_LINK_CLASS}.${mutator.SIDEBAR_LINK_CURRENT_PAGE_CLASS}`).parent().find("ul.menu__list").each(function(idx) {
      $(this).css("height", $(this).height());
    });
    $("a").on("click", function() { mutator.wait(); });
  }

}

$(function() {
  var mutator = new NavigationMutator();
  mutator.init();
});