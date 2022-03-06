<template>
  <div class="preloader">
    <video
      id="video"
      src="@/assets/technorollix22_pre.mp4"
      autoplay
      muted
    ></video>
  </div>
</template>

<script>
// const preloader = document.getElementById("preloader");

export default {
  name: "PreLoader",
};
</script>

<style>
.preloader {
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #000;
}
#video {
  min-width: 100%;
  min-height: 100%;
  z-index: 10;
}
</style>
