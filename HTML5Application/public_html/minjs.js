$(document).ready(function() {

//main
    addListener();



    //Klick funktionen
    function addListener() {
 
        $(".btn").click(function() {
            $("p").remove()

            var diceRolled = rollDice(getData());
            write(diceRolled);

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
    
    // skriver ut värdena
    function write (stat){
                $.each(stat, function(index, value){
                    $('<p>').text(value).appendTo(".resultat");
                });

    }//skriv ut slut

    //slumpa tal
    function rollDice(numberDice) {
        var summa = 0;
        var stat = [];
        //loppar så många gånger man har fyllt i
        for (i = 0; i < numberDice; i++) {


            //slumpar tal
            var myNumber = Math.floor((Math.random() * 6) + 1);
            //lägger ihop summan av vad man får på varje tärning
            summa = summa + myNumber;
            //pusha in värdet på tärnigen i en array
            stat.push(myNumber)
            
            
           
        
        }
        //pusha in summan av värdena på alla tärningar i arrayen
        stat.push(summa);
        return stat;
        
        
      
        





    }//slumpa slut








});


