import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price, Rating, ...props }) => {
  return (
    <div className="flex flex-1  flex-col w-full max-sm:w-full" {...props}>
      <div className="relative">
        <img
          src={imgURL}
          alt={name}
          className="w-[282px] h-[282px]  bg-black"
        />
      </div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {Rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
