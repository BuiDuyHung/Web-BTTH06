// Array random (10,100)
function getArrayRandom(form, to) {
    var arrayRandom = [];
    for (var i = 0; i < 10; i++) {
      arrayRandom[i] = Math.floor(Math.random() * (to - form + 1) + form);
    }
    return arrayRandom;
  }
  document.getElementById("col-one").innerText = getArrayRandom(10, 100);
  
  // Sắp xếp tăng dần
  var numberT = document.getElementById("col-one").innerText;
  var upArray = numberT.split(",");
  upArray.sort(function (a, b) {
    return a - b;
  });
  
  var arrayTam = upArray
  
  // Sắp xếp giảm dần
  var downArray = numberT.split(",");
  downArray.sort(function (a, b) {
    return b - a;
  });
  
  var inputUp = document.getElementById("check-one");
  var inputDown = document.getElementById("check-two");
  var valueArray = document.getElementById("col-two");
  var radioBtns = document.querySelectorAll("input[name='input-check']");
  
  var findSelected = () => {
    var seleced = document.querySelector("input[name='input-check']:checked");
  };
  
  radioBtns.forEach((radioBtns) => {
    radioBtns.addEventListener("change", findSelected);
  });
  
  inputUp.onclick = function () {
    valueArray.innerText = upArray;
  };
  
  inputDown.onclick = function () {
    valueArray.innerText = downArray;
  };
  
  // Thêm phần tử vào mảng
  function onClick() {
    var posi = document.getElementById("posi").value;
    var val = document.getElementById("val").value;
  
    var arrayTam = document.getElementById("col-two").innerText;
    var ssArray = arrayTam.split(",");
    ssArray.splice(posi,0,val)
    
    valueArray.innerText = ssArray;
  
  }
  
  
  