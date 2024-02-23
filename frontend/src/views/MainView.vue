<template>
   <!-- This is the main container of the app menu design -->
    <v-container fluid>
      <!-- This section is where image and app title is declared and having a function whenever the user open the menu-->
      <v-row :class="menu == true ? 'mt-0':'mt-16'" class="d-flex justify-center align-center fill-height">
        <v-col v-if="menu" cols="auto" md="auto">
          <v-card class="rounded-image">
            <v-img
              width="80"
              aspect-ratio="1"
              src="../assets/vs-logo-removebg.png"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="auto" sm="auto">
          <v-card-text class="font-weight-medium text-center text-h6">
            VibrioSPOT!
          </v-card-text>
        </v-col>
      </v-row>
      <v-row v-if="menu == false" :class="menu == true ? 'mt-0':'mt-14 mb-5'" class="d-flex justify-center align-center fill-height">
        <v-col cols="auto" md="auto">
          <v-card class="rounded-image">
            <v-img
              width="170"
              aspect-ratio="1"
              src="../assets/vs-logo-removebg.png"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
      <!-- This is the button that when you click or swipe up it will activate the menu -->
      <v-row v-if="menu == false" :class="menu == true ? 'mt-0':'mt-16'" class="d-flex justify-center align-center fill-height">
        <v-col cols="auto" md="auto">
          <v-btn id="menu-activator" @click="toggleMenu" router :to="'/home'" color="#24225C" size="x-large" rounded="xl" append-icon="mdi-arrow-up">
            Swipe Up
          </v-btn>
        </v-col>
      </v-row>
      
      <!-- This is the menu of the app it will change it's display whenever the user select a module or menu items-->
      <v-expand-transition>
      <v-card v-if="menu" class='fixed-bottom overflow-auto'>
          <nav class="top-nav">
            <v-icon color="#24225C" size="40" class="mt-n1 ml-3">{{ $route.meta.icon }}</v-icon>
              <span class="title">{{ $route.meta.title }}</span> 
          </nav>
            <router-view class="toggle animated"/>
      </v-card>
    </v-expand-transition>
    

    <!-- The bottom navigation that holds the menu items of the app -->
    <v-bottom-navigation v-if="menu" color="#24225C " grow>
      <v-btn router :to="'/home'">
        <v-icon>mdi-home-circle</v-icon>
        Home
      </v-btn>
      <v-btn router :to="'/menu'">
        <v-icon>mdi-menu</v-icon>
        Menu
      </v-btn>
      <v-btn router :to="'/about'">
        <v-icon>mdi-help-network</v-icon>
        FAQ
      </v-btn>  
      <v-btn router :to="'/settings'">
        <v-icon>mdi-cog-outline</v-icon>
        Settings
      </v-btn>  
    </v-bottom-navigation>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
    name: 'MainView',
    components: {
      // HelloWorld,
    },
    data () {
        return {
          // drawer: true,
          // rail: false,
          menu: false,
        }
    },
    methods: {
      toggleMenu() {
        this.menu = !this.menu
      },

    },
    
});
</script>
<style scoped>
.rounded-image {
  border-radius: 50%;
}
.fill-height {
  height: 100%;
}
.fixed-bottom {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  width: 100%;
  height: 75%;
  border-radius: 10% 10% 0% 0% ;
  z-index: 50; /* Adjust z-index as needed */
}
.top-nav {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  padding: 20px 20px;
  z-index: 1000;
  height: auto;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.2));
}

.top-nav .title {
  text-align: center;
  font-weight: bold;
  font-size: larger;
  color: #24225C;
  margin-left: 5px;
}

</style>
