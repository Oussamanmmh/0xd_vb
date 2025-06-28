export type Language = 'en' | 'fr' | 'ar';

export const content = {
  en: {
    header: {
      title: 'Dr. Nemamcha Oussama',
      subtitle: 'Excellence Dentist Guelma, Algeria',
      welcome: 'Welcome to Dr. Nemamcha\'s clinic!',
    },
    hero: {
      title: 'Your Perfect Smile',
      stitle:'Starts Here' ,
      subtitle: 'Give your smile the best dental care with the expertise of Dr. Nemamcha Oussama and a state-of-the-art clinic. Our caring team is dedicated to your oral health and giving you a radiant smile with confidence.',
      cta: {
        call: 'Call Now',
        appointment: 'Book an Appointment',
      },
    },
    services: {
      title: 'Our Dental Services',
      subtitle: 'Dr. Nemamcha Oussama offers a complete range of dental services to meet all your oral health needs',
      quickServices: [
        'Orthodontics',
        'Cosmetic Dentistry',
        'Implantology',
        'Oral Surgery',
        'Periodontics',
        'Prosthetics',
        'Teeth Whitening',
        'Preventive Care',
      ],
      detailedServices: [
        {
          category: 'General Dentistry',
          description: 'Comprehensive oral health care including cleanings, fillings and preventive treatments.',
          services: [
            'Regular Cleanings',
            'Cavity Fillings',
            'Oral Examinations',
            'Preventive Care',
          ],
        },
        {
          category: 'Cosmetic Dentistry',
          description: 'Transform your smile with our advanced cosmetic dental procedures.',
          services: [
            'Teeth Whitening',
            'Veneers',
            'Bonding',
            'Smile Makeover',
          ],
        },
        {
          category: 'Restorative Dentistry',
          description: 'Restore the function and beauty of damaged or missing teeth.',
          services: [
            'Dental Crowns',
            'Bridges',
            'Implants',
            'Dentures',
          ],
        },
      ],
    },
    about: {
      title: 'About Dr. Nemamcha Oussama',
      description: 'Dr. Oussama Nemamcha is committed to providing superior dental care in a modern and welcoming environment.',
      whyChoose: {
        title: 'Why Choose Dr. Nemamcha Oussama\'s Dental Practice',
        reasons: [
          {
            title: 'Expert Care',
            description: 'Dr. Oussama Nemamcha is an expert in dentistry.',
          },
          {
            title: 'Advanced Technology',
            description: 'Our practice is equipped with the latest dental technologies.',
          },
          {
            title: 'Personalized Approach',
            description: 'Each patient is unique, and we adapt our treatments.',
          },
        ],
        comfort: '100% Comfort Care',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about our dental services and practice',
      questions: [
        {
          question: 'How often should I visit the dentist?',
          answer: 'We recommend visiting the dentist every 6 months for regular cleanings and examinations. However, some patients may need more frequent visits depending on their oral health needs.',
        },
        {
          question: 'Do you accept insurance?',
          answer: 'Yes, we accept most dental insurance plans. Our team can help you understand your coverage and maximize your benefits. Feel free to contact us to check if your insurance is accepted.',
        },
        {
          question: 'What should I expect during my first visit?',
          answer: 'During your first visit, we will perform a comprehensive examination of your oral health, including X-rays if necessary. We will discuss your medical history, concerns, and create a personalized treatment plan based on your needs.',
        },
        {
          question: 'Are dental treatments painful?',
          answer: 'We use modern local anesthesia techniques to minimize discomfort during procedures. Most of our patients report little to no pain. We always discuss pain management options before any treatment.',
        },
        {
          question: 'How long do dental implants last?',
          answer: 'With proper care, dental implants can last a lifetime. They have a success rate of over 95% and are the most durable solution for replacing missing teeth. Good maintenance and regular check-ups are essential for their longevity.',
        },
      ],
    },
    contact: {
      title: 'Contact Dr. Nemamcha Oussama',
      subtitle: 'Ready to schedule your appointment? Contact us today',
      location: {
        title: 'Our Location',
        clinic: 'Dr. Nemamcha Oussama Dental Clinic',
        address: 'Guelma, Hadj Mbarek, Algeria',
      },
      details: {
        address: {
          title: 'Address',
          value: 'Guelma, Algeria',
        },
        phone: {
          title: 'Phone',
          value: '29 404 409',
        },
        hours: {
          title: 'Hours',
          value: 'Mon-Fri: 8AM-6PM | Sat: 9AM-4PM',
        },
      },
      actions: {
        directions: 'Get Directions',
        call: 'Call Now',
        appointment: 'Book Appointment',
      },
    },
    footer: {
      copyright: '© 2024 Dr. Nemamcha Oussama. All rights reserved.',
    },
  },
  fr: {
    header: {
      title: 'Dr. Nemamcha Oussama',
      subtitle: 'Dentiste d\'excellence Guelma, Algérie',
      welcome: 'Bienvenue chez Dr. Nemamcha\'s clinic!',
    },
    hero: {
      title: 'Votre Sourire Parfait ',
      stitle:'Commence Ici',
      subtitle: 'Offrez à votre sourire les meilleurs soins dentaires grâce à l\'expertise du Dr Nemamcha Oussama et à une clinique à la pointe de la technologie. Notre équipe bienveillante est dédiée à votre santé bucco-dentaire et à vous offrir un sourire éclatant en toute confiance.',
      cta: {
        call: 'Appeler maintenant',
        appointment: 'Prendre un rendez-vous',
      },
    },
    services: {
      title: 'Nos Services Dentaires',
      subtitle: 'Le Dr. Nemamcha Oussama offre une gamme complète de services dentaires pour répondre à tous vos besoins de santé bucco-dentaire',
      quickServices: [
        'Orthodontie',
        'Esthétique',
        'Implantologie',
        'Chirurgie dentaire',
        'Parodontologie',
        'Prothèses',
        'Blanchiment',
        'Soins préventifs',
      ],
      detailedServices: [
        {
          category: 'Dentisterie Générale',
          description: 'Soins de santé bucco-dentaire complets incluant nettoyages, obturations et traitements préventifs.',
          services: [
            'Nettoyages Réguliers',
            'Obturations de Caries',
            'Examens Oraux',
            'Soins Préventifs',
          ],
        },
        {
          category: 'Dentisterie Esthétique',
          description: 'Transformez votre sourire avec nos procédures dentaires esthétiques avancées.',
          services: [
            'Blanchiment des Dents',
            'Facettes',
            'Collage',
            'Relooking de Sourire',
          ],
        },
        {
          category: 'Dentisterie Restauratrice',
          description: 'Restaurez la fonction et la beauté des dents endommagées ou manquantes.',
          services: [
            'Couronnes Dentaires',
            'Ponts',
            'Implants',
            'Prothèses',
          ],
        },
      ],
    },
    about: {
      title: 'À Propos du Dr. Nemamcha Oussama',
      description: 'Le Dr. Oussama Nemamcha s\'engage à offrir des soins dentaires de qualité supérieure dans un cadre moderne et accueillant.',
      whyChoose: {
        title: 'Pourquoi Choisir le Cabinet Dentaire du Dr Nemamcha Oussama',
        reasons: [
          {
            title: 'Soins d\'Expert',
            description: 'Le Dr. Oussama Nemamcha est un expert en dentisterie.',
          },
          {
            title: 'Technologie Avancée',
            description: 'Notre cabinet est équipé des dernières technologies dentaires.',
          },
          {
            title: 'Approche Personnalisée',
            description: 'Chaque patient est unique, et nous adaptons nos traitements.',
          },
        ],
        comfort: '100% Soins Comfort',
      },
    },
    faq: {
      title: 'Questions Fréquemment Posées',
      subtitle: 'Trouvez des réponses aux questions courantes sur nos services dentaires et notre pratique',
      questions: [
        {
          question: 'À quelle fréquence dois-je consulter le dentiste?',
          answer: 'Nous recommandons de consulter le dentiste tous les 6 mois pour des nettoyages et examens réguliers. Cependant, certains patients peuvent avoir besoin de visites plus fréquentes selon leurs besoins de santé bucco-dentaire.',
        },
        {
          question: 'Acceptez-vous les assurances?',
          answer: 'Oui, nous acceptons la plupart des assurances dentaires. Notre équipe peut vous aider à comprendre votre couverture et maximiser vos bénéfices. N\'hésitez pas à nous contacter pour vérifier si votre assurance est acceptée.',
        },
        {
          question: 'À quoi dois-je m\'attendre lors de ma première visite?',
          answer: 'Lors de votre première visite, nous effectuerons un examen complet de votre santé bucco-dentaire, incluant des radiographies si nécessaire. Nous discuterons de vos antécédents médicaux, de vos préoccupations et établirons un plan de traitement personnalisé selon vos besoins.',
        },
        {
          question: 'Les traitements dentaires sont-ils douloureux?',
          answer: 'Nous utilisons des techniques modernes d\'anesthésie locale pour minimiser l\'inconfort pendant les procédures. La plupart de nos patients signalent peu ou pas de douleur. Nous discutons toujours des options de gestion de la douleur avant tout traitement.',
        },
        {
          question: 'Combien de temps durent les implants dentaires?',
          answer: 'Avec des soins appropriés, les implants dentaires peuvent durer toute une vie. Ils ont un taux de succès de plus de 95% et constituent la solution la plus durable pour remplacer les dents manquantes. Un bon entretien et des visites régulières sont essentiels pour leur longévité.',
        },
      ],
    },
    contact: {
      title: 'Contactez le Dr. Nemamcha Oussama',
      subtitle: 'Prêt à planifier votre rendez-vous? Contactez-nous aujourd\'hui',
      location: {
        title: 'Notre Emplacement',
        clinic: 'Clinique Dentaire Dr. Nemamcha Oussama',
        address: 'Guelma, Hadj Mbarek, Algérie',
      },
      details: {
        address: {
          title: 'Adresse',
          value: 'Guelma, Algérie',
        },
        phone: {
          title: 'Téléphone',
          value: '29 404 409',
        },
        hours: {
          title: 'Heures',
          value: 'Lun-Ven: 8h-18h | Sam: 9h-16h',
        },
      },
      actions: {
        directions: 'Obtenir l\'Itinéraire',
        call: 'Appeler maintenant',
        appointment: 'Prendre Rendez-vous',
      },
    },
    footer: {
      copyright: '© 2024 Dr. Nemamcha Oussama. Tous droits réservés.',
    },
  },
  ar: {
    header: {
      title: 'د. نمامشة أسامة',
      subtitle: 'طبيب أسنان متميز قالمة، الجزائر',
      welcome: 'مرحباً بكم في عيادة د. نمامشة!',
    },
    hero: {
      title: 'ابتسامتك المثالية ',
      stitle:'تبدأ هنا',
      subtitle: 'امنح ابتسامتك أفضل رعاية أسنان مع خبرة د. نمامشة أسامة وعيادة متطورة. فريقنا المتفاني مكرس لصحة فمك ومنحك ابتسامة مشرقة بثقة.',
      cta: {
        call: 'اتصل الآن',
        appointment: 'احجز موعداً',
      },
    },
    services: {
      title: 'خدماتنا لطب الأسنان',
      subtitle: 'يقدم د. نمامشة أسامة مجموعة كاملة من خدمات طب الأسنان لتلبية جميع احتياجات صحة الفم',
      quickServices: [
        'تقويم الأسنان',
        'طب الأسنان التجميلي',
        'زراعة الأسنان',
        'جراحة الفم',
        'علاج اللثة',
        'تركيبات الأسنان',
        'تبييض الأسنان',
        'الرعاية الوقائية',
      ],
      detailedServices: [
        {
          category: 'طب الأسنان العام',
          description: 'رعاية شاملة لصحة الفم تشمل التنظيف والحشوات والعلاجات الوقائية.',
          services: [
            'التنظيف المنتظم',
            'حشوات التسوس',
            'فحوصات الفم',
            'الرعاية الوقائية',
          ],
        },
        {
          category: 'طب الأسنان التجميلي',
          description: 'حول ابتسامتك مع إجراءات طب الأسنان التجميلي المتطورة.',
          services: [
            'تبييض الأسنان',
            'القشور التجميلية',
            'الترابط',
            'تجديد الابتسامة',
          ],
        },
        {
          category: 'طب الأسنان الترميمي',
          description: 'استعد وظيفة وجمال الأسنان التالفة أو المفقودة.',
          services: [
            'تيجان الأسنان',
            'الجسور',
            'الزراعات',
            'الأطقم',
          ],
        },
      ],
    },
    about: {
      title: 'عن د. نمامشة أسامة',
      description: 'د. أسامة نمامشة ملتزم بتقديم رعاية أسنان متفوقة في بيئة حديثة ومرحبة.',
      whyChoose: {
        title: 'لماذا تختار عيادة الأسنان للدكتور نمامشة أسامة',
        reasons: [
          {
            title: 'رعاية خبيرة',
            description: 'د. أسامة نمامشة خبير في طب الأسنان.',
          },
          {
            title: 'تكنولوجيا متطورة',
            description: 'عيادتنا مجهزة بأحدث تقنيات طب الأسنان.',
          },
          {
            title: 'نهج شخصي',
            description: 'كل مريض فريد، ونحن نكيف علاجاتنا.',
          },
        ],
        comfort: '100% رعاية مريحة',
      },
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'اعثر على إجابات للأسئلة الشائعة حول خدماتنا وممارستنا لطب الأسنان',
      questions: [
        {
          question: 'كم مرة يجب أن أزور طبيب الأسنان؟',
          answer: 'نوصي بزيارة طبيب الأسنان كل 6 أشهر لإجراء التنظيفات والفحوصات الدورية. ومع ذلك، قد يحتاج بعض المرضى إلى زيارات أكثر تكرارًا حسب احتياجاتهم الصحية الفموية.',
        },
        {
          question: 'هل تقبلون التأمين؟',
          answer: 'نعم، نحن نقبل معظم خطط التأمين الصحي الخاصة بالأسنان. يمكن لفريقنا مساعدتك في فهم تغطيتك والاستفادة القصوى من مزاياك. لا تتردد في الاتصال بنا للتحقق مما إذا كنا نقبل تأمينك.',
        },
        {
          question: 'ماذا أتوقع خلال زيارتي الأولى؟',
          answer: 'أثناء زيارتك الأولى، سنقوم بفحص شامل لصحة فمك، بما في ذلك الأشعة السينية إذا لزم الأمر. سنناقش تاريخك الطبي ومخاوفك، وسنضع خطة علاج مخصصة حسب احتياجاتك.',
        },
        {
          question: 'هل علاجات الأسنان مؤلمة؟',
          answer: 'نستخدم تقنيات حديثة للتخدير الموضعي لتقليل الانزعاج أثناء الإجراءات. معظم مرضانا يبلغون عن شعور ضئيل أو معدوم بالألم. نحن نناقش دائمًا خيارات تخفيف الألم قبل أي علاج.',
        },
        {
          question: 'كم تدوم زراعة الأسنان؟',
          answer: 'مع الرعاية والصيانة المناسبة، يمكن أن تدوم زراعة الأسنان مدى الحياة. لديها معدل نجاح يزيد عن 95%.',
        },
      ],
    },
    contact: {
      title: 'اتصل بد. نمامشة أسامة',
      subtitle: 'مستعد لجدولة موعدك؟ اتصل بنا اليوم',
      location: {
        title: 'موقعنا',
        clinic: 'عيادة د. نمامشة أسامة لطب الأسنان',
        address: 'قالمة، الحاج مبارك، الجزائر',
      },
      details: {
        address: {
          title: 'العنوان',
          value: 'قالمة، الجزائر',
        },
        phone: {
          title: 'الهاتف',
          value: '29 404 409',
        },
        hours: {
          title: 'ساعات العمل',
          value: 'الإثنين-الجمعة: 8ص-6م | السبت: 9ص-4م',
        },
      },
      actions: {
        directions: 'احصل على الاتجاهات',
        call: 'اتصل الآن',
        appointment: 'احجز موعداً',
      },
    },
    footer: {
      copyright: '© 2024 د. نمامشة أسامة. جميع الحقوق محفوظة.',
    },
  },
};