import DevServer from 'next/dist/server/dev/next-dev-server';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { isCallLikeExpression } from 'typescript';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant">
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="card_map"
        >
          <div className="card_container">
            <Image
              alt=""
              className="restaurant_image"
              src=""
              width={345}
              height={140}
            />
            <div className="card_text">
              <div className="restaurant_name">
                {restaurant.name}
              </div>
              <div className="restaurant_desc">
                {restaurant.description}
              </div>
            </div>
            <div className="card_footer">
              <div className="learn_more_btn">
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