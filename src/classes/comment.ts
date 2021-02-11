import IItem from "../interfaces/iitem"
import HttpClient from "../utils/http-client"
import User from "./user"

export default class Comment
{
    private _id: string
    private _user?: User
    private _description: string

    private _httpClient: HttpClient = HttpClient.Instance

    constructor(data: IItem)
    {
        this._id = data.id
        this._description = data.text!
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

    public get User(): User | undefined
    {
        return this._user
    }
    
    public get Description(): string
    {
        return this._description
    }
}