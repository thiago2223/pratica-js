//Use um laço for estruturado com .length como limite para percorrer um array de preços e somar todos eles em uma variável total.
let preços = [4, 5, 5, 52, 89, 21, 8, 6];
let total = 0;
for (let i = 0; i < preços.length; i++) {
    total += preços[i];
};
console.log(total);