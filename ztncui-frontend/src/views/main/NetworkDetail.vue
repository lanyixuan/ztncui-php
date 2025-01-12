<template>
  <el-row align="middle">
    <el-col :span="4"><el-text>Member name :</el-text></el-col>
    <el-col :span="10"><el-input :prefix-icon="Search" clearable v-model="search" placeholder="Type to search"/></el-col>
  </el-row>
  <el-table :data="filterTableData" highlight-current-row stripe style="width: 100%">
    <el-table-column align="center" prop="name" label="Member name" width="200"/>
    <el-table-column align="center" prop="id" label="Member ID" width="100">
      <template #default="scope">
        <el-link type="primary" @click="handleNameClick(scope.$index, scope.row)">
          {{ scope.row.id }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="authorized" label="Authorized" width="100">
      <template #default="scope">
        <el-checkbox v-model="scope.row.authorized"/>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="activeBridge" label="Active bridge" width="120">
      <template #default="scope">
        <el-checkbox v-model="scope.row.activeBridge"/>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="id" label="IP assignment" width="120">
      <template #default="scope">
        <el-link type="primary" @click="handleIpClick(scope.$index, scope.row)">
          {{ scope.row.ipAssignments[0] }}
        </el-link>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="status" label="Peer status" width="150">
      <template #default="scope">
        <el-text :type="statusType">{{statusText}}</el-text>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="address" label="Peer address / latency" width="200"/>
    <el-table-column align="center" label="Operation">
      <template #default="scope">
        <el-button type="danger" size="small" :icon="Delete" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>

<script setup>
import {computed, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import { Delete, Search } from '@element-plus/icons-vue'

const route = useRoute();
const router = useRouter();

const networkId = ref(route.params.networkId)

const members = [
  {
    "id": "af4607fea0",
    "authorized": true,
    "activeBridge": true,
    "ipAssignments": [
      "192.168.0.1"
    ],
    "name": "string",
    "noAutoAssignIps": true,
    "ssoExempt": true,
    "address": "string",
    "authenticationExpiryTime": 0,
    "capabilities": [
      0
    ],
    "creationTime": 0,
    "identity": "string",
    "lastAuthorizedCredential": "string",
    "lastAuthorizedCredentialType": "string",
    "lastAuthorizedTime": 0,
    "lastDeauthorizedTime": 0,
    "nwid": "string",
    "objtype": "member",
    "remoteTraceLevel": 0,
    "remoteTraceTarget": "string",
    "revision": 0,
    "tags": null,
    "vMajor": 0,
    "vMinor": 0,
    "vProto": 0,
    "vRev": 0
  }
]

const search = ref('')
const filterTableData = computed(() =>
    members.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)

</script>