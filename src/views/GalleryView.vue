<template>
  <back />
  <div class="gallery">
    <h1 class="heading">Gallery</h1>
    <div v-for="gallery in gallery" :key="gallery" class="gallery-section">
      <div class="gallery">
        <h4 class="gallery-section-heading">{{ gallery.name }}</h4>
        <div class="gallery-cards">
          <div v-for="member in gallery.gallery" :key="member" class="card">
            <img :src="member.image" :alt="member.name" />
            <span v-if="member.designation">{{ member.designation }}</span>
            <div class="name">{{ member.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// const gallery = require("@/components/gallery");
import gallery from "@/components/gallery";
import back from "@/components/backButton.vue";
export default {
  data() {
    return {
      gallery: [],
    };
  },
  components: {
    back,
  },
  async created() {
    this.gallery = await gallery;
    console.log(this.gallery);
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  min-height: 100vh;
  height: 100%;
  color: #fff;
  width: 90%;
  padding-bottom: 10px;
  margin: 10rem auto;
  .heading {
    font-size: 3rem;
    text-align: center;
  }
}

.gallery-section {
  margin: 2rem 0 10rem 0;
  &-heading {
    margin-bottom: 5rem;
    font-size: 2rem;
  }
}

.gallery-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  .card {
    overflow: hidden;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s ease-in-out;
    background: linear-gradient(
      to bottom,
      #f7f7f7,
      #ffffff 25%,
      #a8eb12 25%,
      #a8eb12 85%,
      #a8eb12 85%
    );
    &:hover {
      background: linear-gradient(
        to bottom,
        #f7f7f7,
        #ffffff 0%,
        #a8eb12 0%,
        #a8eb12 85%,
        #a8eb12 85%
      );
    }
    .name {
      position: absolute;
      width: 100%;
      bottom: -5rem;
      text-align: center;
      padding: 1rem 0;
      background: #fff;
      color: #000;
      font-weight: 600;
      transition: 0.25s ease-in-out;
    }
    &:hover .name {
      bottom: 0;
    }
    span {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.5rem 1rem;
      background: #a8eb12;
      color: #000;
      font-weight: 600;
      transition: 0.25s ease-in-out;
      border-radius: 0 0 0 1rem;
    }
    &:hover span {
      background: #fff;
      color: rgb(48, 11, 11);
    }
    &:hover img {
      background: #fff;
      color: rgb(48, 11, 11);
      filter: grayscale(0%) drop-shadow(1rem 1rem 3rem rgba(44, 44, 44, 0.5));
    }
    text-align: center;
    > img {
      object-fit: cover;
      object-position: top;
      height: 380px;
      pointer-events: none;
      filter: grayscale(100%) drop-shadow(1rem 1rem 3rem rgba(44, 44, 44, 0.5));
      transform: scale(1);
    }
  }
}

@media (max-width: 576px) {
  .gallery {
    width: 100%;
    margin: 5rem auto;
    .heading {
      font-size: 3rem;
      text-align: center;
    }
  }
  .gallery-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

.gallery-section {
  margin: 2rem 0 10rem 0;
  &-heading {
    margin-bottom: 3rem;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
