const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const fetcFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}

export const fetchCatImg = ({ threeFisrtWords }) => {
  return fetch(`https://cataas.com/cat/says/${threeFisrtWords}?size=50&color=red&json=true`)
    .then(res => res.json())
    .then(response => {
      const { url } = response
      return url
    })
}
