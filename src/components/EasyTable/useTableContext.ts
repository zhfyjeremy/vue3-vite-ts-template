import type{ EmitsEvent } from './index'
const key = Symbol('easy-table')

type Instance = {
    options: Table.Options
    emit: EmitsEvent;
};

export function createTableContext(instance: Instance) {
    provide(key, instance)
}

export function useTableContext(): Instance {
    return inject(key) as Instance
}
