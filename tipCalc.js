$(function() {
    $("#reset").hide();
    $("#button").on("click", calculate);
    $("#tipAmt").hide();
    $("#totalAmount").hide();
    $("#TA").hide();
    $("#each").hide();
});


function calculate() {
var bill = $("#billAmt").val();
var percentage = $("#percentage").val();
var split = $("#split1").val();

if (split.length > 1) {
    alert("Only one character allowed!");
    location.reload();
} 

if (bill == "") {
    alert("Please enter your total bill amount.");
} 
else if (percentage == null) {
    alert("Please tell us how our service was.")
}

else {
    console.log(bill);
    console.log(percentage);
    console.log(split);

    calcTip(bill, percentage, split);
}


};


function calcTip(bill, percentage, split) {
    var result = (+bill * +percentage / +split).toFixed(2);
    console.log(result);
    $("#tipResult").append("$" + result);

    if (split > 1) {
        var totalAmount = ((+bill + (+result * +split)) / +split).toFixed(2);
        $("#totalAmount").append("$" + totalAmount);
        $("#totalAmount").show();
        $("#TA").show();
        $("#each").show();
    }
    
$("#tipResult").fadeIn();
$("#button").hide();
$("#reset").show();
$("#tipAmt").show();

}

    
