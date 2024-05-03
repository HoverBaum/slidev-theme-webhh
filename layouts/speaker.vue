<!-- 
  Speaker Slide.
  Tell us about yourself with a picture and some bullets.
 -->

<template>
  <div class="slidev-layout speaker">
    <div class="flex h-full flex-row justify-around gap-12">
      <figure class="flex flex-col justify-center max-w-60">
        <img :src="props.speakerImage" class="relative" />
      </figure>
      <div class="flex flex-col justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  speakerImage: string
}

const props = defineProps<Props>()
</script>

<style scoped>
.slidev-layout.speaker {
}
</style>
