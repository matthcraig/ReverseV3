//built js function
function reverse(str) {
    return str.split("").reverse().join("");
}

//make some other thingys that reverse some strings
function reverseV2(string){

    if (string === '') {
        return '';
    } else { 
        let result = reverseV2(string.substr(1)) + string.charAt(0);
        return result;
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
$(document).ready(function() {
    $(".clickable").click(function() {
      $("#walrus-showing").toggle("slow");
      $("#walrus-hidden").toggle("slow");
    });
  
    $(".clickable-text").click(function() {
        $(".text-hidden").toggle();
        $(".text-showing").toggle();
    });
  });
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




//create a new function here to map or loop through an array of objects

$(document).ready(function() {
    $("#mapping").click(function(event) {
        $("#mapResults").append(objectMapping());
        event.preventDefault();
    })
})
function objectMapping() {
    const axiosResponse = 
    [{
        "fname": "Smoky",
        "lname": "bandit",
        "buttsize": 47,
        "favoriteCake": "Chocolate",
        "userid": 765843,
        "syncGuid": "762ad80a-ecd8-4625-a272-3598309e25af"
    },
    {
        "fname": "Bort",
        "lname": "Bergerson",
        "buttsize": 43,
        "favoriteCake": "Strawberry",
        "userid": 0987654321,
        "syncGuid": "489f8ab8-20ca-41b7-81d2-0301e3db5b7c"
    },
    {
        "fname": "Smedly",
        "lname": "Green",
        "buttsize": 43,
        "favoriteCake": "Vanilla",
        "userid": 010010010,
        "syncGuid": "63e97bb4-5cf6-47c3-80ce-c9bf681bb948"
    },
    {
        "fname": "BeanFace",
        "lname": "Frantic",
        "buttsize": 37,
        "favoriteCake": "Strawberry",
        "userid": 5674344,
        "syncGuid": "27b88d7c-a075df-449b-a54a-81750b20dafc"
    },
    {
        "fname": "Barry",
        "lname": "White",
        "buttsize": 59,
        "favoriteCake": "Chocolate",
        "userid": 34325344654,
        "syncGuid": "67b98d7d-a075df-459b-y54a-82750b21dafq"
    }
];
//map it

axiosResponse.map(item => { console.log(item.fname)})

}














