<template>
  <section
    class="pt-[3rem] pb-[5rem] max-sm:px-[1rem] max-md:px-[1rem]"
    v-motion-slide-visible-bottom
  >
    <div
      class="pt-[3rem] pl-[15rem] max-sm:pl-[0] max-md:pl-[0]"
      v-for="items in quality"
      :key="items.id"
    >
      <div class="flex items-center">
        <span class="text-[#a9a9a9] font-semibold text-[3rem] tracking-wide">
          {{ items.qualNum }}</span
        >
        <h2 class="text-black font-semibold header2 tracking-tight">
          {{ items.qualHeader }}
        </h2>
      </div>

      <p class="max-w-[800px] leading-6 text-gray-500 text-lg pt-[1rem]">
        {{ items.qualPara }}
      </p>

      <hr class="mt-[3rem] h-[1px] bg-[#a9a9a9] border-none" />
    </div>

    <div class="mt-[4rem] ml-[15rem] max-md:ml-[2rem] max-sm:ml-[2rem]">
      <router-link
        to="/contacts"
        class="no-underline text-white font-medium bg-[#222] py-4 px-8 rounded-md hover:bg-[#508648] transition ease-in-out"
      >
        Contact Greenery</router-link
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
