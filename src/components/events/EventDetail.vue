<template>
  <div class="event-detail">
    <!-- your content here -->
    <div class="event-box">
      <div class="event__content">
        <h1>{{ $route.params.eventName }}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          voluptates? Incidunt explicabo delectus, vel maiores eligendi
          veritatis officiis nulla id odit aliquid. Laborum aspernatur facilis
          nobis, dignissimos eius consequuntur esse aperiam at, delectus debitis
          perferendis! Voluptatum molestiae doloribus architecto tempore
          nesciunt! Tempore minima autem ullam aperiam distinctio aspernatur
          cupiditate at!
        </p>
        <div class="rules">
          <h4>Rules</h4>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              quisquam.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              quisquam.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              quisquam.
            </li>
          </ul>
        </div>
        <h4 class="title">Team</h4>
        <div class="team">
          <div class="member">
            <img src="@/assets/user.jpg" alt="" />
            <h5 class="">Aman Vishwakarma</h5>
            <p>B.tech CSE 8</p>
          </div>
          <div class="member">
            <img src="@/assets/user.jpg" alt="" />
            <h5 class="">Aman Vishwakarma</h5>
            <p>B.tech CSE 8</p>
          </div>
          <div class="member">
            <img src="@/assets/user.jpg" alt="" />
            <h5 class="">Aman Vishwakarma</h5>
            <p>B.tech CSE 8</p>
          </div>
        </div>
      </div>
      <div class="event__links">
        <a href="#" class="registration">Registration</a>
        <a href="#" class="more">More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  font-size: 1rem;
  margin: 2rem 0 1rem 0;
}
h1 {
  text-transform: capitalize;
}
.rules {
  h4 {
    margin: 2rem 0 1rem 0;
  }
  ul {
    list-style: none;
    li {
      margin: 0.25rem 0;
    }
  }
}
.team {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  .member {
    margin-right: 2rem;
    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      filter: grayscale(100%) sepia(0%);
      transition: all 0.5s ease;
      &:hover {
        filter: grayscale(0%) sepia(100%);
      }
    }
    p {
      font-size: 12px;
    }
    text-align: center;
    display: inline-block;
  }
}
.event-detail {
  background-image: linear-gradient(to bottom, #061d3f, #111111);
  height: 100vh;
  color: #fff;
  position: relative;
  overflow: auto;

  .event-box {
    height: 100%;
    width: 90%;
    min-width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 3rem auto;
    padding: 4.5rem 0;

    .event__content {
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
        margin: 0.45rem 0;
        text-decoration: none;
        color: #051937;
        font-size: 1.1rem;
        font-weight: 500;
        padding: 0.8em;
        border-radius: 5px;
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
}
</style>
