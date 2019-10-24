class ClassA extends PublishSubscribe {
    constructor() {
        super();
        this.eventos.cambioColor = () => {};
        this.eventos.reset = () => {};
        this.input = document.createElement("input");
        this.input.onkeyup = () => {
            this.cambioDeColor(this.input.value);
        };
    }

    cambioDeColor(nombreColor) {
        switch (nombreColor) {
            case "rojo":
                this.emit("cambioColor", "rgb(255,0,0)");
                break;
            case "azul":
                this.emit("cambioColor", "rgb(0,0,255)");
                break;
            default: 
                this.emit("reset", null);
            break;
        }
    }
}