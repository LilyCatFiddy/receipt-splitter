export default function expenseDescription({ title, price, }) {
    return (
        <div className="expenseDescription">
            <div>{title}:</div>
            <div>{price}</div>
        </div>
    )
}