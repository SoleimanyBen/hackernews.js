import IItem from "../interfaces/iitem"
import IUser from "../interfaces/iuser"

import HttpClient from "../utils/http-client"
import User from "./user"
import Story from "./story"
import { EItemType } from "../enums/iitemtype"


export default class Comment
{
    private _id: string
    private _by: string
    private _user: User
    private _parent: string
    private _description: string
    private _time: Date

    private _httpClient: HttpClient = HttpClient.Instance

    constructor(data: IItem)
    {
        this._id = data.id
        this._by = data.by!
        this._description = data.text!
        this._parent = data.parent!
        this._time = new Date(data.time!)
    }

    private async getParent(): Promise<Story | Comment | IItem>
    {
        const itemData: IItem = await this._httpClient.getItem(this._parent)

        switch (itemData.type)
        {
            case EItemType.Story:
                return new Story(itemData)
            case EItemType.Comment:
                return new Comment(itemData)
            default:
                return itemData
        }
    }

    private async getUser(): Promise<User>
    {
        const userData: IUser = await this._httpClient.getUser(this._by)

        
    }

    public async loadUser(): Promise<void>
    {
        if (!this._user)
        {
            const userData: IItem = await this._httpClient.getItem(this._id)

            this._user = new User(userData)
        }
    }

    public get ID(): string
    {
        return this._id
    }

    public get User(): Promise<User | undefined>
    {
        return this._user
    }
    
    public get Description(): string
    {
        return this._description
    }
}