import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventView from "../views/EventView.vue";
import TeamView from "../views/TeamView.vue";
import GalleryView from "../views/GalleryView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import EventDetail from "../components/events/EventDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/events",
    name: "events",
    component: EventView,
  },
  {
    path: "/events/:eventIndex",
    name: "eventDetail",
    component: EventDetail,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/schedule",
    name: "schedule",
    component: ScheduleView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

export default router;
