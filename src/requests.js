const APIKey = "6843cf75f0b6013e51cefb513fa7bd12";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${APIKey}&language=en-US`,
    fetchAction: `/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=28&include_video=true`,
    fetchAdventure: `/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=12&include_video=true`,
    fetchComedy: `/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=35&include_video=true`,
    fetchHorror: `/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=27&include_video=true`,
    fetchRomance: `/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=10749&include_video=true`,
}

export default requests;