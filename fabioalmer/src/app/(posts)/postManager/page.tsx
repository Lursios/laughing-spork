

export default function PostManager() {
    return (
        <div>
            <h1>you need to be authenticated to manage stuff !</h1>
            <form>
                <label>Email:</label>
                <input type="email"></input>
                <label>Password:</label>
                <input type="password"></input>
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    )
}