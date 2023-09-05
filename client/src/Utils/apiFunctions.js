import axios from 'axios'


export const getAllGames = async () => {
  
        let response = await axios.get('http://localhost:3001/videogames')
        return (response.data)
    
}
