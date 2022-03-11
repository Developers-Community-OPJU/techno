<template>
  <div class="about">
    <back />
    <div class="logo">
      <img class="techno-logo" src="../assets/about_logo.png" />
      <img class="opju-logo" src="../assets/opju_logo.png" />
    </div>
    <h1 class="section-title" data-aos="fade-right">
      About O.P Jindal University
    </h1>
    <p>
      Founded by the Jindal Educaticdon and Welfare Society, OP Jindal
      University (OPJU) was set up to bring high quality education to its
      students based on a world class curriculum, the latest teaching
      methodology and committed faculty members. The multidisciplinary
      university aims to develop young professionals and future leaders who will
      not only power growth and development in the state, but also make a mark
      globally. At the core of the university's philosophy and approach lies the
      belief that students learn best when exposed to real world situations and
      when nurtured through enriching interactions with practitioners and
      professors. We at OPJU believe that every student has innate potential
      that can be unlocked through quality teaching and mentorship.
    </p>
    <h2 class="section-sub-title">Patron's Message</h2>
    <p>
      <span>SHRI NAVEEN JINDAL Chairman, Jindal Steel and Power Ltd</span
      ><br /><br />
      When OPJU was established 8 years ago in Punjipathra, Raigarh District it
      was the culmination of the dream of my father and the founding Chairman of
      OP Jindal Group, Shri O. P. Jindal. JSPL’s humble beginnings are rooted in
      the District of Raigarh, where it began as a small steel making operation
      in the early 1990’s and through the hard work and dedication of the
      founders and employees today boasts of a 3.6 MTPA steel plant, a 3400 MW
      Power plant in Tamnar – the first independent power producer, Nalwa Steel
      Works, Structural Steel Division, and OP Jindal Industrial Park,
      Punjipathra. For a community that means so much to the success of JSPL, it
      was our dream to start a University in the area as both a way to give back
      to the region, but more so, a deeply rooted commitment to educate the
      youth of the area, as only an educated youth can help the nation develop
      to its full potential.
      <br />
      <br />
      Started in 2008 as an engineering college, today I can proudly say that in
      a short span of only four years, OPJU has become a role model for
      institutions of higher education not only in Chhattisgarh, but in the
      entire nation of what can be achieved with the right motivations, vision,
      and programs focused on student outcomes, creating vast employment
      opportunities for the youth of our nation and guiding them along a path to
      becoming successful contributors to society. With OP Jindal Group’s deep
      commitment to nation building and focus on core industries of Steel,
      Mining, Power, and Construction, it is only befitting that OPJU’s vision
      of becoming the nation’s first private and only university to enhance the
      core sector capabilities is our commitment to the growth of the nation and
      realizing our collective dream of building the nation we can all be proud
      of. As the Patron of an institution of higher learning, I am humbled by
      the enormous faith the community has bestowed upon me and accept the
      challenge and the responsibility to build a socially responsible,
      equitable, and accessible institute we can all take pride in.
    </p>
    <h2 class="section-sub-title">About Technorollix</h2>
    <p>
      Welcome to Central India's Biggest Technial And Cultural Fest
      <span>#Technorollix</span>. <br />
      This event is organized yearly by our students and faculty staff. This
      event is called the Biggest Technical and Cultural because of its variety
      in every possible way possible. This fest includes each and every
      competition and event you can think off from art to gaming, from talks to
      exhibitions, each and every event has its own charm. Technorollix, the
      annual techno-Management festival of OP Jindal University, hosts a galaxy
      of events aimed at boosting the technological and cultural skills inherent
      in today’s youth, giving them an unrivalled opportunity to showcase their
      thoughts and ideas. Over the last four years, it has been a platform that
      has successfully brought students, academicians, and industrial giants
      under one roof. Technorollix’20, Spanning from 18th to 21st February 2022,
      aims at giving a spine-tingling ride to inspiring minds and bringing
      together dynamic, innovative and enterprising students of various colleges
      (students of B Tech., B.Com, B.Sc., BBA) from all over India on a common
      platform to participate in different competitive events along with OPJU
      students, dedicated to experiencing the fun in technology, Management and
      science.
    </p>
  </div>
</template>

<script>
import back from "@/components/backButton.vue";

export default {
  components: {
    back,
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 60%;
  margin: 0 auto;
  padding: 5rem 0;
}
.opju-logo {
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 0;
  margin-left: auto;
}
.logo {
  display: flex;
  width: 100%;
  pointer-events: none;
  img {
    height: 100px;
    width: auto;
  }
}
.section-title {
  background: #fc466b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #3f5efb,
    #fc466b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #3f5efb,
    #fc466b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 900;
  text-align: left;
  padding: 20px;
  padding-top: 5rem;
  padding-bottom: 1rem;
}
.section-sub-title {
  color: #fff;
  padding: 20px;
}
p {
  color: rgb(228, 206, 206);
  padding: 20px;
  font-weight: 200;
}
span {
  color: #fc466b;
}
@media (max-width: 625px) {
  .about {
    width: auto;
  }
}
</style>
