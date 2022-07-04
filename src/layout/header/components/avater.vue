<template>
<el-dropdown>
    <span class="el-dropdown-link">
        <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="exit">退出</el-dropdown-item>

      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const squareUrl = ref(
  'https://tse3-mm.cn.bing.net/th/id/OIP-C.OV6k7M8MYtUb4tjeO3ppcwAAAA?w=214&h=214&c=7&r=0&o=5&dpr=1.05&pid=1.7'
)
const exit = () => {
  store.dispatch('app/logout')
}
</script>
<style lang="scss" scoped>
::v-deep .el-dropdown-menu__item {
  white-space: nowrap;
}
</style>
