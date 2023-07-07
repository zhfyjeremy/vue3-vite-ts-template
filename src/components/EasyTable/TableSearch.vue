<template>
    <el-form :inline="true" :model="model" ref="searchForm">
        <!-- eslint-disable-next-line vue/no-v-for-template-key -->
        <template v-for="(c, index) in columns" :key="index">
            <el-form-item :label="c.label" v-if="c.search" :prop="(c.prop as string)">
                <el-select
                    v-if="c.searchFiledType === 'Select'"
                    v-model="model[c.prop as string]"
                    :placeholder="c.searchFieldOptions?.placeholder || c.label"
                    clearable>
                    <el-option
                        v-for="s in c.searchFieldOptions?.data"
                        :key="s[c.searchFieldOptions?.valueKey || 'value']"
                        :label="s[c.searchFieldOptions?.labelkey || 'label']"
                        :value="s[c.searchFieldOptions?.valueKey || 'value']" />
                </el-select>
                <el-date-picker
                    v-else-if="c.searchFiledType === 'DatePicker'"
                    v-model="model[c.prop as string]"
                    type="daterange"
                    :value-format="c.searchFieldOptions?.valueFormat"
                    :range-separator="c.searchFieldOptions?.rangeSeparator || 'To'"
                    :start-placeholder="c.searchFieldOptions?.startPlaceholder || 'Start date'"
                    :end-placeholder="c.searchFieldOptions?.endPlaceholder || 'End date'" />
                <el-input v-else v-model="model[c.prop as string]" :placeholder="'请输入' + c.label" clearable />
            </el-form-item>
        </template>
        <el-form-item>
            <el-button type="primary" @click="emit('search', model)" :icon="Search">搜索</el-button>
            <el-button :icon="Refresh" @click="searchForm?.resetFields()">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { Search, Refresh } from '@element-plus/icons-vue'
const searchForm = ref<FormInstance>()
interface IProp {
    columns: Table.Column[] // 每列的配置项
}
const props = defineProps<IProp>()
const emit = defineEmits(['search'])
const model = ref<Record<string, any>>({})

// 如果配置项searchFieldOptions中有设置回显的value,需给model对象设置指定字段的默认值
props.columns.map((item: Table.Column) => {
    if (!item.search) return
    if (item.searchFieldOptions?.value) {
        model.value[item.prop as string] = item.searchFieldOptions?.value
    }
})
</script>
<style lang="scss" scoped></style>
