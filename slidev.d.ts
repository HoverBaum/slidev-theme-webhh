// slidev.d.ts
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $slidev: any // or specify a more detailed type if you have
  }
}
