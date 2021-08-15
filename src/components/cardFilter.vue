<template>
  <v-card
    class="card-filter"
    outlined
    :color="active ? 'primary' : '#c2c2c244'"
    :dark="active"
    :class="{
      'rounded-md': active,
      'elevation-10': active,
      'rounded-0': !active,
      'elevation-0': !active,
    }"
    @click="filterType(item.name, toggle)"
  >
    <v-icon size="1.5rem">{{ item.icon }}</v-icon>

    <span class="subtitle-2 mt-2 font-weight-regular">
      {{ item.name }}
    </span>
  </v-card>
</template>

<script>
import { cards } from "@/core/mocks/data.js";

export default {
  props: {
    active: Boolean,
    toggle: Function,
    item: Object,
  },

  methods: {
    filterType(type, toggle) {
      toggle();

      const data =
        type == "Todos" ? cards : cards.filter(({ name }) => name == type);

      this.$emit("changeData", data);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/sass/components/cardFilter.scss";
</style>
