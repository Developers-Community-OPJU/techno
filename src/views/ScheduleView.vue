<template>
  <div class="schedule-box">
    <back />
    <div class="event-schedule">
      <h1 class="_day">30<sup>th</sup> March</h1>
      <ul class="event-list">
        <li>Tech-Lab: Model Presentation</li>
        <li>Exhibition and Expo</li>
        <li>TechDoc</li>
        <li>DJ Hunt</li>
        <li>Roadies</li>
        <li>Treasure Hunt</li>
        <li>Inaugural Function</li>
        <li>Grand-E-Rollix</li>
      </ul>
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
};
</script>

<style lang="scss" scoped>
.schedule-box {
  height: 100vh;
  .event-schedule {
    padding-top: 10rem;
    width: 80%;
    // border: 1px solid red;
    margin: 0 auto;
    ._day {
      color: white;
      font-size: 3rem;
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
          background: grey;
          width: 15px;
          height: 5%;
        }
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        border-radius: 3rem;
        background: #8e9eab; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to left,
          #eef2f3,
          #8e9eab
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to left,
          #eef2f3,
          #8e9eab
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        width: 1px;
        height: 96%;
      }
    }
  }
}

@media (max-width: 576px) {
  .schedule-box {
    .event-schedule {
      padding-top: 5rem;
    }
  }
}
</style>
