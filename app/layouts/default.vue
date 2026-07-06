<template>
  <div class="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans">
    <TheNavbar />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>
