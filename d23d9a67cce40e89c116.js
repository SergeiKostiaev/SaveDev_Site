const modal=document.getElementById("myModal"),btn=document.getElementById("orderBtn"),scndBtn=document.getElementById("orderBtnSecond"),span=document.getElementsByClassName("close")[0];btn.onclick=function(){modal.style.display="block"},scndBtn.onclick=function(){modal.style.display="block"},span.onclick=function(){modal.style.display="none"},window.onclick=function(n){n.target==modal&&(modal.style.display="none")},document.forms.myForm.onchange=function(n){var e=n.target;"t8"==e.name&&[].forEach.call(this.t8,(function(n){n!=e&&e.checked?(n.disabled=!0,n.checked=!1):n==e||e.checked||(n.disabled=!1,e.checked=!1)}))};