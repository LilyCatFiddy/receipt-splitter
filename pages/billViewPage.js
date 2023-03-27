import Expense from "../components/expenseDescription"
import Button from "../components/billViewButtons"

export default function billViewPage() {
    return (
        <div className="billViewPage">
            <div className="upperBillView">
                <div>ICON</div>
                <div className="centerUpperBillView">
                    <h6>Summary for</h6>
                    <p>"Bill Name placeholder"</p>
                    <div className="profileUpperBillView">
                        <div>Profile Icon</div>
                        <div>Name placeholder</div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="bottomBillView">
                <div className="bottomBillViewExpenses">
                    <Expense title="Orignal Amount" price="$5.99"/>
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
        </div>
    )
}