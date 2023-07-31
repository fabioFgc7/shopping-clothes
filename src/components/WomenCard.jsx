import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WomenCard = () => {
  const [women, setWomen] = useState([]);
  useEffect(() => {
    menFetch();
  }, []);
  const menFetch = async () => {
    const res = await fetch("/src/data/clothes.json");
    const data = await res.json();
    setWomen(data.blusas);
    console.log(data.remeras);
  };
  return (
    <div>
      <section className='w-full h-full flex justify-center items-center py-5 '>
        <div className=' w-full  grid place-items-center  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
          {women.map((women) => (
            <Link
              to={`/women/${women.id}`}
              key={women.id}
              className=' '>
              <div className='overflow-hidden rounded-md '>
                {" "}
                <img
                  className='w-60 h-72  object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-110'
                  src={women.img}
                  alt={women.title}
                />
              </div>

              <h1 className=' text-lg font-semibold'>{women.title}</h1>
              <h2 className=' text-sm font-semibold'>{women.description}</h2>
              <p className=' text-sm font-semibold'>R${women.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WomenCard;
