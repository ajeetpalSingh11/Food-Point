const Shimmer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="bg-gray-200 w-32 m-5 p-5 rounded-lg"></div>
        <div className="bg-gray-200 w-32 m-5 p-5 rounded-lg"></div>
        <div className="bg-gray-200 w-32 m-5 p-5 rounded-lg"></div>
      </div>
      <div className="flex flex-wrap">
        {[...Array(8)].map((e, index) => (
          <div
            key={index}
            className="bg-gray-200 w-[230px] h-[360px] m-4 p-4 rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
