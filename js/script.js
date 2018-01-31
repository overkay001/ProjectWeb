
/* test om te kijken of js gelinked is */
console.log(5+1);


/*Dit is de like counter */

var add = (function () {
    var counter = 238;
    return function () {return counter += 1;}
})();

function Liken(){
    document.getElementById("like").innerHTML = add();
}

/*zoek functie */

function Zoeken() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  table = document.getElementById("zoeken");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

/* dropdown zoek functie */

let searchImage = document.getElementById('zoekplaatje');
let searching = document.getElementById('search');


function zoeken() {
  if (searching.style.display === 'block') {
    searching.style.display = 'none';
  } else {
    searching.style.display = 'block';
  }
}

searchImage.addEventListener('click', zoeken, true);

/* favorieten */


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

    /* naam bij login */
var showName = document.getElementById('naam').innerHTML = localStorage.getItem("name");
document.getElementById('naam').innerHTML = showName ;







