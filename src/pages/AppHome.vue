<script>
import { store } from "../assets/data/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: {},

  computed: {},

  methods: {},

  created() {},

  props: {},

  emits: [],
};
</script>

<template>
  <div class="debug"><h1>app home</h1></div>
  {{ store.test }}

  <router-link :to="{ name: 'list' }" class="btn btn-primary">
    Leggi articolo
  </router-link>
</template>

<style lang="scss" scoped></style>
