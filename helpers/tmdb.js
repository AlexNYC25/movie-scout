import axios from 'axios';


let getMediaDetails = async (id, media_type) => {
    let apiMediaType = media_type === 'movie' ? 'movie' : 'tv';


    let promise = axios.get(`https://api.themoviedb.org/3/${apiMediaType}/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })

    return promise;

}

export async function getAllMediaDetails(arr){
    let promiseArr = [];
    console.log(arr.length)
    for(let i = 0; i < arr.length; i++){
        promiseArr.push(getMediaDetails(arr[i].id, arr[i].media_type));
    }

    Promise.all(promiseArr)
        .then(result => {
            return result;
        })
}

