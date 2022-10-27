class Poligono {
  constructor(altura, largura) {
    this.largura = largura;
    this.altura = altura;
  }
  get area() {
    return this.#calcularArea();
  }
  #calcularArea() {
    return this.altura * this.largura;
  }
}

let poligono = new Poligono(50, 60);
console.log(poligono.area);

class Poligono1 {
  constructor(altura, largura) {
    this.largura = largura;
    this.altura = altura;
    this.area = this.#calcularArea();
  }
  #calcularArea() {
    return this.altura * this.largura;
  }
}

let poligono1 = new Poligono1(50, 60);
console.log(poligono1.area);
