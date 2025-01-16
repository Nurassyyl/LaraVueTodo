<template>
      <tr>
            <td>
                  <v-checkbox v-if="task.completed" :label="[task.completed ? completed : not_completed]"
                        @change="updateCheck()" v-model="checkbox"></v-checkbox>
                  <v-checkbox v-if="!task.completed" :label="[task.completed ? completed : not_completed]"
                        @change="updateCheck()" v-model="not_checkbox"></v-checkbox>
            </td>
            <td :class="[task.completed ? 'completed' : '', 'task']">
                  <router-link :to="{ name: 'edit', params: { id: task.id } }">
                        {{ task.desc }}
                  </router-link>
            </td>
            <td>{{ task.created_at }} {{ value }}</td>
            <td><v-btn icon="mdi-delete-outline" size="small" variant="outlined" @click="removeItem()"></v-btn></td>
      </tr>
</template>

<script>
export default {
      props: ["task", "value"],
      data() {
            return {
                  completed: "Выполнен",
                  not_completed: "Не выполнен",
                  checkbox: true,
                  not_checkbox: false,
            }
      },
      methods: {
            updateCheck() {
                  axios
                        .post(`api/tasks/${this.task.id}`, {
                              _method: 'PUT',
                              desc: this.task.desc,
                              completed: true
                        })
                        .then(res => {
                              if (res.status == 200) {
                                    this.$emit("taskchanged");
                              }
                        })
                        .catch(error => {
                              console.log("error from axios put", errors);
                        });
            },
            removeItem() {
                  axios
                        .delete(`api/tasks/${this.task.id}`)
                        .then(res => {
                              if (res.status == 200) {
                                    this.$emit("itemchanged");
                              }
                        })
                        .catch(error => {
                              console.log("error from axios delte ", error);
                        });
            }
      }
};
</script>

<style>
.completed {
      text-decoration: line-through;
      color: gray;
}

.item {
      word-break: break-all;
}
</style>