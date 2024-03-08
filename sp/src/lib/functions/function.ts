export async function fetchSomething<T extends Record<string, unknown>>(
    url: string
  ) {
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => data.json() as Promise<T>)
      .catch((error) => {
        console.error("Error:", error);
        throw new Error(error);
      });
}