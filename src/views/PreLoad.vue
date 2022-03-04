<template>
  <video
    id="preloader"
    src="../assets/mixkit-123-preview.mp4"
    autoplay
    muted
  ></video>
</template>

<script>
// const preloader = document.getElementById("preloader");

export default {
  name: "PreLoader",
};
</script>

<style>
#preloader {
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
}
</style>
