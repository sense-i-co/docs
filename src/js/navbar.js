import $ from "jquery";

var mutationTimer = null;

function waitToMutate() {
  if ($("nav").length == 0) {
    mutationTimer = setInterval(waitToMutate, 100);
  } else {
    if(mutationTimer != null) {
      clearInterval(mutationTimer);
    }
    executeMutate();
  }
}

function executeMutate() {
  $("nav a.dropdown__link[items]:not([data-mutated])").each(function(idx) {
    var parent = $(this).parent();
    var items = $(this).attr("items").split("|");
    var html = "<ul>";
    for (var i = 0; i < items.length; i += 2) {
      console.log(idx + ": " + items[i] + " (" + items[i+1] + ")");
      html += "<li><a href='" + items[i+1] + "'>" + items[i] + "</a></li>";
    }
    html += "</ul>";
    parent.append(html);
    $(this).attr("data-mutated", true);
  });
}

$(function() {
  waitToMutate();
});

