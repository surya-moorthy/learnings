import axios from "axios"

async function fetchData() {
    const response = await axios.get("http://localhost:3000/api/user");
    await new Promise(r => setTimeout(r,3000));
    console.log(JSON.stringify(response.data));
    return response.data;
}

export default async function User() {
    const data = await fetchData();
    return (
        <div>
             {data.name}
             {data.email}
        </div>
    )
}