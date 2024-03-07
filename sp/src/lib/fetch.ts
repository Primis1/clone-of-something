export async function fetch<T extends Record<string, unknown>>(url: string){
    fetch(url, {headers: {
        "Content type": "application/json",
        Accept: "application/json",
    },})
    .then((data) => data.json)
    .catch((error) => {
        console.error("Error", error)
        throw new Error(error)
    })

    return(data)
}