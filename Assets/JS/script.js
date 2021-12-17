var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".plantext").val();
    var time = $(this).parent().attr("id");
    // save to local storage
    localStorage.setItem(time, text);
  });
});

function timeTracer() {
  // setting timeNow to the current time and hours for below funtion
  var timeNow = moment().hours();

  $(".hour-block").each(function () {
    var hourTime = parseInt($(this).attr("id").split("-")[1]);

    if (hourTime < timeNow) {
      $(this).addClass("past");
    } else if (hourTime === timeNow) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

// // getting time from local storage
$("#hour-9 .plantext").val(localStorage.getItem("hour-9"));
$("#hour-10 .plantext").val(localStorage.getItem("hour-10"));
$("#hour-11 .plantext").val(localStorage.getItem("hour-11"));
$("#hour-12 .plantext").val(localStorage.getItem("hour-12"));
$("#hour-13 .plantext").val(localStorage.getItem("hour-13"));
$("#hour-14 .plantext").val(localStorage.getItem("hour-14"));
$("#hour-15 .plantext").val(localStorage.getItem("hour-15"));
$("#hour-16 .plantext").val(localStorage.getItem("hour-16"));
$("#hour-17 .plantext").val(localStorage.getItem("hour-17"));

timeTracer();
