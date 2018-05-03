console.log("Javascript werkt");

(function(){
    document.addEventListener("DOMContentLoaded", init);

    function init(){
        console.log("init");
        rndPassword(LengteChange());
        KarakterChange();

        SliderLengte.oninput = function() {
            LabelLengte.innerHTML = SliderLengte.value;
            rndPassword(SliderLengte.value);
        }
    }

    function LengteChange(){
        //Set label value
        let SliderLengte = document.getElementById("SliderLengte");
        let LabelLengte = document.getElementById("LabelLengte")
        LabelLengte.innerHTML = SliderLengte.value;
        
        //updates label value
        SliderLengte.oninput = function() {
            LabelLengte.innerHTML = SliderLengte.value;

        }

        return SliderLengte.value;

        console.log("lengteSlider uitgevoerd");
    }

    function KarakterChange(){
        //Set label value
        let SliderKarakter = document.getElementById("SliderKarakter");
        let LabelKarakter = document.getElementById("LabelKarakter")
        LabelKarakter.innerHTML = SliderKarakter.value;
        
        //updates label value
        SliderKarakter.oninput = function() {
            LabelKarakter.innerHTML = SliderKarakter.value;
        }

        console.log("karakterSlider uitgevoerd");
    }

    function rndPassword(lengteValue)    {
        //variabelen aanmaken
        let rndValue = "";
        //mogelijkheden voor te kiezen letter/getal
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        //for loop om random te kiezn op basis van lengte
        for (let i = 0; i < lengteValue; i++) {
            rndValue += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        let password = document.getElementById("rndPassword");
        password.value = rndValue
        console.log("RandomPassword uitgevoerd");
        return rndValue;
}

})();