## 使用介绍

#### 自定义 loading， 单独引用

```html
<template>
    <el-button @click="handleShowLoading">Show Loading</el-button>
</template>

<script lang="ts" setup>
    import EasyLoading from '@/components/EasyLoading'
    const handleShowLoading = () => {
        // 支持自定义提示信息
        EasyLoading.showLoading('玩命加载中，请稍后...')
        setTimeout(() => {
            EasyLoading.hideLoading()
        }, 5000)
    }
</script>
```

#### 自定义 loading， 全局方法

```html
<template>
    <el-button @click="handleShowLoading">Show Loading</el-button>
</template>

<script lang="ts" setup>
    import type { ComponentInternalInstance } from 'vue'
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    // Easy Admin 为 app.config.globalProperties 添加了全局方法 $easyLoading。 因此在 vue 实例中你可以使用当前页面中的调用方式调用loading
    const handleShowLoading = () => {
        proxy?.$easyLoading.showLoading()
        setTimeout(() => {
            proxy?.$easyLoading.hideLoading()
        }, 5000)
    }
</script>
```
