
export default {
  query: (id:string) => ({
    url: `/movie/${id}?api_key=${process.env.API_KEY}`,
  }),
}