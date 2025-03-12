<script setup lang="ts">
  import MarqueeText from "./components/MarqueeText.vue"
import MarqueeTitle from "./components/MarqueeTitle.vue";
import ProfileImage from "./components/ProfileImage.vue";

import { AwesomeSocialButton } from "awesome-social-button";

import { FloatTextState } from "./components/title_state.ts";

FloatTextState.reset_text();
</script>

<template>
  <main>
    <marquee-text id="text-name" text="ASHLEY" :speed="5000" :space="0" :width="200" hoverText="COLD"/>
      <marquee-title v-if="!FloatTextState.write_own_text" id="float-text-big" :speed="6000"
        :space="50" />

        <div id="root-flex">
          <div id="descriptor-text">
            <div @mouseenter="FloatTextState.set_text('CREATION')" @mouseleave="FloatTextState.reset_text()">
              <p>What am I?</p>
              <p>I am the embodiment of Chaos, the emissary of Fortuna, the apostle of Thanatos,
              among many other titles. However, you mere mortals may call me Ashley or Fauxx.</p>
            </div>

            <div @mouseenter="FloatTextState.set_text('WATCH')" @mouseleave="FloatTextState.reset_text()">
              <p>Where am I?</p>
              <p>You may find me on <a href="https://bsky.app/profile/fauxxel.lol">Bluesky</a> and
              <a href="https://www.tumblr.com/fauxxel">Tumblr</a></p>
            </div>

            <div @mouseenter="FloatTextState.set_text('VANITY')"
              @mouseleave="FloatTextState.reset_text()">
              <p>What do I enjoy?</p>
              <p>I enjoy many things, among which are:</p>
              <ul>
                <li>Danganronpa 1 + 2</li>
                <li>Persona 3, 4, and 5</li>
                <li>Professor Layton</li>
                <li>Coding</li>
                <li>Digital Art</li>
                <li>Anything Nintendo</li>
              </ul>
            </div>
          </div>

          <profile-image id="profile-image" />
        </div>
  </main>
</template>
