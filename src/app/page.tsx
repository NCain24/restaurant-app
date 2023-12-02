import LoginButton from "./components/LoginButton";

const HomePage = async () => {

  return (
    <div className="flex items-center justify-center flex-col h-[95vh]">
      <h2 className="font-['Arial'] uppercase text-xl">
        Find your next meal here
      </h2>
      <LoginButton />
    </div>
  );
};

export default HomePage;
