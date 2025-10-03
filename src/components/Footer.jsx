import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full mt-10">
      <div className="w-full max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="w-full border border-gray-400 rounded-lg p-4 sm:text-left text-center">
          <h3 className="font-semibold text-lg mb-2">Контакты</h3>
          <ul className="space-y-1 text-sm">
            <div className="flex flex-col ">
              <a href="#" className=" text-[#6682A9]">
                Call-центр{" "}
              </a>
              <p className="ml-5">+998-78 555-35-00</p>
            </div>
            <div className="flex flex-col ">
              <a href="#" className=" text-[#6682A9]">
                Эл. почта{" "}
              </a>
              <p className="ml-5">info@zon.uz</p>
            </div>
            <a href="#" className="text-[#6682A9] ">
              График работы
            </a>
            <div className="flex flex-col mt-2">
              <div className="flex justify-between">
                <p>В будние</p>
                <p>с 09:00 до 18:00</p>
              </div>
              <div className="flex justify-between">
                <p>Суббота</p>
                <p>с 09:00 до 18:00</p>
              </div>
            </div>
          </ul>
        </div>

        <div className="w-full flex flex-col sm:text-left text-center gap-2">
          <div className="border border-gray-400 rounded-xl w-full h-full p-4">
            <h3>Мы в социальных сетях</h3>
            <div className="flex items-center justify-between mt-2 ">
              <a href="#">
                <img src="/tg.svg" alt="" width={40} />
              </a>
              <a href="#">
                <img src="/youtube.svg" alt="" width={40} />
              </a>
              <a href="#">
                <img src="/inst.svg" alt="" width={40} />
              </a>
              <a href="#">
                <img src="/fb.svg" alt="" width={40} />
              </a>
            </div>
          </div>
          <div className="border border-gray-400 rounded-xl w-full h-full p-4">
            <div className="flex justify-between items-center">
              <a href="#">
                <img src="/payme.svg" alt="" width={110} />
              </a>
              <a href="#">
                <img src="/click.svg" alt="" width={110} />
              </a>
            </div>
            <p className="text-center text-sm mt-2">
              Интренет магазин Zon.uz 2017-2024. Все права защищены
            </p>
          </div>
        </div>

        <div className="w-full border border-gray-400 rounded-lg p-4 sm:text-left text-center">
          <h3 className="font-semibold text-lg mb-2">Компания</h3>
          <div className="flex ">
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Реквизиты
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Вакансии
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Карта сайта
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Публичная оферта
                </a>
              </li>
            </ul>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Продавайте на Zon.uz
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Покупать как юрлицо
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full border border-gray-400 rounded-lg p-4 sm:text-left text-center">
          <h3 className="font-semibold text-lg mb-2">Помощь</h3>
          <div className="flex ">
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Вопросы и ответы
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Условия рассрочки
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Способ оптлаты
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Возврат товаров
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[#007AA7]">
                  Сервисные центры
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
