export default function newBillHomePageButtons({ text, iconName }){
    return (
        <button className="newBillHomePageButton">
            <div className="newBillHomePageButtonText">
                <div>{text}</div>
                <div>{iconName}</div>
            </div>
        </button>
    )
}