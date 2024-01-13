<template>
  <Header />
  <router-view />
</template>

<script setup>
import Header from "./components/Header.vue";
const components = {
  Header,
};
</script>

<style></style>
