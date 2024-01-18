<template>
  <main class="w-full px-[4rem] py-[8rem] flex gap-[2rem]">
    <div class="flex flex-col justify-betewen">
      <h1
        class="text-[90px] leading-[80px] text-[#222] font-semibold tracking-tighter"
      >
        Discover a world of living green
      </h1>

      <p class="my-10 max-w-[500px] text-[1.1rem]">
        We believe that green living starts from within. Step into a world of
        vibrant foliage and unlock the secrets of creating your own lush indoor
        garden.
      </p>

      <div class="flex gap-[1rem]">
        <router-link
          to="/shop"
          class="bg-[#9FBC9B] text-white p-[1rem] rounded-md font-medium hover:bg-[#222] transition ease-in-out"
          >Discover our plants</router-link
        >
        <button class="">Scroll for more</button>
      </div>
    </div>
    <div class="">
      <img
        src="https://assets-global.website-files.com/64ed01cfd959df99c0368448/64ef050b3ef9727944e85ac7_severin-candrian-0pJCjF_fpbM-unsplash%201%20(1).webp"
        alt=""
        class="object-cover w-[900px] h-[480px] rounded-xl"
      />
    </div>
  </main>
  <Company />
  <Footer />
</template>

<script setup>
import Company from "./Company.vue";
import Footer from "./Footer.vue";

components: {
  Company;
  Footer;
}
</script>

<style></style>
