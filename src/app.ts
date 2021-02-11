import HackerNews from './classes/hacker-news'



function start() {
    const hn = new HackerNews()

    hn.getStory('192327')
}

start()