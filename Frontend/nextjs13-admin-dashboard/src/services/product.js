export async function fetchData(path) {
    const response = await fetch(`localhost:4000/${path}`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`, // notice the Bearer before your token
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const json = response.json();

    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return json
}

export async function fetchCategories() {
    try {
        const categories = await fetchData('/admin/categories');
        return categories.data
    } catch (error) {
        throw
    }
}