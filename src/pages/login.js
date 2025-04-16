function Login(){
    return(
        <>
        <header>
            <main>
                <h1>Login</h1>
                <form>
                    <div>
                        <label for="username">Username:</label>
                        <input id="username" type="text" name="username" placeholder="username"/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                </main>
                </header>
                </>
    );
};
export default Login;