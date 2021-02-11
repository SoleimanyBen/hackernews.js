import got, { Got } from 'got'

import IItem from '../interfaces/iitem'

export default class HttpClient
{
    private static _instance: HttpClient
    private _gotClient: Got

    constructor()
    {
        this._gotClient = got.extend({
            prefixUrl: 'https://hacker-news.firebaseio.com/v0/item/'
        })
    }

    public static get Instance(): HttpClient
    {
        return this._instance || (this._instance = new this())
    }

    public async getItem(id: string): Promise<IItem>
    {
        const rawResponse = await this._gotClient(id.concat('.json'))
        const parsedResponse: IItem = JSON.parse(rawResponse.body)

        return parsedResponse
    }
}