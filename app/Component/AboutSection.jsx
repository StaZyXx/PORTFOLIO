"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TabDataItem = [
    {
        title: "Compétences",
        id: "Compétences",
        content: (
            <div className="flex flex-wrap flex-row  justify-around mt-3 text-[#C1C1C1] font-bold">
                <div className="sm:w-auto w-full flex flex-col items-center">
                    <p className="md:text-lg text-base text-transparent bg-clip-text bg-gradient-to-r from-[#FB8D1E] to-[#91F4FE] font-extrabold sm:mr-4">Développement
                        web</p>
                    <ul className="list-disc pl-4 xl:text-base text-xs">
                        <li>HTML / CSS (Tailwind)</li>
                        <li>JavaScript (NextJS)</li>
                        <li>PHP (Symfony)</li>
                        <li>CMS (WordPress)</li>
                        <li>SEO / UIUX</li>
                    </ul>
                </div>
                <div className="sm:w-auto w-full flex flex-col items-center">
                    <p className="md:text-lg text-base text-transparent bg-clip-text bg-gradient-to-r from-[#FB8D1E] to-[#91F4FE] font-extrabold sm:mr-4">Systems
                        and Networks</p>
                    <ul className="list-disc pl-4 xl:text-base text-xs">
                        <li>Systems and networks</li>
                        <li>Windows Server</li>
                        <li>Ubuntu</li>
                        <li>Kali linux</li>
                        <li>Cisco (CCNA)</li>
                    </ul>
                </div>
                <div className="sm:w-auto w-full flex flex-col sm:items-start items-center">
                    <p className="md:text-lg text-base text-transparent bg-clip-text bg-gradient-to-r from-[#FB8D1E] to-[#91F4FE] font-extrabold sm:mr-4">Langages de programation</p>
                    <ul className="list-disc pl-4 xl:text-base text-xs">
                        <li>Python (Tkinter/PyGame)</li>
                        <li>C</li>
                        <li> C++</li>
                        <li>Java</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "Parcours",
        id: "Parcours",
        content: (
            <div className="text-white md:mx-0 mx-auto mt-2 sm:pl-3 pl-0">
                <div>
                    <p className="md:text-xl sm:text-lg text-base font-bold">SUPINFO Bachelor of engineering 1</p>
                    <ul className="list-disc pl-4 text-[#C1C1C1] md:text-lg sm:text-base text-xs">
                        <li>2022-2023</li>
                    </ul>
                </div>
                <div>
                    <p className="md:text-xl sm:text-lg text-base font-bold">Brevet Professionnel Boulangerie</p>
                    <ul className="list-disc pl-4 text-[#C1C1C1] md:text-lg sm:text-base text-xs">
                        <li>2021-2022</li>
                    </ul>
                </div>
                <div>
                    <p className="md:text-xl sm:text-lg text-base font-bold">Baccalauréat Professionnel Boulangerie-Pâtisserie</p>
                    <ul className="list-disc pl-4 text-[#C1C1C1] md:text-lg sm:text-base text-xs">
                        <li>2018-2021</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "Passions",
        id: "Passions",
        content: (
            <div className="text-white md:mx-0 mx-auto mt-2 sm:pl-3 pl-0">
                <ul className="list-disc pl-4 md:text-xl sm:text-lg text-base">
                    <li>Course a pied</li>
                    <li>Gendarmerie</li>
                    <li>Musique</li>
                    <li>Informatique</li>
                </ul>
            </div>

        ),
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("Compétences");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="flex lg:flex-row flex-col">
            <div
                className="flex md:mt-0 inverse-header bg-gradient-to-br from-[#91F4FE] to-[#FB8D1E] xl:h-[550px] lg:h-[450px] h-[250px] lg:w-1/2 w-full lg:pl-[25px] lg:justify-start justify-center">
                <Image
                    src="/deskimage.png"
                    alt="Hero"
                    priority={true}
                    className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] my-auto rounded"
                    width={400}
                    height={400}
                />
            </div>
            <div className="flex flex-col lg:w-1/2">
                <div className="lg:mt-2 mt-3 lg:mb-1 mb-4 lg:text-start text-center">
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8D1E] via-[#91F4FE] to-white xl:text-4xl lg:text-3xl md:text-xl text-lg font-extrabold pl-1">À propos de moi</span>
                </div>
                <div className=" lg:text-justify text-center">
                    <p className="xl:text-lg lg:text-base text-xs xl:px-8 lg:px-6 px-4 text-[#929292] font-semibold">
                        Je suis actuellement étudiant en deuxième année à SUPINFO, une école d'informatique renommée.
                        Passionné par le monde du développement web, de la programmation et de la cyber sécurité, j’ai une
                        soif d’apprendre des langages de programmation modernes et des meilleures frameworks ainsi que le
                        vaste monde de la cybersécurité.
                    </p>
                </div>
                <div className="flex lg:flex-row mt-1 xl:px-8 px-4 md:px-2 lg:justify-start justify-center">
                    <TabButton selectTab={() => handleTabChange("Compétences")}
                               active={tab === "Compétences"}>
                        Compétences
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("Parcours")}
                               active={tab === "Parcours"}>
                        Parcours
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("Passions")}
                               active={tab === "Passions"}>
                        Passions
                    </TabButton>
                </div>
                <div className="flex flex-col xl:px-8 px-4 md:px-2">
                    {isPending ? (
                        <p className="text-white">Loading...</p>
                    ) : (
                        TabDataItem.find((item) => item.id === tab)?.content
                    )}
                </div>
            </div>
        </section>
    );
}
export default AboutSection;