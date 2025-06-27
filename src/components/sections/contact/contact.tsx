"use client";
import { MapPin, Phone, Clock } from "lucide-react";

export default function DentalContactSection() {
  const handleCallClick = () => {
    window.open("tel:29404409", "_self");
  };

  const handleLocationClick = () => {
    // You can replace this with actual Google Maps coordinates
    const address = "Cabinet Dentaire Dr. Chaabani Amine, Thala, Kasserine, Tunisie";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
  };

  const contactCards = [
    {
      icon: <MapPin className="w-8 h-8 text-emerald-400" />,
      title: "Notre Emplacement",
      content: (
        <div>
          <p className="text-slate-300 mb-2">Cabinet Dentaire Dr. Nemamcha Oussama</p>
          <p className="text-slate-400">Guelma , Hadj mbarek</p>
          <p className="text-slate-400">Algerie</p>
        </div>
      ),
      onClick: handleLocationClick,
      hoverText: "Voir sur la carte"
    },
    {
      icon: <Phone className="w-8 h-8 text-emerald-400" />,
      title: "Numéro de Téléphone",
      content: (
        <div>
          <p className="text-slate-300 mb-3 text-xl font-semibold">Bureau: 29 404 409</p>
          <p className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-medium ">
            Cliquez pour appeler
          </p>
        </div>
      ),
      onClick: handleCallClick,
      hoverText: "Appeler maintenant"
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-400" />,
      title: "Heures de Bureau",
      content: (
        <div className="space-y-2">
          <p className="text-slate-300">
            <span className="font-medium">Lundi - Vendredi:</span> 8h00 - 18h00
          </p>
          <p className="text-slate-300">
            <span className="font-medium">Samedi:</span> 9h00 - 16h00
          </p>
          <p className="text-slate-400">
            <span className="font-medium">Dimanche:</span> Fermé
          </p>
        </div>
      ),
      onClick: null,
      hoverText: null
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800 rounded-2xl p-8 border border-slate-700 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 ${
                card.onClick ? 'cursor-pointer hover:scale-[1.02]' : ''
              }`}
              onClick={card.onClick ?? undefined}
            >
              <div className="flex items-start space-x-6">
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600 group-hover:border-emerald-500/50 transition-all duration-300 group-hover:bg-emerald-500/10">
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-100 transition-colors duration-300">
                    {card.title}
                  </h3>
                  {card.content}
                </div>

                {/* Hover Indicator */}
                {card.hoverText && (
                  <div className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-emerald-400 font-medium bg-slate-700 px-3 py-1 rounded-full border border-emerald-500/30">
                      {card.hoverText}
                    </span>
                  </div>
                )}
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}