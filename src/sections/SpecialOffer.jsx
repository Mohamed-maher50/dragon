import { useTranslation } from "react-i18next";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1" data-aos="zoom-in">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col" data-aos="zoom-in">
        <h2
          dangerouslySetInnerHTML={{ __html: t("OfferForYou.header") }}
          className="text-4xl font-palanquin font-bold"
        ></h2>
        <p className="mt-4 info-text">{t("OfferForYou.paragraph1")}</p>
        <p className="mt-6 info-text">{t("OfferForYou.paragraph2")}</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={t("OfferForYou.shopNowButton")} iconURL={arrowRight} />
          <Button
            label={t("OfferForYou.LearnMore")}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
