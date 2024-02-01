

export default function PostManager() {
    return (
        <div>
            <form className="flex flex-col gap-7">
                <div className="flex flex-row gap-10">
                    <label>Email</label>
                    <input type="email"></input>
                </div>
                <div className="flex flex-row gap-10">
                    <label>Password</label>
                    <input type="password"></input>
                </div>

                <div className="flex flex-row gap-5">
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>
    )
}