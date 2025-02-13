<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [{
    id: "theme-color",
    name: "theme-color",
    content: () => color.value === "dark" ? "#222222" : "#ffffff",
  }],
})

function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark"
}
</script>

<template>
  <Button text class="!p-0"  @click="toggleDark">
    <span class="icon-[carbon--sun]  dark:icon-[carbon--moon]" />
  </Button>
</template>
