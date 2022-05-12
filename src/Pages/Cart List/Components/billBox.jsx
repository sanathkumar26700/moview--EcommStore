import '../cart-list.css'
import {useUserData} from '../../../Context/userDataContext'




const BillBox = () => {

    const {userData:{cartListData}} = useUserData()

    const totalPrice = cartListData.reduce((acc, curr) =>{
        return acc = acc + (curr.price * curr.qty)
    },0)

    const totalDiscountedPrice = cartListData.reduce((acc, curr) =>{
        acc = acc + (curr.discountedPrice * curr.qty)
        return acc
    },0)

    const totalDiscount = totalPrice - totalDiscountedPrice
    
    const totalQuantity = cartListData.reduce((acc, curr) =>{
        acc = acc + (curr.qty)
        return acc
    },0)



        return (
            <aside className="billing__section side-shadow">
                <div className="bill__box">
                    <h1>Your bill</h1>
                    <div className="bill__details">
                        <div className="bill__details--element flex--center">
                            <span className="bill__details--title">Price ({totalQuantity} items)</span>
                            <span className="bill__details--subtitle">₹ {totalPrice}</span>
                        </div>
                        <div style={{color : "green"}}className="bill__details--element flex--center">
                            <span className="bill__details--title">Discounts</span>
                            <span className="bill__details--subtitle">- ₹ {totalDiscount}</span>
                        </div>
                        <div className="bill__details--element flex--center">
                            <span className="bill__details--title">Shipping charges</span>
                            <span className="bill__details--subtitle">0</span>
                        </div>
                        <div className="bill__details--element flex--center">
                            <span className="bill__details--title">Total</span>
                            <span className="bill__details--subtitle">₹ {totalDiscountedPrice}</span>
                        </div>
                    </div>
                    <button class="btn btn__primary btn__primary--animated">Proceed to pay</button>
                </div>
            </aside>
    )
}

export default BillBox