"use server"
import prisma from "../../../../prisma/prisma";


export async function getPosts() {
    try {
        await new Promise(resolve => setTimeout(resolve,3000))
        const researches = await prisma.posts.findMany();
        return researches
    } catch (error) {
        return {error}
    }
}

export type ResearchType = {
    id:string,
    title : string,
    link : string, // doi
    publisher : string,
    authors : string,
    image : string, //this the url to our save storage or something lah
    summary : string,
    content : string
}   

const research = [
    {
        id: "1",
        title : "Ruminative Thoughts and Their Relation to Depression and Anxiety",
        link : "doi:10.1111j.1559-1816.2002.tb00225.x", // doi
        publisher : "Journal Of Applied Psychology",
        authors : "Fabio Almer Agoes S.T, M.Sc & Co",
        image : "/images/researchImage1.jpg",
        summary : "the document discusses the development of an eco-friendly hydrogen propulsion ship, supported by the Ministry of Trade, Industry & Energy in Korea. It compares different cases and technologies for decarbonizing maritime transport, focusing on zero-carbon hydrogen and ammonia fuels. The study also analyzes the environmental impacts, particularly greenhouse gas emissions, of each case.",
        content : `<div>
        <h1>Hi im content</h1>
        <p>This is going to test </p>
        <p>liquam varius commodo feugiat. Phasellus condimentum quis libero quis tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at mauris et turpis consectetur mollis a bibendum neque. Cras lobortis nec tortor in vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis lorem ut nulla consequat, ac tempor urna posuere. Suspendisse vitae varius mi, sollicitudin iaculis lectus. Suspendisse aliquet semper felis, sit amet pretium lacus ornare ut. Integer feugiat, tellus et porta tempus, mauris lectus sagittis lacus, vitae efficitur neque tellus at turpis. Suspendisse egestas magna sit amet velit imperdiet, at faucibus enim tincidunt. Aenean id laoreet metus. Maecenas vitae commodo sapien
        Aenean eget imperdiet nisi, ac auctor ipsum. Nullam ut ultricies lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sit amet metus leo. Praesent feugiat ultricies nisi. Nulla facilisi. Vestibulum id nulla vel neque accumsan sodales placerat et nulla.
        Duis vel facilisis risus. Suspendisse in commodo eros. Nullam maximus, urna sit amet venenatis posuere, libero quam tempus purus, ac mollis risus orci eget dolor. Nam ac orci nec risus venenatis efficitur eget at nunc. Aliquam vestibulum lobortis condimentum. Donec nec dignissim leo. Etiam dignissim purus sit amet justo cursus maximus. Cras tincidunt magna dictum purus dapibus porta in quis diam. Praesent tortor elit, vestibulum ut arcu quis, varius lacinia quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Donec condimentum maximus lorem semper ultrices. Donec mollis eros a aliquet dictum. Quisque lectus metus, sagittis nec sapien quis, auctor faucibus odio. Cras erat nulla, interdum eu gravida nec, facilisis non felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem urna, feugiat et ullamcorper quis, bibendum quis felis. Donec ut orci mi. Vestibulum lacinia maximus commodo. Praesent quis diam et massa elementum aliquet vitae sed eros. Donec cursus elementum orci, eget finibus metus semper sollicitudin.
        </p>
        <p>liquam varius commodo feugiat. Phasellus condimentum quis libero quis tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at mauris et turpis consectetur mollis a bibendum neque. Cras lobortis nec tortor in vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis lorem ut nulla consequat, ac tempor urna posuere. Suspendisse vitae varius mi, sollicitudin iaculis lectus. Suspendisse aliquet semper felis, sit amet pretium lacus ornare ut. Integer feugiat, tellus et porta tempus, mauris lectus sagittis lacus, vitae efficitur neque tellus at turpis. Suspendisse egestas magna sit amet velit imperdiet, at faucibus enim tincidunt. Aenean id laoreet metus. Maecenas vitae commodo sapien
        Aenean eget imperdiet nisi, ac auctor ipsum. Nullam ut ultricies lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sit amet metus leo. Praesent feugiat ultricies nisi. Nulla facilisi. Vestibulum id nulla vel neque accumsan sodales placerat et nulla.
        Duis vel facilisis risus. Suspendisse in commodo eros. Nullam maximus, urna sit amet venenatis posuere, libero quam tempus purus, ac mollis risus orci eget dolor. Nam ac orci nec risus venenatis efficitur eget at nunc. Aliquam vestibulum lobortis condimentum. Donec nec dignissim leo. Etiam dignissim purus sit amet justo cursus maximus. Cras tincidunt magna dictum purus dapibus porta in quis diam. Praesent tortor elit, vestibulum ut arcu quis, varius lacinia quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Donec condimentum maximus lorem semper ultrices. Donec mollis eros a aliquet dictum. Quisque lectus metus, sagittis nec sapien quis, auctor faucibus odio. Cras erat nulla, interdum eu gravida nec, facilisis non felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem urna, feugiat et ullamcorper quis, bibendum quis felis. Donec ut orci mi. Vestibulum lacinia maximus commodo. Praesent quis diam et massa elementum aliquet vitae sed eros. Donec cursus elementum orci, eget finibus metus semper sollicitudin.
        </p>
        <p>liquam varius commodo feugiat. Phasellus condimentum quis libero quis tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at mauris et turpis consectetur mollis a bibendum neque. Cras lobortis nec tortor in vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis lorem ut nulla consequat, ac tempor urna posuere. Suspendisse vitae varius mi, sollicitudin iaculis lectus. Suspendisse aliquet semper felis, sit amet pretium lacus ornare ut. Integer feugiat, tellus et porta tempus, mauris lectus sagittis lacus, vitae efficitur neque tellus at turpis. Suspendisse egestas magna sit amet velit imperdiet, at faucibus enim tincidunt. Aenean id laoreet metus. Maecenas vitae commodo sapien
        Aenean eget imperdiet nisi, ac auctor ipsum. Nullam ut ultricies lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sit amet metus leo. Praesent feugiat ultricies nisi. Nulla facilisi. Vestibulum id nulla vel neque accumsan sodales placerat et nulla.
        Duis vel facilisis risus. Suspendisse in commodo eros. Nullam maximus, urna sit amet venenatis posuere, libero quam tempus purus, ac mollis risus orci eget dolor. Nam ac orci nec risus venenatis efficitur eget at nunc. Aliquam vestibulum lobortis condimentum. Donec nec dignissim leo. Etiam dignissim purus sit amet justo cursus maximus. Cras tincidunt magna dictum purus dapibus porta in quis diam. Praesent tortor elit, vestibulum ut arcu quis, varius lacinia quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Donec condimentum maximus lorem semper ultrices. Donec mollis eros a aliquet dictum. Quisque lectus metus, sagittis nec sapien quis, auctor faucibus odio. Cras erat nulla, interdum eu gravida nec, facilisis non felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem urna, feugiat et ullamcorper quis, bibendum quis felis. Donec ut orci mi. Vestibulum lacinia maximus commodo. Praesent quis diam et massa elementum aliquet vitae sed eros. Donec cursus elementum orci, eget finibus metus semper sollicitudin.
        </p>
        <p>liquam varius commodo feugiat. Phasellus condimentum quis libero quis tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at mauris et turpis consectetur mollis a bibendum neque. Cras lobortis nec tortor in vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis lorem ut nulla consequat, ac tempor urna posuere. Suspendisse vitae varius mi, sollicitudin iaculis lectus. Suspendisse aliquet semper felis, sit amet pretium lacus ornare ut. Integer feugiat, tellus et porta tempus, mauris lectus sagittis lacus, vitae efficitur neque tellus at turpis. Suspendisse egestas magna sit amet velit imperdiet, at faucibus enim tincidunt. Aenean id laoreet metus. Maecenas vitae commodo sapien
        Aenean eget imperdiet nisi, ac auctor ipsum. Nullam ut ultricies lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sit amet metus leo. Praesent feugiat ultricies nisi. Nulla facilisi. Vestibulum id nulla vel neque accumsan sodales placerat et nulla.
        Duis vel facilisis risus. Suspendisse in commodo eros. Nullam maximus, urna sit amet venenatis posuere, libero quam tempus purus, ac mollis risus orci eget dolor. Nam ac orci nec risus venenatis efficitur eget at nunc. Aliquam vestibulum lobortis condimentum. Donec nec dignissim leo. Etiam dignissim purus sit amet justo cursus maximus. Cras tincidunt magna dictum purus dapibus porta in quis diam. Praesent tortor elit, vestibulum ut arcu quis, varius lacinia quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Donec condimentum maximus lorem semper ultrices. Donec mollis eros a aliquet dictum. Quisque lectus metus, sagittis nec sapien quis, auctor faucibus odio. Cras erat nulla, interdum eu gravida nec, facilisis non felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem urna, feugiat et ullamcorper quis, bibendum quis felis. Donec ut orci mi. Vestibulum lacinia maximus commodo. Praesent quis diam et massa elementum aliquet vitae sed eros. Donec cursus elementum orci, eget finibus metus semper sollicitudin.
        </p>
    </div>`
    },

    {
        id :"2",
        title : "A Preliminary Study on an Alternative Ship Propulsion System Fueled by Ammonia: Environmental and Economic Assessments",
        link : "10.3390jmse8030183", // doi
        publisher : "Journal of Marine Science And Engineering",
        authors : "Kyunghwa Kim , Gilltae Roh , Wook Kim,and Kangwoo Chun",
        image : "/images/researchImage2.png",
        summary : "he document discusses the development of an eco-friendly hydrogen propulsion ship, supported by the Ministry of Trade, Industry & Energy in Korea. It compares different cases and technologies for decarbonizing maritime transport, focusing on zero-carbon hydrogen and ammonia fuels. The study also analyzes the environmental impacts, particularly greenhouse gas emissions, of each case.",
        content : "<h1>this is the html tag in a string format kinda thing<h1>"
    },

    {
        id :"3",
        title : "Your future research input",
        link : "10.3390jmse8030183", // doi
        publisher : "Journal of Future Associate",
        authors : "A. Roissul, F.Almer , F.Tiarrafi ,and Kangwoo Chun",
        image : "/images/testerImage.png",
        summary : "he document discusses the development of an eco-friendly hydrogen propulsion ship, supported by the Ministry of Trade, Industry & Energy in Korea. It compares different cases and technologies for decarbonizing maritime transport, focusing on zero-carbon hydrogen and ammonia fuels. The study also analyzes the environmental impacts, particularly greenhouse gas emissions, of each case.",
        content : "<h1>this is the html tag in a string format kinda thing<h1>"
    },

    {
        id :"4",
        title : "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermen",
        link : "theresearchpost", // doi
        publisher : "Journal of Future Associate",
        authors : "A. Roissul & Makoto Arai",
        image : "/images/testerImage.png",
        summary : "he document discusses the development of an eco-friendly hydrogen propulsion ship, supported by the Ministry of Trade, Industry & Energy in Korea. It compares different cases and technologies for decarbonizing maritime transport, focusing on zero-carbon hydrogen and ammonia fuels. The study also analyzes the environmental impacts, particularly greenhouse gas emissions, of each case.",
        content : "<h1>this is the html tag in a string format kinda thing<h1>"
    },
    
    {
        id :"5",
        title : "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermen",
        link : "theresearchpostKinslt/", // doi
        publisher : "Just to make sure that it works",
        authors : "Agusti Setiawati",
        image : "/images/testerImage.png",
        summary : "the document discusses the development of an eco-friendly hydrogen propulsion ship, supported by the Ministry of Trade, Industry & Energy in Korea. It compares different cases and technologies for decarbonizing maritime transport, focusing on zero-carbon hydrogen and ammonia fuels. The study also analyzes the environmental impacts, particularly greenhouse gas emissions, of each case.",
        content : "<h1>this is the html tag in a string format kinda thing<h1>"
    }

    

];

export async function getResearch() {
    // fetch to our database when setup 
    return research
}


export async function getResearchById(id:string) {

    let currentResearch:ResearchType = {
        id:"",
        title : "string",
        link : "string", // doi
        publisher : "string",
        authors : "string",
        image : "string", //this the url to our save storage or something lah
        summary : "string",
        content : "string"
    }   

    research.map((research=> {
        if (research.id === id ) {
            currentResearch = research
        }
    }))
    return currentResearch
}