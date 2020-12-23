import $ from "jquery";
import location from 'location-href'; 

var NavBarMutator = {

  // Attributes
  required: null,
  timer: null,
  count: 0,

  // Functions
  init: function() {
    if(NavBarMutator.required == null) {
      if ($("nav").length == 0 && NavBarMutator.timer == null) {
        NavBarMutator.startTimer(this.init, 100);
      } else if ($("nav a.dropdown__link[items]").length > 0) {
        NavBarMutator.stopTimer();
        NavBarMutator.required = true;
        NavBarMutator.wait();
      } else if (NavBarMutator.count >= 10) {
        NavBarMutator.stopTimer();
        NavBarMutator.required = false;
      }
    }
  },

  wait: function() {
    if (
        NavBarMutator.required &&
        $("nav").length > 0 &&
        $("nav a.dropdown__link[data-mutated]").length == 0 &&
        $("div.navbar-sidebar a.menu__link[data-mutated]").length == 0
      ) {
      NavBarMutator.stopTimer();
      NavBarMutator.mutate();
    } else {
      NavBarMutator.startTimer(NavBarMutator.wait, 100);
    }
  },

  mutate: function() {
    $("nav a.dropdown__link[items]:not([data-mutated])").each(function(idx) {
      var parent = $(this).parent();
      var items = $(this).attr("items").split("|");
      var html = "<ul class='dropdown__menu dropdown__menu__level3'>";
      for (var i = 0; i < items.length; i += 2) {
        var classes = "dropdown__link";
        if (location().endsWith(items[i+1])) {
          classes += " dropdown__link--active";
        }
        html += `<li><a class='${classes}' href='${items[i+1]}'>${items[i]}</a></li>`;
      }
      html += "</ul>";
      parent.append(html);
      parent.attr("class", "dropdown__submenu");
      $(this).attr("data-mutated", true);
    });
    $("div.navbar-sidebar a.menu__link[items]:not([data-mutated])").each(function(idx) {
      var self = $(this);
      var parent = $(this).parent();
      var items = $(this).attr("items").split("|");
      var html = "<ul class='menu__list menu__sublist__level3'>";
      for (var i = 0; i < items.length; i += 2) {
        var classes = "menu__link";
        if (location().endsWith(items[i+1])) {
          classes += " navbar__link--active menu__link--active";
          $(this).addClass("navbar__link--active");
          $(this).removeClass("menu__link--active");
        }
        html += `<li class='menu__list-item'><a class='${classes}' href='${items[i+1]}'>${items[i]}</a></li>`;
      }
      html += "</ul>";
      parent.append(html);
      parent.addClass("menu__list-item--collapsed");
      $(this).on("click", function() { parent.toggleClass("menu__list-item--collapsed", 1000); if(self.hasClass("menu__link--active") || !self.is("[href]")) { return false; } });
      $(this).attr("data-mutated", true);
    });
    $("a.menu__link.navbar__link--active, a.menu__link.menu__link--active").parent().removeClass("menu__list-item--collapsed");
    $("a").on("click", function() { NavBarMutator.wait(); });
  },

  startTimer: function(callback, interval) {
    NavBarMutator.stopTimer();
    NavBarMutator.count = 0;
    NavBarMutator.timer = setInterval(function() { 
      NavBarMutator.count++; 
      callback(); 
    }, interval);
  },

  stopTimer: function() {
    if(NavBarMutator.timer != null) {
      clearInterval(NavBarMutator.timer);
      NavBarMutator.timer = null;
    }
  },

};

$(function() {
  NavBarMutator.init();
});