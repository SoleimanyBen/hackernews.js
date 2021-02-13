import got, { Got } from 'got'

import IItem from '../interfaces/iitem'
import IUser from '../interfaces/iuser'

export default class HttpClient
{
    private static _instance: HttpClient
    private _gotClient: Got

    constructor()
    {
        this._gotClient = got
    }

    public static get Instance(): HttpClient
    {
        return this._instance || (this._instance = new this())
    }

    public async getItem(id: string): Promise<IItem>
    {
        const rawResponse = await await this._gotClient(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        const parsedResponse: IItem = JSON.parse(rawResponse.body)

        return parsedResponse
    }

    public async getUser(name: string): Promise<IUser>
    {
        const rawResponse = await this._gotClient(`https://hacker-news.firebaseio.com/v0/user/${name}.json`)
        const parsedResponse: IUser = JSON.parse(rawResponse.body)

        return parsedResponse
    }
}