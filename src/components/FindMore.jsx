const FindMore = () => {
  return (
    <section className=" howWeWork">
      <img
        className="absolute top-0 right-0 block md:hidden -z-10"
        src="./images/bg-pattern-how-we-work-mobile.svg"
        alt="how-we-work"
      />
      <img
        className="absolute top-0 right-0 hidden md:block -z-10"
        src="./images/bg-pattern-how-we-work-desktop.svg"
        alt="how-we-work"
      />
      <div className="items-center justify-between mx-auto md:w-4/5 md:flex">
        <h1 className="my-5 text-4xl font-DMSerifDisplay md:text-start md:w-[320px]">
          Find out more about how we work
        </h1>
        <button className="my-5 btn md:mx-0">HOW WE WORK</button>
      </div>
    </section>
  );
};

export default FindMore;
