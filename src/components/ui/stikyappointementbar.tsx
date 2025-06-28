"use client";
import { useState, useEffect } from "react";
import { Calendar, Phone, X } from "lucide-react";
import { content } from "@/lib/content";
import { useLanguage } from "@/context/langage-context";

export default function StickyAppointmentBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const {language} = useLanguage();
  const t = content[language].hero

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("stickyBarClosed") === "true") {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsHidden(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleClose = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("stickyBarClosed", "true");
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out border-t-[2px] border-emerald-500/50 ${
        isHidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="bg-[#1C1F20] px-4 py-3 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          
          {/* 🟢 Left Text: only shown on desktop/tablet */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-2 h-2 bg-teal-400 rounded-full" />
            <span className="text-white font-medium text-sm sm:text-base">
              {t.cta.appointment}
            </span>
          </div>

          {/* ✅ Buttons and Close: always visible */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3">
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition duration-200 text-sm sm:text-base">
              <Calendar size={16} />
              <span className="hidden md:inline">{t.cta.appointment}</span>
            </button>

            <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition duration-200 text-sm sm:text-base">
              <Phone size={16} />
              <span className="hidden md:inline">{t.cta.call}</span>
            </button>

            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-white transition duration-200 p-1"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
