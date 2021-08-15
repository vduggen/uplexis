<template>
  <v-app>
    <banner
      :image="require('@/assets/banner1.jpg')"
      title="Histórico Empresarial"
      description="O aplicativo Histórico Empresarial permite ao usuário ter acesso a
          todos os fatos acontecimentos relevantes de uma empresa desde o seu
          ano de fundação."
      :price="40"
      :id="13"
    />

    <v-container>
      <v-item-group mandatory class="mt-3">
        <v-row class="ma-0 d-flex align-center">
          <v-col v-for="(item, index) in items" :key="index" class="pa-0">
            <v-item v-slot="{ active, toggle }">
              <card-filter
                :active="active"
                :toggle="toggle"
                :item="item"
                @changeData="changeData"
              />
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>

      <v-row class="ma-0 my-10 order-filter">
        <span class="mr-3 font-weight-bold">ORDERNAR</span>

        <v-select
          :items="itemsSelect"
          label="Filtro"
          dense
          solo
          outlined
          hide-details
          v-model="order"
        ></v-select>
      </v-row>

      <v-row class="ma-0">
        <v-col
          v-for="(item, index) in data"
          :key="index"
          class="px-0 card-infos"
        >
          <card :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Card from "../components/card.vue";
import { types, cards } from "@/core/mocks/data.js";
import Banner from "../components/banner.vue";
import CardFilter from "../components/cardFilter.vue";

export default {
  components: { Card, Banner, CardFilter },

  name: "Index",

  data: () => ({
    data: [],
    items: [],
    order: "",
    itemsSelect: ["Preço", "Lançamento"],
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  }),

  watch: {
    order: function (newValue) {
      this.orderItems(newValue);
    },
  },

  mounted() {
    this.items = types;
    this.data = cards;
  },

  methods: {
    orderItems(type) {
      switch (type.toUpperCase()) {
        case "PREÇO":
          this.data = this.data.sort((a, b) => a.value - b.value);
          break;

        case "LANÇAMENTO":
          this.data = this.data.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
    },

    changeData(arr) {
      this.data = arr;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/sass/pages/home.scss";
</style>
