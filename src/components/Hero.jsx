function Hero() {
  return (
    <section className="mb-10">
      <div className="w-[100%] mb-6">
        <img src="/hero.png" alt="" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[3%] p-4">
        <a href="#">
          <img src="/11.svg" alt="" />
        </a>
        <a href="#">
          <img src="/22.svg" alt="" />
        </a>
        <a href="#">
          <img src="/33.svg" alt="" />
        </a>
        <a href="#">
          <img src="/44.svg" alt="" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
