<template>
  <el-descriptions
      title="ZeroTier Info"
      border
      direction="vertical"
      :column="1"
      :size="'large'"
  >
    <el-descriptions-item label="address">{{ztInfo.address}}</el-descriptions-item>
    <el-descriptions-item label="version">{{ztInfo.version}}</el-descriptions-item>
  </el-descriptions>
</template>

<style scoped>


</style>

<script setup>
const ztInfo = {
  address : "af4607fea0",
  version: "1.14.2",
}



</script>