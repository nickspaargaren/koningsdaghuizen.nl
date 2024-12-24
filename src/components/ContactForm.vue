<script setup lang="ts">
import { z } from "zod";
import { ref, reactive } from "vue";

const schema = z.object({
  name: z.string({ required_error: "Dit veld is verplicht" }),
  phoneNumber: z
    .string({ required_error: "Dit veld is verplicht" })
    .min(8, "Moet minimaal 8 tekens lang zijn"),
  email: z.string({ required_error: "Dit veld is verplicht" }).email(),
  question: z.string({ required_error: "Dit veld is verplicht" }),
});

const initialState = {
  name: undefined,
  phoneNumber: undefined,
  email: undefined,
  question: undefined,
};

const state = reactive({ ...initialState });

const isOpen = ref(false);

async function onSubmit() {
  isOpen.value = true;
  Object.assign(state, initialState);
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Uw volledige naam" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>

    <UFormGroup label="Telefoon nummer" name="phoneNumber">
      <UInput v-model="state.phoneNumber" />
    </UFormGroup>

    <UFormGroup label="E-mail adres" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Uw vraag of opmerking" name="question">
      <UInput v-model="state.question" />
    </UFormGroup>

    <UButton type="submit">Versturen</UButton>

    <UAlert
      v-if="isOpen"
      title="Uw bericht is verzonden."
      description="Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op."
    />
  </UForm>
</template>
