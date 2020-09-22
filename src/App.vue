<template>
  <div id="app">
    <div class="container">
      <div class="title">
        <h1>TODO-APP</h1>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  margin-right: 20px;
}
.container {
  align-items: center;
}
h1 {
  padding-bottom: 10px;
}
</style>
