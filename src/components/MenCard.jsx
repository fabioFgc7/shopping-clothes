import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MenCard = () => {
  const [men, setMen] = useState([]);
  useEffect(() => {
    menFetch();
  }, []);
  const menFetch = async () => {
    const res = await fetch("/src/data/clothes.json");
    const data = await res.json();
    setMen(data.remeras);
    console.log(data.remeras);
    console.log(data.remeras.details);
  };

  return (
    <section className='w-full h-full flex justify-center items-center py-5 '>
      <div className=' w-full  grid place-items-center  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
        {men.map((men) => (
          <Link
            to={`/men/${men.id}`}
            key={men.id}
            className=' '>
            <div className='overflow-hidden rounded-md '>
              {" "}
              <img
                className='w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-110'
                src={men.img}
                alt={men.title}
              />
            </div>

            <h1 className=' text-lg font-semibold'>{men.title}</h1>
            <h2 className=' text-sm font-semibold'>{men.description}</h2>
            <p className=' text-sm font-semibold'>R${men.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
