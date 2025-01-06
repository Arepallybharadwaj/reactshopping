const Navigation =()=>{
    return(
        <div>
        <nav>
            <div className="logo">
            <img src="data:image/png;base64,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" alt="bhannu"/>
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>

            <button style={{border:"1px solid black", borderRadius:"5px 2px 4px 5px"}}>Login</button>
        </nav>

    </div>
    )
}
export default Navigation;