<template>
  <back />
  <div class="wrapper">
    <h1 class="section-title" data-aos="fade-right">Events</h1>
    <p v-if="loading" class="loading-text">
      Here's your chance to catch a few blinks.
    </p>
    <div class="events">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="card"
        data-aos="fade-up"
        :data-aos-delay="100 * index * 0.5"
      >
        <div class="overlay"></div>
        <img :src="event.Image" alt="" />
        <div class="card-details">
          <h3 class="card-title">{{ event.name }}</h3>
          <p class="card-text">
            {{ event.desc }}
          </p>
          <router-link :to="'/events/' + index" class="viewBtn"
            >View More</router-link
          >
          <a :href="event.link" class="registerBtn" target="_blank">Register</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import back from "@/components/backButton.vue";
export default {
  data() {
    return {
      events: [],
      loading: false,
    };
  },
  components: {
    back,
  },
  created() {
    this.loading = true;
    const data = require("../components/events/eventsData");
    this.events = data.default;
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.loading-text {
  font-size: 2rem;
  margin-left: 2rem;
  color: #fff;
}
.wrapper {
  padding: 8rem 5rem;
  background: rgb(0, 0, 0);
  height: 100%;
}
.section-title {
  background: #fc466b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #3f5efb,
    #fc466b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #3f5efb,
    #fc466b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 2rem;
  margin-left: 2rem;
  text-align: left;
}
.events {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .card {
    overflow: hidden;
    margin: 2rem;
    color: #fff;
    position: relative;
    height: 640px;
    background-position: center;
    transition: all 0.5s ease;
    background-size: 150%;
    height: 480px;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        to bottom,
        rgba(32, 62, 197, 0.199),
        rgb(12, 12, 12)
      );
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: 0.25s ease-in-out;
    }
    &:hover .overlay {
      background: linear-gradient(
        to bottom,
        rgba(12, 29, 104, 0.692),
        rgb(12, 12, 12)
      );
    }
    &:hover > .card-details .card-text {
      opacity: 1;
      max-height: 320px;
    }
    &:hover > .card-details .registerBtn,
    &:hover > .card-details .viewBtn {
      display: block;
    }

    .card-details {
      padding: 1rem;
      position: absolute;
      bottom: 0.5rem;
      width: 90%;

      .card-title {
        text-shadow: 2px 2px 8px #333333b4;
        font-size: 2rem;
        font-weight: bold;
        text-transform: capitalize;
        transition: all 0.2s ease-out;
      }
      .card-text {
        text-overflow: ellipsis;
        margin-top: 1rem;
        max-height: 0;
        opacity: 0;
        transition: all 0.5s ease-out;
      }
      .registerBtn {
        width: 100%;
        text-transform: uppercase;
        margin-top: 0.75rem;
        padding: 0.75rem 0;
        text-align: center;
        background: rgba(255, 255, 255, 0);
        color: rgb(255, 255, 255);
        border: 1px solid #fff;
        display: none;
        text-decoration: none;
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
          backdrop-filter: blur(5px);
        }
      }
      .viewBtn {
        margin-top: 1rem;
        padding: 0.5rem 0;
        width: 100%;
        color: #fff;
        display: none;
      }
    }
  }
}

@media (max-width: 576px) {
  .wrapper {
    padding: 5rem 1rem;
    background: rgb(2, 2, 2);
    height: 100%;
  }
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
    text-align: left;
  }
  .events {
    grid-template-columns: repeat(1, 1fr);
    .card {
      margin: 0.5rem;
    }
  }
}

@keyframes bg-animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
