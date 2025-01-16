import { createRouter, createWebHashHistory } from "vue-router";

import App from "./components/App.vue";
import TaskEdit from "./components/TaskEdit.vue";
import AddItemForm from "./components/AddItemForm.vue";

export default createRouter({
      history: createWebHashHistory(),
      routes: [
            { path: '/tasks', component: App },
            { path: '/tasks/add', component: AddItemForm },
            { path: '/tasks/edit/:id', name: 'edit', component: TaskEdit, props: true },
      ]
})