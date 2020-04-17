export default class Resource {
    constructor(currentValue, gainPerTick) {
        this.currentValue = currentValue;
        this.gainPerTick = gainPerTick;
    }

    tick() {
        this.currentValue += this.gainPerTick;
    }

    getCurrentValue() {
        return this.currentValue;
    }

    substract(value) {
        this.currentValue -= value;
    }
}
