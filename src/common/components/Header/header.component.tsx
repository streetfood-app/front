import Logo from "../../../../public/assets/logo.png";

export const Header = () => {
  return (
    <div className="h-20 shadow-xl px-6">
      <div className="flex items-center h-full">
        <a href="/">
          <img className="w-30 h-14" src={Logo} alt="StreetFood" />
        </a>
      </div>
    </div>
  );
};
