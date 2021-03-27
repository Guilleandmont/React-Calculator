import React from "react";
import "./App.css";
import {
    FaBackspace,
    FaDivide,
    FaEquals,
    FaMinus,
    FaPlus,
    FaTimes,
} from "react-icons/fa";

const Numbers = ({ symbol, id }) => {
    return (
        <div className="button" id={id}>
            {symbol}
        </div>
    );
};

const Operations = ({ symbol, id }) => {
    return (
        <div className="button operation" id={id}>
            {symbol}
        </div>
    );
};

class App extends React.Component {
    render() {
        return (
            <main>
                <div className="display-container">
                    <div className="operation">3 + 5 * 6 - 2 / 4</div>
                    <div className="result">{3 + 5 * 6 - 2 / 4}</div>
                </div>
                <div className="grid-container">
                    <Operations symbol="C" id="clear" />
                    <Operations symbol={<FaBackspace />} id="backspace" />
                    <Operations symbol={<FaDivide />} id="divide" />
                    <Operations symbol={<FaTimes />} id="multiply" />

                    <Numbers symbol="7" id="seven" />
                    <Numbers symbol="8" id="eight" />
                    <Numbers symbol="9" id="nine" />

                    <Operations symbol={<FaPlus />} id="substract" />

                    <Numbers symbol="4" id="four" />
                    <Numbers symbol="5" id="five" />
                    <Numbers symbol="6" id="six" />

                    <Operations symbol={<FaMinus />} id="add" />

                    <Numbers symbol="1" id="two" />
                    <Numbers symbol="2" id="one" />
                    <Numbers symbol="3" id="three" />

                    <Operations symbol={<FaEquals />} id="equals" />
                    <Numbers symbol="0" id="zero" />
                    <Numbers symbol="." id="decimal" />
                </div>
            </main>
        );
    }
}

export default App;
