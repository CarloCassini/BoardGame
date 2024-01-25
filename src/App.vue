<script setup>
import Test from "./components/test.vue";
</script>

<template>
  <div class="container my-3">
    <div class="my-5">
      <Test />
    </div>
    <router-view></router-view>
  </div>

  <!-- ricorda di importare axios negli elementi che ti interessano -->
</template>

<!-- <style lang="scss" scoped></style> -->
<style lang="scss"></style>
