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
        NavBarMutator.mutate();
      } else if (NavBarMutator.count >= 10) {
        NavBarMutator.stopTimer();
        NavBarMutator.required = false;
      }
    }
  },

  mutate: function() {
    NavBarMutator.waitToMutate();
  },

  isReady: function() {
    return (
      NavBarMutator.required &&
      $("nav").length > 0 &&
      $("nav a.dropdown__link[data-mutated]").length == 0
    );
  },

  waitToMutate: function() {
    if (NavBarMutator.isReady()) {
      NavBarMutator.stopTimer();
      NavBarMutator.executeMutate();
    } else {
      NavBarMutator.startTimer(NavBarMutator.waitToMutate, 100);
    }
  },

  executeMutate: function() {
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
    $("a").on("click", function() { NavBarMutator.mutate(); });
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