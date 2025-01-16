<template>
      <v-container width="800">
            <!-- <input type="text" @blur="saveDesc" v-model="desc"> -->
            <v-text-field :rules="rules" hide-details="auto" label="Редактировать" v-model="desc"></v-text-field>
            <v-btn variant="tonal" class="mt-2" type="button" @click="saveDesc" block>Редактировать</v-btn>
      </v-container>
</template>

<script>
export default {
      props: [
            'id'
      ],
      data() {
            return {
                  desc: null,
                  rules: [
                        value => !!value || 'Required.',
                        value => (value && value.length >= 3) || 'Min 3 characters',
                  ],
            }
      },
      mounted() {
            axios.get("api/tasks/" + this.id)
                  .then(res => {
                        this.desc = res.data.desc;
                  })
                  .catch(error => {
                        console.log("error from axios put", errors);
                  });
      },
      methods: {
            saveDesc() {
                  console.log(this.name);
                  axios
                        .post(`api/tasks/${this.id}`, {
                              _method: 'PUT',
                              desc: this.desc
                        })
                        .then(res => {
                              if (res.status == 200) {
                                    this.$emit("itemchanged");
                              }
                        })
                        .catch(error => {
                              console.log("error from axios put", errors);
                        });
            }
      },
}
</script>