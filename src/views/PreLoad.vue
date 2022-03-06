<template>
  <video
    id="preloader"
    src="@/assets/technorollix22.mp4"
    autoplay
    muted
  ></video>
</template>

<script>
export default {
  name: "PreLoader",
};
</script>

<style>
#preloader {
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  z-index: 10;
}
</style>
