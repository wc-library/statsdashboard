/* Created by jankoatwarpspeed.com */
(function(e){e.fn.formToWizard = function(t){function o(t){var n = "step" + t; e("#" + n + "commands").append("<a href='#' id='" + n + "Prev' class='prev'>< Back</a>"); e("#" + n + "Prev").bind("click", function(r){e("#" + n).hide(); e("#step" + (t - 1)).show(); e(s).hide(); a(t - 1)})}function u(t){var n = "step" + t; e("#" + n + "commands").append("<a href='#' id='" + n + "Next' class='next'>Next ></a>"); e("#" + n + "Next").bind("click", function(r){e("#" + n).hide(); e("#step" + (t + 1)).show(); if (t + 2 == i)e(s).show(); a(t + 1)})}function a(t){e("#steps li").removeClass("current"); e("#stepDesc" + t).addClass("current")}t = e.extend({submitButton:""}, t); var n = this; var r = e(n).find("fieldset"); var i = r.size(); var s = "#" + t.submitButton; e(s).hide(); e(n).before("<ul id='steps'></ul>"); r.each(function(t){e(this).wrap("<div id='step" + t + "'></div>"); e(this).append("<p id='step" + t + "commands'></p>"); var n = e(this).find("legend").html(); e("#steps").append("<li id='stepDesc" + t + "'>Step " + (t + 1) + "<span>" + n + "</span></li>"); if (t == 0){u(t); a(t)} else if (t == i - 1){e("#step" + t).hide(); o(t)} else{e("#step" + t).hide(); o(t); u(t)}})}})(jQuery)