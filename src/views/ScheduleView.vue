<template>
  <div class="schedule-box">
    <back />
    <div class="event-schedule">
      <h1>Schedule</h1>
      <div class="schedule" v-for="event in schedule" :key="event">
        <h1 class="_day">
          <span
            >{{ event.date.substring(0, 2)
            }}<sup>{{ event.date.substring(2, 4) }}</sup>
          </span>
          {{ event.date.substring(4) }}
        </h1>
        <ul class="event-list">
          <li v-for="e in event.schedule" :key="e">
            <p class="event-title">{{ e.event }}</p>
            <p>Time - {{ e.time }}</p>
            <p>Venue - {{ e.venue }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import back from "@/components/backButton.vue";
export default {
  name: "ScheduleView",
  components: {
    back,
  },
  data() {
    return {
      schedule: null,
    };
  },
  created() {
    const data = require("../components/schedule");
    this.schedule = data.default;
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #fff;
  font-size: 6rem;
  margin-bottom: 5rem;
}

.event-title {
  color: rgb(183, 255, 14);
}
.schedule-box {
  min-height: 100vh;
  max-height: 100%;
  padding: 5rem;
  .event-schedule {
    padding-top: 10rem;
    width: 80%;
    // border: 1px solid red;
    margin: 0 auto;
    ._day {
      span {
        color: rgb(183, 255, 14);
      }
      color: #fff;
      font-size: 3rem;
      &::first-letter {
        color: rgb(183, 255, 14);
      }
    }
    .event-list {
      position: relative;
      color: #fff;
      margin-top: 1.5rem;
      margin-bottom: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 0.5rem;
      overflow: hidden;
      li {
        padding: 0 1.4rem;
        list-style: none;
        margin-top: 1.5rem;
        font-size: 1.5rem;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 1rem;
          left: 0;
          border-radius: 3rem;
          background: rgb(183, 255, 14);
          width: 15px;
          height: 5%;
        }
        &:hover {
          color: rgb(183, 255, 14);
          cursor: pointer;
        }
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        border-radius: 3rem;
        background: rgb(183, 255, 14);
        width: 1px;
        height: 96%;
      }
    }
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 3rem;
  }
  .schedule-box {
    padding: 1rem;
  }
}
</style>
