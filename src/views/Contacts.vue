<template>
  <main class="p-[5rem] max-md:px-[2rem]">
    <h1
      class="header1 tracking-tight font-semibold pt-[5rem] max-w-[1000px] text-[#222] max-md:max-w-[none] max-sm:max-w-[none]"
    >
      <span class="text-[#508648]">Contact us.</span> We are here to assist you
      in any way
      <span class="text-[#508648]">we can.</span>
    </h1>

    <div class="pt-[10rem]">
      <div
        class="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-[2rem]"
      >
        <div class="w-[60%] max-md:w-[100%]">
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
        <div class="w-[40%] max-md:w-[100%]">
          <div class="bg-[#508648] text-white p-[2rem] rounded-md">
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
  <section class="pb-[7rem] mt-10" v-motion-slide-visible-bottom>
    <h2
      class="text-center header2 text-[#222] font-medium tracking-tighter mb-[2rem]"
    >
      Let's Get in Touch
    </h2>

    <div class="flex justify-center items-center">
      <form action="">
        <div
          class="flex gap-[2rem] items-center mb-[3rem] max-md:flex-col max-md:items-start"
        >
          <input
            type="text"
            placeholder="Name"
            class="border p-[1rem] rounded-md border-gray-300 focus:border-gray-500 outline-none text-black bg-white"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            class="border p-[1rem] rounded-md border-gray-300 focus:border-gray-500 outline-none text-black bg-white"
          />
          <input
            type="text"
            placeholder="Phone"
            class="border p-[1rem] rounded-md border-gray-300 focus:border-gray-500 outline-none text-black bg-white"
          />
        </div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Example text"
          class="w-full border border-gray-300 rounded-md focus:border-gray-500 bg-white outline-none p-[2rem] text-black"
        ></textarea>

        <div class="flex justify-center">
          <button
            type="submit"
            class="no-underline text-white font-medium bg-[#222] py-4 px-8 rounded-md mt-[3rem] hover:bg-[#508648] transition ease-in-out"
          >
            Book an appointment
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
