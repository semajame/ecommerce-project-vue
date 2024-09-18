<template>
  <footer
    class="bg-[#222] p-[5rem] max-sm:px-[2rem] max-md:px-[2rem]"
    v-motion-slide-visible-bottom
  >
    <div class="max-w-[1440px] m-auto">
      <div
        class="flex justify-between items-end max-sm:flex-col max-md:flex-col"
      >
        <h3
          class="text-white header3 max-w-[800px] leading-[50px] font-medium max-md:max-w-[none] max-sm:max-w-[none]"
        >
          Choose The Greenery and embark on a green journey that will transform
          your space and nourish your soul.
        </h3>
        <router-link
          to="/shop"
          class="bg-white text-[#222] p-[1rem] rounded-md font-medium hover:bg-[#558d4e] transition ease-in-out hover:text-white max-sm:mt-[2rem] max-md:mt-[2rem]"
          >Discover our plants</router-link
        >
      </div>
      <div class="my-[5rem] py-[5rem] border-t border-b border-[#7c7a7a]">
        <div>
          <div class="flex items-center gap-[2rem] max-md:flex-col">
            <div>
              <h3 class="text-white font-bold header3">
                Subscribe to our newsletter.
              </h3>
              <p class="text-white max-w-[400px] my-[0.5rem]">
                Want to stay up to date with news and updates about our
                products? Subscribe.
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
      <div class="flex justify-between text-white max-md:flex-col">
        <span class="text-[1rem]"> © Greenery. All Rights Reserved 2024. </span>
        <div
          class="flex gap-[3rem] text-[1.1rem] max-sm:mt-[2rem] max-sm:text-[0.9rems] max-md:mt-[2rem]"
        >
          <a
            href=""
            class="underline hover:text-[#558d4e] hover:border-[#558d4e] transition ease-in-out"
          >
            Facebook
          </a>
          <a
            href=""
            class="underline hover:text-[#558d4e] hover:border-[#558d4e] transition ease-in-out"
          >
            Instagram </a
          ><a
            href=""
            class="underline hover:text-[#558d4e] hover:border-[#558d4e] transition ease-in-out"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
