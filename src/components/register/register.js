const Register = () => {
    return (
        <>
            <main className="main">
                <div class="container">
                    <section className="wrapper">
                        <div className="heading">
                            <h1 className="text text-large">Register</h1>
                            <p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
                            </p>
                        </div>
                        <form name="login" className="form">
                            <div className="input-control">
                                <label for="email" className="input-label" hidden>Email Address</label>
                                <input type="email" name="email" className="input-field" placeholder="Email Address" />
                            </div>
                            <div className="input-control">
                                <label for="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password" className="input-field" placeholder="Password" />
                            </div>
                            <div className="input-control">
                                <a href="#" className="text text-links">Forgot Password</a>
                                <input type="button" name="submit" className="input-submit" value="Login" disabled />
                            </div>
                        </form>



                    </section>
                </div>
            </main>
        </>
    );
}

export default Register;