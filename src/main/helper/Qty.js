export function Qty(props) {
    const styles = {
        width: `${props.wi}px`,
        height: `${props.he}px`,

    };
    return (
        <div style={styles} className={` bg-lightGray flex items-center justify-between`}>
            <button className={`text-gray px-4  py-2`} onClick={props.handleMinus}>
                -
            </button>
            <span className="font-semibold text-[.9rem]" aria-live="polite">
                {props.quantity}
            </span>
            <button className="text-gray px-4  py-2" onClick={props.handleAdd}>
                +
            </button>
        </div>
    );
}