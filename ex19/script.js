//rie um array de números desordenados. Tente usar .sort(). Descubra por que ele ordena números de forma errada (como texto) e corrija passando a função auxiliar (a, b) => a - b.
let nums = [2, 7, 8, 2, 99, 15, 1, 73, 32, 91];
nums.sort((a, b) => a - b);
console.log(nums);