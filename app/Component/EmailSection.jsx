"use client";
import React from "react";
import Link from "next/link";
import { sendEmail } from "./SendEmail";

const EmailSection = () => {
    return (
        <section className="flex sm:flex-row flex-col sm:items-start items-center">
            <div className="flex flex-col sm:w-1/2 w-full xl:px-24 lg:px-18 md:px-12 px-6 mt-10">
                <div>
                    <p className="xl:text-lg lg:text-base text-xs text-[#929292] font-semibold text-justify">
                        <span id="contact"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8D1E] via-[#91F4FE] to-white xl:text-2xl lg:text-xl md:text-lg text-base font-extrabold pl-1">
                            Entrons en contact ! <br/>
                        </span>
                        Je suis actuellement à la recherche de nouvelles opportunités, ma boîte mail est toujours
                        ouverte. Que vous ayez une question ou que vous souhaitiez simplement me dire bonjour, je ferai
                        de mon mieux pour vous répondre dans les plus brefs délais !
                    </p>
                </div>
                <div className="mt-4 flex flex-row">
                    <Link href={"https://www.linkedin.com/in/samuel-letellier/"} className="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"
                             viewBox="0,0,256,256">
                            <g fill="#171717" stroke="none">
                                <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                            </g>
                            <g fill="#ffffff" stroke="none">
                                <g transform="scale(5.12,5.12)">
                                    <path
                                        d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                                </g>
                            </g>
                        </svg>
                    </Link>
                    <Link href={"https://github.com/StaZyXx"}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"
                             viewBox="0,0,256,256">
                            <g fill="#171717" stroke="none" >
                                <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                            </g>
                            <g fill="#ffffff"  stroke="none">
                                <g transform="scale(5.12,5.12)">
                                    <path
                                        d="M25,2c-12.68866,0 -23,10.31134 -23,23c0,12.68867 10.31134,23 23,23c12.68867,0 23,-10.31133 23,-23c0,-12.68866 -10.31133,-23 -23,-23zM25,4c11.60734,0 21,9.39266 21,21c0,0.07137 -0.00515,0.14169 -0.00586,0.21289c-0.63961,-0.05904 -1.37863,-0.11511 -2.31836,-0.14844c-1.32872,-0.04712 -3.00352,-0.03347 -4.90234,0.06055c0.07041,-0.49035 0.11977,-0.98762 0.12109,-1.49805c0.09683,-1.87262 -0.53201,-3.62449 -1.55469,-5.17187c0.24707,-0.85373 0.5369,-1.93986 0.60938,-3.17187c0.0826,-1.40428 -0.03862,-2.96144 -1.16602,-4.01367l-0.28906,-0.26953h-0.39453c-2.68307,0 -4.51959,1.12321 -5.64258,2.01367c-1.6215,-0.62765 -3.44481,-1.01367 -5.45703,-1.01367c-2.02363,0 -3.86447,0.39142 -5.55273,1.01758c-1.12235,-0.89089 -2.96048,-2.01758 -5.64648,-2.01758h-0.39258l-0.28906,0.26758c-1.09819,1.01974 -1.19936,2.53418 -1.13086,3.93164c0.06041,1.23229 0.33345,2.35292 0.57617,3.24805c-1.03996,1.57759 -1.66406,3.37475 -1.66406,5.15234c0,0.51163 0.04758,1.01046 0.11719,1.50195c-1.80576,-0.08375 -3.41548,-0.09989 -4.69336,-0.05469c-0.9397,0.03324 -1.67878,0.08884 -2.31836,0.14844c-0.0006,-0.06534 -0.00586,-0.12983 -0.00586,-0.19531c0,-11.60733 9.39266,-21 21,-21zM14.39648,13.13086c2.01758,0.19118 3.53551,1.09211 4.23828,1.7168l0.46875,0.41406l0.57813,-0.23633c1.58145,-0.65119 3.34534,-1.02539 5.31836,-1.02539c1.97302,0 3.73739,0.37608 5.19922,1.01563l0.58594,0.25781l0.47852,-0.42578c0.70301,-0.6249 2.22351,-1.5261 4.24219,-1.7168c0.2684,0.44498 0.50163,1.07781 0.44531,2.03516c-0.0674,1.14572 -0.37387,2.39364 -0.60547,3.13477l-0.15039,0.48242l0.29883,0.4082c0.98947,1.34928 1.49398,2.80953 1.4082,4.35352l-0.00195,0.02734v0.02734c0,2.49545 -0.89861,4.49273 -2.8125,5.97266c-1.91384,1.47993 -4.93523,2.42773 -9.1875,2.42773c-4.25227,0 -7.27556,-0.94781 -9.18945,-2.42773c-1.91389,-1.47993 -2.81055,-3.4772 -2.81055,-5.97266c0,-1.46471 0.52892,-3.07601 1.50586,-4.4082l0.29297,-0.39844l-0.14062,-0.47461c-0.23173,-0.78787 -0.51577,-2.06426 -0.57227,-3.2168c-0.04699,-0.95862 0.17989,-1.56453 0.41016,-1.9707zM8.88477,26.02148c0.70669,0.00903 1.51669,0.04717 2.32813,0.08789c0.07753,0.3118 0.16593,0.61852 0.27344,0.91797c-3.30736,0.06975 -5.7816,0.40233 -7.30664,0.6875c-0.06448,-0.50035 -0.11584,-1.00482 -0.14453,-1.51562c1.12705,-0.10696 2.71584,-0.20499 4.84961,-0.17773zM41.11523,26.03711c2.13229,-0.02708 3.72049,0.07105 4.84766,0.17773c-0.02866,0.50348 -0.07914,1.00082 -0.14258,1.49414c-1.57954,-0.28977 -4.12064,-0.6223 -7.51367,-0.67578c0.1053,-0.29353 0.19299,-0.59498 0.26953,-0.90039c0.89512,-0.04798 1.76839,-0.08592 2.53906,-0.0957zM11.91211,28.01953c0.59674,1.1958 1.44941,2.26349 2.57617,3.13477c1.54054,1.19123 3.54334,2.02354 5.98828,2.46875c-0.31986,0.32865 -0.61078,0.68955 -0.86914,1.07031l-0.06055,-0.05273c0.0055,-0.0063 -0.49713,0.24525 -1.24805,0.3125c-0.75092,0.06725 -1.67721,0.04688 -2.49805,0.04688c-1.225,0 -1.76457,-0.57879 -2.62695,-1.63281c-0.47755,-0.64363 -1.05973,-1.16486 -1.625,-1.56055c-0.57881,-0.40517 -1.07257,-0.69113 -1.68359,-0.79297l-0.08203,-0.01367h-0.08398c-0.46667,0 -0.91824,0.03379 -1.33984,0.51563c-0.2108,0.24092 -0.3561,0.68694 -0.26172,1.06445c0.09438,0.37752 0.3332,0.6095 0.54688,0.75195c1.36672,0.91115 1.60826,2.71448 2.46484,4.31836c0.79992,1.59392 2.52629,2.34961 4.29102,2.34961h2.59961v4.80273c-7.03219,-2.4822 -12.33532,-8.59812 -13.66797,-16.09961c1.5309,-0.28835 4.09451,-0.63502 7.58008,-0.68359zM37.88281,28.02734c3.56273,0.0305 6.19824,0.37672 7.78711,0.66992c-1.33087,7.50424 -6.63585,13.6226 -13.66992,16.10547v-5.20312c0,-1.58457 -0.52036,-3.3319 -1.42578,-4.78906c-0.2749,-0.44241 -0.59827,-0.86081 -0.95898,-1.23633c2.31522,-0.45738 4.21713,-1.2754 5.69727,-2.41992c1.12432,-0.86939 1.97509,-1.93387 2.57031,-3.12695zM23.69922,34.09961h2.80078c0.81282,0 1.68042,0.64779 2.375,1.76563c0.69458,1.11783 1.125,2.61894 1.125,3.73438v5.79883c-1.60259,0.3908 -3.27621,0.60156 -5,0.60156c-1.72379,0 -3.39741,-0.21077 -5,-0.60156v-5.79883c0,-1.09074 0.46783,-2.5883 1.20898,-3.71094c0.74116,-1.12264 1.67741,-1.78906 2.49023,-1.78906zM12.30859,35.28125c0.86577,0.89801 1.91393,1.71875 3.49219,1.71875c0.77917,0 1.7517,0.02807 2.67578,-0.05469c0.00329,-0.00029 0.00648,-0.00166 0.00977,-0.00195c-0.12175,0.35 -0.21258,0.70217 -0.28906,1.05664h-2.79687c-1.23333,0 -2.10462,-0.44557 -2.50586,-1.24805l-0.00781,-0.01367l-0.00586,-0.01172c-0.1644,-0.30537 -0.38021,-0.91597 -0.57226,-1.44531z"></path>
                                </g>
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="flex sm:w-1/2 w-full">
                <form className="flex flex-col w-full xl:px-24 lg:px-18 md:px-12 px-6 mt-10"
                      action={async (formData) => {
                          await sendEmail(formData);
                      }
                }>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="name" className="text-[#929292] font-semibold">Nom - Prénom</label>
                        <input type="text" id="name" name="name" required={true} placeholder="John Doe"
                               className="rounded bg-[#171717] border-[#929292] border-2 text-[#929292] font-semibold py-2 px-4 mt-2"/>
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="email" className="text-[#929292] font-semibold">Email</label>
                        <input type="text" id="email" name="email" required={true} placeholder="John.Doe@gmail.com"
                               className="rounded bg-[#171717] border-[#929292] border-2 text-[#929292] font-semibold py-2 px-4 mt-2"/>
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="subject" className="text-[#929292] font-semibold">Sujet</label>
                        <input type="text" id="subject" name="subject" required={true}
                               placeholder="Juste pour dire bonjour"
                               className="rounded bg-[#171717] border-[#929292] border-2 text-[#929292] font-semibold py-2 px-4 mt-2"/>
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="message" className="text-[#929292] font-semibold">Message</label>
                        <textarea id="message" name="message" required={true}
                                  placeholder={"Une offre, un projet ? Allons-y !"}
                                  className="rounded bg-[#171717] border-[#929292] border-2 text-[#929292] font-semibold py-2 px-4 mt-2"/>
                    </div>
                    <div className="flex flex-row mt-4">
                        <button
                            className="px-4 py-2 rounded bg-gradient-to-br from-[#FB8D1E] via-white to-[#91F4FE] text-black font-bold w-full mb-4 text-center">
                            <p className="flex flex-row justify-center">
                                <span>Envoyer</span>
                            </p>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default EmailSection;