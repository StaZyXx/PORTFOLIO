"use client";
import React from "react";
import dynamic from 'next/dynamic'
const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
    ssr: false,
})

const AnimatedNumbersList = [
    {
        metric: "Projets",
        value: 20,
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Langages & Frameworks",
        value: 10,
    },
    {
        metric: "Expérience professionnelle",
        value: 1,
    },
    {
        metric: "Années d'études",
        value: 2,
    }
];

const AchievementSection = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <div className="md:mx-28 mx-14 my-24  rounded bg-gradient-to-r from-[#91F4FE] via-[#FB8D1E] to-[#91F4FE] p-[2px]">
            <div className="bg-[#1F1F1F] justify-between flex lg:flex-row flex-col h-auto w-auto px-8 py-8">
                {isClient && AnimatedNumbersList.map((achievement, index) => (
                    <div key={index} className="flex flex-col items-center justify-center mx-4 lg:mb-0 mb-10">
                        <div className="text-4xl font-bold text-center text-white flex flex-row">
                            {achievement.prefix}
                            <AnimatedNumbers
                                animateToNumber={achievement.value}
                                transitions={(index)   => ({
                                    duration: 1 + index + 0.5,
                                })}
                            />
                            {achievement.postfix}
                        </div>
                        <div className="lg:text-xl md:text-lg sm:text-md font-bold text-center text-[#929292]">
                            {achievement.metric}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementSection;