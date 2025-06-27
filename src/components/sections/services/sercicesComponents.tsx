import { Crown, Smile, Sparkle } from 'lucide-react';
import React from 'react'

const SercicesComponents = () => {
   const services = [
    {
      icon: <Smile className="w-8 h-8 text-emerald-400" />,
      title: "Dentisterie Générale",
      description: "Soins de santé bucco-dentaire complets incluant nettoyages, obturations et traitements préventifs.",
      features: [
        "Nettoyages Réguliers",
        "Obturations de Caries",
        "Examens Oraux",
        "Soins Préventifs"
      ]
    },
    {
      icon: <Sparkle className="w-8 h-8 text-emerald-400" />,
      title: "Dentisterie Esthétique",
      description: "Transformez votre sourire avec nos procédures dentaires esthétiques avancées.",
      features: [
        "Blanchiment des Dents",
        "Facettes",
        "Collage",
        "Relooking de Sourire"
      ]
    },
    {
      icon: <Crown className="w-8 h-8 text-emerald-400" />,
      title: "Dentisterie Restauratrice",
      description: "Restaurez la fonction et la beauté des dents endommagées ou manquantes.",
      features: [
        "Couronnes Dentaires",
        "Ponts",
        "Implants",
        "Prothèses"
      ]
    }
  ];

  return (
    <section className=" px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center border border-slate-600">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-slate-300"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SercicesComponents