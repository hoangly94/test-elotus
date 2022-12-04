
export default {
  query: () => ({
    url: `/discover/movie?api_key=${process.env.API_KEY}`,
  }),
}