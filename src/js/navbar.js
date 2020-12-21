import $ from "jquery";
import location from 'location-href'; 

var NAVBAR_MUTATION = {
  required: null,
  timer: null,
  count: 0
};

function startMutationProcess() {
  console.log("Starting mutation process...");
  checkIfMutationRequired();
}

function checkIfMutationRequired() {
  if (NAVBAR_MUTATION.required == null) {
    console.log(`Checking if mutation required (${NAVBAR_MUTATION.count})...`);
    if ($("nav").length == 0 && NAVBAR_MUTATION.timer == null) {
      startMutationTimer(checkIfMutationRequired, 100);
    } else if ($("nav a.dropdown__link[items]").length > 0) {
      stopMutationTimer();
      NAVBAR_MUTATION.required = true;
      executeMutation();
    } else if (NAVBAR_MUTATION.count >= 10) {
      stopMutationTimer();
      NAVBAR_MUTATION.required = false;
    }
  }
}

function startMutationTimer(callback, interval) {
  stopMutationTimer();
  NAVBAR_MUTATION.count = 0;
  NAVBAR_MUTATION.timer = setInterval(function(){ NAVBAR_MUTATION.count++; callback(); }, interval);
}

function stopMutationTimer() {
  if(NAVBAR_MUTATION.timer != null) {
    clearInterval(NAVBAR_MUTATION.timer);
    NAVBAR_MUTATION.timer = null;
  }
}

function startPageChange() {
  startMutationTimer(endPageChange, 500);
}

function endPageChange() {
  stopMutationTimer();
  waitToMutate();
}

function waitToMutate() {
  console.log(`Waiting to mutate (${NAVBAR_MUTATION.count})...`);
  if ($("nav").length == 0) {
    startMutationTimer(waitToMutate, 100);
  } else {
    stopMutationTimer();
    executeMutation();
  }
}

function executeMutation() {
  console.log(`Executing mutation...`);
  $("nav a.dropdown__link[items]:not([data-mutated])").each(function(idx) {
    console.log(`Mutating ${idx}!`);
    var parent = $(this).parent();
    var items = $(this).attr("items").split("|");
    var html = "<ul class='dropdown__menu dropdown__menu__level3'>";
    for (var i = 0; i < items.length; i += 2) {
      console.log(idx + ": " + items[i] + " (" + items[i+1] + ")");
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
  $("a").on("click", function() { console.log("Page change starting..."); startPageChange(); });
}

$(function() {
  startMutationProcess();
});

