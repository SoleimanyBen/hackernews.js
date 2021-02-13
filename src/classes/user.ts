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
                if (!this._stories.find((story: Story) => story.ID == storyId)) // Make sure story has not already been loaded
                {
                    const storyData: IItem = await this._httpClient.getItem(storyId)

                    this._stories.push(new Story(storyData))
                }
            }
        }
    }

    public get ID(): string
    {
        return this._id
    }

    public get Stories(): Story[]
    {
        return this._stories
    }
}