const Footer = () => {
  return (
    <footer className="my-10 bg-VeryLightGray">
      <section className="justify-between w-11/12 mx-auto flex flex-wrap items-center  min-h-[150px]">
        <span className="absolute top-0 left-0 w-full -z-10 max-h-[100%]">
          <img
            className="block md:hidden"
            src="./images/bg-pattern-footer-mobile.svg"
            alt="pattern-footer"
          />
          <img
            className="hidden md:block"
            src="./images/bg-pattern-footer-desktop.svg"
            alt="pattern-footer"
          />
        </span>
        <span>
          <img className="w-[112px] h-[18px]" src="./images/logo.svg" alt="logo" />
        </span>
        <span className="flex items-center gap-4 min-h-[40px]">
          <img
            className="w-[24px] h-[24px] md:cursor-pointer"
            src="./images/icon-facebook.svg"
            alt="facebook"
          />
          <img
            className="w-[24px] h-[24px] md:cursor-pointer"
            src="./images/icon-twitter.svg"
            alt="twitter"
          />
          <img
            className="w-[24px] h-[24px] md:cursor-pointer"
            src="./images/icon-pinterest.svg"
            alt="pinterest"
          />
          <img
            className="w-[24px] h-[24px] md:cursor-pointer"
            src="./images/icon-instagram.svg"
            alt="instagram"
          />
        </span>
      </section>
      <hr className="w-11/12 mx-auto my-10" />

      <section className="justify-between md:w-11/12 md:mx-auto md:flex">
        <div>
          <h1>OUR COMPANY</h1>
          <ul>
            <li>HOW WE WORK</li>
            <li>WHY INSURE?</li>
            <li>CHECK PRICE</li>
            <li>REVIEWS</li>
          </ul>
        </div>
        <div>
          <h1>HELP ME</h1>
          <ul>
            <li>FAQ</li>
            <li>TERMS OF USE</li>
            <li>PRIVACY POLICY</li>
            <li>COOKIES</li>
          </ul>
        </div>
        <div>
          <h1>CONTACT</h1>
          <ul>
            <li>SALES</li>
            <li>SUPPORT</li>
            <li>LIVE CHAT</li>
          </ul>
        </div>
        <div>
          <h1>OTHERS</h1>
          <ul>
            <li>CAREERS</li>
            <li>PRESS</li>
            <li>LICENSES</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
