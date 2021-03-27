import React from "react";
import "./App.css";
import Numbers from "./Numbers";
import Operations from "./Operations";
import {
    FaBackspace,
    FaDivide,
    FaEquals,
    FaMinus,
    FaPlus,
    FaTimes,
} from "react-icons/fa";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operation: "",
            result: "",
        };
        this.handleNumbers = this.handleNumbers.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleBackspace = this.handleBackspace.bind(this);
        this.handleOperations = this.handleOperations.bind(this);
    }

    handleNumbers(number) {
        this.setState((state) => ({
            result: state.result + number,
        }));
    }

    handleClear() {
        this.setState(() => ({
            result: "",
            operation: "",
        }));
    }

    handleBackspace() {
        this.setState((state) => ({
            result: state.result.slice(0, state.result.length - 1),
        }));
    }

    handleOperations(operation) {
        this.setState((state) => ({
            result: state.result + operation,
        }));
    }

    render() {
        return (
            <main>
                <div className="display-container">
                    <div className="operation">{this.state.operation}</div>
                    <div className="result">
                        {this.state.result === "" ? 0 : this.state.result}
                    </div>
                </div>
                <div className="grid-container">
                    <Operations
                        symbol="C"
                        id="clear"
                        onClick={this.handleClear}
                    />
                    <Operations
                        symbol={<FaBackspace />}
                        id="backspace"
                        onClick={this.handleBackspace}
                    />
                    <Operations
                        symbol={<FaDivide />}
                        id="divide"
                        operation=" / "
                        onClick={this.handleOperations}
                    />
                    <Operations
                        symbol={<FaTimes />}
                        id="multiply"
                        operation=" * "
                        onClick={this.handleOperations}
                    />

                    <Numbers
                        symbol="7"
                        id="seven"
                        onClick={this.handleNumbers}
                    />
                    <Numbers
                        symbol="8"
                        id="eight"
                        onClick={this.handleNumbers}
                    />
                    <Numbers
                        symbol="9"
                        id="nine"
                        onClick={this.handleNumbers}
                    />

                    <Operations
                        symbol={<FaMinus />}
                        id="substract"
                        operation=" - "
                        onClick={this.handleOperations}
                    />

                    <Numbers
                        symbol="4"
                        id="four"
                        onClick={this.handleNumbers}
                    />
                    <Numbers
                        symbol="5"
                        id="five"
                        onClick={this.handleNumbers}
                    />
                    <Numbers symbol="6" id="six" onClick={this.handleNumbers} />

                    <Operations
                        symbol={<FaPlus />}
                        id="add"
                        operation=" + "
                        onClick={this.handleOperations}
                    />

                    <Numbers symbol="1" id="two" onClick={this.handleNumbers} />
                    <Numbers symbol="2" id="one" onClick={this.handleNumbers} />
                    <Numbers
                        symbol="3"
                        id="three"
                        onClick={this.handleNumbers}
                    />

                    <Operations symbol={<FaEquals />} id="equals" />
                    <Numbers
                        symbol="0"
                        id="zero"
                        onClick={this.handleNumbers}
                    />
                    <Numbers symbol="." id="decimal" />
                </div>
            </main>
        );
    }
}

export default App;
