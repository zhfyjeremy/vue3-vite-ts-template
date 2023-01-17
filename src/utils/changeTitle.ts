import { pageTitle } from '@/enums/app'
import { useTitle } from '@vueuse/core'
export function changeTitle(title: string | undefined): void {
    useTitle(title ? `${title}-${pageTitle.value}` : pageTitle.value)
}
