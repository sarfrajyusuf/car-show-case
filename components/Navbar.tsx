"use client";
import Link from "next/link";
import Image from "next/image";
import { CustomButton, SignUp } from ".";
import { useState } from "react";

// export interface IUser {
//   name: string;
//   email: string;
//   password: string;
// }
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full absolute z-10">
      <nav className="max--w-[14040px] max-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="car logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={() => setIsOpen(true)}
        />
      </nav>

      <SignUp isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </header>
  );
};

export default Navbar;
