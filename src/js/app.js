// Get the modal
const modal = document.getElementById('myModal');
//const root = document.getElementById('root');

//const renderComponent = () => {
//    root.innerHTML = markup();
//
//};

// Get the button that opens the modal
const btn = document.getElementById("orderBtn");
const scndBtn = document.getElementById("orderBtnSecond");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
scndBtn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//function firstFunction() {
//    let element = document.getElementById("myDIV1");
//    element.classList.toggle("mystyle");
//}
//function secndFunction() {
//    let element = document.getElementById("myDIV2");
//    element.classList.toggle("mystyle");
//}
//function threedFunction() {
//    let element = document.getElementById("myDIV3");
//    element.classList.toggle("mystyle");
//}
//function fourthFunction() {
//    let element = document.getElementById("myDIV4");
//    element.classList.toggle("mystyle");
//}

document.forms.myForm.onchange = function(e) {
    var target = e.target;    
    if (target.name == "t8") {    
      [].forEach.call(this.t8, function(el) {
        if (el != target && target.checked) {
          el.disabled = true;
          el.checked = false;
        } else if (el != target && !target.checked) {
          el.disabled = false;
          target.checked = false;
        }
      });
    }
  };
  