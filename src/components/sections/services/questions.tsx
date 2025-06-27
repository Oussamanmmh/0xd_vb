"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DentalFAQSection() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const faqs = [
    {
      question: "À quelle fréquence dois-je consulter le dentiste?",
      answer: "Nous recommandons de consulter le dentiste tous les 6 mois pour des nettoyages et examens réguliers. Cependant, certains patients peuvent avoir besoin de visites plus fréquentes selon leurs besoins de santé bucco-dentaire."
    },
    {
      question: "Acceptez-vous les assurances?",
      answer: "Oui, nous acceptons la plupart des assurances dentaires. Notre équipe peut vous aider à comprendre votre couverture et maximiser vos bénéfices. N'hésitez pas à nous contacter pour vérifier si votre assurance est acceptée."
    },
    {
      question: "À quoi dois-je m'attendre lors de ma première visite?",
      answer: "Lors de votre première visite, nous effectuerons un examen complet de votre santé bucco-dentaire, incluant des radiographies si nécessaire. Nous discuterons de vos antécédents médicaux, de vos préoccupations et établirons un plan de traitement personnalisé selon vos besoins."
    },
    {
      question: "Les traitements dentaires sont-ils douloureux?",
      answer: "Nous utilisons des techniques modernes d'anesthésie locale pour minimiser l'inconfort pendant les procédures. La plupart de nos patients signalent peu ou pas de douleur. Nous discutons toujours des options de gestion de la douleur avant tout traitement."
    },
    {
      question: "Combien de temps durent les implants dentaires?",
      answer: "Avec des soins appropriés, les implants dentaires peuvent durer toute une vie. Ils ont un taux de succès de plus de 95% et constituent la solution la plus durable pour remplacer les dents manquantes. Un bon entretien et des visites régulières sont essentiels pour leur longévité."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions Fréquemment Posées
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Trouvez des réponses aux questions courantes sur nos services dentaires et notre pratique
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden transition-all duration-700 hover:border-emerald-500/50"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset hover:cursor-pointer"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-emerald-400 transition-transform duration-300 flex-shrink-0 ${
                    openAccordion === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-slate-700 mb-4"></div>
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>       
      </div>
    </section>
  );
}