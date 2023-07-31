import { faCartShopping, faX } from "@fortawesome/free-solid-svg-icons";
import { useClothes } from "../context/ClothesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const ShoppingCart = ({ handleIcons }) => {
  const {
    handleDeleteItems,
    cartItems,
    countProducts,
    total,

    clearCart,
  } = useClothes();
  return (
    <div className='cart-items fixed z-20 md:right-10 top-3 right-4 '>
      <div className=''>
        <Link
          to={`/cart`}
          onClick={handleIcons}
          className=' cursor-pointer'>
          <FontAwesomeIcon
            icon={faCartShopping}
            className='text-4xl text-green-500  '
          />
          <div className='  flex items-center justify-center z-10  rounded-full right-2 top-1  absolute w-4 h-4 text-center'>
            <span className=''>{countProducts}</span>
          </div>
        </Link>
      </div>

      <div
        className={`carrito bg-[#2c2c2e] w-72 max-h-72 overflow-y-scroll   right-full font-semibold p-4  absolute rounded-md rounded-tr-none  `}>
        {cartItems.length ? (
          <>
            <div className=' space-y-2 font-sans  '>
              {cartItems.map((product) => (
                <>
                  <div
                    key={product.id}
                    className='p-2 w-full space-y-1 text-sm'>
                    <div className='flex space-x-4 items-center'>
                      <div className=''>
                        <img
                          src={product.clothesImages}
                          alt=''
                          className='w-[100px]'
                        />
                      </div>
                      <div className='flex justify-between space-x-5 items-center'>
                        <div className=' flex flex-col space-y-1'>
                          <p className='font-bold text-lg'>{product.title}</p>
                          <span className=' text-slate-300'>
                            Cantidad: {product.quantity}
                          </span>
                          <p>Talla: {product.selectedSize}</p>
                          <span className='text-base'>${product.price}</span>
                        </div>
                        <FontAwesomeIcon
                          className='text-red-500 text-[18px] cursor-pointer'
                          icon={faX}
                          onClick={() => handleDeleteItems(product)}
                        />
                      </div>
                    </div>
                    <div className='  space-y-5'></div>
                  </div>
                  <hr />
                </>
              ))}{" "}
              <div className=' '>
                {" "}
                <div className='flex space-x-3 items-center justify-center'>
                  <h3>Total:</h3>
                  <span className='font-bold'>${total}</span>
                </div>
                <button
                  onClick={clearCart}
                  className='w-full  bg-red-500 rounded-md px-3 py-1'>
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className='text-center font-semibold'>El carrito está vacío</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
