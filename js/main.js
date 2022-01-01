//cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
  }

function areaCuadrado(lado){
    return lado * lado;
}

// código triángulo 
  function perimetroTriangulo(lado, base){
      return (lado + lado) + base
  }
  function areaTriangulo(altura, base){
      return (altura * base) / 2; 
  }

// codigo circulo
const pi = Math.floor(Math.PI);

  function diametroCirculo(radio){
    return radio * 2;
  }
  function perimetroCirculo(radio){
      const diametro = diaCir(radio);
      return diametro * pi;
  }
  
  function areaCirculo(radio){   
    return (radio * radio)* pi;
}

//
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetroA = perimetroCuadrado(value);
    alert(perimetroA);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const areas = areaCuadrado(value);
    alert(areas);
}