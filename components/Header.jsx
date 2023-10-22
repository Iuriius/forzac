import Image from "next/image";
import Link from "next/link";
/*
/**|======================================
/**| logo
/**|======================================
*/
import logo from "@/public/logo.png";

export const Header = () => {
  return (
    <>
      <div className="flexbetween">
        <Link className="flex link" href="/">
          <Image className="logo" src={logo} alt="Logo" width={40}></Image>
          <h4>ВИШИВАНИЙ ФОРЗАЦ</h4>
        </Link>
        <nav className="flex">
          <Link className="flex link" href="#">
            <h4>Про проєкт</h4>
          </Link>
          <Link className="flex link" href="#">
            <h4>Замовити ляльку</h4>
          </Link>
        </nav>
      </div>
    </>
  );
};
