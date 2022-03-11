<template>
  <!-- code start here -->
  <preLoader v-if="loading" />
  <!-- code end here -->
  <appNavbar></appNavbar>
  <div v-if="!loading" class="home">
    <img src="@/assets/amrit-mohotsav.png" alt="img" class="banner" />
    <div class="content">
      <h5 class="tagline1" data-aos="fade-right">Welcome to</h5>
      <h5 class="tagline2" data-aos="fade-right" data-aos-delay="300">
        central india's biggest <br />
        technical and cultural fest
      </h5>
      <img src="@/assets/opju_logo.png" alt="img" class="opju-logo" />
      <h1 class="headline" data-aos="fade-right" data-aos-delay="500">
        Technorollix<span>'22</span>
      </h1>
      <h6 class="date" data-aos="fade-down" data-aos-delay="700">
        30th march - 2nd april
      </h6>
      <router-link
        data-aos="fade-right"
        data-aos-delay="900"
        to="/events"
        class="registerBtn"
        href="/events"
        >Register</router-link
      >
    </div>
    <img class="spiral" src="@/assets/spiral.png" alt="spiral image" />
  </div>
</template>

<script>
import PreLoader from "./PreLoad.vue";
import AppNavbar from "@/components/AppNavbar.vue";

export default {
  name: "HomeView",
  data() {
    return {
      loading: true,
    };
  },
  // code start here
  components: {
    PreLoader,
    AppNavbar,
  },
  created() {
    if (!sessionStorage.getItem("allowLoader")) {
      setTimeout(() => {
        this.loading = false;
        sessionStorage.setItem("allowLoader", false);
      }, 4100);
    } else {
      setTimeout(() => {
        this.loading = false;
        sessionStorage.setItem("allowLoader", false);
      }, 0);
    }
  },
  // code end here
};
</script>

<style lang="scss" scoped>
.banner {
  width: 120px;
  position: absolute;
  left: 15%;
  top: 2%;
}
.opju-logo {
  position: absolute;
  top: 27%;
  left: 18%;
  width: 50px;
}
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0);
  overflow: hidden;
  .content {
    position: absolute;
    z-index: 1;
    padding: 12rem;
    padding-top: 15rem;
    width: 100%;
    color: #fff;
    .tagline1 {
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.25rem;
      margin-bottom: 1rem;
    }
    .tagline2 {
      font-size: 1.5rem;
      font-weight: 400;
      text-transform: capitalize;
      letter-spacing: 0.25rem;
    }
    .headline {
      margin: 1rem 0 1rem 0;
      font-size: 7rem;
      animation: animate-title 1s ease-in;
      span {
        color: rgb(183, 255, 14);
      }
    }
    .date {
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 200;
      letter-spacing: 0.25rem;
    }
  }
  .spiral {
    z-index: 0;
    position: absolute;
    top: 20%;
    left: 45%;
    animation: animate-spiral 50s ease infinite;
  }
}

.registerBtn {
  text-transform: uppercase;
  display: inline-block;
  padding: 1rem 3rem;
  margin-top: 3rem;
  text-align: center;
  background: rgba(51, 51, 51, 0.925);
  color: rgb(255, 255, 255);
  border: 1px solid #fff;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    backdrop-filter: blur(5px);
  }
}

@keyframes animate-spiral {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
}

@media (max-width: 576px) {
  .banner {
    width: 116px;
    position: absolute;
    left: 5%;
    top: 8%;
  }
  .opju-logo {
    position: absolute;
    top: 41%;
    left: 40%;
    width: 50px;
  }
  .home {
    .content {
      padding: 2rem;
      padding-top: 15rem;
      width: 100%;
      color: #fff;
      .tagline2 {
        font-size: 1rem;
        width: 95%;
      }
      .headline {
        margin: 1rem 0 1rem 0;
        font-size: 2rem;
        animation: animate-title 1s ease-in;
        span {
          color: rgb(183, 255, 14);
        }
      }
      .date {
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 200;
        letter-spacing: 0.25rem;
      }
    }
    .spiral {
      z-index: 0;
      position: absolute;
      top: 20%;
      left: 45%;
    }
  }
}
</style>
