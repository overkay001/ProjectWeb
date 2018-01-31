// login 

var button = document.getElementById('submit');

function othername() {
    localStorage.removeItem("name");
    var input = document.getElementById("userInput").value;
    localStorage.setItem("name", input);
}

function goTo() {
  window.location.href = "index.html"
}


button.addEventListener('click', goTo, true)


