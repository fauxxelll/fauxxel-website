<script setup lang="ts">
import { watch } from "vue";

import { VueMarqueeSlider } from "vue3-marquee-slider";
import "/node_modules/vue3-marquee-slider/dist/style.css";

import { FloatTextState } from "./title_state.ts";

defineProps(["speed", "space"])
</script>

<template>
  <div>
    <vue-marquee-slider id="marquee-slider-title" :speed="speed" :space="space" autoWidth :repeat="10">
      <span>{{ FloatTextState.overwrite_text }}</span>
    </vue-marquee-slider>
  </div>
</template>
