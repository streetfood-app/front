import { FC, PropsWithChildren } from "react";

interface FooterBookProps {
  href: string;
}
export const FooterBook: FC<FooterBookProps & PropsWithChildren> = ({
  href,
  children,
}) => {
  return (
    <div className="w-[17.813rem] text-center text-txt-gray text-[0.938rem] ">
      <h3 className="text-white text-xl font-semibold uppercase mb-[2rem]">
        Book a table
      </h3>
      <p>Dogfood och Sliders foodtruck.</p>
      <p className="mb-[1rem]">Under Om oss kan ni läsa</p>
      <a
        className="text-txt-yellow font-semibold  transition duration-150 border-b-2 border-transparent hover:border-txt-yellow"
        href={href}
      >
        {children}
      </a>
    </div>
  );
};
