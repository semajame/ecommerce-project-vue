<template>
  <Header />
  <router-view :plants="plants" />
</template>

<script setup>
import Header from "./components/Header.vue";
const components = {
  Header,
};

const plants = [
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1e641d50ae58a7cccc98_feey-dTLeHGu9FAw-unsplash.jpg",
    name: "Jesse",
    price: 18,
    id: 1,
    category: ["Flowering Plants", "Low Maintenance"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1d726de45ea0e0551508_feey-8nONCr6eTeg-unsplash.jpg",
    name: "Winson",
    price: 24,
    id: 2,
    category: ["Succulents", "Low-Maintenance"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1cfc570c8023bd5b3e05_feey-shAA_rxG2Yc-unsplash.jpg",
    name: "Venus",
    price: 30,
    id: 3,
    category: ["Flowering Plants", "Succulents"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0d32c3b6732ca16db980_feey-bwsTJMnhcwE-unsplash.jpg",
    name: "Lineo",
    price: 18,
    id: 4,
    category: ["Flowering Plants", "Air Purifiers", "Indoor Foliage"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0ce17576e9baae98663f_feey-eeOOH0dk3XQ-unsplash.jpg",
    name: "Mark",
    price: 30,
    id: 5,
    category: ["Succulents", "Air Purifiers", "Indoor Foliage"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0cc296e00eaf5ca2cab8_feey-cLaaxa4DSnc-unsplash.jpg",
    name: "Fushion",
    price: 24,
    id: 6,
    category: ["Low-Maintenance", "Indoor Foliage"],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0c921b293c2901ab0265_feey-dAA2Q_eFb84-unsplash.jpg",
    name: "Lucky",
    price: 18,
    id: 7,
    category: ["Air Purifiers"],
  },
];
</script>

<style></style>
