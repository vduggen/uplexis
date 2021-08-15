<template>
  <v-app>
    <div class="detail">
      <banner
        :image="require('@/assets/banner1.jpg')"
        title="Histórico Empresarial"
        description="O aplicativo Histórico Empresarial permite ao usuário ter acesso a
          todos os fatos acontecimentos relevantes de uma empresa desde o seu
          ano de fundação."
        :price="40"
        :id="13"
        @changeData="changeData"
      />

      <v-container>
        <header class="detail__header">
          <router-link to="/" class="detail__header__link">
            <v-icon color="primary" size="2.3rem">mdi-chevron-left</v-icon>

            <span class="detail__header__title">{{ data.name }}</span>
          </router-link>
        </header>

        <div class="detail__body">
          <v-slide-group class="detail__body__images" show-arrows>
            <v-slide-item class="ma-3" v-for="n in 4" :key="n">
              <cardDetail />
            </v-slide-item>
          </v-slide-group>

          <div
            class="
              detail__body__description
              text--secondary
              subtitle-2
              font-weight-regular
            "
          >
            <span
              v-for="(text, index) in data.description"
              :key="index"
              v-bind:class="{ 'mt-4': index > 0 }"
            >
              {{ text }}
            </span>
          </div>

          <div class="detail__body__footer">
            <span class="mr-4">
              <span>R$ </span>
              <span class="text-h4 font-weight-medium">
                {{ data.value | formatCurrency | getValue }}
              </span>
            </span>

            <v-btn color="primary" class="text-none">Habilitar</v-btn>
          </div>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import cardDetail from "@/components/cardDetail.vue";
import { cards, banner } from "@/core/mocks/data";
import Banner from "../components/banner.vue";

export default {
  components: { cardDetail, Banner },

  data: () => ({
    data: {},
  }),

  mounted() {
    const { params, query } = this.$route;
    const isBanner = query.type === "banner";
    const typeData = isBanner ? banner : cards;

    const result = typeData.filter(({ id }) => id == params.id);

    this.data = result[0];
  },

  methods: {
    changeData() {
      const { params, query } = this.$route;
      const isBanner = query.type === "banner";
      const typeData = isBanner ? banner : cards;

      const result = typeData.filter(({ id }) => id == params.id);

      this.data = result[0];
    },
  },
};
</script>

<style lang="scss">
@import "../assets/sass/pages/details.scss";
</style>
