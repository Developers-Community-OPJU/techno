<template>
  <back />
  <div class="teams">
    <h1 class="heading">Technorollix'22 Team</h1>
    <div v-for="team in teams" :key="team" class="team-section">
      <div class="team">
        <h4 class="team-section-heading">{{ team.name }}</h4>
        <div class="team-cards">
          <div v-for="member in team.team" :key="member" class="card">
            <img :src="member.image" :alt="member.name" />
            <span v-if="member.designation">{{ member.designation }}</span>
            <div class="name">{{ member.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const teams = require("@/components/team");
import teams from "@/components/team";
import back from "@/components/backButton.vue";
export default {
  data() {
    return {
      teams: [],
    };
  },
  components: {
    back,
  },
  async created() {
    this.teams = await teams;
    console.log(this.teams);
  },
};
</script>

<style lang="scss" scoped>
.teams {
  min-height: 100vh;
  height: 100%;
  color: #fff;
  width: 60%;
  margin: 10rem auto;
  padding-bottom: 5px;
  .heading {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
  }
}

.team-section {
  margin: 2rem 0 10rem 0;
  &-heading {
    margin-bottom: 5rem;
    font-size: 2rem;
    text-align: left;
  }
}

.team-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  .card {
    overflow: hidden;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s ease-in-out;
    background: linear-gradient(
      to bottom,
      #f7f7f7,
      #ffffff 25%,
      #a8eb12 25%,
      #a8eb12 85%,
      #a8eb12 85%
    );
    &:hover {
      background: linear-gradient(
        to bottom,
        #f7f7f7,
        #ffffff 0%,
        #a8eb12 0%,
        #a8eb12 85%,
        #a8eb12 85%
      );
    }
    .name {
      position: absolute;
      width: 100%;
      bottom: -5rem;
      text-align: center;
      padding: 1rem 0;
      background: #fff;
      color: #000;
      font-weight: 600;
      transition: 0.25s ease-in-out;
    }
    &:hover .name {
      bottom: 0;
    }
    span {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.5rem 1rem;
      background: #a8eb12;
      color: #000;
      font-weight: 600;
      transition: 0.25s ease-in-out;
      border-radius: 0 0 0 1rem;
    }
    &:hover span {
      background: #fff;
      color: rgb(48, 11, 11);
    }
    text-align: center;
    > img {
      object-fit: cover;
      object-position: top;
      height: 380px;
      filter: grayscale(100%) drop-shadow(1rem 1rem 3rem rgba(44, 44, 44, 0.5))
        brightness(109%);
      transform: scale(1);
    }
  }
}

@media (max-width: 576px) {
  .teams {
    width: 100%;
    margin: 5rem auto;
    padding-bottom: 5px;
    .heading {
      font-size: 2rem;
      text-align: center;
    }
  }
  .team-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

.team-section {
  margin: 1rem 0 8rem 0;
  &-heading {
    margin-bottom: 3rem;
    font-size: 1.5rem;
    text-align: left;
  }
}
</style>
