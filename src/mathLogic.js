import { create, all } from "mathjs";

const config = {
    number: "BigNumber",
    precision: 8,
};

const math = create(all, config);

const handleCalc = (expression) => {
    const total = math.compile(expression);
    const result = total.evaluate();
    return math.format(result);
};

console.log(handleCalc("0.1+0.2"));

export default handleCalc;
