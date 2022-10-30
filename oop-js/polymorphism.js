class Atleta {
  peso;
  categoria;
  constructor(peso) {
    this.peso = peso;
    this.definirCategoria();
  }
  definirCategoria() {
    if (this.peso <= 50) {
      this.categoria = "infantil";
    } else if (this.peso <= 65) {
      this.categoria = "juvenil";
    } else {
      this.categoria = "adulto";
    }
  }
}

class Lutador extends Atleta {
  constructor(peso) {
    super(peso);
  }
  definirCategoria() {
    if (this.peso <= 50) {
      this.categoria = "pluma";
    } else if (this.peso <= 65) {
      this.categoria = "leve";
    } else if (this.peso <= 75) {
      this.categoria = "meio-leve";
    } else {
      this.categoria = "pesado";
    }
  }
}

const lutador = new Lutador(65);
console.log(lutador);
