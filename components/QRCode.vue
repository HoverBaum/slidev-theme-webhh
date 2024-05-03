<!-- 
  Dynamically generate a QR code from a URL.
 -->

<template>
  <qrcode-vue :value="props.url" :size="props.size || 250" />
</template>

<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'

const props = defineProps<{
  /**
   * The URL to encode in the QR code.
   */
  url: string
  /**
   * The size of the QR code in px.
   */
  size?: number
}>()
</script>
