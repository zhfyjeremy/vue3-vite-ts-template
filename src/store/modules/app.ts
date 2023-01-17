import { Names } from '@/store/store-namespace'
export const useAppStore = defineStore(Names.useAppStore, {
    state: (): appState => ({
        lang: 'zh-cn',
    }),
    actions: {},
})
