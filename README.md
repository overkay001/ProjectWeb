# ProjectWeb
Project Web jaar 2017 / 2018 HvA CMD


Voor deze opdracht moest er een verhalen website gemaakt worden waarbij er minimaal drie micro transacties verwerkt werden.
De opdrachtgever die ik gekozen heb voor dit project is DFDS. Ik heb geprobeerd de verhalen website aan te laten sluiten bij de huisstijl van DFDS zodat deze website gemakkelijk bij hun "brand" geintroduceert zou kunnen worden.

Om  dit technisch voor elkaar te krijgen heb ik veel gebruik gemaakt van: https://www.w3schools.com & https://stackoverflow.com. 
Daarnaast heb ik gebruik gemaakt van het boek: JavaScript and JQuery: Interactive Front-End Web Development.

De website is opgebouwd uit een overzichtspagina, vier verhalen pagina's en een login/aanmeld pagina. De overzicht en de verhalen pagina's delen één stylesheet. De login en aanmeld pagina delen een ander stylesheet. Ik heb voor deze scheiding gekozen omdat ik op deze manier een duidelijkere scheiding kon huden tussen deze twee onderdelen en ik met minder ID's kon werken.

Voor de JS heb ik dit ook zo toegepast, omdat de verschillende functies gingen botsen met elkaar.


Voor de CSS ben ik "mobile-first" begonnen en door het gebruik van mediaQuerrys ben ik gaan schalen naar desktop.

<h2 Voorbeeld Css code </h2>

header{
	display:flex;
	flex-direction:row;
	align-items: center;
	justify-content: space-between;
	padding-top: 0.3125em;
   	padding-bottom: 0.3125em;
   	box-shadow: 0  0.125em  0.25em 0 rgba(0,0,0,0.16),0  0.125em 0.625em 0 rgba(0,0,0,0.12);
   	background-color: #fff;
}

header > img {
	width: 26vw;
	height: auto;
	padding-left:  0.8125em;
}



@media only screen 
and (min-device-width : 45em) 
{ 

#beginscherm {
     position: absolute;
    bottom: 3.75em;
    font-size: 0.75em;
    left: 2.5em;
    background-color: white;
    max-width: 40%;
    height: 13.125em;
    padding: 1em 1em 1em 1em;
}
}

Dit is een voorbeeld een mediaquery die ervoor zorgt dat de responsive feel van website op tablet beter aanvoelt.



<h2> Voorbeeld van JS</h2>

    function changeImg() {

        if (document.getElementById("fav").src == "../img/favorite.svg") 
        {
            document.getElementById("fav").src = "img/fav.svg";
        }
        else 
        {
            document.getElementById("fav").src = "img/fav.svg";
        }
    }
    
Hier wordt de functie "ChangeImg" aangemaakt waarbij hij door middel van een "if-statement" een plaatje wisselt wanneer er geclickt wordt op het huidige plaatje.

Voor de JS code heb ik veel gehad aan deze Link: https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript#11563667 Waarin uitgelegd wordt hoe value's kan ophalen vanuit html.
