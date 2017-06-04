$(document).ready(function() {
  $("form#form-triangle").submit(function(event) {
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());

    alert(side1 + " " + side2 + " " + side3);
  });
});
