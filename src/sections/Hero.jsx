import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ShoeCard from "../components/ShoeCard";
import i18n from "../i18n";
import { toArabicFormat } from "../utils/toArabicFormat";
const Hero = () => {
  const { t } = useTranslation();
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const statistics = t("hero.statistics", { returnObjects: true });
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className=" font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <br />
          <span className="text-coral-red inline-block mt-3">Dragon</span> Shoes
        </h1>
        <p
          dangerouslySetInnerHTML={{ __html: t("hero.desc") }}
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        ></p>

        <Button label={t("hero.shopButton")} iconURL={arrowRight} />

        <div className="max-sm:mx-auto">
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl sm:text-4xl font-palanquin font-bold">
                  {i18n.language === "ar"
                    ? toArabicFormat(Number.parseInt(stat.value)) + ""
                    : stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
