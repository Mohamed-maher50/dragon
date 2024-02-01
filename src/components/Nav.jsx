import { Logo } from "../assets/images";
import { hamburger } from "../assets/icons";

import { useTranslation } from "react-i18next";
function Nav() {
  const { t } = useTranslation();
  const navLinks = t("nav", {
    returnObjects: true,
  });
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={Logo}
            alt="logo"
            width={130}
            className="object-contain overflow-hidden h-16 w-16 "
          />
        </a>
        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((link) => {
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-state-gray"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <img
            src={hamburger}
            className="hidden max-lg:block"
            alt="menu"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
