function click1(){
    let re = /^\d+$/;
    let k = document.getElementById("kol");
    let p = document.getElementById("price");
    let r = document.getElementById("result");
    if(re.test(k.value) && re.test(p.value)){
      r.innerHTML = parseInt(k.value) * parseInt(p.value);
    } else{
      r.innerHTML = "Введите корректные данные";
    }
    return false;
  }

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button1").addEventListener("click", click1);
  });
