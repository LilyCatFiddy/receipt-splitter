import Button from "../components/newBillHomePageButtons"

export default function newBillHomePage() {
    return (
        <div className="outerContainer">
            <div className="newBillHomePageContainer">
                <Button text="Take a photo" iconName='📷'/>
                <Button text="Upload a screenshot" iconName='⏍' />
                <Button text="Input data manually" iconName='✏'/>
            </div>
        </div>
    )
}