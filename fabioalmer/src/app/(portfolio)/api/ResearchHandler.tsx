"use server"

export type ResearchType = {
    id:string,
    title : string,
    link : string, // doi
    publisher : string,
    authors : string,
    image : string, //this the url to our save storage or something lah
    summary : string
}   

const research = [
    {
        id: "1",
        title : "Ruminative Thoughts and Their Relation to Depression and Anxiety",
        link : "doi:10.1111/j.1559-1816.2002.tb00225.x", // doi
        publisher : "Journal Of Applied Psychology",
        authors : "Fabio Almer Agoes S.T, M.Sc & Co",
        image : "/images/researchImage1.jpg",
        summary : "he document discusses the development of an eco-friendly hydrogen propulsion ship, supported by the Ministry of Trade, Industry & Energy in Korea. It compares different cases and technologies for decarbonizing maritime transport, focusing on zero-carbon hydrogen and ammonia fuels. The study also analyzes the environmental impacts, particularly greenhouse gas emissions, of each case."
    },

    {
        id :"2",
        title : "A Preliminary Study on an Alternative Ship Propulsion System Fueled by Ammonia: Environmental and Economic Assessments",
        link : "10.3390/jmse8030183", // doi
        publisher : "Journal of Marine Science And Engineering",
        authors : "Kyunghwa Kim , Gilltae Roh , Wook Kim,and Kangwoo Chun",
        image : "/images/researchImage2.png",
        summary : "he document discusses the development of an eco-friendly hydrogen propulsion ship, supported by the Ministry of Trade, Industry & Energy in Korea. It compares different cases and technologies for decarbonizing maritime transport, focusing on zero-carbon hydrogen and ammonia fuels. The study also analyzes the environmental impacts, particularly greenhouse gas emissions, of each case."
    },

    {
        id :"3",
        title : "Your future research input",
        link : "10.3390/jmse8030183", // doi
        publisher : "Journal of Future Associate",
        authors : "A. Roissul, F.Almer , F.Tiarrafi ,and Kangwoo Chun",
        image : "/images/testerImage.png",
        summary : "he document discusses the development of an eco-friendly hydrogen propulsion ship, supported by the Ministry of Trade, Industry & Energy in Korea. It compares different cases and technologies for decarbonizing maritime transport, focusing on zero-carbon hydrogen and ammonia fuels. The study also analyzes the environmental impacts, particularly greenhouse gas emissions, of each case."
    },

    {
        id :"4",
        title : "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermen",
        link : "https://theresearchpost.wordpress.com/", // doi
        publisher : "Journal of Future Associate",
        authors : "A. Roissul & Makoto Arai",
        image : "/images/testerImage.png",
        summary : "he document discusses the development of an eco-friendly hydrogen propulsion ship, supported by the Ministry of Trade, Industry & Energy in Korea. It compares different cases and technologies for decarbonizing maritime transport, focusing on zero-carbon hydrogen and ammonia fuels. The study also analyzes the environmental impacts, particularly greenhouse gas emissions, of each case."
    },
    
    {
        id :"5",
        title : "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermen",
        link : "https://theresearchpost.wordpress.com/", // doi
        publisher : "Just to make sure that it works",
        authors : "Agusti Setiawati",
        image : "/images/testerImage.png",
        summary : "the document discusses the development of an eco-friendly hydrogen propulsion ship, supported by the Ministry of Trade, Industry & Energy in Korea. It compares different cases and technologies for decarbonizing maritime transport, focusing on zero-carbon hydrogen and ammonia fuels. The study also analyzes the environmental impacts, particularly greenhouse gas emissions, of each case."
    }

    


];

export async function getResearch() {
    // fetch to our database when setup 
    return research
} 