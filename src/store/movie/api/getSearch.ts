
export default {
  query: (keyword: string) => ({
    url: `/search/movie?query=${keyword}&api_key=${process.env.API_KEY}`,
  }),
}