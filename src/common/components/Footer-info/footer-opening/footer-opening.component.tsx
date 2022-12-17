import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const FooterOpening = () => {
  return (
    <div className="w-[17.813rem] text-center text-txt-gray text-[0.938rem] ">
      <h3 className="text-white text-xl font-semibold uppercase mb-[2rem]">
        Opening hours
      </h3>
      <p>
        Monday – Friday: <span className="text-white">8am – 4pm</span>
      </p>
      <p className="mb-[1rem]">
        Saturday: <span className="text-white">9am – 5pm</span>
      </p>
      <div>
        <ul className="flex justify-evenly text-xl text-white">
          <li className="hover:text-txt-yellow  transition duration-150">
            <a href="#Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="hover:text-txt-yellow  transition duration-150">
            <a href="#Twitter">
              <FontAwesomeIcon icon={faSquareTwitter} />
            </a>
          </li>
          <li className="hover:text-txt-yellow  transition duration-150">
            <a href="#YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
