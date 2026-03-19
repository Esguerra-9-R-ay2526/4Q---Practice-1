function checkAge() {
    let age = document.getElementById("age").value;
    
    if (Number(age) >= 18) {
        document.getElementById("sagot").innerHTML="Status: Vote accepted.";
    }
    else {
        document.getElementById("sagot").innerHTML="Status: Minors aren't accepted to vote unless 18 and above.";
    }
}