<template>
  <div class="home">
    <div class="content">
      <h4 data-aos="fade-down" class="tagline">
        central India's biggest technical & Cultural Fest
      </h4>
      <h1 class="title">Technorollix'<span class="year">22</span></h1>
      <h1 data-aos="fade" data-aos-delay="2500" class="soon">
        30th march - 2nd April
      </h1>
    </div>
    <h4 class="date">O.P Jindal University</h4>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(17, 17, 17, 0.205),
      rgba(28, 3, 97, 0.137)
    ),
    url("@/assets/background1.jpg");
  background-size: cover;
  background-position: center;
}
.content {
  text-align: center;
  color: #fff;
  overflow: hidden;
  width: 100%;
}
.title {
  width: 100%;
  font-size: 7rem;
  font-family: roadRage;
  text-shadow: 1rem 1rem 2rem rgba(56, 56, 56, 0.507);
  animation: animate-title 1.5s ease-in;
  &::first-letter {
    font-size: 9rem;
  }
  .year {
    color: rgb(183, 255, 14);
  }
}
.soon,
.date,
.tagline {
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  text-align: center;
}

.date {
  position: absolute;
  bottom: 2rem;
  color: #fff;
  font-size: 0.8rem;
}

.soon {
  font-weight: 200;
}

.tagline {
  font-size: 1rem;
}

@keyframes animate-title {
  0% {
    letter-spacing: 10rem;
    opacity: 0;
    transform: scale(2);
  }
  70% {
    letter-spacing: 4rem;
    opacity: 0;
  }
  90% {
    letter-spacing: 3rem;
  }
  100% {
    letter-spacing: normal;
    transform: scale(1);
  }
}
</style>
