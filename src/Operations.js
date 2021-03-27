const Operations = ({ symbol, id, onClick, operation }) => {
    return (
        <div
            className="button operation"
            id={id}
            onClick={() => onClick(operation)}
        >
            {symbol}
        </div>
    );
};

export default Operations;
