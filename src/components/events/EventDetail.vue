<template>
  <div class="event-detail">
    <!-- your content here -->
    <div class="event-box">
      <div class="event-description">
        <div class="event-header">
          <img
            src="https://images.unsplash.com/photo-1543941869-11da6518d88f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <h1>{{ event.name }}</h1>
        </div>
        <p>
          {{ event.desc }}
        </p>
        <div class="event-rules">
          <h4>Rules</h4>
          <ul v-if="event.rules">
            <li v-for="rule in event.rules" :key="rule">{{ rule }}</li>
          </ul>
          <h4 class="title">Team</h4>
          {{ event.team }}
          <div class="team">
            <div class="member">
              <img src="@/assets/gamer.png" alt="" />
              <h5 class="">Aman Vishwakarma</h5>
              <p>B.tech CSE 8</p>
            </div>
            <div class="member">
              <img src="@/assets/gamer.png" alt="" />
              <h5 class="">Aman Vishwakarma</h5>
              <p>B.tech CSE 8</p>
            </div>
            <div class="member">
              <img src="@/assets/gamer.png" alt="" />
              <h5 class="">Aman Vishwakarma</h5>
              <p>B.tech CSE 8</p>
            </div>
            <div class="member">
              <img src="@/assets/gamer.png" alt="" />
              <h5 class="">Aman Vishwakarma</h5>
              <p>B.tech CSE 8</p>
            </div>
          </div>
        </div>
      </div>
      <p class="note">
        <span>NOTE:</span><br />Free
        <strong style="color: #a8eb12">Accomodation</strong> will be provided
        for the outside participant.
      </p>
      <div class="event-links">
        <a :href="event.link" class="registration">Registration</a>
        <a :href="event.link" class="more">Registration</a>
      </div>
    </div>
  </div>
</template>

<script>
const eventData = require("./eventsData");
export default {
  data() {
    return {
      event: null,
    };
  },
  created() {
    const eventIndex = this.$route.params.eventIndex;
    this.event = eventData.default[eventIndex];
  },
};
</script>

<style lang="scss" scoped>
h1,
h4,
h5 {
  color: #fff;
}

h1 {
  font-size: 4rem;
}

li {
  padding: 0;
}

.event-header {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 2rem;
  > img {
    border-radius: 5px;
    width: 100%;
    height: 420px;
    object-fit: cover;
  }
  h1 {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    text-shadow: 2px 2px 1rem #3333337c;
    text-transform: capitalize;
  }
}

.event-detail {
  // margin: 0 auto;
  background-image: linear-gradient(to bottom, #061d3f, #111111);
  min-height: 100vh;
  max-height: 100%;
  width: 100vw;
  max-width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  .event-box {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 60%;
    .event-description {
      min-width: 330px;
      h1 {
        margin-bottom: 1rem;
      }
      .event-rules {
        h4 {
          margin: 2rem 0 1rem 0;
        }
        ul li {
          padding: 0.25rem 0.5rem;
          margin: 0 2rem;
          &::marker {
            color: #a8eb12;
          }
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
  }
}
.note {
  text-align: center;
  padding: 1.5rem 2rem 3rem 2rem;
  font-size: 1.1rem;
}

.event-links {
  display: block;
  margin: 0 auto;
  // display: flex;
  // flex-direction: row;
  & a {
    width: 50%;
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
    margin-left: 1.2rem;
  }
}

@media (max-width: 500px) {
  .event-detail {
    justify-content: flex-start;
    .event-box {
      width: 100%;
      // flex-direction: column;
      // justify-content: center;
      // align-items: flex-start;
      .event-description {
        padding: 1rem;
        min-width: 328px;
        .event-header {
          h1 {
            font-size: 2rem;
          }
        }
        .event-rules {
          .team {
            justify-content: center;
            align-items: center;
            .member {
              margin: 1.3rem 1.2rem 0 0;
            }
          }
        }
      }
      .event-links {
        display: flex;
        flex-direction: column;
        a {
          margin: 0.5rem auto;
        }
      }
    }
  }
}
</style>
