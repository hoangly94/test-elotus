
export default {
  query: () => ({
    url: `/3/discover/movie?api_key=${process.env.API_KEY}`,
  }),
}