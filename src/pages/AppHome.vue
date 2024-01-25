<script>
import { store } from "../assets/data/store";
import Test from "../components/test.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Test,
  },

  computed: {},

  methods: {},

  created() {},

  props: {},

  emits: [],
};
</script>

<template>
  <div class="debug"><h1>app home</h1></div>

  <router-link :to="{ name: 'list' }" class="btn btn-primary">
    Vai alla lista
  </router-link>

  <div class="my-5">
    <Test />
  </div>

  <div>
    {{ store.test }}
  </div>
</template>

<style lang="scss" scoped></style>
