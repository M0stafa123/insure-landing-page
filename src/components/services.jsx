const Services = () => {
  return (
    <section className="p-10 mx-auto text-center md:p-0 md:py-10 md:text-start md:w-11/12">
      <h1 className="my-5 text-4xl font-normal md:text-6xl font-DMSerifDisplay">
        We're different
      </h1>
      <article className="grid gap-5 md:grid-cols-3">
        <div className="my-6">
          <img
            className="mx-auto md:mx-0 w-[86px] h-[86px]"
            src="./images/icon-snappy-process.svg"
            alt="snappy-process"
          />
          <h2 className="my-5 text-2xl font-DMSerifDisplay">Snappy Process</h2>
          <p className=" text-DarkGrayishViolet max-w-[350px]">
            Our application process can be completed in minutes. not hours. Don't get
            stuck filling in tedious forms.
          </p>
        </div>
        <div className="my-6">
          <img
            className="mx-auto md:mx-0 w-[86px] h-[86px]"
            src="./images/icon-affordable-prices.svg"
            alt="affordable-prices"
          />
          <h2 className="my-5 text-2xl font-DMSerifDisplay">Affordable Prices</h2>
          <p className=" text-DarkGrayishViolet max-w-[350px]">
            We don't want you worrying about high monthly costs. Our prices may be low.
            but we still offer the best coverage possible.
          </p>
        </div>
        <div className="my-6">
          <img
            className="mx-auto md:mx-0 w-[86px] h-[86px]"
            src="./images/icon-people-first.svg"
            alt="people-first"
          />
          <h2 className="my-5 text-2xl font-DMSerifDisplay">People First</h2>
          <p className=" text-DarkGrayishViolet max-w-[350px]">
            Our plans aren't full of conditions and clauses to prevent payouts. We make
            sure you're covered when you need it.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Services;
