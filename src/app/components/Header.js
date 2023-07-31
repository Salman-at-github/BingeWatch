import Image from "next/image";
import Link from "next/link";
import navstyles from "@/app/styles/navbar.module.css"
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={navstyles.main_header}>
      <div className={navstyles.navbar_brand}>
        <Link href="/">
          <Image className="mainlogo"
            src="/Screenshot 2023-07-27 223241.png"
            alt="Logo"
            height={50}
            width={100}
          />
        </Link>
      </div>
      <Nav/>
    </header>
  );
};

export default Header;
