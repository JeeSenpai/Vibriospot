<template>
    <v-container fluid>
        <div class="d-flex flex-wrap ga-3">
            <v-btn class="custom-btn justify-start" elevation="6">
                <div class="btn-icon">
                    <v-icon color="background" size="70" class="mx-4"><v-img src="../assets/fish.png"></v-img></v-icon>
                </div>
                <div class="btn-text">Fishes</div>
            </v-btn>
            <v-btn class="custom-btn justify-start" elevation="6">
                <div class="btn-icon">
                    <v-icon color="background" size="70" class="mx-4"><v-img src="../assets/shrimp.png"></v-img></v-icon>
                </div>
                <div class="btn-text">Shrimps</div>
            </v-btn>
            <v-btn class="custom-btn justify-start" elevation="6">
                <div class="btn-icon">
                    <v-icon color="background" size="70" class="mx-4"><v-img src="../assets/human.png"></v-img></v-icon>
                </div>
                <div class="btn-text">Humans</div>
            </v-btn>
        </div>
    </v-container>
     
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MenuPage',
})
</script>

<style scoped>
.custom-btn {
  width: 100%;
  height: auto;
  padding: 14px;
}
.btn-icon {
   margin-right: 4px;
}

.btn-text {
  font-size: 18px;
  margin-left: 5px;
  margin-bottom: 4px;
  color: #24225C;
}
</style>