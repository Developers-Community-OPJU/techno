<template>
  <div class="wrapper">
    <h1 class="section-title" data-aos="fade-right">Events</h1>
    <div class="events">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="card"
        data-aos="fade-up"
        :data-aos-delay="100 * index * 0.5"
      >
        <div class="overlay"></div>
        <div class="card-details">
          <h3 class="card-title">{{ event.name }}</h3>
          <p class="card-text">
            {{ event.desc }}
          </p>

          <router-link :to="'/events/' + event.name" class="viewBtn"
            >View More</router-link
          >
          <a href="http://www.google.com" class="registerBtn" target="_blank"
            >Register</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          name: "Tech lab",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius `,
          link: "",
        },
        {
          name: "tech docx",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
        {
          name: "event name",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            neque libero molestias laborum deserunt! Eius.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 8rem 5rem;
  background: rgb(19, 19, 19);
  height: 100%;
}
.section-title {
  font-size: 4rem;
  font-weight: 900;
  color: white;
  margin-bottom: 3rem;
  margin-left: 2rem;
  text-align: left;
}
.events {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  .card {
    overflow: hidden;
    margin: 2rem;
    color: #fff;
    position: relative;
    width: 312px;
    height: 640px;
    background-position: center;
    transition: all 0.5s ease;
    background-size: 150%;
    text-overflow: ellipsis;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.767)
      ),
      url(https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
    height: 480px;
    img {
      object-fit: cover;
      object-position: center;
    }
    &:hover {
      background-size: 100%;
      animation: bg-animate 5s infinite;
      background-image: linear-gradient(
          to bottom,
          rgba(32, 62, 197, 0.678),
          rgb(12, 12, 12)
        ),
        url(https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
    }
    &:hover > .card-details .card-text {
      opacity: 1;
      max-height: 500px;
    }
    &:hover > .card-details .registerBtn,
    &:hover > .card-details .viewBtn {
      display: block;
    }

    .card-details {
      padding: 1rem;
      position: absolute;
      bottom: 0.5rem;
      width: 90%;

      .card-title {
        text-shadow: 2px 2px 8px #333333b4;
        font-size: 2rem;
        font-weight: bold;
        text-transform: capitalize;
        transition: all 0.2s ease-out;
      }
      .card-text {
        margin-top: 1rem;
        max-height: 0;
        opacity: 0;
        transition: all 0.5s ease-out;
      }
      .registerBtn {
        width: 100%;
        text-transform: uppercase;
        margin-top: 0.75rem;
        padding: 0.75rem 0;
        text-align: center;
        background: rgba(255, 255, 255, 0);
        color: rgb(255, 255, 255);
        border: 1px solid #fff;
        display: none;
        text-decoration: none;
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
          backdrop-filter: blur(5px);
        }
      }
      .viewBtn {
        margin-top: 1rem;
        padding: 0.5rem 0;
        width: 100%;
        color: #fff;
        display: none;
      }
    }
  }
}

@media (max-width: 576px) {
  .wrapper {
    padding: 5rem 1rem;
    background: rgb(2, 2, 2);
    height: 100%;
  }
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
    text-align: left;
  }
  .events {
    .card {
      overflow: hidden;
      margin: 1rem 0.5rem 2rem 0.5rem;
      color: #fff;
      position: relative;
      width: 100%;
      height: 640px;
      background-position: center;
      transition: all 0.5s ease;
      background-size: 150%;
      text-overflow: ellipsis;
      background-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(0, 0, 0, 0.767)
        ),
        url(https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80);
      height: 480px;
      img {
        object-fit: cover;
        object-position: top;
      }
      &:hover {
        // box-shadow: 0rem -1rem 5rem rgba(29, 172, 255, 0.918);
        background-size: 100%;
        background-image: linear-gradient(
            to bottom,
            rgba(32, 62, 197, 0.678),
            rgb(12, 12, 12)
          ),
          url(https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80);
      }
      &:hover > .card-details .card-text {
        opacity: 1;
        max-height: 500px;
      }
      &:hover > .card-details .registerBtn,
      &:hover > .card-details .viewBtn {
        display: block;
      }

      .card-details {
        padding: 1rem;
        position: absolute;
        bottom: 0.5rem;
        width: 90%;

        .card-title {
          text-shadow: 2px 2px 8px #333333b4;
          font-size: 2rem;
          font-weight: bold;
          text-transform: capitalize;
          transition: all 0.2s ease-out;
        }
        .card-text {
          margin-top: 1rem;
          max-height: 0;
          opacity: 0;
          transition: all 0.5s ease-out;
        }
        .registerBtn {
          width: 100%;
          text-transform: uppercase;
          margin-top: 0.75rem;
          padding: 0.75rem 0;
          text-align: center;
          background: rgba(255, 255, 255, 0);
          color: rgb(255, 255, 255);
          border: 1px solid #fff;
          display: none;
          text-decoration: none;
          &:hover {
            background-color: rgba(255, 255, 255, 0.2);
            color: #fff;
            backdrop-filter: blur(5px);
          }
        }
        .viewBtn {
          margin-top: 1rem;
          padding: 0.5rem 0;
          width: 100%;
          color: #fff;
          display: none;
        }
      }
    }
  }
}

@keyframes bg-animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
