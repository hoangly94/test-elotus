
export default {
  query: (type: string) => {
    const mapper: any = {
      popular: '/discover/movie',
      nowPlaying: '/movie/now_playing',
      topRated: '/movie/top_rated',
    }
    return {
      url: `${mapper[type]}?api_key=${process.env.API_KEY}`,
    }
  },
}