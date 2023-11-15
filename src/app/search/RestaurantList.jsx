import Image from 'next/image';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant">
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="flex bg-zinc-300 rounded-lg max-h-[322px] h-[322px] max-w-[345px]"
        >
          <div className="flex flex-col rounded-lg">
            <Image
              alt=""
              className="w-full h-[140px] rounded-lg border-black"
              src=""
              width={345}
              height={140}
            />
            <div className="flex flex-col p-4">
              <div className="mb-2 text-black text-2xl font-normal font-['Arial'] capitalize">
                {restaurant.name}
              </div>
              <div className=" h-8 text-black text-opacity-60 text-sm font-normal text font-['Arial'] capitalize leading-tight">
                {restaurant.description}
              </div>
            </div>
            <div className="flex items-end pl-4 h-14">
              <div className=" text-blue-700 text-base font-normal font-['Arial'] uppercase">
                Learn More
              </div>
            </div>
          </div>
        </div>
      ))}
      {restaurants.length === 0 && (
        <p>Begin searching for a restaurant to populate the list.</p>
      )}
    </div>
  );
};

export default RestaurantList;
