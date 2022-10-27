class Parafuso {
  constructor() {
    if (this.constructor === Parafuso)
      throw new Error("Class abstrata não pode ser instanciada");
  }
  get tipo() {
    throw new Error('Método "get tipo()" precisa ser implementado');
  }
}

class Fenda extends Parafuso {
  constructor() {
    super();
  }
  get tipo() {
    return "fenda";
  }
}

class Philips extends Parafuso {
  constructor() {
    super();
  }
  get tipo() {
    return "philips";
  }
}
