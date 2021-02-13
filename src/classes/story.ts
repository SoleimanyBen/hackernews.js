import { EItemType } from "../enums/iitemtype"
import IItem from "../interfaces/iitem"
import HttpClient from "../utils/http-client"
import Comment from "./comment"


export default class Story
{
    private _id: string
    private _title: string
    private _description: string
    private _kids?: string[]
    private _score: number
    private _time: Date

    private _httpClient: HttpClient = HttpClient.Instance

    constructor(data: IItem)
    {
        this._id = data.id
        this._title = data.title!
        this._description = data.text!
        this._score = data.score!
        this._time = new Date(data.time!)
        this._kids = data.kids
    }

    public async getComments(): Promise<Comment[] | undefined>
    {
        if (this._kids)
        {
            const commentList: Comment[] = []

            for (let kid in this._kids)
            {
                const commentData: IItem = await this._httpClient.getItem(kid)

                commentList.push(new Comment(commentData))
            }

            return commentList
        }
        else
        {
            return
        }
    }

    public get ID(): string
    {
        return this._id
    }

    public get Title(): string
    {
        return this._title
    }

    public get Description(): string
    {
        return this._description
    }

    public get Score(): number
    {
        return this._score
    }

    public get Time(): Date
    {
        return this._time
    }
}