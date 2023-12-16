
const SingleCart = ({ i, id, title, price, image, deleteCart,discription}) => {

    return <div style={{ width: "100%", display: "flex", border: "1px solid green", borderRadius: "10px", padding: "10px" }}>
        <div style={{ width: "60%", padding: "10px" }}>
            <img src={image} alt="" style={{ width: "90%", height: "100%" }} />
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <h1 style={{ color: "#4AAB76", fontWeight: "600px" }}>{title}</h1>
            <p>Ref:{16232 + i}</p>
            <p>✅ click & Collect</p>
            <p>✅ 5% off on ICICI credit Card</p>
            <p>Discription : {discription}</p>
            <p><span style={{ color: 'red' }}>Total Price</span> : ₹ {price}.00</p>
            
            <button style={{ width: "100px", backgroundColor: "red" }} onClick={(e) => deleteCart(id)}>Remove</button>
            
        </div>
    </div>
}

export default SingleCart