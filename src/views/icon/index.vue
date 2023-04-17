<script lang="ts" setup></script>
<template>
    <div class="p-5">
        <el-card class="mb-5">
            <template #header>
                <span
                    >svg本地使用： 将下载好的 .svg 文件放入 src/icons 文件夹下之后就会自动导入，无需手动操作，
                    可以在项目中任意地方使用。使用方式可参考下方说明。</span
                >
            </template>
            <div>
                <easy-icon size="80" color="#1890ff" icon="svg:loading" />
                <easy-icon class="ml-10" size="100" icon="svg:401" />
                <easy-icon class="ml-10" size="100" icon="svg:404" />
                <easy-icon class="ml-10" size="100" icon="svg:500" />
            </div>
        </el-card>

        <el-card class="mb-5">
            <template #header>
                <h3>Iconify</h3>
                <p class="text-gray-400 text-sm">
                    推荐使用
                    <el-link type="primary" href="https://icon-sets.iconify.design/">Iconify图标库</el-link
                    >。本项目已经做了自动按需加载图标，所以build只会打包所用到的图标。 <br />它是一个统一的图标框架:
                    超过100个图标集 Browse icons 都集中到这一个库，超过100,000+个开源矢量图标。
                    <br />
                    下面简单列举几种图标的使用方式
                </p>
            </template>
            <div>
                <easy-icon icon="ep:add-location" size="60" />
                <easy-icon icon="ant-design:account-book-outlined" size="60" />
                <easy-icon icon="fa:address-book" size="60" />
                <easy-icon icon="la:accusoft" size="60" />
                <easy-icon icon="material-symbols:10k-outline-sharp" size="60" />
            </div>
        </el-card>
        <el-card class="mb-5">
            <template #header>
                <span>EasyIcon 基本使用和参数</span>
            </template>
            <img class="w-full" src="@/assets/images/localIcon.png" alt="localIcon" />
        </el-card>
    </div>
</template>
<style lang="scss" scoped></style>
