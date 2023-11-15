---
theme: smile
transition: fade
record: true
layout: cover
hideInToc: true
exportFilename: slides/tnt-headless/slides.pdf
---

# Qu'est-ce que le headless ?

Tech' non Tech'

---

layout: intro-bg
hideInToc: true
image: https://images.unsplash.com/photo-1496112576525-8b31e9ce4872

---

# Plan

<Toc maxDepth="1"/>

---

layout: intro-bg
image: https://images.unsplash.com/photo-1636633762833-5d1658f1e29b

---

# Qu'est-ce que c'est ?

<Toc maxDepth="1"/>

---

## Qu'est-ce que c'est ?

Ces termes font référence à une architecture ou un ensemble d'architecture.

---

## Architecture client-serveur (web)

![Architecture client serveur](/client-server-small.png)

<v-click>

Dans le cas présent, le client est bien souvent votre navigateur favori: chrome, firefox, safari...etc.

</v-click>

---

## Back end

Le back end désigne l'ensemble des technologie qui vont s'executer sur le serveur:

<v-click>
<div class="flex justify-between">
<div>

Languages:

- PHP
- Java
- Python
- ...etc.

</div>
<div>

Base de données:

- MySQL / MariaDB
- MongoDB
- ...etc.

</div>
<div>

Autres:

- Apache / Nginx
- Varnish
- Redis
- ...etc.

</div>
</div>
</v-click>

---

<style>
.wrapper p {
  display: flex;
  justify-content: space-around;
}
.wrapper p img {
  height: 100px;
}
</style>

## Front end

Le front end désigne l'ensemble des technologies qui vont s'executer sur le client (navigateur).

<v-click>

Globalement:

<div class="wrapper">

![Logo HTML](/HTML.svg)
![Logo CSS](/CSS.svg)
![Logo JavaScript](/JavaScript.png)

</div>

</v-click>

---

layout: intro-bg
image: https://images.unsplash.com/photo-1539627831859-a911cf04d3cd

---

# Exemples de solutions

<Toc maxDepth="1"/>

---

## Solutions non headless

Entre autres:

<div class="wrapper">

![Logo Magento](/Magento.svg)
![Logo Drupal](/Drupal.svg)

</div>

<v-click>

Enormément de solutions classiques CSM et e-commerce sont des solutions non headless.

</v-click>

---

## Solutions headless

Entre autres:

<div class="wrapper">

![Logo Strapi](/Strapi.svg)
![Logo Symfony](/Symfony.svg)

</div>

<v-click>

Les développements spécifiques peuvent facilement fonctionner en mode headless.

</v-click>

<v-click>

Mais énormément de solutions classiques CSM et e-commerce peuvent aussi fonctionner en mode headless.

</v-click>

---

layout: intro-bg
image: https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a

---

# Architectures

<Toc maxDepth="1"/>

---

## Multi Page Apps

![MPA navigate](/mpa-navigate-fr.drawio.png)

<v-click>

Le serveur renvoie directement le contenu HTML de la page.

</v-click>

---

## layout: two-cols-with-title

## Multi Page Apps

Architecture non headless

::left::

Avantages:

1. Simple

:: right::

Inconvénients:

1. Rafraîchissements complets de la page
2. Certaines tâches sont difficiles (focus / scroll)
3. Certaines tâches sont peu pratique (favoris)
4. Certaines tâches sont impossible (route transition)

---

## Progressively Enhanced Multi-Page Apps

Globalement la même chose que l'architecture Multi Page Application.

Sauf qu'on va utiliser le JavaScript pour améliorer l'expérience d'utilisateur.

---

## layout: two-cols-with-title

## Progressively Enhanced Multi-Page Apps

Architecture non headless

::left::

Avantages:

1. UX améliorée

:: right::

Inconvénients:

1. Plus de dev (formulaires, erreurs, loaders)
2. Duplication code front et back
3. Codage impératif (jQuery)
4. Plus de bug

---

## layout: two-cols-with-title

## Single Page Apps

::left::

<v-clicks>

1. Le serveur renvoie une page HTML "vide".
2. Le browser va ensuite récupérer des informations via des appels API (AJAX)
3. Le contenu renvoyé par les appels d'API est souvent renvoyé au format JSON
4. Le JS dans la page va générer le contenu HTML

</v-clicks>

:: right::

![MPA navigate](/spa-2-fr.drawio.png)

---

## layout: two-cols-with-title

## Single Page Apps

Architecture headless

::left::

Avantages:

1. UX améliorée
2. DX améliorée
3. Suppression duplication
4. Codage déclaratif (Angular / React / Vue...etc.)
5. Outillage moderne

:: right::

Inconvénients:

1. SEO
2. Taille des bundles
3. Temps de chargement initial
4. Performances réduites pour les smartphones

---

<style scoped>
  img {
    width: 750px;
  }
</style>

## Server-Side Rendered Single Page Apps

Chargement initial:

![SSRSPA load](/ssrspa-load-fr.drawio.png)

<v-click>

Le serveur (front) permet uniquement de pré-générer la page comme ce que ferai le navigateur.

</v-click>

---

<style scoped>
  img {
    width: 450px;
  }
</style>

## Server-Side Rendered Single Page Apps

Navigation:

![SSRSPA navigation](/ssrspa-navigate-fr.drawio.png)

<v-click>

Lors de la navigation le comportement SPA reprend la main.

</v-click>

---

layout: two-cols-with-title
hideInToc: true

---

## Server-Side Rendered Single Page Apps

Architecture headless

::left::

Avantages:

1. UX améliorée
2. DX améliorée
3. SEO
4. "performances"

:: right::

Inconvénients:

1. Nécessite un serveur Node
2. Hydratation

---

layout: intro-bg
image: https://images.unsplash.com/photo-1620247405684-8352d6d7ce09

---

# Faire du headless ? Ou pas ?

<Toc maxDepth="1"/>

---

## Quand faut-il faire du headless ?

Le headless n'est pas un objectif en lui-même mais une architecture qui va répondre à un besoin:

<v-clicks>

- Besoin d'avoir une UX améliorée
- Besoin de beaucoup d'interactions (Application Web)
- Besoin de partager les mêmes contenus / données sur plusieurs clients différents:
  - Client web (navigateur)
  - Client mobile (application)
  - Client TV connectée
  - ...etc.

</v-clicks>

---

## Quand ne faut-il pas faire du headless ?

Si la solution qui correspond le plus au besoin est une solution non headless (Magento, Drupal...etc.).

<v-click>

Il est toujours possible de faire du headless avec ces solutions, mais dans ce cas on perd beaucoup des fonctionnalités de base de la solution:

- configuration de la disposition du contenu
- front end editing
- prévisualisation
- ...etc.

</v-click>

---

## Les cas limites

Un site CMS / e-commerce avec un grand besoin d'UX et/ou d'interactions.

2 possibilités:

<v-clicks>

- Partir sur une solution non headless
  - Utiliser React pour certaines parties de l'application (Projet Sephora Metaplan)
  - Utiliser Alpine.js, une alternative à React compatible SEO (Projet Valmont)
- Partir sur une solution headless
  - Utiliser Strapi + Next.js (Projet Suez MSD)

</v-clicks>

---

## layout: full

<Thanks/>
