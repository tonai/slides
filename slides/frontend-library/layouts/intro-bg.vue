<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
  },
});
</script>

<template>
  <div
    class="slidev-layout intro intro-bg text-center grid"
    :style="`--url: url('${image}')`"
  >
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style>
.intro-bg {
  text-shadow:
    0 0 5px black,
    0 0 3px black;
}
.intro-bg:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-image: var(--url);
  background-size: cover;
  background-position: center;
}
.intro-bg .slidev-toc {
  position: relative;
}
</style>
