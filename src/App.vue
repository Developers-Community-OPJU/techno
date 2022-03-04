<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  margin: 0;
  padding: 0;
  &::selection {
    background: rgb(183, 255, 14);
    color: #2c3e50;
  }
}

@font-face {
  font-family: roadRage;
  src: url(@/assets/Road_Rage.otf);
}
#app {
  font-family: "Montserrat", sans-serif;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
