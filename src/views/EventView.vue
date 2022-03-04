<template>
  <div class="wrapper">
    <h1 class="section-title">Events</h1>
    <div class="events">
      <a href="#" v-for="(event, index) in events" :key="index" class="card">
        <img
          src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        />
        <div class="overlay"></div>
        <div class="card-details">
          <h3 class="card-title">{{ event.name }}</h3>
          <p class="card-text">
            {{ event.desc }}
          </p>
        </div>
      </a>
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
            neque libero molestias laborum deserunt! Eius.`,
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 8rem 5rem;
  background: rgb(4, 10, 66);
  height: 100%;
}
.section-title {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin-bottom: 3rem;
  text-align: center;
}
.events {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    overflow: hidden;
    margin: 2rem;
    color: #fff;
    position: relative;
    width: 312px;
    height: 640px;
    border-radius: 0.5rem;
    background-position: center;
    transition: all 0.5s ease;
    // background-image: linear-gradient(
    //     to bottom,
    //     rgba(255, 255, 255, 0),
    //     rgba(0, 0, 0, 0.767)
    //   ),
    //   url(https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80);
    height: 480px;
    img {
      object-fit: cover;
      object-position: top;
    }
    &:hover {
      box-shadow: 0rem 0rem 3rem rgba(29, 172, 255, 0.918);
      // background-image: linear-gradient(
      //     to bottom,
      //     rgba(255, 255, 255, 0),
      //     rgba(12, 12, 12, 0.959)
      //   ),
      //   url(https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80);
    }
    &:hover > .card-details .card-text {
      display: block;
    }
    .card-details {
      padding: 1rem;
      position: absolute;
      bottom: 1rem;
      width: 90%;
      .card-title {
        text-shadow: 2px 2px 8px #333333b4;
        font-size: 3rem;
        font-weight: bold;
        text-transform: capitalize;
      }
      .card-text {
        margin: 0.5rem 0;
        display: none;
      }
    }
  }
}
</style>
