<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="inline-flex my-3">
    <Button text @click="dec()">
      <div class="icon-[carbon--subtract]" />
    </Button>
    <div class="font-mono w-15 m-auto inline-block text-center">
      {{ count }}
    </div>
    <Button text @click="inc()">
      <div class="icon-[carbon--add] " />
    </Button>
  </div>
</template>
