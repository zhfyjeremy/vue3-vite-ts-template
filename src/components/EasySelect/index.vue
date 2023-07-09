<template>
    <el-select
        v-model="newValue"
        :placeholder="placeholder"
        :size="size"
        :multiple="multiple"
        :disabled="disabled"
        :clearable="clearable"
        :filterable="filterable"
        @change="handleChange">
        <el-option v-for="item in data" :key="item.value" :label="item[labelKey]" :value="item[valueKey]">
            <slot :label="item[labelKey]" :value="item[valueKey]" />
        </el-option>
    </el-select>
</template>

<script lang="ts" setup>
interface Props {
    data: Select.selectItem[]
    modelValue: Select.value
    labelKey?: string
    valueKey?: string
    placeholder?: string
    disabled?: boolean
    clearable?: boolean
    filterable?: boolean
    multiple?: boolean
    size?: '' | 'default' | 'small' | 'large' | undefined
    remote?: boolean
    remoteMethod?: (query: string) => void
}
const props = withDefaults(defineProps<Props>(), {
    labelKey: 'label',
    valueKey: 'value',
    placeholder: '请选择'
})
interface EmitEvent {
    (e: 'update:modelValue', vlaue: Select.value): void
    (e: 'change', vlaue: Select.value): void
}
const emit = defineEmits<EmitEvent>()
const newValue = computed({
    get() {
        return props.modelValue
    },
    set(value: Select.value) {
        emit('update:modelValue', value)
    }
})
const handleChange = (value: Select.value) => {
    emit('change', value)
}
</script>
