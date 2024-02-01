import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import { useTranslation } from "react-i18next";
const SuperQuality = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about-us"
      className="flex justify-between overflow-hidden items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div
        className="flex flex-1 flex-col"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-anchor-placement="top-center"
        data-aos-mirror="true"
        data-aos-easing="ease-in-out"
      >
        <h2
          dangerouslySetInnerHTML={{ __html: t("SuperQuality.title") }}
          className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold"
        ></h2>
        <p className="mt-4 lg:max-w-lg info-text">
          {t("SuperQuality.subTitle")}
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          {t("SuperQuality.paragraph")}
        </p>
        <div className="mt-11 capitalize">
          <Button label={t("SuperQuality.viewButton.label")} />
        </div>
      </div>

      <div
        className="flex-1 flex justify-center items-center"
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
