export default function billViewHead() {
    return (
        <div class="upperBillView">
            <div className='main-logo'>
                <img src="logo.png" alt="receipt splitter logo"/>
            </div>
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
    )
}