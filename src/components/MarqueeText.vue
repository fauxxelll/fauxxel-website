<script setup lang="ts">
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "/node_modules/vue3-marquee-slider/dist/style.css";

import { FloatTextState } from "./title_state.ts";

defineProps(["text", "speed", "space", "width", "hoverText"])
</script>

<template>
  <div @mouseenter="FloatTextState.set_text(hoverText)" @mouseleave="FloatTextState.reset_text()">
  <vue-marquee-slider id="marquee-slider-text" :speed="speed" :space="space" :width="width">
    <span class="highlight">{{ text }}</span>
  </vue-marquee-slider>
  </div>
</template>
