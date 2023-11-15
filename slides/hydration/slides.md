---
theme: smile
transition: fade
record: true
layout: cover
hideInToc: true
exportFilename: slides/hydration/slides.pdf
---

# Hydration

Paris.JS

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
  background-image: url('https://images.unsplash.com/photo-1571597437732-1151ffb18bf6');
  background-size: cover;
  text-shadow: 0 0 5px black, 0 0 3px black;
}
</style>

# Hydratation

<Toc maxDepth="1"/>

---
preload: false
---

## hydratation classique

<video width="700" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1631144761/patterns.dev/selective-hydration-before.mp4" controls playsinline>
  <source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1631144761/patterns.dev/selective-hydration-before.mp4" type="video/mp4">
</video>

---
preload: false
---

## hydratation progressive / paresseuse

<video width="700" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056522/patterns.dev/prog-rehy-2.mp4" controls playsinline>
  <source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056522/patterns.dev/prog-rehy-2.mp4" type="video/mp4">
</video>

---
preload: false
---

## hydratation progressive / paresseuse

<video width="700" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056521/patterns.dev/prog-rehy-5.mp4" controls playsinline>
  <source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056521/patterns.dev/prog-rehy-5.mp4" type="video/mp4">
</video>

<!--
## hydratation progressive / paresseuse

::left::

Avantages:

1. Favorise le code-splitting
2. Permet le chargement à la demande pour les parties rarement utilisées de la page
3. Réduit la taille du bundle


:: right::

Inconvénients:

1. Peut ne pas convenir aux applications dans lesquelles chaque élément de l'écran est disponible pour l'utilisateur
-->

---
preload: false
---

## hydratation sélective

<video width="700" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/eo_12/v1631144841/patterns.dev/selective-hydration-after.mp4" controls playsinline>
  <source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/eo_12/v1631144841/patterns.dev/selective-hydration-after.mp4" type="video/mp4">
</video>

---
preload: false
---

## hydratation sélective

<video width="700" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1631147513/patterns.dev/selective-hydration-after-2.mp4" controls playsinline>
  <source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1631147513/patterns.dev/selective-hydration-after-2.mp4" type="video/mp4">
</video>

<v-click>

<div style="position: absolute; top: 115.5px; right: 30px; width: 180px;">Disponible avec Next.js</div>

</v-click>

---

## hydratation partielle (ilôts)

Le but des îlots est d'hydrater au niveau du composant, plutôt que de la page entière.

<v-click>

Tout ce qui se trouve en dehors de ces îlots/composants ne changera jamais et ne sera pas interactif.

</v-click>
<v-click>

Disponible avec Astro, Marko, Fresh et Eleventy.

</v-click>
<v-click>

React Server Components est aussi une forme d'hydratation partielle.

</v-click>

---

## Resumable application

L'idée est de sérialiser l'état de l'application sur le serveur, puis de reprendre à partir de ce point côté client.

<v-click>

Les scripts ne sont chargés que lorsque c'est nécessaire (lors d'une interraction).

</v-click>
<v-click>

Disponible avec Qwik.

</v-click>
