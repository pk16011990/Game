import React from "react";
import ReactDOM from "react-dom";
import Screen from "./Component/Screen";
import Resource from "./Resources/Resource";

class Game {

    init() {
        this.helium = new Resource(0, 1);
        this.screen = ReactDOM.render(<Screen />, document.querySelector("#root"));

        setInterval(() => {
            this.helium.tick();

            this.screen.setHelium(this.helium.getCurrentValue());
        }, 1000);
    }

    absorbHelium() {
        this.helium.substract(10);
    }
}

export default new Game();
