import { useTranslation } from "react-i18next";
import { copyrightSign } from "../assets/icons";
import { TransparentLogo } from "../assets/images";
import { socialMedia } from "../constants";

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = t("footer.links", { returnObjects: true });

  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start relative bg-black">
          <a href="/">
            <img
              src={TransparentLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0  h-24 w-24"
            />
          </a>
          <p
            dangerouslySetInnerHTML={{ __html: t("footer.paragraph") }}
            className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm"
          ></p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>{t("footer.copyRights")}</p>
        </div>
        <p className="font-montserrat cursor-pointer">{t("footer.term")}</p>
      </div>
    </footer>
  );
};

export default Footer;
