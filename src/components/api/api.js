import axios from 'axios'

const ACCESS_KEY = '9vTVczpHa82sYs67s9nlWNaYe-jMkpz-htKxG239qfA'
const BASE_URL = 'https://api.unsplash.com/'

const searchImage = async () => {
    const responce = await axios.get (''), {
        Authorization: `Client-ID : ${ACCESS_KEY}`
    }
}

export default searchImage()