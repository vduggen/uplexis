<template>
  <v-card class="card elevation-3">
    <div class="card__container">
      <header class="card__header">
        <div class="card__top">
          <v-icon size="2.2rem" color="primary">{{ item.icon }}</v-icon>

          <span class="text-h6 font-weight-regular my-2">
            {{ item.name }}
          </span>
        </div>

        <v-card-subtitle
          class="pa-0 text--disabled font-weight-medium card__subtitle"
        >
          {{ item.description[0] }}
        </v-card-subtitle>
      </header>

      <v-card-actions class="card__footer px-5">
        <span class="white--text">{{ item.value | formatCurrency }}</span>

        <router-link class="card__link" :to="`/detalhes/${item.id}`">
          Saiba mais
        </router-link>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
@import "../assets/sass/components/card.scss";
</style>
