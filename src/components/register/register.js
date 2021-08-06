import { useEffect, useRef, useState } from "react";

const Register = () => {
    const [msg, setMsg] = useState("");
    const inputEmail = useRef(null);
    const inputUsername = useRef(null);
    const inputPassword = useRef(null);

    useEffect(() => {


    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const _email = inputEmail.current.value;
        const _username = inputUsername.current.value;
        const _password = inputPassword.current.value;

        if(_email !=="" && _username !=="" && _password !=="") {

            const dataToStore = {
                email: _email,
                login: {
                    username: _username,
                    password: _password
                }
            }

            
            localStorage.setItem("userDB", JSON.stringify(dataToStore));
        } else {
            setMsg("All fields are required!!!!")
        }

    }

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
                        <form name="login" className="form" onSubmit={onSubmitHandler}>
                        <div className="input-control">
                                <label for="email" className="input-label" hidden>Email Address</label>
                                <input type="email" name="email" className="input-field" placeholder="Email Address" ref={inputEmail} />
                            </div>

                            <div className="input-control">
                                <label for="email" className="input-label" hidden>Usernamse</label>
                                <input type="text" name="email" className="input-field" placeholder="Username" ref={inputUsername} />
                            </div>
                            <div className="input-control">
                                <label for="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password" className="input-field" placeholder="Password" ref={inputPassword} />
                            </div>
                            <div className="input-control">
                                <a href="#" className="text text-links">Forgot Password</a>
                                <button type="submit" name="submit" className="input-submit">Login</button>
                            </div>
                        </form>


                        {
                            msg && <div className="alert alert-danger">{msg}</div>
                        }
                    </section>
                </div>
            </main>
        </>
    );
}

export default Register;