import { FaPlus } from "react-icons/fa6";

type ProductProps = {
    productId: string;
    photo: string; 
    name: string;
    price: number;
    stock: number;
    handler: () => void;
}


const ProductCard = ({productId, name, price, photo, stock, handler}: ProductProps) => {
  return (
    <div className="product-card">
      
      <img src={photo} alt="{name}"/>
      <p>{name}</p>
      <span>${price}</span>
      
      <div>
        <button onClick={() => handler()}> 
          <FaPlus /> 
        </button>
      </div>

    </div>  
  )
}

export default ProductCard;