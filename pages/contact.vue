<script setup>
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

async function onSubmit(event) {
  isOpen.value = true;
  Object.assign(state, initialState);
}
</script>

<template>
  <UContainer>
    <h1>Contact</h1>
    <h2>Oranje Stichting Huizen</h2>
    <div className="grid md:gap-5 md:grid-cols-2">
      <div>
        <td class="FCK2kolTd">
          <p>
            <strong>Bestuur</strong><br />
            Voorzitter: Hans Borremans (0651 98 92 18)<br />
            Penningmeester: Roeland Bijlard (0623 29 85 77)<br />
            Kandidaat: Leo Detering (0646 42 58 50)
          </p>
          <p>
            <strong>Postadres</strong><br />
            Postbus 1044<br />
            1270 BA Huizen
          </p>
          <p>
            <strong>Financiën</strong><br />
            Roeland Bijlard, penningmeester<br />
            Tel.:&nbsp; 0623 29 85 77<br />
            IBAN Oranje stichting Huizen NL88 RABO 0329 9080 81
          </p>
          <p>
            <strong>Mail</strong><br />
            oranjestichtinghuizen@xs4all.nl<br />
            info@koningsdaghuizen.nl
          </p>
        </td>
      </div>
      <div>
        <td class="FCK2kolTd">
          <p>
            <strong>Contact Koningsmarkt</strong><br />
            Ga naar
            <a
              href="https://www.dynamicpromotions.nl"
              rel="nofollow"
              target="_blank"
              >www.dynamicpromotions.nl</a
            >&nbsp;voor huur van kramen
          </p>
          <p>
            <strong>Contactpersoon Taptoe</strong><br />
            Rob Bource<br />
            Mail: robbource@gmail.com<br />
            Tel.: 0653 25 30 93
          </p>
          <p>
            <strong>Contactpersoon artiesten</strong><br />
            Peter Buchner P-PRODUCTIES<br />
            Mail: peterlot50@gmail.com<br />
            Tel.: 0653 74 42 06
          </p>
          <p>
            <strong>Contactpersonen middagprogramma Plein 2000</strong><br />
            Kim Tawjoeram<br />
            Mail: kim@dynamicarts.nl<br />
            Lara Campbell<br />
            Mail: info@laresz.nl
          </p>
          <p>
            <strong>Contactpersoon algemeen Plein 2000</strong><br />
            Ringo Prins<br />
            Mail: ringo@grandcafe-heertje.nl<br />
            Tel.: 0642 62 46 01
          </p>
        </td>
      </div>
      <div>
        <h2>PR</h2>
        <p>
          Nick Spaargaren,<br />Website ontwikkelaar<br />Demi Spaargaren,<br />Designer
          spandoek en affiche
        </p>
      </div>
    </div>
  </UContainer>

  <UContainer><UDivider /></UContainer>

  <UContainer>
    <h3>Contactformulier</h3>
    <p>
      Heeft u een vraag over ons product of dienst? Dan kunt u contact met ons
      opnemen via het onderstaande formulier.
    </p>
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
    </UForm>
  </UContainer>
  <UContainer>
    <UAlert
      title="Uw bericht is verzonden."
      description="Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op."
      v-if="isOpen"
    />
  </UContainer>
</template>
