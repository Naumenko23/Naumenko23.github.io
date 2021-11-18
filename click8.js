window.addEventListener("DOMContentLoaded", function () {
	var name = document.getElementById("name");
    name.oninput = save;
    var email = document.getElementById("email");
    email.oninput = save;
	var check = document.getElementById("check");
    check.onchange = save;
    var anotherInput = document.getElementById("anotherInput");
    anotherInput.oninput = save;
    email.value = localStorage.getItem("email");
    name.value = localStorage.getItem("name");
    anotherInput.value = localStorage.getItem("anotherInput");
    var q = localStorage.getItem("check");
	if (q==0){
        check.checked = false;
    }
    if (q==1) {
        check.checked = true;
    }
    var pop = document.querySelector("#pop");
    var btn = document.getElementById("button");
    var close = document.querySelector("button2");
    btn.addEventListener("click", function(event){
        event.preventDefault();
        pop.classList.remove("hidden");
        window.history.pushState({page: 1}, "Main", "/web8");
        window.history.pushState({page: 2}, "Form", "/web8/#form");

    });
});

function save(){
  localStorage.setItem("email", email.value);
  localStorage.setItem("name", name.value);
  localStorage.setItem("anotherInput", anotherInput.value);
  if (check1.checked) {
      localStorage.setItem("check",1);
  }
  else {
      localStorage.setItem("check",0);
  }

}
$(function(){
    $(".Form").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Your request has been sent!");
					localStorage.removeItem("email");
                    localStorage.removeItem("name");
                    localStorage.removeItem("anotherInput");
					localStorage.removeItem("check");
					email.value = localStorage.getItem("email");
                    name.value = localStorage.getItem("name");
                    anotherInput.value = localStorage.getItem("anotherInput");
					check.checked = false;
                }else{
                    alert("Something is wrong, so check the fields " + response.message);
                }
            }
        });
    });
});

document.getElementById('formButton').addEventListener('click', e => {
history.pushState({page: 1}, "title 1", "?openForm");

});
window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};
document.getElementById('closeButton').addEventListener('click', e => {
	history.back();
});
