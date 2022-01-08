/* Calculate the interest on click, check that principal is a positive number */
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal > 0)
    {
    document.getElementById("result").innerHTML="If you deposit "+principal+",\
    <br\>at an interest rate of \<mark\>"+rate+"%\</mark\>\
    <br\>You will receive an amount of \<mark\>"+interest+"\</mark\>,\
    <br\>in the year \<mark\>"+year+"\</mark\>\<br\>"
    }
    else 
    {
        alert("Please enter a Positive Number.");
        document.getElementById("principal").focus();
    }
}
/*Updates the value of the slider for the rate */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}