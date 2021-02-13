import { EItemType } from '../enums/iitemtype'

export default interface IItem
{
    id: string
    deleted?: boolean
    type: EItemType
    by?: string
    time?: number
    text?: string
    dead?: boolean
    parent?: string
    poll?: any
    kids?: string[]
    url?: string
    score?: number
    title?: string
    parts?: any
    descendents?: number[]
    submitted?: string[]
}