import got, { CancelableRequest, Got } from 'got'

import Story from './story'
import IItem from '../interfaces/iitem'
import HttpClient from '../utils/http-client'

export default class HackerNews
{
    private _httpClient: HttpClient = HttpClient.Instance

    async getStory(id: string): Promise<void>
    {
        const hnResponse: IItem = await this._httpClient.getItem(id)

        console.log(hnResponse.type)
    }

    async getComment(id: string)
    {

    }

    async getPoll(id: string)
    {

    }

    async getItem(id: string): Promise<void>
    {

    }
}