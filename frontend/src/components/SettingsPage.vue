<template>
    <v-expansion-panels variant="popout" class="my-6" ss>
      <v-expansion-panel>
        <v-expansion-panel-title preappend-icon="mdi-menu" class="text-h6 font-weight-black" style="color: #24225C;"><v-icon>mdi-translate</v-icon><span class="ml-4">Languange</span></v-expansion-panel-title>
        <v-expansion-panel-text class="text-subtitle-1 font-weight-medium">
            <v-radio-group v-model="languange">
                <v-radio label="English" :value="1"></v-radio>
                <v-radio label="Tagalog" :value="2"></v-radio>
            </v-radio-group>
        </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SettingsPage',
    data() {
        return {
            languange: 1
        }
    },
})
</script>

<style scoped>

</style>