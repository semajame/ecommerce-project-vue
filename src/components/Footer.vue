<template>
  <footer class="bg-[#222] p-[5rem]">
    <div class="flex justify-between items-end">
      <h3
        class="text-white text-[50px] max-w-[800px] leading-[50px] font-medium"
      >
        Choose The Greenery and embark on a green journey that will transform
        your space and nourish your soul.
      </h3>

      <router-link
        to="/shop"
        class="bg-white text-[#222] p-[1rem] rounded-md font-medium hover:bg-[#9FBC9B] transition ease-in-out hover:text-white"
        >Discover our plants</router-link
      >
    </div>
    <div class="my-[5rem] py-[5rem] border-t border-b border-[#7c7a7a]">
      <div>
        <div class="flex items-center gap-[2rem]">
          <div>
            <h3 class="text-white font-bold text-[1.5rem]">
              Subscribe to our newsletter.
            </h3>
            <p class="text-white max-w-[400px] my-[0.5rem]">
              Want to stay up to date with news and updates about our products?
              Subscribe.
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              class="p-[1.8rem] bg-[#222] border rounded-xl text-white outline-none focus:border-[#558d4e]"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between text-white">
      <span class="text-[1rem]"> © Greenery. All Rights Reserved 2024. </span>

      <div class="flex gap-[3rem] text-[1.2rem]">
        <a href="" class="underline"> Facebook </a>
        <a href="" class="underline"> Instagram </a
        ><a href="" class="underline"> Twitter </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
