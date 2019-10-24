let myA = new ClassA();
document.body.appendChild(myA.input);
let myB = new ClassB();
document.body.appendChild(myB.cuadradito);

myA.subscribe("cambioColor",(color) => {
    myB.pintar(color);
});

myA.subscribe("reset",() => {
    myB.pintar("rgb(255,255,255)");
});