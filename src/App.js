import "./App.css";

function App() {
    return (
        <main className="App container">
            <div id="display" class="display">
                Some numbers
            </div>
            <div id="clear" class="operation">
                C
            </div>
            <div class="operation">E</div>
            <div class="operation">/</div>
            <div class="operation">*</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div class="operation">-</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div class="operation">+</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div id="equals">=</div>
            <div id="zero">0</div>
            <div>.</div>
        </main>
    );
}

export default App;
