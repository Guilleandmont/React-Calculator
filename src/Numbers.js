const Numbers = ({ symbol, id, onClick }) => {
    return (
        <div className="button" id={id} onClick={() => onClick(symbol)}>
            {symbol}
        </div>
    );
};

export default Numbers;
