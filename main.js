//built js function
function reverse(str) {
    return str.split("").reverse().join("");
}

//make some other thingys that reverse some strings
function reverseV2(string){
    if (string === '') {
        return '';
    } else { 
        let res = reverseV2(string.substr(1)) + string.charAt(0);
        return res;
    }
}

//loop
function reverseV3(string) {
    let newString = '';
    for (let i = string.length -1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}

//clear click
$(document).ready(function() {
   $("#clear").click(function(event){
    $("#results").empty();
    //$("#talky").empty();
    $('#talky').val('');
    event.preventDefault();
   })
})
//submit click
$(document).ready(function() {
    $("#reverse").submit(function(event){
        $("#results").empty();  
        let entry = $("input#talky").val();
        $("#results").append(reverseV3(entry));
        event.preventDefault();
    })
})