# Site Web Gammart Habitat

Site web officiel de Gammart Habitat, spécialiste de l'isolation thermique dans le Bas-Rhin et en Alsace.

## Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Payload CMS (déjà déployé sur Railway)
- **Formulaire**: EmailJS
- **Analytics**: Google Analytics 4

## Structure du projet

```
website/
├── app/                          # Pages et layouts Next.js 15
│   ├── layout.tsx               # Layout principal avec Header/Footer
│   ├── page.tsx                 # Page d'accueil
│   ├── contact/                 # Page de contact
│   ├── a-propos/                # Page à propos
│   ├── aides-financements/      # Page aides & financements
│   ├── blog/                    # Pages blog (dynamiques)
│   └── realisations/            # Pages réalisations (dynamiques)
├── components/
│   ├── layout/                  # Header, Footer
│   ├── sections/                # Sections de la page d'accueil
│   └── ui/                      # Composants réutilisables
├── lib/
│   └── api.ts                   # Client API pour Payload CMS
└── types/
    └── payload.ts               # Types TypeScript pour le CMS
```

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Configurer les variables d'environnement :
Copier `.env.local.example` vers `.env.local` et remplir les valeurs :
```bash
cp .env.local.example .env.local
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Configuration

### Payload CMS

Le CMS est déjà déployé et configuré sur :
- **URL Production**: https://gammart-habitat-cms-production.up.railway.app
- **API REST**: `/api/*`
- **GraphQL**: `/api/graphql`

### EmailJS (Formulaire de contact)

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Créer un service email
3. Créer un template d'email
4. Récupérer les clés et les ajouter dans `.env.local`

### Google Analytics 4

1. Créer une propriété GA4 sur [Google Analytics](https://analytics.google.com/)
2. Récupérer l'ID de mesure (format: G-XXXXXXXXXX)
3. Ajouter l'ID dans `.env.local`

## Pages disponibles

### Pages statiques
- **/** - Page d'accueil
- **/contact** - Formulaire de contact
- **/a-propos** - À propos de Gammart Habitat
- **/aides-financements** - Aides et financements

### Pages dynamiques (CMS)
- **/blog** - Liste des articles de blog (avec pagination)
- **/blog/[slug]** - Page article individuelle
- **/realisations** - Liste des réalisations (avec pagination)
- **/realisations/[slug]** - Page réalisation individuelle

## Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linting
npm run lint
```

## Palette de couleurs

- **Vert foncé** (#0D4D3B) - Couleur principale, CTA
- **Vert sauge** (#8BA888) - Couleur secondaire, hover
- **Vert leaf** (#1B5E4D) - Accents, hover
- **Beige** (#D4C9B0) - Fond sections alternées
- **Gris** (#4A5C5E) - Textes secondaires

## Fonctionnalités

✅ Design responsive (mobile, tablet, desktop)
✅ Navigation avec sous-menus
✅ Sections de la page d'accueil (Hero, Services, Process, Aides, CTA)
✅ Pages statiques (Contact, À propos, Aides & Financements)
✅ Pages dynamiques Blog avec pagination
✅ Pages dynamiques Réalisations avec pagination
✅ Intégration API Payload CMS
✅ SEO optimisé (metadata, OpenGraph)
✅ Performance optimisée (Next.js 15, images optimisées)

## À faire

- [ ] Intégrer EmailJS dans le formulaire de contact
- [ ] Implémenter Google Analytics 4
- [ ] Ajouter les images et le logo
- [ ] Créer les pages N2 pour les services (ITE, ITI, Combles, etc.)
- [ ] Optimiser le SEO (sitemap, robots.txt)
- [ ] Tester sur tous les navigateurs

## Support

Pour toute question, contactez :
- **Email**: a.gevez@gammart-habitat.fr
- **Téléphone**: 07 63 98 23 57

## License

© 2025 Gammart Habitat. Tous droits réservés.
