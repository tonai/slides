---
theme: smile
transition: fade
record: true
layout: cover
hideInToc: true
exportFilename: slides/frontend-architecture/slides.pdf
---

# Architectures Frontend

Paris.JS 25/10/2023

---
layout: intro
hideInToc: true
---

<style>
.slidev-page-2 {
  text-shadow: 0 0 5px black, 0 0 3px black;
}
.slidev-page-2:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-image: url('https://images.unsplash.com/photo-1496112576525-8b31e9ce4872');
  background-size: cover;
}
.slidev-toc {
  position: relative;
}
</style>

# Plan

<Toc maxDepth="1"/>

---
hideInToc: true
---

## Qui suis-je ?

<WhoAmI/>

---
layout: intro
---

<style>
.slidev-page-4 {
  background-image: url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a');
  background-size: cover;
  text-shadow: 0 0 5px black, 0 0 3px black;
}
</style>

# Architectures

<Toc maxDepth="1"/>

---
layout: two-cols-with-title
---

## Multi-Page Apps

::left::

Page load / navigation

::right::

![MPA navigate](/mpa-navigate-fr.drawio.png)

---
layout: two-cols-with-title
hideInToc: true
---

## Multi-Page Apps

::left::

Form redirect

::right::

![MPA form redirect](/mpa-form-redirect-fr.drawio.png)

---
layout: two-cols-with-title
hideInToc: true
---

## Multi-Page Apps

::left::

Avantages:

1. Simple
2. Feedback visuel du browser

:: right::

Inconvénients:

1. Rafraîchissements complets de la page
2. Certaines tâches sont difficiles (focus / scroll)
3. Certaines tâches sont peu pratique (favoris)
4. Certaines tâches sont impossible (route transition)
5. Feedback visuel éloigné

---
layout: two-cols-with-title
---

## Progressively Enhanced Multi-Page Apps

::left::

Page load

::right::

![PEMPA load](/pempa-load-fr.drawio.png)

---
layout: two-cols-with-title
hideInToc: true
---

## Progressively Enhanced Multi-Page Apps

::left::

Navigation

::right::

![PEMPA navigate](/pempa-navigate-fr.drawio.png)

---
layout: two-cols-with-title
hideInToc: true
---

## Progressively Enhanced Multi-Page Apps

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
layout: two-cols-with-title
---

## Single Page Applications

::left::

Page load

::right::

![SPA load](/spa-fr.drawio.png)

---
layout: two-cols-with-title
hideInToc: true
---

## Single Page Applications

::left::

Navigation (comme PEMPA)

::right::

![SPA navigate](/pempa-navigate-fr.drawio.png)

---
layout: two-cols-with-title
hideInToc: true
---

## Single Page Applications

::left::

Avantages:

1. UX améliorée
2. DX améliorée
3. Suppression duplication (sauf validation/erreur formulaires)
4. Codage déclaratif
5. Outillage moderne

:: right::

Inconvénients:

1. SEO
2. Taille des bundles
3. Temps de chargement initial
4. Performances réduites pour les smartphones

---
layout: two-cols-with-title
---

## Server-Side Rendered Single Page Applications

::left::

Page load (comme PEMPA)

::right::

![SSRSPA load](/pempa-load-fr.drawio.png)

---
layout: two-cols-with-title
hideInToc: true
---

## Server-Side Rendered Single Page Applications

::left::

Navigation (comme PEMPA)

::right::

![SSRSPA load](/pempa-navigate-fr.drawio.png)

---
layout: two-cols-with-title
hideInToc: true
---

## Server-Side Rendered Single Page Applications

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
layout: intro
---

<style>
.slidev-page-17 {
  background-image: url('https://images.unsplash.com/photo-1622737133809-d95047b9e673');
  background-size: cover;
  text-shadow: 0 0 5px black, 0 0 3px black;
}
</style>

# Techniques de rendu

<Toc maxDepth="1"/>

---
layout: two-cols-with-title
---

## Dynamic Rendering

Les pages sont générées à la volée de manière dynamique côté le serveur

::left::

Avantages:

1. Contenu dynamique

:: right::

Inconvénients:

1. Consomme des ressources backend
2. Réponse serveur lente
3. Nécessite de la mise en cache externe
4. Invalidation du cache complexe

---
layout: two-cols-with-title
---

## Static Site Generation

Les pages sont générées à l'avance lors de la phase de compilation.

::left::

Avantages:

1. Charge minimale du serveur
2. Réponse serveur rapide

:: right::

Inconvénients:

1. Page statique jusqu'à la prochaine compilation
2. Longue compilation

---
layout: two-cols-with-title
---

## Incremental Static Regeneration

Les pages sont générées (build ou runtime) puis mise en cache.

Quand le cache est expiré, la page est regénérée en background.

::left::

Avantages:

1. Charge réduite du serveur
2. Réponse rapide
3. Contenu pseudo-dynamique
4. Revalidation à la demande possible

:: right::

Inconvénients:

1. La revalidation basée sur le temps est difficilement controlable
2. La revalidation à la demande nécessite du dévelopement

---
layout: two-cols-with-title
---

## Jamstack

Le contenu est principalement intégré dans les sources.

Le déploiement automatisé met à jour le site quand le contenu est modifié.

::left::

Avantages:

1. Charge minimale du serveur
2. Réponse rapide
3. Contenu pseudo-dynamique

:: right::

Inconvénients:

1. Contenu géré dans git

---

## Résumé

![Render summary](/render.png)

---
layout: intro
---

<style>
.slidev-page-23 {
  text-shadow: 0 0 5px black, 0 0 3px black;
}
.slidev-page-23:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-image: url('https://images.unsplash.com/photo-1552035509-b247fe8e5078');
  background-size: cover;
}
.slidev-toc {
  position: relative;
}
</style>

# Conclusion

<Toc maxDepth="1"/>

---

## Headless or not ?

Les architectures headless (SPA/SSRSPA) ne sont pas bien adaptées quand le contenu est généré par le backend (ex: Wordpress, Drupal, Magento...etc.).

D'autres solutions tels que Alpine.js, HTMX ou encore Vue.js en mode progressive enhancement sont plus adaptées.

---

## SEO or not ?

Les architectures SPA sont adaptées aux cas ou le SEO n'est pas nécessaire comme des:

* Back-offices ou panneaux d'administration
* Applications nécessitant une authentification
* Applications sans contenu indexable (par exemple : Excalidraw )

---

## DR, SSG, ISR, JAMSTACK ?

En fonction de vos besoins:

1. Si le contenu est dans le code source => **JamStack**
2. Si le contenu est majoritairement statique => **SSG**
3. Si vous pouvez définir une logique de mise à jour du contenu => **On-demand ISR**
4. S'il est possible de définir une durée de mise en cache => **Time-based ISR**
5. Sinon => **DR**

---
layout: full
---

<Thanks/>
