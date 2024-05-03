<!-- 
  Using Noto Emoji font to display simple emojis.
 -->

<template>
  <span
    role="img"
    :aria-label="$attrs.label || ''"
    style="
      font-family:
        Noto Emoji,
        sans-serif;
    "
    ><slot
  /></span>
</template>
<style scoped>
.emoji {
  font-family: 'NotoEmoji', sans-serif;
  color: var(--primary);
}
</style>
