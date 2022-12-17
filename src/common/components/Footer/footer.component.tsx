import Logo from "@image/logo-footer.png";
import { FooterAddress } from "../Footer-info/footer-address/footer-address.component";
import { FooterBook } from "../Footer-info/footer-book/footer-book.component";
import { FooterOpening } from "../Footer-info/footer-opening/footer-opening.component";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-dark">
        <div className="pt-[6.25rem] flex justify-center">
          <a href="/">
            <img className="w-30 h-14" src={Logo} alt="StreetFoood" />
          </a>
        </div>
        <div className="px-[1.875rem] py-[5.625rem]">
          <ul className="flex justify-center">
            <li>
              <FooterAddress />
            </li>
            <li>
              <FooterBook href="tel:3473628772">347-362-8772</FooterBook>
            </li>
            <li>
              <FooterOpening />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-light-green">
        <div className="flex justify-between items-center px-[1.875rem] py-[2.5rem] text-sm text-white">
          <p>
            Copyright &#169; 2022{" "}
            <span className="text-txt-yellow">streetfood</span>. All Rights
            Reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              className="transition duration-150 border-b-2 border-transparent hover:border-txt-yellow"
              href="https://www.linkedin.com/in/oleh-yavoriv/"
            >
              Oleh Yavoriv
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
