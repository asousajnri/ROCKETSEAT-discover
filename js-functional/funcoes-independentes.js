// Funções independetes:
// - Deverá ter ao menos 1 argumento
// - Deverá retornar algo
// - Nada que acontecer lá dentro afeta o mundo externo
//  - dados imutáveis
//  - não guarda estado
//- Não faremos uso de loops (for, while), mas se houver necessidade de tal,
//  usaremos recursão (a função chama ela mesma)

const random = (number, Math) => Math.floor(Math.random() * number);

const factorial = (x) => {
  if (x === 0) return 1;
  return x * factorial(x - 1);
};

console.log(factorial(3));
