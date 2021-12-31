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

/*
console.group("circulo");
//radio
  const radioC = 4;
  console.log("el radio del círculo es " + radioC + "cm");
 //diámetro
 const diametroC = radioC * 2;
 console.log("el diametro del círculo es " + radioC + "cm");
 // PI

 //Math.PI
 // perimetro 
 const perimetroC = diametroC * pi;
 console.log("el perimétro del círculo es " + perimetroC + "cm");
 // area
 const areaC = (radioC * radioC) * pi; 
 console.log("el area del círculo es " + areaC + "cm cuadrados");
console.groupEnd();
*/