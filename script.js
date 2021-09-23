function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal > 0) {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        var total = parseFloat(interest);
        //var display = "If you deposit " + "<span class='highlight'>" + principal + "</span>" + ",\n at an interest rate of " + "<span class='highlight'>" + rate + "</span>" + " %.\n You will receive an amount of " + "<span class='highlight'>" + String(total) + "</span>" + ",\n in the year " + "<span class='highlight'>" + year + "</span>";
        var display = "If you deposit " + principal + ",\n at an interest rate of " + rate + " %.\n You will receive an amount of " + String(total) + ",\n in the year " + year;
        document.getElementById("result").innerText = display;
    } else {
        alert("Enter Positive Number");
        document.getElementById("principal").focus();
    }

}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}
