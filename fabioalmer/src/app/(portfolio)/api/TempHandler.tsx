
const createURL = (path:string)=> {
    return window.location.origin + path
}


export const handleNewPost = async ()=> {
    const url = createURL('/api/Poster');
    
    const res = await fetch(new Request(url,{
        method:"POST"
    }));

    if (res.ok) {
        const data = await res.json();
        return data.data
    }
}

type handleDeletePostProps = {
    id: string;
    content : string;
}

export const handleDeletePost = async ({id,content}:handleDeletePostProps)=> {
    const url = createURL(`/api/Poster/${id}`);
    
    const res = await fetch (new Request(url,{
        method:"DELETE",
        body: JSON.stringify({content})
    }))

    if (res.ok) {
        const data = await res.json();
        console.log(data)
        return data.data
    }
}


export const handleGetPost =  async (id:string)=> {

    const url = createURL(`/api/Poster/${id}`);
    const res = await fetch(new Request(url,{
        method:"GET",
    }));

    if (res.ok) {
        const data = await res.json();
        return data.data
    } else {
        console.error("There was a problem on handleGetPost")
    }
}