<template>
    <v-container fluid class="justify-center align-center">
        <v-row class="d-flex justify-center align-center fill-height">
            <v-col cols="auto" md="auto">
            <v-card class="rounded-image">
                <v-img
                width="80"
                aspect-ratio="1"
                src="../assets/vs-logo-removebg.png"
                ></v-img>
            </v-card>
            </v-col>
            <v-col cols="auto" sm="auto">
            <p class="font-weight-medium text-center text-h6">
                VibrioSPOT!
            </p>
            </v-col>
        </v-row>
        <v-card :elevation="8"
        class="mt-5"
        align="center"
        rounded="lg"
        >
        <v-card-title class="text-h5 font-weight-bold mt-4">TERMS & CONDITION</v-card-title>
        <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur officia officiis praesentium nostrum dolores fugit maxime dolorem nisi ut obcaecati minima excepturi temporibus et, dignissimos ratione eos illo vero?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non veniam sapiente magnam. Recusandae ipsa reiciendis cum expedita dignissimos facere inventore aperiam. Quasi at repellendus aliquam laboriosam rem deserunt quaerat laudantium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus laboriosam repudiandae inventore mollitia obcaecati saepe, in iure nemo culpa. Quisquam possimus aliquid ullam debitis in eum, nostrum quam similique!
            <v-checkbox
            v-model="agree"
            label="I agree & do not show this again"
            color="#1D2896"
            class="ma-0 pa-0"
            hide-details
            ></v-checkbox>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn
            @click="startApp()"
            :disabled="agree == false"
            class="ma-2 text-h6"
            rounded="lg"
            background-color="white"
            color="#1D2896">
            Let's get started!
            <v-icon
            end
            icon="mdi-checkbox-marked-circle"
            ></v-icon>
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    data() {
        return {    
            agree: false
        }
    },
    methods: {
        startApp(){
            localStorage.setItem('term', 'true');
            this.$router.push('/');
        }
    }
})
</script>

<style scoped>
.rounded-image {
  border-radius: 50%;
}
</style>