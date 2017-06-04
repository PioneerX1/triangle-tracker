$(document).ready(function() {
  $("form#form-triangle").submit(function(event) {
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());
    var result;

    if (side1+side2 <= side3 || side2+side3 <= side1 || side1+side3 <= side2) {
      result = "NOT a Triangle, bro";
    }
    else if (side1 === side2 && side1 === side3) {
      result = "an Equilateral Triangle";
    }
    else if (side1 === side2 || side1 === side3 || side2 === side3) {
        result = "an Isosceles Triangle";
    }
    else if (side1 != side2 && side1 != side3 && side2 != side3) {
      result = "a Scalene Triangle";
    }
    else {
      result = "Logic Error man!";
    }

    $("#result").text(result);
    $(".result").show();
    event.preventDefault();
  });
});
