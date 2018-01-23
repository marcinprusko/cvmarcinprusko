// plik script.js

document.getElementById("text1").innerHTML = "CV Marcin Prusko";
document.getElementById("image").src = "marcin.jpg";
document.getElementById("text2").innerHTML = "E-mail: marcinprusko@gmail.com <br> Telefon: 693451089 <br> Data urodzenia: 23.01.1983";
//experience
document.getElementById("text3").innerHTML = "Doświadczenie zawodowe: ";
var tab = ['09/2008 - obecnie - nauczyciel w ZSLiZ w Olecku', '06/2006 - obecnie - dyrektor zarządzający w Biurze Turystycznym Sambia'];
var text = "<ul>";
for (i = 0; i < tab.length; i++) {
    text += "<li>" + tab[i] + "</li>";
}
text += "</ul>";
document.getElementById("experi").innerHTML = text;
//education
document.getElementById("text4").innerHTML = "Wykształcenie: ";
var tabi = ['10/2007 - 06/2009 - SGGW Warszawa  - Zarządzanie i marketing w turystyce - magister', '10/2004 - 06/2007 - PWSZ Biała Podlaska - zarządzanie i marketing w turystyce - licencjat'];
var texto = "<ul>";
for (i = 0; i < tabi.length; i++) {
    texto += "<li>" + tabi[i] + "</li>";
}
texto += "</ul>";
document.getElementById("eduka").innerHTML = texto;
//skills
document.getElementById("text5").innerHTML = "Umiejętności: ";

//table 
	
function tableCreate() {
        var body = document.getElementById("tabli");
        var tbl  = document.createElement("table");
        var tblBody = document.createElement("tbody");
		var row = document.createElement("tr");
		var tabe = ['RWD', 'HTML5', 'CSS3', 'Bootstrap', 'GitHab', 'Gulp', 'Java Script'];

		for (i = 0; i < tabe.length; i++) {
			var cell = document.createElement("td");    
            var cellText = document.createTextNode(tabe[i]); 
            cell.appendChild(cellText);
            row.appendChild(cell);
		}
		tblBody.appendChild(row);
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
    }
tableCreate()

//form validator

document.getElementById("text6").innerHTML = "Formularz kontaktowy: ";

function inputValidator() {
    var x = document.getElementById("emails", "names", "surnames").value;
    if (isNaN(x) || x < 1 || x > 15) {
        console.log("Input not valid");
    } else {
        console.log("Input OK");
    }
}
function inputValidatore() {
    var x = document.getElementById("quest").value;
    if (isNaN(x) || x < 1 || x > 200) {
        console.log("Input not valid");
    } else {
        console.log("Input OK");
    }
}
//show div
function showDiv() {
    var x = document.getElementById("show");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else  {
        x.style.display = "none";
    }
}
