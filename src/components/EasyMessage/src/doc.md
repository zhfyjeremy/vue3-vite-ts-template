## 使用介绍

#### 基本使用

```html
<template>
    <el-button :plain="true" @click="open">Show message</el-button>
</template>

<script lang="ts" setup>
    import { EasyMessage } from '@/components/EasyMessage'
    const open = () => {
        EasyMessage.info('this is a message.')
    }
</script>
```

#### 不同状态

```html
<template>
    <el-button class="mb-2" @click="handleChangeMessgePosition('top')">Top</el-button>
    <el-button class="mb-2" @click="handleChangeMessgePosition('center')">Center</el-button>
    <el-button class="mb-2" @click="handleChangeMessgePosition('bottom')">Bottom</el-button>
</template>

<script lang="ts" setup>
    import { EasyMessage } from '@/components/EasyMessage'
    // 不同状态
    const handleShowDifStatusMessge = (type: EasyMessageType) => {
        EasyMessage[type](`This is a ${type} type message`)
    }
</script>
```

#### 切换位置

```html
<template>
    <el-button class="mb-2" @click="handleShowDifStatusMessge('success')">Success</el-button>
    <el-button class="mb-2" @click="handleShowDifStatusMessge('error')">Error</el-button>
    <el-button class="mb-2" @click="handleShowDifStatusMessge('warning')">Warning</el-button>
    <el-button class="mb-2" @click="handleShowDifStatusMessge('info')">Info</el-button>
    <el-button class="mb-2" @click="handleShowDifStatusMessge('none')">None</el-button>
</template>

<script lang="ts" setup>
    import { EasyMessage } from '@/components/EasyMessage'
    // 切换位置
    const handleChangeMessgePosition = (placement: EasyMessagePlacement) => {
        EasyMessage.success({
            message: 'I am here',
            placement
        })
    }
</script>
```

#### 加载状态

```html
<template>
    <el-button @click="handleShowLoading">Show Loading</el-button>
</template>

<script lang="ts" setup>
    import { EasyMessage } from '@/components/EasyMessage'
    // 加载状态 3秒后自动关闭
    const handleShowLoading = () => {
        const hide = EasyMessage.loading('加载中...')
        setTimeout(() => {
            hide()
        }, 3000)
    }
</script>
```

#### 关闭回调

```html
<template>
    <el-button @click="handleShowCallbackMessge">Show Message</el-button>
</template>

<script lang="ts" setup>
    import { EasyMessage } from '@/components/EasyMessage'
    // 关闭回调
    const handleShowCallbackMessge = () => {
        EasyMessage.info({
            message: 'This is a  message',
            onClose: () => {
                alert('我是关闭后的回调')
            }
        })
    }
</script>
```

#### 手动关闭

```html
<template>
    <el-button @click="handleShowCloseMessge">Show Message</el-button>
</template>

<script lang="ts" setup>
    import { EasyMessage } from '@/components/EasyMessage'
    // 手动关闭
    const handleShowCloseMessge = () => {
        EasyMessage.success({
            message: 'Messages that can be turned off manually',
            duration: 0
        })
    }
</script>
```

#### Toast 风格

```html
<template>
    <el-button @click="handleShowToastMessge">Show Toast Message</el-button>
</template>

<script lang="ts" setup>
    import { EasyMessage } from '@/components/EasyMessage'
    // Toast 风格
    const handleShowToastMessge = () => {
        EasyMessage.info({
            message: 'Toast 风格',
            style: 'toast'
        })
    }
</script>
```

## 参数介绍

#### EasyMessage 属性

| 参数 | 说明 | 类型 | 是否必填 | 默认值 |
| :-- | :-- | :-- | --- | --- |
| message | 消息文字 | string | 是 | — |
| type | 消息类型 | 'success' / 'warning' / 'info' / 'error' / 'loading' / 'none' | 否 | 'info' |
| duration | 自动关闭的延时，单位毫秒。设为 0 时不自动关闭。 | object | 否 | 3000 |
| style | 消息提示窗风格。 'toast'风格且 type 不为'none'提示文字最多显示 8 个 | 'message' / 'toast' | 否 | 'message' |
| placement | 消息提示窗出现的位置 | 'top' / 'center' / 'bottom' | 否 | 'top' |
| onClose | 关闭时的回调函数 | fuction | 否 | — |
