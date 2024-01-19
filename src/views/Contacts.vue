<template>
  <main class="p-[5rem]">
    <h1
      class="text-[3.7rem] tracking-tight font-semibold pt-[5rem] max-w-[1000px] text-[#222] leading-[60px]"
    >
      <span class="text-[#508648]">Contact us.</span> We are here to assist you
      in any way
      <span class="text-[#508648]">we can.</span>
    </h1>

    <div class="pt-[10rem]">
      <div class="flex items-center justify-between">
        <div>
          <span class="text-[1.2rem] font-medium tracking-tighter">
            Visit Our Store
          </span>
          <h3
            class="my-[3rem] text-[50px] font-medium tracking-tighter max-w-[500px] leading-[50px]"
          >
            If you're in the neighborhood,<span class="text-[#508648]">
              we'd love to meet</span
            >
            you in person. Stop by our
            <span class="text-[#508648]">Greenery store</span>
          </h3>
          <p class="max-w-[500px]">
            — Transform your living space into a serene oasis with our diverse
            collection of indoor plants. From elegant ferns to exotic orchids,
            we have carefully curated a range of green companions to suit every
            style and preference.
          </p>
        </div>
        <div>
          <div class="bg-[#508648] text-white p-[2rem] rounded-md w-[500px]">
            <span class="text-[1.5rem] font-semibold"> Working Hours </span>
            <hr class="my-[2rem]" />

            <div class="tracking-tight font-semibold">
              <div class="flex justify-between items-center my-[1rem]">
                <div>Monday</div>
                <div>8AM - 7PM</div>
              </div>
              <div class="flex justify-between items-center my-[1rem]">
                <div>Tuesday</div>
                <div>8AM - 7PM</div>
              </div>
              <div class="flex justify-between items-center my-[1rem]">
                <div>Wednesday</div>
                <div>8AM - 7PM</div>
              </div>
              <div class="flex justify-between items-center my-[1rem]">
                <div>Thursday</div>
                <div>8AM - 7PM</div>
              </div>
              <div class="flex justify-between items-center my-[1rem]">
                <div>Friday</div>
                <div>8AM - 7PM</div>
              </div>
              <div class="flex justify-between items-center my-[1rem]">
                <div>Saturday - Sunday</div>
                <div>Closed</div>
              </div>
            </div>

            <hr class="my-[2rem]" />

            <div class="my-[1rem]">
              <div class="text-[1.5rem] font-semibold">Address</div>
              <div class="text-[#e9dfdf]">Umapad Mandaue City, Cebu</div>
            </div>

            <div class="my-[1rem]">
              <div class="text-[1.5rem] font-semibold">Book By Phone</div>
              <div class="text-[#e9dfdf]">236-4511, 0936-9533-064</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <section class="pb-[7rem]">
    <h2
      class="text-center text-[3.2rem] text-[#222] font-medium tracking-tighter mb-[2rem]"
    >
      Let's Get in Touch
    </h2>

    <div class="flex justify-center items-center">
      <form action="">
        <div class="flex gap-[2rem] items-center mb-[3rem]">
          <input
            type="text"
            placeholder="Name"
            class="border p-[1rem] rounded-md border-gray-300 focus:border-gray-500 outline-none"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            class="border p-[1rem] rounded-md border-gray-300 focus:border-gray-500 outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            class="border p-[1rem] rounded-md border-gray-300 focus:border-gray-500 outline-none"
          />
        </div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Example text"
          class="w-full border border-gray-300 rounded-md focus:border-gray-500 outline-none p-[2rem]"
        ></textarea>
      </form>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style></style>
