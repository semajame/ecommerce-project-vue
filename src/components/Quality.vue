<template>
  <section class="pt-[3rem] pb-[5rem]">
    <div class="pt-[3rem] pl-[15rem]" v-for="items in quality" :key="items.id">
      <div class="flex items-center">
        <span class="text-[#a9a9a9] font-semibold text-[3rem] tracking-wide">
          {{ items.qualNum }}</span
        >
        <h2 class="text-black font-semibold text-[3rem] tracking-wide">
          {{ items.qualHeader }}
        </h2>
      </div>

      <p class="max-w-[800px] leading-6 text-gray-500 text-lg">
        {{ items.qualPara }}
      </p>

      <hr class="mt-[3rem] h-[1px] bg-[#a9a9a9] border-none" />
    </div>

    <div class="mt-[4rem] ml-[15rem]">
      <router-link
        to="/contacts"
        class="no-underline text-white font-medium bg-[#222] py-4 px-8 rounded-md"
      >
        Learn More</router-link
      >
    </div>
  </section>
</template>

<script setup>
const quality = [
  {
    qualNum: "01.",
    qualHeader: "Quality you can trust",
    qualPara:
      "We handpick each plant and gardening tool to ensure superior quality and long-lasting beauty for your indoor garden.",
  },
  {
    qualNum: "02.",
    qualHeader: "Expert Guidance",
    qualPara:
      "Our team of knowledgeable garden enthusiasts is always ready to offer guidance, tips, and tricks to help you succeed in your green endeavors.",
  },
  {
    qualNum: "03.",
    qualHeader: "Sustainable Practices",
    qualPara:
      "We are committed to sustainable and eco-friendly practices, from responsible sourcing to minimizing our carbon footprint. Join us in our mission to protect the environment.",
  },
  {
    qualNum: "04.",
    qualHeader: "Exceptional Customer Experience",
    qualPara:
      "Your satisfaction is our top priority. We strive to provide you with an exceptional customer experience from the moment you land on our website until your plants are beautifully thriving in your space",
  },
];
</script>
