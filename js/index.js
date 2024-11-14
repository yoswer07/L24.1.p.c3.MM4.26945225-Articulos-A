/* 
En una tienda se procesan los datos de varios artículos: departamento, nombre, precio y
existencia. Se sabe que hay 3 departamentos: 1=niños, 2=damas, 3=caballeros.
Considerando que los datos se cargan en un array de objetos (Ej. estructura de cada objeto:
{departamento: 2, nombre: ‘Pijama’, precio: 15, existencia: 2}), se requiere una función que
retorne la cantidad de artículos sin existencia en un departamento dado.
Función: cantidadArticulosSinExistencia.
Parámetros: articulos (array de objetos articulo), departamento (un número).
Retorno: la cantidad de artículos que no tienen existencia en el departamento indicado. 
*/

let articulos = [
    {departamento: 2, nombre: 'Pijama', precio: 15, existencia: 2},
    {departamento: 1, nombre: 'Franela', precio: 10, existencia: 5},
    {departamento: 3, nombre: 'Corbata', precio: 7, existencia: 0},
    {departamento: 3, nombre: 'Camisa', precio: 10, existencia: 0},
    {departamento: 3, nombre: 'Pantalon', precio: 15, existencia: 0},
    {departamento: 3, nombre: 'Zapato', precio: 20, existencia: 2},
    {departamento: 3, nombre: 'Reloj', precio: 5, existencia: 0},
];

let cantidadArticulosSinExistencia = (articulos, departamento) => {
    let contador = 0;
    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].departamento === departamento && articulos[i].existencia === 0) {
            contador++;
        }
    }
    return contador;
}

let salida = document.getElementById('salida');
let existenciaHombre = cantidadArticulosSinExistencia(articulos, 3);
salida.innerHTML = `Productos sin existencia en el departamento 3: <br>`;
salida.innerHTML += `${existenciaHombre}`;
