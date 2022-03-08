<template>
  <div class="event-detail">
    <!-- your content here -->
    <div class="event-box">
      <div class="event-description">
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
        <div class="event-rules">
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
            <div class="member">
              <img src="@/assets/user.jpg" alt="" />
              <h5 class="">Aman Vishwakarma</h5>
              <p>B.tech CSE 8</p>
            </div>
          </div>
        </div>
      </div>
      <div class="event-links">
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
img {
  width: 80px;
  height: 80px;
}

h1,
h4,
h5 {
  color: #fff;
}

p,
li {
  color: #fff;
}
.event-detail {
  background-image: linear-gradient(to bottom, #061d3f, #111111);
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: auto;
  .event-box {
    display: flex;
    justify-content: space-around;
    margin-top: 5rem;
    .event-description {
      width: 50%;
      min-width: 350px;
      h1 {
        margin-bottom: 1rem;
      }
      .event-rules {
        h4 {
          margin: 2rem 0 1rem 0;
        }
        ul li {
          padding: 1rem 1rem;
          list-style: none;
        }
        .title {
          font-size: 1rem;
          margin: 2rem 0 1rem 0;
        }
        .team {
          display: flex;
          flex-wrap: wrap;
          margin: 2rem 0;
          .member {
            margin-bottom: 1rem;
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
      }
    }
    .event-links {
      display: flex;
      flex-direction: column;
      & a {
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

@media (max-width: 500px) {
  .event-box {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
