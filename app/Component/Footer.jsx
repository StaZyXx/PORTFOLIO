import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-wrap items-center justify-between xl:px-28 lg:px-20 md:px-12 px-4 py-6 border-t-[0.5px] border-[#929292]">
                <span>
                    <Link href={"/"}>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={75}
                            height={75}
                            className="md:w-[75px] md:h-[75px] w-[50px] h-[50px]"
                        />
                    </Link>
                </span>
                <p className="text-[#929292] md:text-base text-xs">Tout droits réservés.</p>
            </div>
        </footer>
    )
}
export default Footer;