<template>
  <el-dialog v-model="dialogVisible" :modal="false" title="Set password" width="500">
    <el-form :model="user" label-width="150px">
      <el-form-item label="Username">
        <el-input v-model="user.name" maxlength="30" clearable :disabled="userNameDisabled" placeholder="Enter username"/>
      </el-form-item>
      <el-form-item label="Enter new password">
        <el-input v-model="user.password" type="password" minlength="10" clearable placeholder="Enter new password"/>
      </el-form-item>
      <el-form-item label="Re-enter password">
        <el-input v-model="user.rePassword" type="password" minlength="10" clearable placeholder="Re-enter password"/>
      </el-form-item>
      <el-form-item label="Change password on next login">
        <el-checkbox v-model="check"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          Set password
        </el-button>
        <el-button @click="dialogVisible = false">Cancel</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>

<script setup>
import {ref, reactive} from 'vue'

let dialogVisible = ref(false);
let userNameDisabled = ref(true);

const check = false;
let user = reactive({
  name: 'admin',
  password: '',
  rePassword: '',
})


const show = (userName) => {
  user.name = userName;
  dialogVisible.value = true

  if (userName === '') {
    userNameDisabled.value = false;
  }else {
    userNameDisabled.value = true;
  }
}

defineExpose({
  show
})

</script>