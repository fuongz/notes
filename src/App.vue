<template>
  <Lotion :page="page" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { Lotion, registerBlock } from '@dashibase/lotion'

const page = ref({
  name: '',
  blocks: [
    {
      id: uuidv4(),
      type: 'TEXT',
      details: {
        value: '',
      },
    },
  ],
})
</script>
