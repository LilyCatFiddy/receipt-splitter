import Expense from './expenseDescription'
import Button from './billViewButtons'

export default function billViewBottom() {
    return (
        <div className="bottomBillView">
            <div className="bottomBillViewExpenses">
                <Expense title="Original Amount" price="$5.99"/>
                <Expense title="Tax" price="$5.99"/>
                <div className="grandTotal">
                    <Expense title="Grand Total" price="$placeholder"/>
                </div>
                <div className="orangeExpense">
                    Placeholder Name: $placeholder Price
                </div>
            </div>
            <div className="bottomBillViewButtonsContainer">
                <Button title="Share"/>
                <Button title="Edit"/>
                <Button title="Delete"/>
            </div>
        </div>
    )
}