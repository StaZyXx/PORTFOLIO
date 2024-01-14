import React from "react";
import HeroSection from './Component/HeroSection';
import NavBar from './Component/NavBar';
import AboutSection from './Component/AboutSection';
import ProjectsSection from "./Component/ProjectsSection";
import EmailSection from "./Component/EmailSection";
import Footer from "./Component/Footer";
import AchievementSection from "./Component/AchievementSection";


export default function Home() {
    return (
        <main className="flex flex-col bg-[#171717] min-h-screen">
            <NavBar/>
            <HeroSection/>
            <AchievementSection/>
            <AboutSection/>
            <ProjectsSection/>
            <EmailSection/>
            <Footer/>
        </main>
)}
