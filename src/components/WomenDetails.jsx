import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useClothes } from "../context/ClothesContext";

export const WomenDetails = () => {
  const { handleAddToCart, setIsActiveBorder, isActiveBorder } = useClothes();
  const { id } = useParams();
  // console.log(id);
  const [womenDetails, setWomenDetails] = useState(null);
  const [womenImages, setWomenImages] = useState([]);
  const [womenTalles, setWomenTalles] = useState([]);
  const [images, setImages] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [clothesImages, setclothesImages] = useState(womenImages[0]);
  const [selectedSize, setSelectedSize] = useState(womenTalles[0]);

  useEffect(() => {
    menFetchDetails();
  }, []);
  const menFetchDetails = async () => {
    const res = await fetch("/src/data/clothes.json");
    const data = await res.json();
    const women = data.blusas.find((el) => el.id === id);
    setWomenDetails(women.details);
    setImages(women.details.image);
    setclothesImages(women.details.image);
    setWomenImages(women.details.allImage);
    setWomenTalles(women.details.tallas);
    console.log(women.details);
  };
  if (!womenDetails) {
    return <div className=' text-center text-xs'>Loading...</div>;
  }
  const addImages = (image) => {
    setImages(image);
    setclothesImages(image);
    console.log(image);
  };
  const handleSizeClick = (size, index) => {
    setIsActiveBorder(false);
    if (size !== selectedSize) {
      setSelectedSize(size);
      setIsActive(index);
    }
    console.log(size);
  };
  return (
    <div className='w-full p-5'>
      <div className='flex md:justify-around justify-center items-center md:flex-row flex-col gap-5 '>
        <div className=' flex md:flex-row flex-col gap-5 md:space-x-10 justify-center items-center'>
          {" "}
          <div className='flex md:flex-col flex-row md:gap-4 gap-2 justify-center'>
            {womenImages.map((el, index) => (
              <img
                onClick={() => addImages(el)}
                key={index}
                className='md:w-20 w-16 cursor-pointer rounded-md'
                src={el}
                alt='Image'
              />
            ))}
          </div>
          <img
            className='rounded-md hover:cursor-pointer h-64 md:w-auto'
            onClick={() => addImages(images)}
            src={images}
            alt='Clothes'
          />
        </div>
        <div className=' space-y-2 font-serif'>
          <h1 className='text-[20px] font-bold'>{womenDetails.title}</h1>
          <p className='text-[16px] text-left'>{womenDetails.description}</p>
          <p className='text-lg font-bold'>R$ {womenDetails.price}</p>
          <div className='space-y-1'>
            <h2>Selecciona tu talla</h2>
            <div className='flex gap-4 '>
              {womenTalles.map((size, index) => (
                <button
                  className={`md:text-xl font-bold border-2 rounded-md px-4 py-1 ${
                    isActive === index ? "border-slate-900" : ""
                  }  hover:border-slate-900 ${
                    isActiveBorder ? "border-red-500" : ""
                  }  `}
                  key={size}
                  value={selectedSize}
                  onClick={() => handleSizeClick(size, index)}>
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            className=' text-center rounded-md px-4 py-2 bg-slate-900 hover:bg-slate-800'
            onClick={() =>
              handleAddToCart({ ...womenDetails, selectedSize, clothesImages })
            }>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
