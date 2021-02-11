import IItem from '../interfaces/iitem'
import HttpClient from '../utils/http-client'
import Story from './story'

export default class User
{
    private _id: string
    private _stories: Story[] = []
    private _submitted?: string[]

    private _httpClient: HttpClient = HttpClient.Instance

    constructor(data: IItem)
    {
        this._id = data.id
        this._submitted = data.submitted
    }

    public async loadStories(): Promise<void>
    {
        if (this._submitted)
        {
            for (let storyId in this._submitted)
            {
                const storyData: IItem = await this._httpClient.getItem(storyId)

                if (this._stories)
            }
        }
    }
}