<template>
  <el-row align="middle">
    <el-col :span="4">
      <el-text>User name :</el-text>
    </el-col>
    <el-col :span="10">
      <el-input :prefix-icon="Search" clearable v-model="search" placeholder="Type to search"/>
    </el-col>
  </el-row>
  <el-row justify="end">
    <el-button @click="userDialog('')" :icon="CirclePlusFilled" type="primary">ADD User</el-button>
  </el-row>
  <el-table :data="filterTableData" highlight-current-row stripe style="width: 100%">
    <el-table-column align="center" type="index" label="index" width="120"/>
    <el-table-column align="center" prop="name" label="User name" width="450"/>
    <el-table-column align="center" label="Operation">
      <template #default="scope">
        <el-button link type="primary" @click="handleSetPwd(scope.$index, scope.row)">set password
        </el-button>
        <el-button type="danger" size="small" :icon="Delete" @click="handleDelete(scope.$index, scope.row)">Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style>

</style>

<script setup>
import {computed, ref, inject} from 'vue'
import {Delete, Search, CirclePlusFilled} from '@element-plus/icons-vue'

let userDialog = inject('userDialog');

const users = [
  {
    name: "aaaaa"
  },
  {
    name: "aaaaa"
  },
  {
    name: "aaaaa"
  },
  {
    name: "aaaaa",
    id: "aaaaa",
  },
  {
    name: "aaaaa",
    id: "aaaaa",
  },
  {
    name: "aaaaa",
    id: "aaaaa",
  }


]

const search = ref('')

const filterTableData = computed(() =>
    users.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)

const handleSetPwd = (index, row) => {
  userDialog(row.name)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}

</script>