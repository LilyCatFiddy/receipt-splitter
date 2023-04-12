import Button from './newBillHomePageButtons'

export default function newaBillHomePageBody() {
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