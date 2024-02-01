import { useTranslation } from "react-i18next";
import PopularProductCard from "../components/PopularProductCard";
import i18n from "../i18n";
import { toArabicFormat } from "../utils/toArabicFormat";

const PopularProducts = () => {
  const { t } = useTranslation();
  const products = t("products", { returnObjects: true });

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2
          className="text-4xl font-palanquin font-bold"
          dangerouslySetInnerHTML={{ __html: t("popularProducts.title") }}
        ></h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          {t("popularProducts.subTitle")}
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3  grid-cols-2 sm:gap-6 gap-14">
        {products?.map((product, index) => {
          if (i18n.language === "ar") {
            product.price = toArabicFormat(product.price) + "ج";
          } else {
            product.price += "$";
          }

          return (
            <PopularProductCard
              key={index}
              {...product}
              data-aos="zoom-in-down"
              data-aos-delay={50 * index + 1}
              data-aos-duration={1000 * (index + 1) * 0.5}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
