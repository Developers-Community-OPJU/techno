<template>
  <div class="event-detail">
    <!-- your content here -->
    <div class="overlay"></div>
    <div class="event-box">
      <div class="event__content">
        <h1>Event : {{ $route.params.eventName }}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          voluptates? Incidunt explicabo delectus, vel maiores eligendi
          veritatis officiis nulla id odit aliquid. Laborum aspernatur facilis
          nobis, dignissimos eius consequuntur esse aperiam at, delectus debitis
          perferendis! Voluptatum molestiae doloribus architecto tempore
          nesciunt! Tempore minima autem ullam aperiam distinctio aspernatur
          cupiditate at!
        </p>
      </div>
      <div class="event__links">
        <a href="#" class="registration">Registration</a>
        <a href="#" class="more">More</a>
      </div>
    </div>
    <div class="event-rule">
      <h1>Rules</h1>
      <div class="border__line">
        <ul>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem, obcaecati.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem, obcaecati.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem, obcaecati.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem, obcaecati.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem, obcaecati.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem, obcaecati.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 1;
}
.event-detail {
  // background-image: linear-gradient(
  //   to right top,
  //   #051937,
  //   #3c225b,
  //   #811669,
  //   #c4005a,
  //   #f21330
  // );
  background-image: url("../../assets/party.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: #fff;
  position: relative;
  overflow: auto;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 1980px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: -1;
  }

  .event-box {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(7px);
    height: 80%;
    width: 90%;
    min-width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 3% auto;

    .event__content {
      // width: 500px;
      // padding: 0 ;
      & > p {
        width: 500px;
        padding-top: 2rem;
      }
    }

    .event__links {
      display: flex;
      flex-direction: column;
      & .registration,
      a {
        margin: 0.2rem 0;
        text-decoration: none;
        color: #051937;
        font-size: 1.1rem;
        font-weight: 500;
        padding: 0.8em;
        border-radius: 7px;
        background-color: #a8eb12;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
      }
      & .more {
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        backdrop-filter: blur(5px);
      }
    }
  }
  .event-rule {
    width: 90%;
    margin: 0 auto;
    h1 {
      text-align: center;
      font-size: 3rem;
      margin: 13% 0 5% 0;
      color: #fdd819;
      position: relative;
    }
    .border__line {
      border-left: 1px solid #fff;
      ul {
        li {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          // background-color: rgba(85, 155, 247, 0.85);
          background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
          border: 2px solid #006eee;
          border-radius: 4px;
          margin: 2rem 1rem;
          padding: 1%;
          color: #051937;
          font-weight: 500;
          width: fit-content;
          list-style: none;
          cursor: pointer;
          &::before {
            content: "\2022";
            color: #46aef7;
            // background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
            width: 1.4rem;
            display: inline-block;
            margin-left: -1.8rem;
            font-weight: bolder;
          }
          &:hover {
            transform: scaleX(105%) translateX(20px);
          }
        }
      }
    }
  }
}
</style>
