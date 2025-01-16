<template>
      <v-container>
            <h1>Todo List</h1>
            <p>
                  <router-link to="/tasks">Tasks</router-link>
            </p>
      </v-container>
      <router-view></router-view>
</template>

<script>
export default {

}
</script>