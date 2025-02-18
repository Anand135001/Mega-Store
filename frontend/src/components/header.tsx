import { useState } from "react";
import { FaHome, FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const user = {_id: "abcd", role: "admin"};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="header">
       <Link onClick={() => setIsOpen(false)} to={'/'}> <FaHome /> </Link>
       <Link onClick={() => setIsOpen(false)} to={'/search'}> <FaSearch /> </Link>
       <Link onClick={() => setIsOpen(false)} to={'/Cart'}> <FaShoppingBag /> </Link>

      { user?._id ? ( 
        <> 
          <button onClick={() => setIsOpen((prev) => !prev)}> <FaUser /> </button> 
          <dialog open={isOpen} >
            <div>
              {user.role === "admin" && (
                <Link to={"/admin/dashboard"} >Admin</Link>
              )}
              <Link to={"/orders"}>Orders</Link>
              <button> <FaSignOutAlt /> </button>
            </div>
          </dialog>
        
        </> ) : ( 
        <Link to={"/login"}> <FaSignInAlt /> </Link>
      )}

    </nav>
  )
}

export default Header;