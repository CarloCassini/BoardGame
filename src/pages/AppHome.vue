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

  methods: {
    playMat() {
      let field = document.getElementById("ciccio");
      field.addEventListener("click", function () {
        let coloreCasuale =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        field.style.backgroundColor = coloreCasuale;
      });
    },
  },

  created() {},
  mounted() {
    this.playMat();
  },

  props: {},

  emits: [],
};
</script>

<template>
  <div class="debug text-center"><h1>hitler escape</h1></div>

  <!-- <router-link :to="{ name: 'list' }" class="btn btn-primary">
    Vai alla lista
  </router-link> -->
  <div class="container debug" id="ciccio">ads</div>
</template>

<style lang="scss" scoped></style>
