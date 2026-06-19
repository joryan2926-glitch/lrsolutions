# L&R SOLUTIONS

Site vitrine premium Next.js pour L&R SOLUTIONS.

## Installation

```bash
npm install
npm run dev
```

## Mode actuel

Le site fonctionne temporairement sans base de données et sans service email externe.

- Les contenus publics sont lus depuis `data/site-content.json`.
- Les formulaires contact et devis affichent un message "Fonctionnalité bientôt disponible".
- Supabase et Brevo ne sont pas requis pour déployer la vitrine.

## Administration

Route : `/admin`

Le back-office reste disponible pour les tests locaux. En production, l'administration est temporairement désactivée tant qu'aucune base de données n'est branchée.
