$(document).ready(function() {

//main
    addListener();
//    console.log(info)




    function addListener() {
//        console.log("hej");
        $(".btn").click(function() {
            console.log("klick");
//            getData();
//            var antal = getData();
for(i= 0; i < getData(); i++){
            rollDice();
            }
        });
//hindra form från att ladda om
        $('form').submit(function(event) {
            event.preventDefault();

            console.log("form hindrat");
        });

    }
//hämta data
    function getData() {
        var info = ($(".radBtn:checked").val());
//        console.log(info)
        return info;
        

    }
    //slumpa tal
    function rollDice() {
//        for($i= 0; $i < info; i++){
//            console.log("hej")
        var myNumber = Math.floor((Math.random() * 6) + 1);
//        return nummer;
        console.log(myNumber)

        
//    }
    }








});


