## 使用介绍

#### EasyIcon 基本使用和参数

```html
<template>
    <!-- 1. 本地使用svg使用 (加载本地svg，一定要加 svg: 前缀表示是本地图标) -->
    <easy-icon icon="svg:本地svg的文件名"></easy-icon>
    <!-- 2. 加载iconify图标库 https://icon-sets.iconify.design/ 'ep:add-location'是iconify图标库指定的名字 -->
    <easy-icon icon="ep:add-location" />
</template>
```

## 参数介绍

#### EasyIcon 属性

| 参数  | 说明                                                | 类型            | 是否必填 | 默认值       |
| :---- | :-------------------------------------------------- | :-------------- | -------- | ------------ |
| icon  | 图标名字。 注意如果是本地 svg 图标一定要加前缀 svg: | string          | 是       | —            |
| size  | svg 大小                                            | string / number | 否       | 16           |
| color | svg 颜色                                            | string          | 否       | currentColor |
