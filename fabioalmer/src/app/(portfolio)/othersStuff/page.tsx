import { getPosts } from "../api/ResearchHandler";


const OtherStuff = async ()=> {

    const testData = await getPosts();
    console.log(typeof testData,testData[0].postype);
 
    return (
        <>
            <div>The Other Stuff That You Don't Know !</div>   
        </>    
    )
}

export default OtherStuff;
