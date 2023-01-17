class Ingredient {
    _name;
    _available;
    _quantity;
    constructor(_name) {
        const name = this._name
        const available = this._available;
        const quantity = this._quantity;
        this.quantity = 1
        this.available = true
        this.name = ""
        return (name, available, quantity)

    }
    get() {

    }
    set() {
    }
    sendMessage() {
        return `Vous avez enregistré ${this.quantity} ${this.name}; cet aliment ${this.available ? 'est maintenant': 'n\'est pas'} disponible.`
    }
}

const tomate = new Ingredient("tomate")
console.log(tomate.sendMessage())

// export {Ingredient}
