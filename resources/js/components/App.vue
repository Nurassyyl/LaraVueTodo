<template>
      <v-container>
            <div class="w-100 m-auto text-center mt-3">
                  <h1 class="text-danger">Laravel vue todo list</h1>
                  <!-- <add-item-form v-on:reloadlist="getItems()" /> -->
                  <list-view :tasks="tasks" v-on:reloadlist="getItems()" class="text-center" />
            </div>
      </v-container>
      <router-view></router-view>
</template>

<script>
import listView from "./listView";
// import addItemForm from "./addItemForm";

export default {
      components: {
            // addItemForm,
            listView
      },

      data: function () {
            return {
                  tasks: []
            };
      },
      methods: {
            getItems() {
                  axios
                        .get("api/tasks")
                        .then(res => {
                              this.tasks = res.data;
                        })
                        .catch(error => {
                              console.log(error);
                        });
            }
      },
      created() {
            this.getItems();
      }
};
</script>