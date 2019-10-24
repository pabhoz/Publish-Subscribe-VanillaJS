class ClassB extends PublishSubscribe {
    constructor() {
        super();
        this.cuadradito = document.createElement("div");
        this.cuadradito.style.width = "400px";
        this.cuadradito.style.height = "400px";
        this.cuadradito.style.border = "1px solid gray";
    }

    pintar(color) {
        this.cuadradito.style.background = color;
    }
}