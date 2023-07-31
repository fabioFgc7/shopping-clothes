import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClothes } from "../context/ClothesContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cartItems, total, handleDeleteItems } = useClothes();
  return (
    <div className='flex md:justify-around md:flex-row flex-col md:items-center gap-10  p-10'>
      <div className='w-full space-y-3'>
        <h1 className='text-left font-medium  text-xl pb-3 md:mt-6 mt-3'>
          Bolsa de compras
        </h1>
        {cartItems.length ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className='flex space-x-4 md:justify-start font-serif justify-center w-full '>
              <div className=''>
                <img
                  className='md:w-40 md:h-44 w-32  h-36  rounded-md'
                  src={item.clothesImages}
                  alt={item.title}
                />
              </div>
              <div className='flex flex-col space-y-1 justify-center w-full '>
                <h2 className='md:text-[20px] text-[18px] font-bold'>
                  {item.title}
                </h2>
                <p className='md:text-[18px] text-[16px] font-semibold'>
                  {item.description}
                </p>
                <p>
                  Talla
                  <span className='ml-2 font-bold text-gray-200'>
                    {item.selectedSize}
                  </span>
                </p>
                <p>
                  Cantidad:
                  <span className='ml-1 font-bold text-gray-200'>
                    {item.quantity}
                  </span>
                </p>
                <div className=''>
                  <button onClick={() => handleDeleteItems(item)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className=' text-left font-semibold font-serif'>
            No hay productos en tu bolsa de compra.{" "}
          </div>
        )}
      </div>

      {/* {cartItems.length > 0 && ( */}
      <div className='md:w-1/2 md:p-5 text-left'>
        <div className='space-y-3'>
          <h1 className='text-xl font-medium text-left'>Resumen</h1>
          <div className='flex justify-between'>
            <h2>Subtotal </h2>
            <p>{total === 0 ? "—" : "RS" + total}</p>
          </div>
          <div className='flex justify-between'>
            <p>Gastos de envío y gestión estimados</p>
            <p>Gratis</p>
          </div>
          <hr />
          <div className='flex justify-between'>
            <h2>Total </h2>
            <p className=' font-bold'> {total === 0 ? "—" : "RS" + total}</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button className='w-full py-2 bg-slate-900 text-white rounded-full mt-5 font-extrabold'>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
