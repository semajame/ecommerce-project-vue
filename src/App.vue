<template>
  <Header />
  <div class="max-w-[1440px] m-auto">
    <router-view :plants="plants" />
  </div>
  <Footer />
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import { ref } from "vue";

const plants = [
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1e641d50ae58a7cccc98_feey-dTLeHGu9FAw-unsplash.jpg",
    name: "Jesse",
    price: ref(18),
    originalPrice: 18,
    id: 1,
    category: ["Flowering Plants", "Low Maintenance"],
    quantity: ref(1),
    paragraph:
      "Jesse is not your ordinary houseplant; it's a living work of art that adds a touch of elegance and vibrancy to any space it graces. Standing at a modest height of 18 inches, Jesse boasts a symphony of emerald-green leaves that fan out like delicate brushes, creating a mesmerizing display reminiscent of a painter's masterpiece.",
    details: [
      "The leaves themselves are a study in nature's intricate design, each one adorned with subtle patterns resembling fine brushstrokes in varying shades of green. The glossy surface of the leaves reflects light in a way that seems to dance throughout the day, casting enchanting shadows on nearby surfaces.",

      "Caring for Jesse is an artful endeavor as well. It prefers a balanced blend of sunlight and shade, its leaves turning slightly to catch the sun's embrace while avoiding direct intensity. Regular but not excessive watering, allowing the soil to dry out between hydration, helps Jesse thrive without becoming waterlogged. A monthly dose of liquid fertilizer during its active growing season rewards you with lush, vibrant foliage that truly captivates.",

      "With its captivating beauty and adaptable nature, Jesse is more than a houseplant; it's a living sculpture that transforms any space into a sanctuary of natural splendor and artistic allure. Whether in a contemporary urban loft or a cozy cottage, Jesse's presence is sure to spark conversations, inspire creativity, and breathe life into the surroundings.",
    ],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1d726de45ea0e0551508_feey-8nONCr6eTeg-unsplash.jpg",
    name: "Winson",
    price: ref(24),
    originalPrice: 24,
    id: 2,
    category: ["Succulents", "Low-Maintenance"],
    quantity: ref(1),
    paragraph:
      "Introducing Winson, a captivating houseplant that exudes an air of timeless elegance and botanical charm. Standing tall at 2 feet, Winson possesses an aura of grandeur with its striking presence. Its lush foliage cascades gracefully, creating a mesmerizing curtain of vibrant green that transforms any space into a tranquil oasis.",
    details: [
      "The leaves of Winson are a masterpiece of nature's design, displaying a mix of deep and pale greens that form a harmonious tapestry. Each leaf is uniquely shaped, resembling delicate feathers, and they flutter gently in the slightest breeze, adding a touch of life to the room. The glossy sheen of the leaves catches the light, casting a soft glow that brings a sense of warmth to its surroundings.",
      "Caring for Winson is a rewarding experience. It thrives in well-lit spaces, but prefers indirect sunlight to maintain its radiant appearance. A consistent watering routine, allowing the soil to lightly dry between waterings, helps Winson flourish without the risk of overhydration. Its growth can be encouraged by occasional misting to emulate its native tropical habitat.",
      "With Winson gracing your home, you're not just adding a houseplant; you're inviting in a sophisticated companion that embodies nature's beauty and nurtures your living space. Whether placed in a modern living room, a cozy study, or a serene bedroom, Winson's charismatic aura will undoubtedly become a focal point, soothing your senses and elevating the ambiance of your home.",
    ],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef1cfc570c8023bd5b3e05_feey-shAA_rxG2Yc-unsplash.jpg",
    name: "Venus",
    price: ref(30),
    originalPrice: 30,
    id: 3,
    category: ["Flowering Plants", "Succulents"],
    quantity: ref(1),
    paragraph:
      "Allow me to introduce Venus, a celestial houseplant that brings a touch of otherworldly beauty to your living space. Standing at a modest height of 10 inches, Venus captivates with its delicate yet enchanting presence. Its unique charm lies in its petite size and the ethereal elegance it adds to any corner it graces.",
    details: [
      "Venus boasts a mesmerizing display of heart-shaped leaves that seem to flutter like celestial wings. The leaves, a rich shade of deep green with subtle hints of iridescent blue, create a soothing contrast that evokes the serene beauty of a starlit sky. When caught in the sunlight, Venus's leaves shimmer as if kissed by moonlight, adding an element of magic to its surroundings.",
      "Caring for Venus is an easy endeavor, making it an ideal choice for both seasoned plant enthusiasts and those new to indoor gardening. This celestial beauty thrives in moderate, indirect light, appreciating a balance between sunshine and shade. Watering Venus sparingly and allowing the soil to dry slightly between waterings ensures its health and longevity.",
      "Venus's uniqueness doesn't stop at its appearance. It's known for its air-purifying abilities, effortlessly cleansing the air in your living space and enhancing the overall environment. Its tranquil presence becomes a source of comfort and an oasis of calm in the midst of modern life's hustle and bustle.",
      "Adding Venus to your home isn't just about incorporating a plant; it's about inviting a piece of the cosmos into your daily life. Whether placed on a windowsill, a small decorative table, or even a hanging planter, Venus's cosmic allure is sure to capture hearts and spark conversations. Transform your space into a celestial sanctuary with the captivating grace of Venus",
    ],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0d32c3b6732ca16db980_feey-bwsTJMnhcwE-unsplash.jpg",
    name: "Lineo",
    price: ref(18),
    originalPrice: 18,
    id: 4,
    category: ["Flowering Plants", "Air Purifiers", "Indoor Foliage"],
    quantity: ref(1),
    paragraph:
      "Allow me to introduce Lineo, an architectural marvel among houseplants that brings a sense of sophistication and modernity to your living space. Standing proudly at 3 feet, Lineo is a striking blend of nature and design, making it a true statement piece in any room it graces.",
    details: [
      "Lineo's distinctive feature is its sleek, linear foliage that resembles elegant brushstrokes of green. The leaves, elongated and sharp-edged, form a dramatic composition that evokes a sense of contemporary artistry. Their deep forest hue creates a captivating contrast against minimalist interiors or serves as a complementary touch in spaces adorned with rich textures.",

      "Caring for Lineo is a rewarding experience, and its adaptability makes it suitable for a range of environments. It thrives in bright, indirect light, with its foliage retaining its bold color under the right illumination. A well-draining soil and a moderate watering routine, allowing the soil to dry out between waterings, help Lineo maintain its structural integrity.",

      "Bringing Lineo into your living space is akin to incorporating a piece of contemporary art. Whether placed as a centerpiece in a spacious living room, an accent in a minimalist workspace, or even a focal point in a foyer, Lineo's presence adds an element of refined beauty that draws the eye and elevates the entire atmosphere. Make a bold design statement with the architectural elegance of Lineo.",
    ],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0ce17576e9baae98663f_feey-eeOOH0dk3XQ-unsplash.jpg",
    name: "Mark",
    price: ref(30),
    originalPrice: 30,
    id: 5,
    category: ["Succulents", "Air Purifiers", "Indoor Foliage"],
    quantity: ref(1),
    paragraph:
      "Allow me to introduce Mark, a charismatic houseplant that infuses your surroundings with a sense of natural vitality and artistic flair. Standing at a height of 1.5 feet, Mark possesses a unique blend of rugged charm and gentle elegance that makes it a captivating addition to any space.",
    details: [
      "Mark's defining feature is its variegated foliage, a living canvas of green and cream brushstrokes that evoke a sense of artistic whimsy. The leaves are generously sized and heart-shaped, creating a lush canopy that adds a touch of wilderness to your indoor environment. Each leaf is a living masterpiece, with its own distinct pattern of colors that seem to tell a story of nature's creativity.",

      "Mark's presence goes beyond aesthetics; it's also known for its air-purifying qualities. This natural air filter actively contributes to cleaner, fresher air in your living space, enhancing your overall well-being.",

      "Bringing Mark into your home is like inviting a touch of the wild indoors. Whether placed on a plant stand, nestled in a cozy corner, or even as a centerpiece on a dining table, Mark's versatile charm suits various decor styles. Its unique foliage and dynamic personality create an artistic focal point that sparks conversation and fosters a connection with the natural world. Elevate your space with the vibrant allure of Mark.",
    ],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0cc296e00eaf5ca2cab8_feey-cLaaxa4DSnc-unsplash.jpg",
    name: "Fusion",
    price: ref(24),
    originalPrice: 24,
    id: 6,
    category: ["Low-Maintenance", "Indoor Foliage"],
    quantity: ref(1),
    paragraph:
      "Allow me to introduce Fusion, a botanical masterpiece that bridges the gap between nature and innovation, bringing a touch of modern enchantment to your living space. Standing at a height of 2 feet, Fusion is a living testament to the harmonious blend of artistry and natural beauty.",
    details: [
      "Caring for Fusion is an artful endeavor that rewards with lasting beauty. It flourishes in bright, indirect light, with a balanced watering routine that allows the soil to dry moderately between waterings. Regular misting helps maintain the humidity levels it thrives in, nurturing its vibrant foliage.",

      "What sets Fusion apart is its ability to transform spaces not only aesthetically, but also in terms of air quality. With its air-purifying prowess, Fusion actively filters and improves the environment, contributing to a healthier and more invigorating living space.",

      "Introducing Fusion into your home is like inviting a work of art that evolves with every passing day. Whether placed as a centerpiece, a focal point in a reading nook, or even as a stunning addition to your office, Fusion's dynamic presence seamlessly integrates nature's beauty with modern living. Elevate your space with the captivating fusion of nature and innovation that is Fusion.",
    ],
  },
  {
    image:
      "https://assets.website-files.com/64ed01d0d959df99c03684cc/64ef0c921b293c2901ab0265_feey-dAA2Q_eFb84-unsplash.jpg",
    name: "Lucky",
    price: ref(18),
    originalPrice: 18,
    id: 7,
    category: ["Air Purifiers"],
    quantity: ref(1),
    paragraph:
      "Allow me to introduce Lucky, a charming and resilient houseplant that brings a touch of serenity and positive energy to your living space. Standing at a modest height of 1 foot, Lucky is a symbol of nature's blessings and a delightful addition to any corner it graces.",
    details: [
      "Lucky's most distinctive feature is its lush and vibrant leaves, which have an almost heartwarming quality. The leaves are a lush shade of green, reminiscent of the rejuvenating essence of nature. Their shape is reminiscent of clover leaves, giving a nod to its name and the good fortune it represents.",

      "Caring for Lucky is as easy as it is rewarding. This adaptable plant thrives in low to medium light conditions, making it a perfect choice for brightening up corners that need a touch of life. Its water requirements are moderate; allowing the soil to dry out slightly between waterings helps maintain its health and vitality.",

      "What truly sets Lucky apart is the positive aura it carries. Considered a symbol of luck and prosperity, this houseplant adds an element of charm and positivity to any space. Its presence serves as a gentle reminder to embrace life's blessings and appreciate the beauty that surrounds us.",
    ],
  },
];
</script>
