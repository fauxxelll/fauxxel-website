<script setup lang="ts">
import { AwesomeSocialButton } from "awesome-social-button";

import { FloatTextState } from "./title_state.ts"
</script>

<template>
  <div @mouseenter="FloatTextState.set_text('ABYSS')" @mouseleave="FloatTextState.reset_text()">
    <img src="/assets/img/ashley.jpeg" :width="400" :height="400" />
    <p>LUNA (THE ARTIST):</p>
    <div id="cb-socials">
      <awesome-social-button type="instagram" tooltip="@luna_melodie_ (Instagram)"
        :link="{ href: 'https://www.instagram.com/luna_melodie_/' }" :dark="true" :width="50" />
      <awesome-social-button type="twitter" tooltip="@luna_melodie_ (Twitter)"
        :link="{ href: 'https://twitter.com/@luna_melodie_' }" :dark="true" :width="50" />
    </div>
  </div>
</template>
