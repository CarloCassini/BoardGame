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
    startGame() {
      let field = document.getElementById("ciccio");
      let coloreCasuale =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      field.style.backgroundColor = coloreCasuale;
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
  <div class="debug text-center">
    <div class="d-flex justify-content-around align-items-center my-3">
      <h1>hitler escape</h1>
      <div>
        numero di turni
        <!-- 5 turns is the default -->
        <select class="form-select" aria-label="Default select example">
          <!-- <option value="1">1</option> -->
          <!-- <option value="2">2</option> -->
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5" selected>5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>
      <div class="btn btn-primary" id="start-btn" @click="startGame">start</div>
    </div>
  </div>

  <!-- <router-link :to="{ name: 'list' }" class="btn btn-primary">
    Vai alla lista
  </router-link> -->
  <div class="container debug" id="ciccio">ads</div>
</template>

<style lang="scss" scoped></style>
