<script setup>
import Test from "./components/test.vue";
</script>

<template>
  <div class="backgroundtotal">
    <div class="container my-2">
      <div class="d-flex">
        <div class="debug">hullla cabuklla</div>

        <div class="Main-Display flex-grow-1">
          <router-view></router-view>
        </div>
        <div class="debug">cicico</div>
      </div>
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
<style lang="scss">
.backgroundtotal {
  background-color: greenyellow;
}
</style>
