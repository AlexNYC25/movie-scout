import axios from 'axios';


let getMediaDetails = (id, media_type) => {
    let apiMediaType = media_type === 'movie' ? 'movie' : 'tv';

    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
    
    
}

export async function getAllMediaDetails(arr){
    let promiseArr = [];
    console.log(arr);
    //arr = [{id:1725, media_type:'movie'}, {id:1726, media_type:'movie'}]
    
    for(let i = 0; i < arr.length; i++){
        promiseArr.push(getMediaDetails(arr[i].id, arr[i].media_type));
    }
    let temp = Promise.allSettled(promiseArr);

    const res = await temp;
    return res;
    

}

