export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  detailedDescription: string;
  problems: string[];
  method: Array<{ title: string; text: string }>;
  included: string[];
  benefits: string[];
  examples: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const defaultMethod = [
  { title: "Diagnostic", text: "Analyse du contexte, des objectifs, des outils existants et des priorités business." },
  { title: "Plan d'action", text: "Construction d'une feuille de route claire avec recommandations, livrables et étapes de déploiement." },
  { title: "Mise en œuvre", text: "Accompagnement opérationnel, production des supports, paramétrages et suivi des résultats." },
  { title: "Optimisation", text: "Mesure des performances, ajustements et transmission des bonnes pratiques à vos équipes." },
];

export const servicePages: ServicePage[] = [
  {
    slug: "conseil-accompagnement",
    title: "Conseil & accompagnement",
    metaTitle: "Conseil et accompagnement entreprise | L&R SOLUTIONS",
    metaDescription: "Accompagnement stratégique pour dirigeants, indépendants et entreprises : diagnostic, feuille de route, pilotage et optimisation.",
    shortDescription: "Clarifier votre stratégie, cadrer vos priorités et avancer avec un plan d'action concret.",
    detailedDescription: "L&R SOLUTIONS accompagne les dirigeants et porteurs de projet dans la structuration de leur activité, la prise de décision et la mise en place d'actions concrètes. L'objectif est de transformer les idées en priorités opérationnelles et mesurables.",
    problems: ["Manque de clarté sur les priorités", "Difficulté à structurer une offre ou une organisation", "Décisions importantes sans vision globale", "Besoin d'un regard externe fiable"],
    method: defaultMethod,
    included: ["Audit stratégique", "Entretien dirigeant", "Feuille de route personnalisée", "Plan d'action priorisé", "Suivi des décisions clés", "Recommandations outils et méthodes"],
    benefits: ["Vision plus claire", "Décisions plus rapides", "Organisation mieux structurée", "Gain de temps et de sérénité"],
    examples: ["Cadrage d'un lancement d'activité", "Plan de développement pour une TPE", "Structuration d'une offre de services"],
    faqs: [
      { question: "À qui s'adresse cet accompagnement ?", answer: "Aux dirigeants, indépendants, associations, porteurs de projet et entreprises qui souhaitent structurer leur développement." },
      { question: "Combien de temps dure une mission ?", answer: "Cela dépend du besoin. Un diagnostic peut être court, tandis qu'un accompagnement complet peut s'étaler sur plusieurs semaines." },
      { question: "Recevons-nous un livrable ?", answer: "Oui, chaque mission inclut des recommandations et un plan d'action clair." },
    ],
  },
  {
    slug: "developpement-commercial",
    title: "Développement commercial",
    metaTitle: "Développement commercial | L&R SOLUTIONS",
    metaDescription: "Structuration commerciale, acquisition client, prospection, offres, pipeline et suivi pour développer votre chiffre d'affaires.",
    shortDescription: "Structurer votre offre, vos canaux d'acquisition, votre prospection et votre suivi client.",
    detailedDescription: "Nous aidons votre entreprise à construire une démarche commerciale solide : positionnement, offres, prospection, tunnel de conversion, outils de suivi et routines commerciales.",
    problems: ["Prospection irrégulière", "Offre mal comprise par les prospects", "Manque de suivi commercial", "Difficulté à convertir les opportunités"],
    method: defaultMethod,
    included: ["Audit commercial", "Clarification de l'offre", "Script de prospection", "Pipeline commercial", "Tableau de suivi", "Plan d'actions acquisition"],
    benefits: ["Plus d'opportunités qualifiées", "Meilleur taux de conversion", "Suivi plus rigoureux", "Croissance plus prévisible"],
    examples: ["Mise en place d'un CRM simple", "Plan de prospection B2B", "Optimisation d'une offre commerciale"],
    faqs: [
      { question: "Travaillez-vous sur la prospection ?", answer: "Oui, nous pouvons structurer les messages, les canaux, les scripts et le suivi." },
      { question: "Pouvez-vous aider à créer une offre ?", answer: "Oui, nous aidons à clarifier la proposition de valeur et les arguments commerciaux." },
      { question: "Faut-il déjà avoir une équipe commerciale ?", answer: "Non, l'accompagnement peut convenir à un dirigeant seul comme à une équipe." },
    ],
  },
  {
    slug: "marketing-communication",
    title: "Marketing & communication",
    metaTitle: "Marketing et communication | L&R SOLUTIONS",
    metaDescription: "Stratégie marketing, image de marque, réseaux sociaux, contenus, campagnes et communication digitale pour renforcer votre visibilité.",
    shortDescription: "Renforcer votre positionnement, votre image de marque et votre visibilité auprès des bons publics.",
    detailedDescription: "Nous construisons une communication claire, cohérente et orientée conversion : positionnement, messages, contenus, réseaux sociaux, campagnes et supports professionnels.",
    problems: ["Visibilité insuffisante", "Message flou ou peu différenciant", "Communication irrégulière", "Manque de supports professionnels"],
    method: defaultMethod,
    included: ["Audit de communication", "Positionnement", "Calendrier éditorial", "Supports visuels", "Optimisation réseaux sociaux", "Recommandations campagnes"],
    benefits: ["Image plus professionnelle", "Meilleure visibilité", "Communication plus cohérente", "Acquisition plus efficace"],
    examples: ["Plan de communication mensuel", "Refonte d'un discours de marque", "Création de supports commerciaux"],
    faqs: [
      { question: "Pouvez-vous gérer les réseaux sociaux ?", answer: "Nous pouvons définir la stratégie, le calendrier, les formats et accompagner la production." },
      { question: "Travaillez-vous sur le branding ?", answer: "Oui, nous pouvons clarifier l'identité, les messages et les supports." },
      { question: "Les campagnes publicitaires sont-elles incluses ?", answer: "Elles peuvent être intégrées selon le périmètre de mission." },
    ],
  },
  {
    slug: "creation-sites-internet",
    title: "Création de sites internet",
    metaTitle: "Création de sites internet | L&R SOLUTIONS",
    metaDescription: "Création de sites vitrines modernes, rapides, responsive et optimisés pour générer des demandes de contact.",
    shortDescription: "Concevoir des sites vitrines modernes, rapides, responsives et pensés pour convertir.",
    detailedDescription: "L&R SOLUTIONS conçoit des sites professionnels qui inspirent confiance, présentent clairement votre activité et transforment les visiteurs en prospects qualifiés.",
    problems: ["Site vieillissant ou peu crédible", "Peu de demandes entrantes", "Message difficile à comprendre", "Mauvaise expérience mobile"],
    method: defaultMethod,
    included: ["Arborescence", "Rédaction des sections clés", "Design responsive", "Intégration technique", "SEO de base", "Formulaire de contact"],
    benefits: ["Image premium", "Meilleure conversion", "Site rapide et responsive", "Base SEO propre"],
    examples: ["Site vitrine de cabinet de conseil", "Landing page de lancement", "Refonte d'un site professionnel"],
    faqs: [
      { question: "Le site sera-t-il responsive ?", answer: "Oui, toutes les pages sont pensées pour desktop, tablette et mobile." },
      { question: "Le SEO est-il inclus ?", answer: "Les bases SEO sont intégrées : titres, descriptions, structure Hn et performance." },
      { question: "Pouvez-vous rédiger le contenu ?", answer: "Oui, nous pouvons accompagner la rédaction des messages clés." },
    ],
  },
  {
    slug: "developpement-applications",
    title: "Développement d'applications web",
    metaTitle: "Développement d'applications web | L&R SOLUTIONS",
    metaDescription: "Applications web, outils métiers, tableaux de bord et plateformes sur mesure pour digitaliser vos processus.",
    shortDescription: "Créer des outils métiers, tableaux de bord et interfaces sur mesure pour vos opérations.",
    detailedDescription: "Nous accompagnons la conception et le développement d'applications web adaptées à vos processus : espace client, tableau de bord, outil interne, portail ou plateforme métier.",
    problems: ["Outils dispersés", "Suivi manuel chronophage", "Processus non centralisés", "Besoin d'une solution métier spécifique"],
    method: defaultMethod,
    included: ["Cadrage fonctionnel", "Parcours utilisateurs", "Interface responsive", "Base de données", "Tableaux de bord", "Tests et mise en ligne"],
    benefits: ["Processus centralisés", "Gain de temps", "Meilleure visibilité sur l'activité", "Solution adaptée au métier"],
    examples: ["Dashboard de suivi", "Portail client", "Application de réservation"],
    faqs: [
      { question: "Développez-vous sur mesure ?", answer: "Oui, les fonctionnalités sont cadrées selon vos besoins et priorités." },
      { question: "Peut-on commencer par une version simple ?", answer: "Oui, nous recommandons souvent une première version claire avant d'enrichir l'outil." },
      { question: "L'application peut-elle évoluer ?", answer: "Oui, l'architecture peut être pensée pour ajouter de nouvelles fonctionnalités." },
    ],
  },
  {
    slug: "automatisation-ia",
    title: "Automatisation & IA",
    metaTitle: "Automatisation et intelligence artificielle | L&R SOLUTIONS",
    metaDescription: "Automatisation de processus, workflows, intégration IA et assistants pour gagner du temps et fiabiliser l'activité.",
    shortDescription: "Réduire les tâches répétitives grâce à des workflows simples, fiables et mesurables.",
    detailedDescription: "Nous identifions les tâches répétitives et mettons en place des automatisations utiles : formulaires, notifications, génération de documents, synchronisations, IA et assistants métier.",
    problems: ["Tâches répétitives", "Saisie manuelle source d'erreurs", "Temps perdu sur l'administratif", "Outils non connectés"],
    method: defaultMethod,
    included: ["Audit processus", "Cartographie des tâches", "Scénarios automatisés", "Intégration IA", "Tests de fiabilité", "Documentation d'utilisation"],
    benefits: ["Gain de temps", "Moins d'erreurs", "Meilleur suivi", "Équipe plus productive"],
    examples: ["Automatisation de demandes client", "Génération de documents", "Assistant IA pour réponses internes"],
    faqs: [
      { question: "L'IA est-elle toujours nécessaire ?", answer: "Non. Nous privilégions les solutions utiles, simples et adaptées au besoin réel." },
      { question: "Peut-on automatiser des outils existants ?", answer: "Oui, selon les outils utilisés et leurs possibilités d'intégration." },
      { question: "Les équipes sont-elles formées ?", answer: "Oui, une prise en main peut être incluse." },
    ],
  },
  {
    slug: "digitalisation-entreprises",
    title: "Digitalisation des entreprises",
    metaTitle: "Digitalisation des entreprises | L&R SOLUTIONS",
    metaDescription: "Modernisation des processus, outils, documents et méthodes de travail pour digitaliser votre entreprise.",
    shortDescription: "Moderniser vos méthodes de travail, vos documents, votre organisation et votre suivi.",
    detailedDescription: "Nous aidons les entreprises à passer d'une organisation dispersée ou manuelle à un système digital clair, structuré et plus efficace.",
    problems: ["Documents dispersés", "Processus papier ou manuels", "Manque de visibilité", "Outils mal configurés"],
    method: defaultMethod,
    included: ["Audit digital", "Choix des outils", "Structuration documentaire", "Processus numériques", "Formation", "Suivi de déploiement"],
    benefits: ["Organisation plus fluide", "Information centralisée", "Meilleure productivité", "Pilotage plus fiable"],
    examples: ["Mise en place d'un espace collaboratif", "Digitalisation de documents", "Structuration d'un suivi client"],
    faqs: [
      { question: "Faut-il changer tous les outils ?", answer: "Pas forcément. Nous optimisons d'abord ce qui peut être conservé." },
      { question: "Accompagnez-vous la transition ?", answer: "Oui, l'accompagnement inclut la méthode, les outils et la prise en main." },
      { question: "Est-ce adapté aux petites structures ?", answer: "Oui, les solutions sont dimensionnées selon la taille et les moyens de l'entreprise." },
    ],
  },
  {
    slug: "formations",
    title: "Formations",
    metaTitle: "Formations professionnelles digitales | L&R SOLUTIONS",
    metaDescription: "Formations aux outils numériques, marketing digital, automatisation, IA et méthodes commerciales pour dirigeants et équipes.",
    shortDescription: "Former les dirigeants et équipes aux outils numériques, au marketing, à l'IA et à l'automatisation.",
    detailedDescription: "Nous concevons des formations pratiques pour aider les dirigeants et équipes à gagner en autonomie sur les sujets digitaux, commerciaux et organisationnels.",
    problems: ["Manque d'autonomie sur les outils", "Équipe peu formée au digital", "Difficulté à adopter de nouvelles méthodes", "Besoin de montée en compétence rapide"],
    method: defaultMethod,
    included: ["Programme personnalisé", "Supports pédagogiques", "Ateliers pratiques", "Cas d'usage métier", "Exercices guidés", "Plan de progression"],
    benefits: ["Équipes plus autonomes", "Meilleure adoption des outils", "Compétences concrètes", "Gain de confiance"],
    examples: ["Formation IA pour dirigeants", "Atelier marketing digital", "Prise en main d'outils collaboratifs"],
    faqs: [
      { question: "Les formations sont-elles personnalisées ?", answer: "Oui, elles sont adaptées au niveau, au métier et aux objectifs." },
      { question: "Peut-on former une petite équipe ?", answer: "Oui, les formats peuvent être individuels ou collectifs." },
      { question: "Les formations sont-elles pratiques ?", answer: "Oui, elles sont orientées cas concrets et mise en application." },
    ],
  },
  {
    slug: "evenementiel-professionnel",
    title: "Événementiel professionnel",
    metaTitle: "Événementiel professionnel | L&R SOLUTIONS",
    metaDescription: "Organisation, structuration et communication d'événements professionnels, rencontres, ateliers et lancements.",
    shortDescription: "Structurer, organiser et valoriser vos événements professionnels, rencontres et lancements.",
    detailedDescription: "Nous vous aidons à concevoir des événements professionnels cohérents avec vos objectifs : visibilité, acquisition, fidélisation, partenariats ou lancement d'offre.",
    problems: ["Événement peu structuré", "Manque de visibilité", "Difficulté à mobiliser les participants", "Absence de suivi après l'événement"],
    method: defaultMethod,
    included: ["Concept événementiel", "Planning d'organisation", "Communication", "Supports", "Parcours participant", "Suivi post-événement"],
    benefits: ["Image professionnelle", "Participants mieux engagés", "Organisation plus fluide", "Retombées mieux exploitées"],
    examples: ["Atelier professionnel", "Lancement d'offre", "Rencontre partenaires"],
    faqs: [
      { question: "Pouvez-vous gérer la communication de l'événement ?", answer: "Oui, nous pouvons structurer les messages, supports et canaux." },
      { question: "Intervenez-vous sur de petits événements ?", answer: "Oui, l'accompagnement peut être adapté à un atelier, une conférence ou une rencontre ciblée." },
      { question: "Le suivi après l'événement est-il prévu ?", answer: "Il peut être intégré pour exploiter les contacts et retombées." },
    ],
  },
  {
    slug: "partenariats",
    title: "Mise en relation & partenariats",
    metaTitle: "Mise en relation et partenariats | L&R SOLUTIONS",
    metaDescription: "Développement de réseau, partenariats stratégiques, opportunités commerciales et apport d'affaires qualifié.",
    shortDescription: "Identifier des opportunités qualifiées et créer des connexions utiles à votre développement.",
    detailedDescription: "Nous aidons votre entreprise à structurer une démarche de partenariats et à identifier des opportunités cohérentes avec votre stratégie commerciale.",
    problems: ["Réseau peu exploité", "Difficulté à trouver les bons partenaires", "Opportunités non qualifiées", "Manque de stratégie de collaboration"],
    method: defaultMethod,
    included: ["Ciblage partenaires", "Proposition de valeur", "Messages de prise de contact", "Suivi des opportunités", "Structuration des échanges", "Plan de développement réseau"],
    benefits: ["Réseau plus qualifié", "Opportunités commerciales", "Crédibilité renforcée", "Développement plus rapide"],
    examples: ["Recherche de partenaires locaux", "Structuration d'un réseau prescripteur", "Mise en relation business"],
    faqs: [
      { question: "Les mises en relation sont-elles garanties ?", answer: "Nous structurons la démarche et qualifions les opportunités, mais chaque relation dépend des besoins et intérêts mutuels." },
      { question: "Travaillez-vous avec des partenaires locaux ?", answer: "Oui, selon la zone et le secteur d'activité." },
      { question: "Peut-on intégrer cela à une stratégie commerciale ?", answer: "Oui, c'est souvent complémentaire au développement commercial." },
    ],
  },
  {
    slug: "solutions-numeriques",
    title: "Solutions numériques",
    metaTitle: "Solutions numériques sur mesure | L&R SOLUTIONS",
    metaDescription: "Outils numériques, plateformes, logiciels, intégrations et solutions métier pour piloter votre activité.",
    shortDescription: "Choisir, intégrer et optimiser les bons outils pour piloter votre activité au quotidien.",
    detailedDescription: "Nous vous aidons à sélectionner, configurer ou concevoir des solutions numériques adaptées à votre activité : CRM, outils de suivi, plateformes, automatisations ou tableaux de bord.",
    problems: ["Trop d'outils non connectés", "Manque de visibilité sur les données", "Outils sous-utilisés", "Besoin d'une solution plus adaptée"],
    method: defaultMethod,
    included: ["Audit des outils", "Recommandations", "Configuration", "Intégrations", "Tableaux de bord", "Formation utilisateur"],
    benefits: ["Outils mieux utilisés", "Données plus claires", "Pilotage plus simple", "Meilleure productivité"],
    examples: ["Mise en place CRM", "Dashboard de gestion", "Configuration d'outils collaboratifs"],
    faqs: [
      { question: "Proposez-vous des logiciels prêts à l'emploi ?", answer: "Nous pouvons recommander et configurer des outils existants ou cadrer une solution sur mesure." },
      { question: "Pouvez-vous connecter plusieurs outils ?", answer: "Oui, selon les APIs et possibilités techniques." },
      { question: "Les utilisateurs sont-ils accompagnés ?", answer: "Oui, une formation et documentation peuvent être incluses." },
    ],
  },
  {
    slug: "support-maintenance",
    title: "Support & maintenance",
    metaTitle: "Support et maintenance digitale | L&R SOLUTIONS",
    metaDescription: "Maintenance, support technique, optimisation continue, suivi et sécurisation de vos sites, outils et solutions numériques.",
    shortDescription: "Maintenir, optimiser et sécuriser vos outils numériques pour garantir leur continuité.",
    detailedDescription: "L&R SOLUTIONS accompagne le suivi et l'amélioration continue de vos sites, outils et dispositifs numériques afin de préserver leur performance, leur fiabilité et leur évolution.",
    problems: ["Site non maintenu", "Petits bugs récurrents", "Besoin d'ajustements réguliers", "Manque de support technique"],
    method: defaultMethod,
    included: ["Maintenance corrective", "Mises à jour", "Optimisations", "Contrôles de sécurité", "Support priorisé", "Suivi de performance"],
    benefits: ["Moins d'interruptions", "Outils plus fiables", "Évolutions maîtrisées", "Sérénité technique"],
    examples: ["Maintenance de site vitrine", "Support sur outil interne", "Optimisation de performance"],
    faqs: [
      { question: "La maintenance est-elle mensuelle ?", answer: "Elle peut être ponctuelle ou récurrente selon vos besoins." },
      { question: "Intervenez-vous sur un site déjà existant ?", answer: "Oui, après audit technique et validation du périmètre." },
      { question: "Le support inclut-il les évolutions ?", answer: "Les petites évolutions peuvent être incluses selon l'offre, les évolutions importantes font l'objet d'un devis." },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function getServiceSlugByTitle(title: string) {
  const normalized = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return servicePages.find((service) => normalized.includes(service.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ")[0]))?.slug;
}
