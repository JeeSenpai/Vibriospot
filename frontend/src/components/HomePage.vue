<template>
    <v-expansion-panels variant="popout" class="my-6">
      <v-expansion-panel v-for="p in panelData" :key="p">
        <v-expansion-panel-title class="text-h6 font-weight-bold " style="color: #24225C;">{{ p.title }}</v-expansion-panel-title>
        <v-expansion-panel-text class="text-subtitle-1 font-weight-medium mt-2">{{ p.text }}</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomePage',
    data() {
        return {
            panelData: [
                { title: 'What is Vibrios?', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi itaque voluptate quod sunt ex deserunt neque dolor explicabo expedita! Dignissimos explicabo saepe voluptate deleniti rem possimus, architecto corrupti consequuntur!' },
                { title: 'Disclaimer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi itaque voluptate quod sunt ex deserunt neque dolor explicabo expedita! Dignissimos explicabo saepe voluptate deleniti rem possimus, architecto corrupti consequuntur!' }
            ]
        }
    },
})
</script>

<style scoped>

</style>