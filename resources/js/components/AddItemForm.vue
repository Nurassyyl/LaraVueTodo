<template>
      <!-- Новая задача -->
      <v-sheet class="mx-auto" width="300">
            <v-form @submit.prevent="addItem()">
                  <v-text-field v-model="desc" :rules="rules" label="Новая задача"></v-text-field>
                  <v-btn variant="tonal" class="mt-2" type="submit" block>Submit</v-btn>
            </v-form>
      </v-sheet>
</template>
<script>
export default {
      data: () => ({
            desc: '',
            rules: [
                  value => {
                        if (value) return true

                        return 'You must enter a first name.'
                  },
            ],
      }),
      methods: {
            addItem() {
                  if (this.name == "") {
                        return;
                  }
                  axios
                        .post("/api/tasks", {
                              desc: this.desc
                        })
                        .then(res => {
                              if (res.status == 201) {
                                    this.desc = "";
                                    this.$emit("reloadlist");
                              }
                        })
                        .catch(error => {
                              console.log(error);
                        });
            }
      }
};
</script>

<style scoped>
.active {
      color: white;
      background-color: blue;
}

.inactive {
      color: gray;
}
</style>