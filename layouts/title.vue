<!-- 
  Title slide for presentations.
  Will display a passed author or global one in bottom right corner.
 -->

<template>
  <div class="slidev-layout title h-full grid items-center">
    <div>
      <slot />
      <p class="absolute bottom-4 right-4 text-xl" :v-show="author !== ''">
        By {{ author }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { computed } from 'vue'

const { $slidev } = useSlideContext()

interface Props {
  author: string
}

const props = defineProps<Props>()

// configs.author actually exists.
// See: https://sli.dev/custom/vue-context#slidev-configs
// And: https://sli.dev/custom/#frontmatter-configures
// @ts-ignore
const author = computed(() => props.author || $slidev.configs.author || '')
</script>

<style scoped>
.slidev-layout.title {
  :deep(h1) {
    @apply text-6xl leading-20 font-bold mb-0;
  }

  :deep(h1 + p) {
    @apply -mt-2;
  }
}
</style>
