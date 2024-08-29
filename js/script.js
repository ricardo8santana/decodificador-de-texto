const textInput = document.querySelector("#input-texto");
const  outInput = document.querySelector("#output");

function criptografar(){
    const  texto = textInput.value;
    const result1 = texto.replace(/e/g, "enter");
    const  result2 = result1.replace(/i/g, "imes");
    const  result3 = result2.replace(/a/g, "ai");
    const  result4 = result3.replace(/o/g, "ober");
    const  result5 = result4.replace(/u/g, "ufat");
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + result5 + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}
function descriptografar(){
    const  texto = textInput.value;
    const  result1 = texto.replace(/enter/g, "e");
    const  result2 = result1.replace(/imes/g, "i");
    const  result3 = result2.replace(/ai/g, "a");
    const   result4 = result3.replace(/ober/g, "o");
    const  result5 = result4.replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + result5 + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}
function copiar() {
    const  textoCop =  document.getElementById('input-texto');
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado para área de transferência.");
}


// //e - enter
// //o - ober
// //i - imes
// //a - ai
// //u - ufat

// const criptografar = document.getElementById("button__criptografar");
// const descriptografar = document.getElementById("button__descriptografar");
// const copy = document.getElementById("button__copiar");
// const textoInicial = document.getElementById("textoInput");
// const textFinal = document.getElementById("textoFinal");
// const munheco = document.getElementById("munheco");
// const textInfo = document.getElementById("textoInfo");
// const rigth = document.getElementById("rigth")
	
// const remplace = (newvalue) => {
// 	textFinal.innerHTML = newvalue;
// 	textFinal.classList.add("ajustar");
// 	rigth.classList.add("ajuste")
// 	textoInicial.value = "";
// 	textoInicial.style.height = "auto"
// 	textoInicial.placeholder = "Ingrese el texto aquí";
// 	munheco.classList.add("ocultar");
// 	textInfo.classList.add("ocultar");
// 	copy.classList.remove("bn_ocultar");
// }

// const reset = () => {
// 	textoInicial.value = "";
//     textoInicial.style.height = "auto";
// 	textFinal.innerHTML = "";
// 	rigth.classList.remove("ajuste")
// 	textFinal.classList.remove("ajustar");
// 	munheco.classList.remove("ocultar");
// 	textFinal.placeholder = "Nenhuma mensagem encontrada";
// 	textInfo.classList.remove("ocultar")
// 	copy.classList.add("bn_ocultar");
// 	textoInicial.focus();
// };

// let substituir = [
// 	["e", "enter"],
// 	["o", "ober"],
// 	["i", "imes"],
// 	["a", "ai"],
// 	["u", "ufat"]
// ];

// encriptar.addEventListener('click', () => {

// 	const texto = textoInicial.value.toLowerCase();

// 	if (texto != "") {
// 		function Criptografar(newtext) {
// 			for (let i = 0; i < remplazar.length; i++) {
// 				if (newtext.includes(remplazar[i][0])) {
// 					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
// 				};
// 			};
// 			return newtext;
// 		};
// 		remplace(Criptografar(texto));
// 	} else {
// 		alert("Digite o texto para Criptografar");
// 		reset();
// 	};
// });

// desencriptar.addEventListener('click', () => {

// 	const texto = textoInicial.value.toLowerCase();

// 	if (texto != "") {
// 		function descriptografar(newtext) {
// 			for (let i = 0; i < remplazar.length; i++) {
// 				if (newtext.includes(remplazar[i][1])) {
// 					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
// 				};
// 			};
// 			return newtext;
// 		};
// 		remplace(descriptografar(texto));
// 	} else {
// 		alert("Digite o texto a descriptografar");
// 		reset();
// 	};
// });

// copy.addEventListener("click", () => {
// 	let texto = textFinal;
// 	texto.select();
// 	document.execCommand('copy');

// 	alert("Texto Copiado");
// 	reset();
// });

// textoInicial.addEventListener("change", e => {
// 	textoInicial.style.height = "auto";
// 	let scHeight = e.target.scrollHeight;
// 	textoInicial.style.height = `${scHeight}px`;
// });
// textoInicial.addEventListener("keyup", e => {
// 	textoInicial.style.height = "auto";
// 	let scHeight = e.target.scrollHeight;
// 	textoInicial.style.height = `${scHeight}px`;
// });
