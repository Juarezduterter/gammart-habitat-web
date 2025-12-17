# Définition du web design - Gammart Habitat

# Analyse Design Gammart Habitat — Identité Existante

Parfait, j'ai les assets graphiques. Voici mon analyse + recommandations pour construire le site Next.js.

---

## 🎨 Identité Visuelle Actuelle

### Palette Extraite (codes HEX)

```css
/* Primaires */
--vert-fonce: #0D4D3B      /* gammart (foncé) */
--vert-sauge: #8BA888      /* habitat (clair) */
--vert-moyen: #1B5E4D      /* picto feuille */

/* Secondaires (flyer) */
--beige-clair: #D4C9B0     /* fond sections */
--blanc: #FFFFFF
--gris-anthracite: #4A5C5E /* fond header flyer */

/* Accents */
--vert-emeraude: #0D4D3B   /* boutons CTA */
```

**Constat :** Palette cohérente, naturelle, rassurante. Le duo vert foncé/sauge est excellent pour ITE (nature + solidité).

---

## 📐 Identité Typographique

### Logo

- **gammart** : minuscules, vert foncé, géométrique moderne
- **habitat** : minuscules, vert sauge, même police
- **Baseline** : "Le spécialiste de l'isolation" — vert foncé, serif ou semi-serif

### Typo Flyer

- **Titres sections** : Sans-serif bold (type Montserrat/Poppins)
- **Corps de texte** : Sans-serif regular, bon espacement
- **Lisibilité** : excellente, contrastes respectés

---

## 🎯 Direction Artistique pour le Site

### Recommandations Palette Web

**Palette Principale (conforme identité)**

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'gammart': {
          'green-dark': '#0D4D3B',   // Primaire (header, CTA, titres)
          'green-sage': '#8BA888',   // Secondaire (accents, hover)
          'green-leaf': '#1B5E4D',   // Pictos, icônes
          'beige': '#D4C9B0',        // Fonds sections alternées
          'gray': '#4A5C5E',         // Textes secondaires
        },
        'neutral': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          900: '#111827',
        }
      }
    }
  }
}
```

**Utilisation :**

- **Header/Footer** : `green-dark` (#0D4D3B)
- **CTA principal** : `green-dark` bg + blanc text
- **CTA secondaire** : blanc bg + `green-dark` border
- **Sections alternées** : blanc / `beige` (#D4C9B0)
- **Hover CTA** : `green-leaf` (#1B5E4D)

---

## 🖼️ Assets Graphiques Disponibles

### Logo (3 versions nécessaires)

**Version 1 : Horizontal complet** ✅ (image 3)

```
[gammart habitat]
Le spécialiste de l'isolation
```

- Usage : Header desktop, footer
- Format attendu : SVG + PNG @2x

**Version 2 : Monogramme** ✅ (image 2)

```
[gh + feuille]
```

- Usage : Favicon, mobile header sticky
- Format attendu : SVG + ICO

**Version 3 : Compact sans baseline** (à créer)

```
[gammart habitat]
```

- Usage : Header mobile
- Format attendu : SVG

### Pictogramme Feuille

- Excellent pour : badges éco, certifications, loading states
- **À décliner** : icônes services (version line 2px stroke)

---

## 📄 Design System — Composants Clés

### Boutons (basés flyer)

```jsx
// Bouton Primaire
<button className="
  bg-gammart-green-dark 
  text-white 
  px-8 py-4 
  rounded-lg 
  font-semibold 
  hover:bg-gammart-green-leaf 
  transition-colors 
  shadow-lg 
  hover:shadow-xl
">
  Demander un devis gratuit
</button>

// Bouton Secondaire
<button className="
  bg-white 
  text-gammart-green-dark 
  border-2 border-gammart-green-dark
  px-8 py-4 
  rounded-lg 
  font-semibold 
  hover:bg-gammart-beige 
  transition-colors
">
  Nos réalisations
</button>
```

### Cartes Services (style flyer)

```jsx
<div className="
  bg-white 
  rounded-2xl 
  shadow-md 
  hover:shadow-xl 
  transition-shadow 
  p-6 
  border-l-4 border-gammart-green-dark
">
  {/* Picto vert foncé */}
  <div className="w-12 h-12 mb-4">
    <svg className="text-gammart-green-dark">...</svg>
  </div>
  
  {/* Titre */}
  <h3 className="text-xl font-bold text-gammart-green-dark mb-2">
    Isolation Thermique Extérieure
  </h3>
  
  {/* Description */}
  <p className="text-gray-700 mb-4">
    Réduisez jusqu'à 70% vos dépenses énergétiques...
  </p>
  
  {/* CTA */}
  <a className="text-gammart-green-dark font-semibold flex items-center">
    En savoir plus →
  </a>
</div>
```

### Badges Bénéfices (style flyer)

```jsx
<div className="
  bg-gammart-green-dark 
  text-white 
  px-6 py-3 
  rounded-full 
  font-semibold 
  inline-flex 
  items-center 
  gap-2
">
  <svg>+</svg>
  Réalisez jusqu'à 70% d'économies d'énergie
</div>
```

---

## 🎬 Structure Visuelle Site

### Header Sticky

```
┌─────────────────────────────────────────────┐
│ [Logo GH] Nav1 Nav2 Nav3    [CTA Devis]    │ ← Fond #0D4D3B
└─────────────────────────────────────────────┘
```

**Specs :**

- Hauteur : 80px desktop, 64px mobile
- Fond : `green-dark` avec opacity 95% en scroll
- Logo : blanc (version inversée à créer)
- Nav : texte blanc, hover `green-sage`
- CTA : blanc bg, `green-dark` text

### Hero (inspiré flyer)

```
┌───────────────────────────────────────────────┐
│                                               │
│   Spécialiste ITE Bas-Rhin & Alsace         │ ← H1 vert foncé
│   Rénovation énergétique sur-mesure         │ ← Accroche grise
│                                               │
│   [CTA Devis] [CTA Réalisations]            │
│                                               │
│   [Visuel avant/après + badge DPE]          │ ← Image Baerenthal
│                                               │
└───────────────────────────────────────────────┘
```

**Fond :** Beige (#D4C9B0) avec overlay subtil ou blanc pur

### Section Services (grid comme flyer)

```
Fond blanc

┌──────────┐ ┌──────────┐ ┌──────────┐
│ [Picto]  │ │ [Picto]  │ │ [Picto]  │
│  ITE     │ │  ITI     │ │ Combles  │
└──────────┘ └──────────┘ └──────────┘
┌──────────┐ ┌──────────┐ ┌──────────┐
│ [Picto]  │ │ [Picto]  │ │ [Picto]  │
│ Bardage  │ │ VMC      │ │ Ravale.  │
└──────────┘ └──────────┘ └──────────┘

Fond beige alterné
```

### Section Réalisations

```
┌─────────────────────────────────────────────┐
│  Nos réalisations                           │ ← H2 vert foncé
│                                             │
│  [Carte 1]  [Carte 2]  [Carte 3]          │
│  Baerenthal Strasbourg Wolxheim            │
│  E→B        Brique     +VMC                │
│  [Badge DPE] [Badge]   [Badge]            │
│                                             │
│         [Voir toutes nos réalisations]     │ ← CTA secondaire
└─────────────────────────────────────────────┘
```

**Fond :** Blanc

---

### Phase 3 : Icônes Services

**Style à reprendre :** Line icons 2px stroke, vert foncé

**Services à illustrer :**

- ITE (maison + flèches extérieur)
- ITI (maison + flèches intérieur)
- Combles (toiture + isolation)
- VMC (ventilation air)
- Bardage (planches bois)
- Ravalement (rouleau peinture)
- Audit (loupe + diagramme)
- DPE (étiquette énergétique)

**Source :** Lucide Icons (MIT) + customisation couleur

---

## 📸 Photos Chantiers — Optimisation

### Workflow Images

**Renommage SEO :**

```
gammart-ite-baerenthal-avant-facade-est.jpg
gammart-ite-baerenthal-apres-facade-est.jpg
gammart-ite-strasbourg-brique-avant.jpg
gammart-ite-wolxheim-volets-apres.jpg
```