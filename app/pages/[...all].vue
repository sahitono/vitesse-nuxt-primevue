<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="dark:gray-200 px-4 py-10 text-center text-teal-700">
    <div class="text-4xl">
      <div class="inline-block" i-carbon-warning />
    </div>
    <div>Not found</div>
    <div>
      <B class="mt-8 text-sm" @click="router.back()">
        Back
      </B>
    </div>
  </main>
</template>
