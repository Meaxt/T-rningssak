$(document).ready(function() {

//main
    addListener();



    //Klick funktionen
    function addListener() {
 
        $(".btn").click(function() {
            $("p").remove()

            rollDice(getData());

        });
//hindra form från att ladda om
        $('form').submit(function(event) {
            event.preventDefault();


        });

    } //addListener slut
//hämta data
    function getData() {
        var info = ($(".radBtn:checked").val());

        return info;


    }//data slut

    //slumpa tal
    function rollDice(numberDice) {
        var summa = 0;
        //loppar så många gånger man har fyllt i
        for (i = 0; i < numberDice; i++) {


            //slumpar tal
            var myNumber = Math.floor((Math.random() * 6) + 1);
            //lägger ihop summan av vad man får på varje tärning
            summa = summa + myNumber;
            //skriver ut vad tärningen visar
            $('<p>').text(myNumber).appendTo(".resultat");

        }
        //skriver ut summan
        $('<p>').text(summa).appendTo(" .stat");





    }//slumpa slut








});


