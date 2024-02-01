import { useTranslation } from "react-i18next";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  const { t } = useTranslation();
  const reviews = t("customerReviews.reviews", {
    returnObjects: true,
  });
  return (
    <section className="max-container">
      <h3
        data-aos="flip-up"
        dangerouslySetInnerHTML={{ __html: t("customerReviews.title") }}
        className="font-palanquin text-center text-4xl font-bold"
      ></h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        {t("customerReviews.paragraph")}
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            index={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
