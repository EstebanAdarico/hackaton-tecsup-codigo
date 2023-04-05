let array = [4, 5, 3, 8, 9, 10, 11, 12, 20, 13, 16, 19];

let max = array[0];
let min = array[0];
// buscando los numero maximos y minios
for (let i = 0; i < array.length; i++) {
   for (let j = array.length - 1; j >= 0; j--) {
      if (array[i] > max) {
         max = array[i];
      }
      if (array[j] < min) {
         min = array[j];
      }
   }
}
console.log(`${max + min}`);
