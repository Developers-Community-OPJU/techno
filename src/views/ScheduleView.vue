<template>
  <div class="schedule-box">
    <div class="event-schedule">
      <h1 class="_day">DAY 1</h1>
      <ul class="event-list">
        <li>Tech-Lab</li>
        <li>Tech-Doc</li>
        <li>LAN Gaming</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScheduleView",
};
</script>

<style lang="scss" scoped>
.schedule-box {
  height: 100vh;
  .event-schedule {
    padding-top: 5rem;
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
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      //   border-left: 4px solid red;
      padding: 0.5rem;
      overflow: hidden;
      li {
        padding: 0 1.1rem;
        list-style: none;
        margin-top: 1.5rem;
        font-size: 1.5rem;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        border-radius: 3rem;
        background: #56ccf2; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #2f80ed,
          #56ccf2
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #2f80ed,
          #56ccf2
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        width: 5px;
        height: 16%;
        animation: animate 2.8s ease-in-out forwards infinite alternate;
      }
      @keyframes animate {
        0% {
          transform: translateY(30px);
        }
        50% {
          transform: translateY(90px);
          background: #e44d26; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #f16529,
            #e44d26
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #f16529,
            #e44d26
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        100% {
          transform: translateY(140px);
          background: #ffb347; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to bottom,
            #ffcc33,
            #ffb347
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to bottom,
            #ffcc33,
            #ffb347
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      }
    }
  }
}
</style>
