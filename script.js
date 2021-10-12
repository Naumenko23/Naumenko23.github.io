function script1(){
    let re = /^\d+$/;
    let ko = document.getElementById("field1");
    let pr = document.getElementById("field2");
    let r = document.getElementById("result");
    if(re.test(ko.value) && re.test(pr.value)){
      r.innerHTML = parseInt(ko.value) * parseInt(pr.value);
    } else{
      r.innerHTML = "Введите корректные данные";
    }
    return false;
  }

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button1").addEventListener("click", script1);
  });
