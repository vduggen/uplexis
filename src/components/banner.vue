<template>
  <v-img :src="image" alt="Banner background" class="banner banner__effect">
    <v-container class="banner__container">
      <header class="banner__container__header">
        <v-row class="ma-0">
          <img
            src="https://uplexis.com.br/wp-content/themes/tema/vendor/images/logo.png"
            alt="Logo uplexis"
            class="pa-2"
          />

          <v-divider
            vertical
            dark
            class="mx-4 banner__container__header__divider"
          ></v-divider>

          <span
            class="
              text-h5
              white--text
              font-weight-regular
              banner__container__header__title
            "
          >
            {{ title }}
          </span>
        </v-row>
      </header>

      <div class="banner__container__body">
        <span class="text-h6 white--text font-weight-light">
          {{ description }}
        </span>
      </div>

      <footer class="banner__container__footer">
        <span class="mr-4">
          <span class="white--text">R$ </span>
          <span class="text-h4 font-weight-medium white--text">
            {{ price | formatCurrency | getValue }}
          </span>
        </span>

        <v-btn @click="redirect" color="primary" class="text-none">
          Saiba mais
        </v-btn>
      </footer>
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String,
    price: Number,
    id: Number,
  },

  methods: {
    redirect() {
      this.$router.push(`/detalhes/${this.id}?type=banner`);

      this.$emit("changeData");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/sass/components/banner.scss";
</style>
