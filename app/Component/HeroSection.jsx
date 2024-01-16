"use client";
import React from 'react';
import Image from "next/image";
import {TypeAnimation} from 'react-type-animation';
import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center mt-24    ">
            <div
                className="flex flex-col xl:pl-20 md:pl-10 sm:p-0 w-screen md:w-1/2 xl:h-[450px] lg:h-[350px] md:h-[250px] h-auto">
                <div className="flex flex-col md:px-0 sm:px-12 px-9 md:items-start items-center">
                    <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-extrabold md:text-start text-center mb-2 pt-4">
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8D1E] via-[#91F4FE] to-white">
                            Bonjour, Je suis
                        </span>
                    </h1>
                    <span
                        className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-extrabold md:text-start text-center lg:mb-8 md:mb-6 mb-4">
                        <TypeAnimation
                            sequence={[
                                "Samuel",
                                1000,
                                "Développeur Web",
                                1000,
                                "Admin Sys",
                                1000,
                                "Étudiant",
                                1000,
                                "Développeur",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                    <p className="text-[#929292] text-center md:text-start xl:text-xl lg:text-base md:text-xs text-xs lg:mb-7 md:mb-5 mb-6 font-bold">
                        Étudiant en deuxième année chez SUPINFO Caen. Passionné d&aposinformatique, je suis ouvert à
                        toute
                        opportunité de stage ou d&aposalternance pour mes études.
                    </p>
                </div>
                <div className="flex md:flex-row flex-col md:items-start items-center">
                    <Link href="#contact">
                        <button
                            className="px-8 py-3 rounded-full md:mr-8 bg-gradient-to-br from-[#FB8D1E] via-white to-[#91F4FE] text-black font-bold md:w-auto w-4/5 mb-4">
                            Contactez-moi
                        </button>
                    </Link>
                    <Link href={'/CV_Samuel_LETELLIER.pdf'} legacyBehavior>
                        <a target={'_blank'}>
                            <button
                                className="px-1 py-1 rounded-full bg-gradient-to-br from-[#FB8D1E] via-white to-[#91F4FE] hover:bg-neutral-800 text-white font-bold md:w-auto w-4/5 md:mb-0 mb-9 md:mx-0">
                            <span
                                className="block bg-[#1F1F1F] hover:bg-neutral-800 rounded-full px-7 py-2">Mon CV</span>
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
            <div
                className="flex md:mt-0 header bg-gradient-to-br from-[#FB8D1E] to-[#91F4FE] xl:h-[450px] lg:h-[350px] md:h-[250px] md:w-1/2 w-full items-center justify-center">
                <div className="rounded-full bg-gradient-to-b from-white via-transparent to-transparent left-1/2 ">
                    <Image
                        src="/hero.png"
                        alt="Hero"
                        priority={true}
                        className="w-[200px] h-[200px] xl:w-[300px] xl:h-[300px]"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};
export default HeroSection;