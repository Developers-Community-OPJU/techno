<template>
  <!-- code start here -->
  <preLoader v-if="loading" />
  <!-- code end here -->
  <appNavbar></appNavbar>
  <div v-if="!loading" class="home">
    <img src="@/assets/amrit-mohotsav.png" alt="img" class="banner" />
    <div class="content">
      <h5 class="tagline1" data-aos="fade-right">
        Welcome to
        <br />
        <br />
        <span class="opju-brand">O.P Jindal University</span>
      </h5>

      <h5 class="tagline2" data-aos="fade-right" data-aos-delay="300">
        central india's biggest <br />
        technical and cultural fest <br />
      </h5>

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
  <div class="junoon">
    <div class="header">
      <h1 data-aos="fade-right" data-aos-delay="500" class="featuring">
        Featuring
      </h1>
      <h1 data-aos="fade-right" data-aos-delay="700" class="name">
        Darshan Rawal
      </h1>
      <a
        href="https://junoon.opjufest.in/"
        target="_blank"
        data-aos="fade-right"
        data-aos-delay="500"
        class="action-btn"
      >
        Grab Tickets &#8594;
      </a>
    </div>
    <img
      data-aos="fade-right"
      data-aos-delay="700"
      data-aos-duration="1000"
      class="darshan"
      src="@/assets/darshan.jpg"
      alt="darshan rawal"
    />
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
@font-face {
  font-family: signature;
  src: url(../assets/BrittanySignature.ttf);
}
.banner {
  width: 120px;
  position: absolute;
  left: 15%;
  top: 2%;
}
.opju-brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: rgb(255, 159, 14);
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
      // margin-bottom: 1rem;
    }
    .tagline2 {
      font-size: 1.5rem;
      font-weight: 400;
      text-transform: capitalize;
      letter-spacing: 0.25rem;
      margin-top: 1rem;
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

// junoon
.junoon {
  display: flex;
  margin: 0 auto;
  position: relative;
  .darshan {
    margin-left: auto;
    width: 720px;
    height: auto;
  }
  .header {
    position: absolute;
    left: 15%;
    top: 30%;
    .featuring {
      font-size: 3rem;
      font-weight: 200;
      font-family: signature;
      color: rgb(183, 255, 14);
    }
    .name {
      text-align: center;
      letter-spacing: 0.3rem;
      font-size: 4rem;
      text-transform: uppercase;
      font-weight: 600;
      font-family: "Josefin Sans", sans-serif;
    }
    .action-btn {
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
        cursor: pointer;
      }
    }
  }
  h1 {
    color: #fff;
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
  .opju-brand {
    font-size: 1rem;
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

@media (max-width: 576px) {
  .junoon {
    height: 100vh;
    overflow: hidden;
    left: 5%;

    .header {
      position: absolute;
      left: 5%;
      top: 45%;
      .featuring {
        font-size: 2rem;
        font-weight: 200;
        font-family: signature;
        color: rgb(183, 255, 14);
      }
      .name {
        text-align: left;
        font-size: 1.75rem;
      }
      .action-btn {
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
          cursor: pointer;
        }
      }
    }
    h1 {
      color: #fff;
    }
  }
}
</style>
