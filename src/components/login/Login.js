import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { users } from "../../store/proto/user";

import "./login.scss";


const Login = () => {

    const history = useHistory();

    const inputUsername = useRef(null);
    const inputPassword = useRef(null);
    
    // useEffect(() => {
    //     fetch("../../store/proto/user.json", {
    //         headers : { 
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'
    //          }
    //       })
    
    //         //.then(res => res.json())
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch(err => {
    //             console.log('My Error: ', err)
    //         })

    // }, [])

    console.log('users ', users);

    console.log(' history ', history);

    const submitHandler = (e) => {
        e.preventDefault();
       
        const _username = inputUsername.current.value;
        const _password = inputPassword.current.value;

        if(_username !=='' && _password !=='') {

            const activeUser = users.filter((item) => {
                return item.login.username === _username //'sadkoala338'
            });

            console.log('activeUser ', activeUser);

            if(activeUser && activeUser.length > 0) {
                history.push('/dashboard')
            } else {
                alert(' User doesn exist');  
            }

        } else {
            alert('Fields are empty');
        }

    }

    return (
        <>
            <main className="main">
                <div class="container">
                    <section className="wrapper">
                        <div className="heading">
                            <h1 className="text text-large">Sign In</h1>
                            <p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
                            </p>
                        </div>
                        <form name="login" className="form"
                            onSubmit={submitHandler}>
                            <div className="input-control">
                                <label for="email" className="input-label" hidden>Username</label>
                                <input type="text" name="username" className="input-field" placeholder="Username"
                                ref={inputUsername} />
                            </div>
                            <div className="input-control">
                                <label for="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password" className="input-field" placeholder="Password"
                                ref={inputPassword} />
                            </div>
                            <div className="input-control">
                                {/* <a href="#" className="text text-links">Forgot Password</a> */}
                                <button type="submit" name="submit" className="input-submit">Login</button>
                            </div>
                        </form>

                    </section>
                </div>
            </main>
        </>
    );
}

export default Login;