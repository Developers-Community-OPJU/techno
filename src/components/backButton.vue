<template>
  <a @click="$router.go(-1)"> &#8592; back</a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  font-size: 2rem;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  background: #a6eb12;
  color: #061d3f;
  display: inline-block;
  transition: 0.25s ease;
  position: fixed;
  cursor: pointer;
  width: 150px;
  z-index: 999;
  top: 0;
  left: 0;
  &:hover {
    background: #ffffff;
  }
}

@media (max-width: 500px) {
  a {
    font-size: 1rem;
    padding: 0.75rem 2rem;
  }
}
</style>
