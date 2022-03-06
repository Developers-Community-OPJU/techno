<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <h2>Technorillix'22</h2>
      <img
        v-if="!toggle"
        @click="toggleMenu()"
        class="menu-icon"
        src="@/assets/menu.svg"
        alt="Menu"
      />
      <img
        v-if="toggle"
        @click="toggleMenu()"
        class="menu-icon"
        src="@/assets/x.svg"
        alt="Menu Close"
      />
    </div>
    <div v-if="toggle" class="nav-items-wrapper">
      <ul class="nav-list">
        <li>
          <router-link to="/">Home <span>.</span></router-link>
        </li>
        <li>
          <router-link to="/events">Events <span>.</span></router-link>
        </li>
        <li>
          <router-link to="/schedule">Schedule <span>.</span></router-link>
        </li>
        <li>
          <router-link to="/team">Team <span>.</span></router-link>
        </li>
        <li>
          <router-link to="/about">About US <span>.</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleMenu() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  color: #fff;
}
.navbar-wrapper {
  position: relative;
}
.navbar {
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  position: relative;
  transition: all 1s ease-in-out;
  animation: menu 0.5s ease;
}
.menu-icon {
  cursor: pointer;
  height: 40px;
  width: 40px;
  margin-left: auto;
  filter: invert(100%);
}
.nav-items-wrapper {
  z-index: 5;
  width: 100%;
  height: 100vh;
  background: #000;
}
.nav-list {
  opacity: 1;
  transform: translateX(0rem);
  padding: 5rem;
  text-align: right;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  transition: animation 0.5s ease-out;
  animation: nav-list 0.5s ease-in-out;
  li {
    a {
      color: #fff !important;
      text-decoration: none;
      span {
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        color: aqua !important;
      }
      &:hover span {
        opacity: 1;
      }
    }
    &:hover {
      margin-bottom: 2rem;
    }
    &:hover ~ li {
      opacity: 0.3;
    }
    transition: all 0.5s ease;
    margin-bottom: 1rem;
    font-size: 6rem;
    font-weight: bolder;
    list-style: none;
  }
}

@keyframes menu {
  from {
    opacity: 0;
    transform: translateY(-200px);
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes nav-list {
  from {
    opacity: 0;
    transform: translateX(50rem);
  }
  to {
    opacity: 1;
    transform: translateX(0rem);
  }
}
</style>
