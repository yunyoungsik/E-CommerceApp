'use client';

import Image from 'next/image';
import { useState } from 'react';

// const images = [
//   {
//     id: 1,
//     url: 'https://images.pexels.com/photos/1891724/pexels-photo-1891724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     id: 2,
//     url: 'https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=300',
//   },
//   {
//     id: 3,
//     url: 'https://images.pexels.com/photos/3130372/pexels-photo-3130372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     id: 4,
//     url: 'https://images.pexels.com/photos/1933589/pexels-photo-1933589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
// ];

const ProductImages = ({items}:{items: any}) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt="test"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      <div className='flex justify-between gap-4 mt-8'>
        {items.map((item:any, i:number) => (
          <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item._id} onClick={() => setIndex(i)}>
            <Image src={item.image?.url} alt="test" fill sizes="30vw" className="object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
