import { useEffect, useState } from "react";
import CartItem from "../components/cartItem";
import { Link } from "react-router-dom";

const CartItems = [
  {
    productId: "nsns3432",
    photo: "https://m.media-amazon.com/images/I/61XvYOrqVeL._SX522_.jpg", 
    name: "Earbirds",
    price: "$2423",
    stock: 10,
    quantity: 3,
  }
];


const subtotal = 322;
const tax = Math.round(subtotal * 0.09);
const shippingCharges = 8;
const discount = 30;
const total = subtotal + tax + shippingCharges - discount;

const Cart = () => {

  const [couponCode, setCouponCode] = useState<string>("");
  const [isVaildCouponCode, setIsVaildCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutid = setTimeout(() => {
        if(Math.random() > 0.5){
           setIsVaildCouponCode(true);
        }
        else{
          setIsVaildCouponCode(false);
        }
    }, 1000);
    
    return () => {
       clearTimeout(timeOutid);
       setIsVaildCouponCode(false);
    }
  }, [couponCode]);


  return (
    <div className="cart">
      <main>
        { CartItems.length > 0 ? CartItems.map((i, idx) => (
            <CartItem key={idx} cartItem={i}/>
        )) : <h1>No Items Added</h1>  }

      </main>
      
      <aside>
        <p>SubTotal: ${subtotal}</p>
        <p>Shipping: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>Discount: <em className="red" >${discount}</em> </p>
        <p> <b>Total:${total}</b> </p>

        <input type="text" value={couponCode} onChange={e => setCouponCode(e.target.value)} placeholder="Apply Coupon Code"/>

        { couponCode && (
            isVaildCouponCode ? (
              <span className="green"> Available Discount<b>: ${Math.floor(Math.random() * 50)} </b> </span>
              ) : (
              <span className="red">In vaild Coupon Code</span>
            )
        )}

        {
          CartItems.length > 0 && <Link to="/shipping">Checkout</Link>
        }
        
      </aside>
    </div>
  )
}

export default Cart;