class Person {

    steps = 0

    constructor(name) {
        this.name = name
    }

    // a "função" das classes, só q sem function
    takeAStep() {
        this.steps++
    }
}

let p1 = new Person('joao')

// para fazer a função rodar
p1.takeAStep()