<template>
  <div class="container-fruid">
    <div class="input-group flex-nowrap">
      <input
        v-model="newData"
        type="text"
        class="form-control"
        placeholder="Add New Todo"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
      <div class="input-group-prepend">
        <span class="input-group-text btn" @click="Add" id="addon-wrapping">Add</span>
      </div>
    </div>

    <div class="card col-12 mt-4">
      <div class="card-header">
        <h4>
          Todo List
          <span class="badge badge-info ml-4">Active: {{ activeList.length }}</span>
        </h4>
        <div class="col-5 float-right"></div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="item in activeList" :key="item.id">
          <div class="input-group-prepend col-1">
            <div class="input-group-text mr-4">
              <input
                type="checkbox"
                @click="checked(item.id)"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <p class="col-2 mt-4">{{ item.date }}</p>
          <p class="mt-3 ml-3 col-7">{{ item.title }}</p>
          <span class="col-3">
            <span
              class="btn"
              data-toggle="modal"
              data-target="#exampleModal"
              @click="edit(item.id)"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-pencil"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                />
              </svg>
            </span>

            <!-- modal of edit -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Content</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="input-group flex-nowrap">
                      <input
                        v-model="editItem[0].title"
                        type="text"
                        class="form-control"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-info" data-dismiss="modal">Save Change</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- delete btn -->
            <span class="btn" @click="delItem1(item.id)">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-trash"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </span>
          </span>
        </li>
      </ul>
    </div>
    <div class="card col-12 mt-4">
      <div class="card-header">
        <h4>
          Todo List
          <span class="badge badge-success ml-4">Completed: {{ completeList.length }}</span>
        </h4>
        <div class="col-5 float-right"></div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="item in completeList" :key="item.id">
          <div class="input-group-prepend col-1">
            <div class="input-group-text mr-4">
              <input
                type="checkbox"
                @click="unchecked(item.id)"
                aria-label="Checkbox for following text input"
                checked
              />
            </div>
          </div>
          <p class="col-2 mt-4">{{ item.date }}</p>
          <p class="mt-3 ml-3 col-7">{{ item.title }}</p>
          <span class="btn col-2" @click="delItem2(item.id)">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-trash"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Data from "../getData";
var moment = require("moment");
const data = new Data();
export default {
  name: "todo-list",
  data() {
    return {
      todolist: [],
      activeList: [],
      completeList: [],
      editItem: [
        {
          id: 0,
          title: "",
          date: "",
        },
      ],
      newChecked: {},
      newData: "",
    };
  },
  created() {
    data.getData().then((res) => {
      this.todolist = res.data;
      this.activeList = this.todolist.filter((x) => x.completed == false);
      this.completeList = this.todolist.filter((x) => x.completed == true);
    });
  },
  methods: {
    Add: function () {
      const d = moment().format("lll");
      this.activeList.reverse().push({
        userId: "1",
        id: Math.random().toString().substr(2, 5),
        title: this.newData,
        date: d,
        completed: false,
      });
      this.activeList = this.activeList.reverse();
      this.newData = "";
    },
    edit: function (id) {
      this.editItem = this.activeList.filter((x) => x.id == id);
      this.editItem[0].date = moment().format("lll");
    },
    delItem1: function (id) {
      this.activeList = this.activeList.filter((x) => x.id !== id);
    },
    delItem2: function (id) {
      this.completeList = this.completeList.filter((x) => x.id !== id);
    },
    checked: function (id) {
      this.newChecked = this.activeList.filter((x) => x.id == id);
      this.activeList = this.activeList.filter((x) => x.id !== id);
      this.newChecked[0].date = moment().format("lll");
      this.completeList.reverse().push(this.newChecked[0]);
      this.completeList = this.completeList.reverse();
    },
    unchecked: function (id) {
      this.newChecked = this.completeList.filter((x) => x.id == id);
      this.completeList = this.completeList.filter((x) => x.id !== id);
      this.newChecked[0].date = moment().format("lll");
      this.activeList.reverse().push(this.newChecked[0]);
      this.activeList = this.activeList.reverse();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.list-group-item {
  display: flex;
  align-items: center;
}

svg {
  width: 20px;
  height: 20px;
  margin: 5px 15px;
}
.card-header {
  display: flex;
  justify-content: space-between;
}
.col-5 {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
}
.subCon {
  height: 500px;

  flex-wrap: wrap;
}
ul {
  height: 400px;
  display: inline-block;
  flex-wrap: wrap;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
</style>
