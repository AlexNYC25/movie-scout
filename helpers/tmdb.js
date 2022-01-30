import axios from 'axios';


let getMediaDetails = async (id, media_type) => {
    let apiMediaType = media_type == 'movie' ? 'movie' : 'tv';

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/${apiMediaType}/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
    
    
}

export async function getAllMediaDetails(arr){
    let promiseArr = [];
    
    for(let i = 0; i < arr.length; i++){
        promiseArr.push(getMediaDetails(arr[i].id, arr[i].media_type));
    }
    let temp = Promise.allSettled(promiseArr);

    const res = await temp;
    return res;
    

}

