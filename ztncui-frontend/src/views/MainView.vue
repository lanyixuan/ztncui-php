<template>
  <el-container class="layout-container">
    <el-header>
      <div>
        <img
            style="width: 100px"
            src="https://element-plus.org/images/element-plus-logo.svg"
            alt="Element logo"
        />
      </div>
      <el-menu
          :default-active="activeIndex"
          class="menu"
          mode="horizontal"
          :router="true"
      >
        <el-menu-item index="/home">Home</el-menu-item>
        <el-menu-item index="/network">Network</el-menu-item>
        <el-menu-item index="/user">User</el-menu-item>
      </el-menu>
      <div class='avatar'>
        <el-dropdown popper-class="avatar-dropdown" @command="handleCommand">
          <el-avatar>{{ avatar }}</el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="set-password">set password</el-dropdown-item>
              <el-dropdown-item command="logout">logout</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-main>
      <RouterView/>
      <UserDialog ref="userDialog"/>
    </el-main>
  </el-container>
</template>

<style scoped>

.layout-container .el-header {
  display: flex;
  align-items: center;
  padding: 0;
}

.layout-container .el-header .menu {
  flex: 1 auto;
}

.avatar {
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 26px;
  border-bottom: 1px solid var(--el-menu-border-color);
}

.el-main {
  width: 1100px;
  padding: 20px 0;
  margin: 0 auto;
}

</style>

<style>
.el-dropdown__popper.avatar-dropdown {
  min-width: 170px;
}

.el-row {
  margin-bottom: 20px;
  padding: 0 40px;
}
</style>

<script setup>
import {ref, computed, provide} from 'vue'
import {useRoute,useRouter} from 'vue-router';
import UserDialog from "@/components/UserDialog.vue";

const userName = sessionStorage.getItem('userName');
const avatar = userName;

const route = useRoute()
const router = useRouter()
const userDialog = ref(null)

const activeIndex = computed(() => {
  const {meta, path} = route
  if (meta.activeMenu) return meta.activeMenu
  return path
})

const showSetPwdDialog = (userName) => {
  userDialog.value.show(userName);
}

const handleCommand = (command) => {
  if (command === 'set-password') {
    showSetPwdDialog(userName)
  }

  if (command === 'logout') {
    sessionStorage.removeItem('userName');
    router.push('/login')
  }
}

provide('userDialog', showSetPwdDialog)
</script>