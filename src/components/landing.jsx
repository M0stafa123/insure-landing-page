const Landing = () => {
  return (
    <section className="relative bg-DarkViolet">
      <div className="absolute top-0 left-0 hidden w-full h-full md:block">
        <img
          className="absolute left-0 -bottom-40  md:w-[80px] lg:w-[150px]"
          src="./images/bg-pattern-intro-left-desktop.svg"
          alt="intro-left"
        />
        <img
          className="absolute top-0 right-0 z-10 md:w-[200px] lg:w-[400px]"
          src="./images/bg-pattern-intro-right-desktop.svg"
          alt="intro-right"
        />
      </div>
      <article className="flex-row-reverse items-center justify-between gap-5 m-auto md:w-11/12 md:flex">
        <span>
          <img
            className="block object-cover w-full h-[420px] md:hidden"
            src="./images/image-intro-mobile.jpg"
            alt="intro"
          />
          <img
            className="hidden md:block relative md:top-[150px] w-[540px] h-[650px]"
            src="./images/image-intro-desktop.jpg"
            alt="intro"
          />
        </span>
        <div className="relative p-5 py-[60px] md:p-0 text-center md:text-start text-white ">
          <div className="absolute top-0 left-0 block w-full h-full md:hidden">
            <img
              className="absolute top-0 left-0 w-[30%]"
              src="./images/bg-pattern-intro-left-mobile.svg"
              alt="intro-left"
            />
            <img
              className="absolute right-0 -bottom-40 w-[30%]"
              src="./images/bg-pattern-intro-right-mobile.svg"
              alt="intro-right"
            />
          </div>
          <h1 className="relative md:p-0 md:after:absolute md:after:left-0 md:after:top-[-35px] after:w-40 md:after:h-0.5 md:after:bg-white px-1 py-3 pb-0 mx-auto md:mx-0 text-3xl md:text-6xl md:max-w-[425px] font-DMSerifDisplay">
            Humanizing your insurance.
          </h1>
          <p className="my-5 text-VeryLightGray font-Karla max-w-[550px]">
            Get your life insurance coverage easier and faster. We blend our expertise
            and technology to help you find the plan that's right for you. Ensure you
            and your loved ones are protected.
          </p>
          <button className="btn">VIEW PLANS</button>
        </div>
      </article>
    </section>
  );
};

export default Landing;
