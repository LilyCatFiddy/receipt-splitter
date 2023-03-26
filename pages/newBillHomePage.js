import Button from "../components/newBillHomePageButtons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

export default function newBillHomePage(){
    return(
        <div className="outerContainer">
            <div className="newBillHomePageContainer">
                <Button text="Take a photo" iconName='📷'/>
                <Button text="Upload a screenshot" iconName='⏍' />
                <Button text="Input data manually" iconName='✏'/>
            </div>
        </div>
    )
}