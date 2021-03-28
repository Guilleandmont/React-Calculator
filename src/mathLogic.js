import { create, all } from "mathjs";

const config = {
    number: "BigNumber",
    precision: 8,
};

const math = create(all, config);

const handleCalc = (expression) => {
    try {
        const total = math.compile(expression);
        const result = total.evaluate();
        return math.format(result);
    } catch {
        return "Syntax Error";
    }
};

console.log(handleCalc("0.1+0.2"));

export default handleCalc;
