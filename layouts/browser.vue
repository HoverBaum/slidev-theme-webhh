<!-- 
  Apple style browser window with an iframe.
 -->

<template>
  <div class="slidev-layout">
    <Browser
      :url="props.url"
      :fallbackImage="props.fallbackImage"
      class="h-full"
    />
  </div>
</template>

<script setup lang="ts">
import Browser from '../components/Browser.vue'

interface Props {
  url: string
  fallbackImage: string
}

const props = defineProps<Props>()
</script>
