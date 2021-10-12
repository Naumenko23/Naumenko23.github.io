function script1(){
    let re = /^\d+$/;
    let k1 = document.getElementById("kol");
    let p1 = document.getElementById("price");
    let r = document.getElementById("result");
    if(re.test(k1.value) && re.test(p1.value)){
      r.innerHTML = parseInt(k1.value) * parseInt(p1.value);
    } else{
      r.innerHTML = "Введите корректные данные";
    }
    return false;
  }

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button1").addEventListener("click", script1);
  });
