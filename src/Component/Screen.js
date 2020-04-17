import React from "react";
import Game from "../Game";

export default class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            helium: 0
        };
    }

    setHelium(helium) {
        this.setState({
            helium: helium
        })
    }

    render() {
        return (
            <div>
                <div>Welcome to Games</div>
                <div>Helium: {this.state.helium}</div>
                <button onClick={() => {Game.absorbHelium()}}>Absorb helium</button>
            </div>
        );
    }
}
