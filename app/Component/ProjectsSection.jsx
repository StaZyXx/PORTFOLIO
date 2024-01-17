"use client";
import 'swiper/css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCoverflow, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsSection = () => {
    const textImage1 =
        "Cardinals Chains est un jeu de réflexion et de logique. Le but est de relier tous les cardinaux entre eux en utilisant des chaînes de longueur. Les chaînes ne peuvent pas se croiser. Le jeu est composé de 30 niveaux de difficulté croissante. Il est possible de créer ses propres niveaux. Ce projet a été effectué en première année de SUPINFO. Ce projet a été effectué en C en groupe de 2.";
    const textImage2 =
        "Quorridor est un jeu de plateau. Le but est d'atteindre le premier la ligne opposée. Chaque joueur dispose d'un nombre de murs défini au début de partie suivant la taille du plateau qu'il peut placer sur le plateau pour bloquer son adversaire. Le jeu est composé de 3 modes de jeu: Joueur contre joueur (LOCAL), Joueur contre joueur (LAN) et Joueur contre IA. Ce projet a été effectué en première année de SUPINFO. Ce projet a été effectué en Python en groupe de 4.";
    const textImage3 =
        "Puissance 4 est un jeu de plateau. Pour gagner, rien de plus simple le but est d'aligner 4 pions de sa couleur horizontalement, verticalement ou en diagonale. Ce projet a été effectué en première année de SUPINFO. Ce projeta été effectué en HTML, CSS et JavaScript en groupe de 2.";
    const textImage4 =
        "The Laying Grass est un jeu de réflexion et de logique. Le but est de former le plus grand carré d'herbe possible avec les cases d'herbes qui ont une forme similaires aux pièces de tetris, ces dernières nous sont attribués a chaque tour. Il y également des cases bonus qui vont venir avantager ou au contraire ralentir le joueur adverse. Ce projet a été effectué en deuxième année de SUPINFO. Ce projet a été effectué en C++ en groupe de 2.";

    const textImage5 = "Flixify est un site de streaming de films et de séries. Il est possible de s'inscrire, de se connecter, de rechercher des films et des séries, de les noter et de les commenter. Ce projet a été effectué en première année de SUPINFO. Ce projet a été effectué en PHP, HTML, CSS et JavaScript en groupe de 2.";
    const slides = [
        {
            image: '/cardinalsChains.png',
            title: 'Cardinals Chains',
            languages: 'Langages utilisés: (C)',
            text: textImage1,
            github: 'https://github.com/StaZyXx/cardinals_chains_c',
        },
        {
            image: '/quorridor.png',
            title: 'Quorridor',
            languages: 'Langages utilisés: (Python)',
            text: textImage2,
            github: 'https://github.com/StaZyXx/ProjetFin1erAnnee',
        },
        {
            image: '/puissance4.png',
            title: 'Puissance 4',
            languages: 'Langages utilisés: (HTML, CSS, JavaScript)',
            text: textImage3,
            github: 'https://github.com/StaZyXx/Puissance-4-JS',
        },
        {
            image: '/layingGrass.png',
            title: 'The Laying Grass',
            languages: 'Langages utilisés: (C++)',
            text: textImage4,
            github: 'https://github.com/StaZyXx/2CCCPP',
        },
        {
            image: '/flixify.png',
            title: 'Flixify',
            languages: 'Langages utilisés: (PHP, HTML, CSS, JavaScript)',
            text: textImage5,
            github: 'https://github.com/StaZyXx/1PHPD',
        }
    ];

    const [currentSlideText, setCurrentSlideText] = useState(slides[0].text);
    const [currentSlideTitle, setCurrentSlideTitle] = useState(slides[0].title);
    const [currentSlideLanguages, setCurrentSlideLanguages] = useState(slides[0].languages);
    const [currentSlideGithub, setCurrentSlideGithub] = useState(slides[0].github);

    const changeText = (swiper) => {
        let activeIndex = swiper.realIndex + 1;

        if (swiper.params.loop) {
            activeIndex = (activeIndex % slides.length + slides.length) % slides.length;
        }
        setCurrentSlideText(slides[activeIndex]?.text || '');
        setCurrentSlideTitle(slides[activeIndex]?.title || '');
        setCurrentSlideLanguages(slides[activeIndex]?.languages || '');
        setCurrentSlideGithub(slides[activeIndex]?.github || '');

        const textElement = document.querySelector('.text-animation-container');
        if (textElement instanceof HTMLElement) {
            textElement.classList.remove('animate__fadeInUp');
            void textElement.offsetWidth;
            textElement.classList.add('animate__fadeInUp');
        }
    };

    return (
        <div>
            <div className="lg:mt-2 mt-3 lg:mb-1 mb-4 text-center">
                <span id="projects" className="pt-28 text-transparent bg-clip-text bg-gradient-to-r from-[#FB8D1E] via-[#91F4FE] to-white xl:text-4xl lg:text-3xl md:text-2xl text-xl font-extrabold pl-1">
                    Mes projets
                </span>
            </div>
            <div className="text-center text-animation-container animate__animated animate__fadeInUp">
                <p className="text-[#91F4FE] to-white xl:text-2xl lg:text-xl md:text-lg text-base font-extrabold pl-1">{currentSlideTitle}</p>
                <p className="text-[#FB8D1E] to-white xl:text-2xl lg:text-xl md:text-lg text-base font-extrabold pl-1">{currentSlideLanguages}</p>
                <p className="text-[#929292] text-center xl:text-xl lg:text-lg md:text-base text-xs lg:mb-7 md:mb-5 mb-6 font-bold xl:px-24 lg:px-18 md:px-12 px-6">
                    {currentSlideText}
                </p>
                <Link href={currentSlideGithub} legacyBehavior>
                    <a target={'_blank'}>
                        <button className="px-4 py-5 rounded-full md:mr-8 bg-gradient-to-br from-[#FB8D1E] via-white to-[#91F4FE] text-black font-bold w-48 mb-4 text-center">
                            <p className="flex flex-row justify-center">
                                <span>Voir le projet</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=" ml-3 my-auto">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </p>
                        </button>
                    </a>
                </Link>
            </div>
            <Swiper
                modules={[Autoplay, EffectCoverflow, Pagination, Scrollbar, A11y]}
                speed={1000}
                autoplay={{ delay: 5000 }}
                slidesPerView={3}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                grabCursor={true}
                loop={true}
                centeredSlides={false}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                onSlideChange={(swiper) => changeText(swiper)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image src={slide.image} alt={`Image d'un projet`} width={600} height={600} draggable={false} className="rounded 2xl:w-[600px] 2xl:h-[600px] w-[500px] h-[500px]"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProjectsSection;