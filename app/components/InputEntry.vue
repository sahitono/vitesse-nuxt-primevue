<script setup lang="ts">
const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div @keydown="">
    <InputText v-model:model-value="name" placeholder="What's your name?" class="w-[250px] text-center" />

    <div>
      <Button class="m-3 text-sm" size="small" :disabled="!name" @click="go">
        GO
      </Button>
    </div>
  </div>
</template>
