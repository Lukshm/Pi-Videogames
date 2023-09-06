import axios from 'axios'


export const getAllGames = async () => {
        
        let response = await axios.get('http://localhost:3001/videogames')
        return (response.data)
    
}
export const getGamesById = async (id) => {
  
        let response = await axios.get(`http://localhost:3001/videogames/${id}`)
        return (response.data)
    
}

export const getAllGenres = async () => {
        
        let response = await axios.get('http://localhost:3001/genres')
        return (response.data)
    
}

export const getGamesByName = async (name) => {
  
        let response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        return (response.data)
    
}