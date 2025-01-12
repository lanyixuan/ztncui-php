<template>
  <el-dialog v-model="dialogVisible" :modal="false" title="Create Network" width="500">
    <el-row align="middle">
      <el-col :span="8">
        <el-text>Network name:</el-text>
      </el-col>
      <el-col :span="16">
        <el-input clearable v-model="networkName" placeholder="Enter new network name"/>
      </el-col>
    </el-row>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          Create Network
        </el-button>
        <el-button @click="dialogVisible = false">Cancel</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>

<script setup>
import {ref} from 'vue'

let dialogVisible = ref(false);

const show = (userName) => {
  dialogVisible.value = true
}

defineExpose({
  show
})

</script>