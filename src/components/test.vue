<script>
import { store } from "../assets/data/store";
import axios from "axios";

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
  ciccio:
  <span class="debug">
    {{ store.test }}
  </span>
</template>

<style lang="scss" scoped></style>
