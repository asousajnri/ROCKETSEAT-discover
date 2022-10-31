// Funções que recebem funções como argumentos
// Funções que poderão retornar outras funções

const numbers = [2, 4, 8, 16];
const square = (n) => n * n;

const squaredNumber = numbers.map(square);

const pause = (wait) => (fun) => setTimeout(fn, wait);

pause(600)(() => console.log("waiting 600ms"));

const wait200 = pause(200);
wait200(() => console.log("waiting 200ms"));
