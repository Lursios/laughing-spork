
type ExperiencesTypes = {
    experienceName : string,
    experiences : string[]
}

export default function Experiences({experienceName,experiences}:ExperiencesTypes) {
    return (
        <div className="h-1/4 flex flex-col bg-butterscotch pl-12 pt-5 pr-16 mt-2 rounded-3xl border-solid border-black border-2 text-white">
            <div className="text-left">
                <h1 className="font-bold text-xl underline underline-offset-4">{experienceName}</h1>
            </div>
            <div className="text-left mb-10 pr-24 ">
                <ul className="list-disc list-inside">
                {experiences.map((experience,index)=> {
                    return (
                        <li key={index}>{experience}</li>
                    )
                })}
                </ul>
            </div>
        </div>

    )
}