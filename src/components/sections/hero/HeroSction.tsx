import { AnimatedTooth } from "@/components/ui/animatedTooth";
import { Phone, Calendar } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
    const tags = [
        { name: "Orthodontie", color: "bg-green-500/20 text-green-400" },
        { name: "Esthétique", color: "bg-purple-500/20 text-purple-400" },
        { name: "Implantologie", color: "bg-blue-500/20 text-blue-400" },
        { name: "Chirurgie dentaire", color: "bg-orange-500/20 text-orange-400" },
        { name: "Parodontologie", color: "bg-pink-500/20 text-pink-400" },
        { name: "Prothèses", color: "bg-yellow-500/20 text-yellow-400" },
        { name: "Blanchiment", color: "bg-gray-500/20 text-gray-400" },
        { name: "Soins préventifs", color: "bg-teal-500/20 text-teal-400" },
    ];
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between h-screen p-4 md:p-10 mt-6 md:mt-10 gap-8 md:gap-0">
            <div className="flex flex-col gap-4 w-full md:w-2/3">
                <h1 className="text-3xl sm:text-xl md:text-5xl font-bold text-center text-[#CCC7C1]">
                    Votre Sourire
                    <span className="text-[#57d3e3]"> Parfait Commence Ici </span>
                </h1>
                <h2 className="text-base sm:text-lg text-[#B0AA9F] text-center md:text-left">
                    Offrez à votre sourire les meilleurs soins dentaires grâce à l’expertise du Dr Chaabani Amine et à une clinique à la pointe de la technologie. Notre équipe bienveillante est dédiée à votre santé bucco-dentaire et à vous offrir un sourire éclatant en toute confiance.
                </h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 mt-4 sm:mt-6">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className={`font-semibold w-fit px-3 py-1 rounded-xl text-sm sm:text-base ${tag.color}`}
                        >
                            {tag.name}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center md:justify-start items-center mt-4 sm:mt-6">
                    <button className="text-[#57d3e3] flex justify-center items-center gap-2 sm:gap-3 border-[1px] border-[#57d3e3] rounded-xl px-4 py-2 hover:bg-[#57d3e3]/10 transition-all duration-300 w-full sm:w-auto">
                        <Phone className="size-4 animate-rotate" />
                        <p className="font-bold">Appeler maintenant</p>
                    </button>
                    <button className="bg-[#57d3e3] flex justify-center items-center gap-2 sm:gap-3 border-[1px] border-[#57d3e3] rounded-xl px-4 py-2 hover:bg-[#57d3e3]/10 transition-all duration-300 w-full sm:w-auto">
                        <Calendar className="size-4" />
                        <p className="font-bold">Prendre un rendez-vous</p>
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                    <AnimatedTooth/>
            </div>
        </div>
    );
};

export default HeroSection;