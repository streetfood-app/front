import Logo from "@image/logo.png";

export const Header = () => {
  return (
    <div className="h-20 shadow-xl px-6 mb-12">
      <div className="flex items-center h-full">
        <a href="/">
          <img className="w-30 h-14" src={Logo} alt="StreetFood" />
        </a>
      </div>
    </div>
  );
};
