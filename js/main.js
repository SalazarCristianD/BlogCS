//cuadrado
function perimetroCu(lado){
    return lado * 4;
    console.log("los lados del cuadrado miden: " + cuadrado + "cm")
}

function areaCu(lado){
    return lado * lado;
}

/*const cuadrado = 5;
console.log("los lados del cuadrado miden: " + cuadrado + "cm");
const perimetro = cuadrado * 4; 
console.log("eL perímetro del cuadrado ");
*/
//triángulo
  function perimTri(lado, base){
      return (lado + lado) + base
  }
  function areaTr(altura, base){
      return (altura * base) / 2; 
  }

// codigo circulo
const pi = Math.floor(Math.PI);

  function diaCir(radio){
    return radio * 2;
  }
  function perimeCir(radio){
      const diametro = diaCir(radio);
      return diametro * pi;
  }
  
  function areaCir(radio){   
    return (radio * radio)* pi;
}


function calcularPerimetrocuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetroA = perimetroCu(value);
    alert("perimetroA");

}
function calcularAreacuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const areas = areaCu(value);
    alert("areas");
}