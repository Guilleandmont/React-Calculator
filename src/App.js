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

const Numbers = () => {
    const numbers = Array(10).fill(null);
    return numbers.map((i, index) => (
        <div key="index" className="button">
            {index}
        </div>
    ));
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
                    <Numbers />
                </div>
            </main>
        );
    }
}

export default App;
