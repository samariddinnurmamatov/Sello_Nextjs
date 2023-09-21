import Image from "next/image";
import footer_logo from '@/assets/footer/logo_footer.svg'
import tolov1 from "@/assets/footer/to'lov1.svg"
import tolov2 from "@/assets/footer/to'lov2.svg";
import tolov3 from "@/assets/footer/to'lov3.svg";
import tolov4 from "@/assets/footer/to'lov4.svg";

import appstore from "@/assets/footer/appstore.svg";
import googleplay from "@/assets/footer/googleplay.svg";
import appgallery from "@/assets/footer/appgallery.svg";
import iPhone from "@/assets/footer/iPhone.png";

import facebook from "@/assets/footer/social-fb.svg";
import telegram from "@/assets/footer/social-tg.svg";
import instagram from "@/assets/footer/social-ins.svg";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container justify-between space-x-4 py-5 px-3 grid mobile:grid-cols-2 mobi2:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5">
        <div>
          <Image
            src={footer_logo}
            alt="Footer_Logo"
            width={100}
            height={50}
            style={{ width: "100%" }}
          />
          <p className="text-gray-600 text-sm">
            © 2022 OOO «Marketplace Trading»
          </p>
          <div>
            <h2 className="py-4" style={{ fontWeight: "600" }}>
              Tolov tizimlari
            </h2>
            <div className="flex items-center space-x-2">
              <div className="border border-gray-300 rounded-lg p-2 cursor-pointer">
                <Image
                  src={tolov1}
                  alt="To'lov1"
                  width={100}
                  height={50}
                  style={{ height: "30px", padding: "5px 5px" }}
                />
              </div>
              <div className="border border-gray-300 rounded-lg p-2 cursor-pointer">
                <Image
                  src={tolov2}
                  alt="To'lov2"
                  width={100}
                  height={50}
                  style={{ height: "30px", padding: "5px 5px" }}
                />
              </div>
            </div>
            <div className="flex items-center my-2 space-x-2">
              <div className="border border-gray-300 rounded-lg p-2 cursor-pointer">
                <Image
                  src={tolov3}
                  alt="To'lov3"
                  width={100}
                  height={50}
                  style={{ height: "30px", padding: "5px 5px" }}
                />
              </div>
              <div className="border border-gray-300 rounded-lg p-2 cursor-pointer">
                <Image
                  src={tolov4}
                  alt="To'lov4"
                  width={100}
                  height={50}
                  style={{ height: "30px", padding: "3px 3px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ fontWeight: "600" }} className="mb-2">
            Nima uchun bizni tanlashadi
          </h2>
          <ul>
            <li
              className="py-2 text-gray-600 text-sm"
            >
              <span className="cursor-pointer">Tolov</span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">Yetkazib berish</span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">
                Tovarni qaytarish va almashtirish
              </span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">Rekvizitlar</span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">Tarqatish punktlari</span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">Ilovalar</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 style={{ fontWeight: "600" }} className="mb-2">
            Kompaniya haqida
          </h2>
          <ul>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">Biz haqimizda</span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">Kontaktlar</span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">
                Shaxsiy malumotlarni qayta ishlash siyosati
              </span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">Ommaviy oferta</span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">Foydalanish shartlari</span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">Kop soraladigan savollar</span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              <span className="cursor-pointer">
                Aksiyaning umumiy shartlari
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 style={{ fontWeight: "600" }} className="mb-2">
            Aloqa
          </h2>
          <ul>
            <li className="py-2 text-gray-600 text-sm">
              Bizga qongiroq qiling: <br />
              <span className="cursor-pointer text-primary font-bold">
                +998 (78) 113 09 00
              </span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              Bizga yozing:{" "}
              <span className="cursor-pointer text-primary font-bold">
                support@sello.uz
              </span>
            </li>
            <li className="py-2 text-gray-600 text-sm">
              Telegram:
              <span className="cursor-pointer text-primary font-bold">
                {" "}
                @sellouz
              </span>
            </li>
          </ul>
          <div>
            <h2 style={{ fontWeight: "600" }} className="mb-3">
              Ijtimoiy tarmoqlar:
            </h2>
            <div className="flex items-center space-x-4">
              <div className="border border-gray-300 rounded-full p-2 px-3 cursor-pointer">
                <Image src={facebook} alt="facebook" />
              </div>
              <div className="border border-gray-300 rounded-full p-2 cursor-pointer">
                <Image src={telegram} alt="facebook" />
              </div>
              <div className="border border-gray-300 rounded-full p-2 cursor-pointer">
                <Image src={instagram} alt="facebook" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ fontWeight: "600" }} className="mb-2">
            Ilovani yuklab oling
          </h2>
          <div className="flex items-center space-x-2">
            <div className="rounded-lg p-1 bg-black cursor-pointer">
              <Image
                src={appstore}
                alt="To'lov1"
                width={100}
                height={50}
                style={{ height: "30px", padding: "5px 5px" }}
              />
            </div>
            <div className="rounded-lg p-1 bg-black cursor-pointer">
              <Image
                src={googleplay}
                alt="To'lov2"
                width={100}
                height={50}
                style={{ height: "30px", padding: "5px 5px" }}
              />
            </div>
          </div>
          <div className="flex items-center my-2 space-x-2">
            <div className="rounded-lg p-1 bg-black cursor-pointer">
              <Image
                src={appgallery}
                alt="To'lov3"
                width={100}
                height={50}
                style={{ height: "28px", padding: "5px 5px" }}
              />
            </div>
          </div>
          <div>
            <Image
              src={iPhone}
              alt="To'lov1"
              width={100}
              height={50}
              style={{ width: "100%", padding: "5px 5px" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
