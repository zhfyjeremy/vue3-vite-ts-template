<template>
    <el-form :inline="true" :model="model" ref="searchForm">
        <!-- eslint-disable-next-line vue/no-v-for-template-key -->
        <template v-for="(c, index) in columns" :key="index">
            <el-form-item :label="c.label" v-if="c.search" :prop="c.prop">
                <EasySelect
                    v-if="c.searchFiledType === 'select'"
                    :placeholder="c.searchFieldOption?.placeholder || c.label"
                    :label-key="c.searchFieldOption?.labelkey"
                    :value-key="c.searchFieldOption?.valueKey"
                    :select-data="c.searchFieldOption?.data!"
                    v-model="model[c.prop!]"
                    clearable />
                <el-input v-else v-model="model[c.prop!]" :placeholder="'请输入' + c.label" clearable />
            </el-form-item>
        </template>
        <el-form-item>
            <el-button type="primary" @click="emit('search', model)" icon="Search">搜索</el-button>
            <el-button icon="Refresh" @click="searchForm?.resetFields()">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
const searchForm = ref<FormInstance>()
interface IProp {
    columns: Table.Column[] // 每列的配置项
}
const props = defineProps<IProp>()
const emit = defineEmits(['search'])
const model = ref<Record<string, any>>({})

// 如果配置项searchFieldOption中有设置回显的value,需给model对象设置指定字段的默认值
props.columns.map((item: Table.Column) => {
    if (!item.search) return
    if (item.searchFieldOption?.value) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        model.value[item.prop!] = item.searchFieldOption?.value
    }
})
</script>
<style lang="scss" scoped></style>
