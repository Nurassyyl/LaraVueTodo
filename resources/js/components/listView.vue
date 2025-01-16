<template>
      <div class="mt-4">
            <h4>list view</h4>
            <div class="d-flex align-items-start">
                  <select @click="done()" class="form-select w-25 m-auto mt-3 d-block" v-model="value">
                        <option selected value="">Все задачи</option>
                        <option value="1">Выполненные</option>
                        <option value="0">Не выполненные</option>
                  </select>
                  <v-btn to="/tasks/add" class="w-25 m-auto" variant="outlined" v-on:reloadlist="getItems()">+ Создать
                        задачу</v-btn>
            </div>
            <hr class="w-100 m-auto mb-3 mt-6" />
      </div>

      <v-table>
            <thead>
                  <tr>
                        <th class="text-center">
                              Статус
                        </th>
                        <th class="text-center">
                              Задача
                        </th>
                        <th class="text-center">
                              Дата создание
                        </th>
                        <th class="text-center">
                              Действия
                        </th>
                  </tr>
            </thead>
            <tbody>
                  <task-list v-if="value == ''" :task="task" v-on:itemchanged="$emit('reloadlist')"
                        v-for="task in tasks" :key="task.id" />
                  <task-list v-else-if="value == '1'" :task="task" v-on:itemchanged="$emit('reloadlist')"
                        v-for="task in items" :key="task.id" />
                  <task-list v-else-if="value == '0'" :task="task" v-on:itemchanged="$emit('reloadlist')"
                        v-for="task in items" :key="task.id" />
            </tbody>
      </v-table>
</template>

<script>
import TaskList from "./TaskList";

export default {
      data() {
            return {
                  value: '',
                  items: this.tasks,
            }
      },
      components: {
            TaskList
      },
      methods: {
            // Сортировка задачи
            done() {
                  if (this.value == '') {
                        this.items = this.tasks
                  } else {
                        this.items = this.tasks.filter((task) => task.completed == this.value);
                  }
            }
      },
      props: ["tasks"]

};
</script>