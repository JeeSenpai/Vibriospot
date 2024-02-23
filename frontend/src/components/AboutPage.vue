<template>
    <v-expansion-panels variant="popout" class="my-6" ss>
      <v-expansion-panel>
        <v-expansion-panel-title class="text-h6 font-weight-black" style="color: #24225C;"><v-icon>mdi-information</v-icon><span class="ml-4">About the app</span></v-expansion-panel-title>
        <v-expansion-panel-text class="text-subtitle-1 font-weight-medium">VibrioSPOT: Integrating AI-Powered Prediction System for the Identification of Vibrio  Species in Fish and Shrimps</v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title class="text-h6 font-weight-black" style="color: #24225C;"><v-icon>mdi-account-group</v-icon><span class="ml-4">Developers</span></v-expansion-panel-title>
        <v-expansion-panel-text class="text-subtitle-1 font-weight-medium mt-2">
            <span class="text-h6 font-weight-black mt-4">Who are we ?</span>
            <div class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et laborum nulla nobis praesentium tenetur distinctio! Quidem totam libero tempora officia sit molestias, reprehenderit placeat explicabo, enim laborum ratione repellat!</div>
            <v-container fluid>
                <v-row class="d-flex justify-center align-center fill-height">
                    <v-col cols="auto" md="auto">
                        <v-img
                        width="170"
                        aspect-ratio="1"
                        src="../assets/vs-logo-removebg.png"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title class="text-h6 font-weight-black" style="color: #24225C;"><v-icon>mdi-contacts</v-icon><span class="ml-4">Contact Profile</span></v-expansion-panel-title>
        <v-expansion-panel-text class="text-subtitle-1 font-weight-medium mt-2">
            <span class="text-h6 font-weight-black mt-4">Contact Information</span>
            <v-list :items="items"></v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutPage',
    data() {
        return {
            items: [
                {
                    title: 'corresponding developer*',
                    value: 1,
                    props: {
                        prependIcon: 'mdi-gmail',
                        color: 'background',
                    },
                },
                {
                    title: 'corresponding developer*',
                    value: 2,
                    props: {
                        prependIcon: 'mdi-phone',
                        color: 'background',
                    },
                },
                    {
                    title: 'corresponding developer*',
                    value: 3,
                    props: {
                        prependIcon: 'mdi-microsoft-teams',
                        color: 'background',
                    },
                },
            ],
        }
    },
})
</script>

<style scoped>

</style>