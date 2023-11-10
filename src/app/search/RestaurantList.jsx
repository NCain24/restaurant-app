async function getRestaurants() {
  const res = await fetch('http://localhost:4000/restaurants');
  return res.json();
}

const RestaurantList = async () => {
  const restaurants = await getRestaurants();

  return (
    <>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="grid grid-cols-2 w-[20%] border rounded-lg gap-4 px-4 py-6">
          <h3 className="text-2xl">{restaurant.name}</h3>
          <p className="w-[40%]">{restaurant.description}</p>
          <div>{restaurant.imageUrl}</div>
        </div>
      ))}
      {restaurants.length === 0 && (
        <p>Begin searching for a restaurant to populate the list.</p>
      )}
    </>
  );
};

export default RestaurantList;