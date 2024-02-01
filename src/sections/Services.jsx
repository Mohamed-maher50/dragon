import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const { t } = useTranslation();
  const services = t("Services", {
    returnObjects: true,
  });
  return (
    <section className="max-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center  gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
