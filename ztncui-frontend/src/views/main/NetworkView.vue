<template>
  <el-row align="middle">
    <el-col :span="4">
      <el-text>Network name :</el-text>
    </el-col>
    <el-col :span="10">
      <el-input :prefix-icon="Search" clearable v-model="search" placeholder="Type to search"/>
    </el-col>
  </el-row>
  <el-row justify="end">
    <el-button :icon="CirclePlusFilled" @click="add()" type="primary">ADD Network</el-button>
  </el-row>
  <el-table :data="filterTableData" highlight-current-row stripe style="width: 100%">
    <el-table-column align="center" type="index" label="index" width="90"/>
    <el-table-column align="center" prop="name" label="Network name" width="400">
      <template #default="scope">
        <el-link type="primary" @click="handleNameClick(scope.$index, scope.row)">
          {{ scope.row.name }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="id" label="Network ID" width="190"/>
    <el-table-column align="center" label="Operation">
      <template #default="scope">
        <el-button link type="primary" @click="handleEasy(scope.$index, scope.row)">easy setup</el-button>
        <el-button type="danger" size="small" :icon="Delete" @click="handleDelete(scope.$index, scope.row)">Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <NetworkDialog ref="networkDialog"/>
</template>

<style scoped>

</style>

<script setup>
import {computed, ref} from 'vue'
import {Delete, Search, CirclePlusFilled} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
import NetworkDialog from '@/components/NetworkDialog.vue'

const router = useRouter();
const networkDialog = ref(null)

const networks = [
  {
    name: "我都忘了吃啥测试-啊实打实大",
    id: "af4607fea0asdf",
  },
  {
    name: "bbbbbb",
    id: "bbbbbb",
  },
  {
    name: "cccccc",
    id: "cccccc",
  },
  {
    name: "ddddd",
    id: "ddddd",
  },
]

const search = ref('')

const filterTableData = computed(() =>
    networks.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)

const add = () => {
  networkDialog.value.show();
}

const handleEasy = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}

const handleNameClick = (index, row) => {
  const networkId = row.id;

  router.push({
    name: "NetworkDetail",
    params: {networkId}
  })
}

</script>