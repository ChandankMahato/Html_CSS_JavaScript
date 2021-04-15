//responsive navigation bar
function responsive() {
    var nav = document.getElementById("MyTopnav");
    if (nav.className === "topnav") {
      nav.className += " respo";
    } else {
      nav.className = "topnav";
    }
  }

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("CARTS");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("NameInput").value="";
  document.getElementById("PeopleInput").value="";
  document.getElementById("default").value="";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//MODAAL INSIDE
function UpdateDate(){
  document.getElementById("DATE").value=Date();
}

function DefaultValue(){
  if(document.getElementById("default").value==""){
      document.getElementById("default").value="NO";
  }
}
