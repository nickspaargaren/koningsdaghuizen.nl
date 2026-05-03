<script setup lang="ts">
import { z } from 'zod'
import { ref, reactive } from 'vue'

const schema = z.object({
  name: z.string().min(1, 'Dit veld is verplicht'),
  phoneNumber: z
    .string()
    .min(8, 'Moet minimaal 8 tekens lang zijn'),
  email: z.string().email('Vul een geldig e-mail adres in'),
  question: z.string().min(1, 'Dit veld is verplicht'),
})

const initialState = {
  name: undefined,
  phoneNumber: undefined,
  email: undefined,
  question: undefined,
}

const state = reactive({ ...initialState })

const isOpen = ref(false)

async function onSubmit() {
  isOpen.value = true
  Object.assign(state, initialState)
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField
      label="Uw volledige naam"
      name="name"
    >
      <UInput v-model="state.name" />
    </UFormField>

    <UFormField
      label="Telefoon nummer"
      name="phoneNumber"
    >
      <UInput v-model="state.phoneNumber" />
    </UFormField>

    <UFormField
      label="E-mail adres"
      name="email"
    >
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField
      label="Uw vraag of opmerking"
      name="question"
    >
      <UInput v-model="state.question" />
    </UFormField>

    <UButton type="submit">
      Versturen
    </UButton>

    <UAlert
      v-if="isOpen"
      title="Uw bericht is verzonden."
      description="Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op."
    />
  </UForm>
</template>
