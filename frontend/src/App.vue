<template>
  <v-app class="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
       
  }),
  mounted() {
      let term = localStorage.getItem('term');
      if (!term || term === 'false') {
          localStorage.setItem('term', 'false');
          this.$router.push('/terms-and-condition');
      } else {
          this.$router.push('/');
      }
    }
}
</script>
<style>

.app {
  background-image: url('./assets/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  position:fixed;
  left:0;right:0;bottom:0;
}

@media (max-width: 767px) {
  .app {
    background-position: 35% 10%; /* Center horizontally and position 20% from the top vertically */
  }
}

body{
  background: #1D2896;
}

@keyframes viewUp {
    0%{
       opacity: 0;
       transform: translateY(0);
    }
    50%{
       opacity: 0.5;
       transform: translateY(12px)
    }
    100%{
       opacity: 1;
       transform: translateY(0)
    }
}

.toggle{
    -webkit-animation-name: viewUp;
    animation-name: viewUp;
}

.animated{
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
}
</style>