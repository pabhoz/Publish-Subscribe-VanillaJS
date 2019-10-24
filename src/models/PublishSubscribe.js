class PublishSubscribe {

    constructor() {
        this.eventos = {
            default: () => {
                console.log("acá se ejecutaría algo, si me lo definís");
            }
        };
    }

    /**
     * Este método nos permitirá subscribirnos a cualquier instancia
     * de esta clase para que ejecute un comportamiento específico al
     * momento de que una acción en concreto se lleve a cabo de tal 
		 * manera que inicialmente el usuario se suscribe y pasa explicitamente
	   * el comportamiento esperado tras la emición.
     * 
     * @param {String} nombreDelEvento 
     * @param {function} callback 
     */
    subscribe(nombreDelEvento, callback) {
        this.eventos[nombreDelEvento] = callback;
    }

    /**
     * Ejecuta la publicación del evento esperado.
     * 
     * @param {String} nombreDelEvento
     * @param {Object} data 
     * @returns void
     *  
     */
    emit(nombreDelEvento, data) {
        console.log(`Se ejecutó ${nombreDelEvento} con el valor ${data}`);
        this.eventos[nombreDelEvento](data);
    }
}