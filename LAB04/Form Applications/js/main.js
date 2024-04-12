$(document).ready(function () {
  var recOption = $("#rec-mode").find(":selected").val();
  var triOption = $("#tri-mode").find(":selected").val();
  var cirOption = $("#cir-mode").find(":selected").val();

  $("#rec-mode").on("change", function () {
    recOption = $("#rec-mode").find(":selected").val();
    if (recOption == "Rec-Area") $("#rec-legend").text("Rectangle - Area");
    else $("#rec-legend").text("Rectangle - Perimeter");
  });

  $("#rec-compute").on("click", function () {
    var length = parseInt($("#rec-length").val());
    var width = parseInt($("#rec-width").val());
    if (recOption == "Rec-Area")
      $("#rec-result").val((length * width).toFixed(2));
    else $("#rec-result").val(((length + width) * 2).toFixed(2));
  });

  $("#tri-mode").on("change", function () {
    triOption = $("#tri-mode").find(":selected").val();
    if (triOption == "Tri-Area") {
      $(".area-container").show();
      $(".per-container").hide();
      $("#tri-legend").text("Triangle - Area");
    } else {
      $(".area-container").hide();
      $(".per-container").show();
      $("#tri-legend").text("Triangle - Perimeter");
    }
  });

  $("#tri-compute").on("click", function () {
    if (triOption == "Tri-Area") {
      var base = parseInt($("#tri-base").val());
      var height = parseInt($("#tri-height").val());
      $("#tri-result").val((0.5 * base * height).toFixed(2));
    } else {
      let side1 = parseInt($("#tri-side1").val());
      let side2 = parseInt($("#tri-side2").val());
      let side3 = parseInt($("#tri-side3").val());
      $("#tri-result").val((side1 + side2 + side3).toFixed(2));
    }
  });

  $("#cir-mode").on("change", function () {
    cirOption = $("#cir-mode").find(":selected").val();
    if (cirOption == "Cir-Area") {
      $("#cir-legend").text("Circle - Area");
    } else {
      $("#cir-legend").text("Circle - Perimeter");
    }
  });

  $("#cir-compute").on("click", function () {
    var radius = parseInt($("#cir-radius").val());
    if (cirOption == "Cir-Area") {
      $("#cir-result").val((Math.PI * radius * radius).toFixed(2));
    } else {
      $("#cir-result").val((2 * Math.PI * radius).toFixed(2));
    }
  });
});
