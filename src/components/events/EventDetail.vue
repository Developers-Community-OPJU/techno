<template>
  <div class="event-detail">
    <!-- your content here -->
    <div class="event-box">
      <back />
      <div class="event-description">
        <div class="event-header">
          <div class="overlay"></div>
          <img :src="event.Image" :alt="event.name" />
          <h1>{{ event.name }}</h1>
        </div>
        <h4>About</h4>
        <br />
        <p>
          {{ event.desc }}
        </p>
        <div class="event-rules">
          <h4>Rules</h4>
          <ul v-if="event.rules">
            <li v-for="rule in event.rules" :key="rule">{{ rule }}</li>
          </ul>
          <h4 class="title">Team</h4>
          <div class="team">
            <div v-for="member in event.team" :key="member" class="member">
              <img src="@/assets/gamer.png" alt="" />
              <h5 class="">{{ member.name }}</h5>
              <p>{{ member.designation }}</p>
              <p>{{ member.contact }}</p>
            </div>
          </div>
          <h4 class="title">Frequently Asked Questions</h4>
          <div class="team">
            <div v-for="faq in event.faqs" :key="faq" class="member">
              <p>{{ faq.question }}</p>
              <p>{{ faq.answer }}</p>
            </div>
          </div>
          <h4 class="title">Registrations</h4>
          <div class="event-links">
            <a :href="event.link" target="_blank" class="registration"
              >Registration</a
            >
            <!-- <a :href="event.link" target="_blank" class="more">Registration</a> -->
          </div>
        </div>
      </div>
      <div class="note">
        <h4><span>NOTE</span></h4>
        <p>
          Free
          <strong style="color: #a8eb12">Accomodation</strong> will be provided
          for the outside participant.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const eventData = require("./eventsData");
import back from "@/components/backButton.vue";
export default {
  data() {
    return {
      event: null,
    };
  },
  components: {
    back,
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

li {
  padding: 0;
}

.event-header {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 2rem;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #061d3f00, #111111);
  }
  > img {
    border-radius: 5px;
    width: 100%;
    height: 420px;
    object-fit: cover;
    object-position: center;
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
            margin-bottom: 3rem;
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
  border: 1px solid #fff;
  text-align: center;
  padding: 1.5rem 2rem 2rem 2rem;
  font-size: 1.1rem;
  h4 {
    margin-bottom: 1rem;
  }
}

.event-links {
  display: block;
  margin: 3rem auto;
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
