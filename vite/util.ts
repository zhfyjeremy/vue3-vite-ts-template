import _ from 'lodash'
import { ImportMetaEnv } from '../types/viteEnv'
export function parseEnv(env: Record<string, any>): ImportMetaEnv {
    const envs: any = _.cloneDeep(env)

    Object.entries(env).forEach(([key, value]) => {
        if (value === 'true' || value === 'false') envs[key] = value === 'true'
        else if (/^\d+$/.test(value)) envs[key] = Number(value)
        else if (value === 'null' || value === '') envs[key] = null
        else if (value === 'undefined') envs[key] = undefined
    })
    return envs
}
