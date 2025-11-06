// objetos dejavascript
const articulo={
    producto: "Monitor",
    pulgadas: 27,
    existencias: true
}
// 2 Conversion a cadena detexto
const jsonParaEnviar = JSON.stringify(articulo)
console.log(jsonParaEnviar.producto)
//conveertimos aobjeto json parapoderusarlo
const objetoRecuperado = JSON.parse(jsonParaEnviar)
//para acceder algun tributo
console.log(objetoRecuperado.producto)
console.log(objetoRecuperado.pulgadas)
console.log(objetoRecuperado.existencias)
