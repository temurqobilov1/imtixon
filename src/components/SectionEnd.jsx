function SectionEnd() {
  return (
    <section className="max-h-[284px] mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
      <div className="border border-gray-400 rounded-lg cursor-pointer hover:shadow-lg">
        <img className="rounded-t-lg w-full" src="/f1.svg" alt=""/>
        <div className="p-3">
          <p className="text-[#6682A9]">13.06.2023</p>
          <p className="text-sm">Виброметры для двигателей и механизмов</p>
        </div>
      </div>
      <div className="border border-gray-400 rounded-lg cursor-pointer hover:shadow-lg">
        <img className="rounded-t-lg w-full" src="/f2.svg" alt="" />
        <div className="p-3">
          <p className="text-[#6682A9]">12.06.2023</p>
          <p  className="text-sm">Частотный преобразователь — что такое и для чего он нужен</p>
        </div>
      </div>
      <div className="border border-gray-400 rounded-lg cursor-pointer hover:shadow-lg">
        <img className="rounded-t-lg w-full" src="/f3.svg" alt="" />
        <div className="p-3">
          <p className="text-[#6682A9]">11.06.2023</p>
          <p  className="text-sm">Зачем нужен такой прибор, как лазерный тахометр?</p>
        </div>
      </div>
      <div className="border border-gray-400 rounded-lg cursor-pointer hover:shadow-lg">
        <img className="rounded-t-lg w-full" src="/f4.svg" alt="" />
        <div className="p-3">
          <p className="text-[#6682A9]">10.04.2023</p>
          <p  className="text-sm">Люксометр - Измеритель яркости и освещённости</p>
        </div>
      </div>
      <div className="border border-gray-400 rounded-lg cursor-pointer hover:shadow-lg">
        <img className="rounded-t-lg w-full" src="/f5.svg" alt="" />
        <div className="p-3">
          <p className="text-[#6682A9]">09.04.2023</p>
          <p  className="text-sm">Термометр для измерения температуры объекта</p>
        </div>
      </div>
    </section>
  );
}

export default SectionEnd;
