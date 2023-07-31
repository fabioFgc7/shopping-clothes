import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [ropas, setRopas] = useState([]);
  useEffect(() => {
    menFetch();
  }, []);
  const menFetch = async () => {
    const res = await fetch("/src/data/clothes.json");
    const data = await res.json();

    const allRopas = [...data.remeras, ...data.blusas];
    const ropa = await allRopas.toSorted(() => 0.5 - Math.random());
    setRopas(ropa);
    // console.log(data.remeras);
  };

  return (
    <div>
      <section className='w-full h-full flex justify-center items-center py-5 '>
        <div className=' w-full  grid place-items-center  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
          {ropas.map((men) => (
            <Link
              to={`/men/${men.id}`}
              key={men.id}
              className=' '>
              <div className='overflow-hidden rounded-md '>
                {" "}
                <img
                  className='w-60 h-72 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-110 '
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
    </div>
  );
};
