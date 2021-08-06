import { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { users } from "../../store/proto/user";

import "./dashboard.scss";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const history = useHistory();
    let location = useLocation();

    useEffect(() => {
        console.log(' location ', location);
        const activeUser = users.filter((item) => {
            return item.email === localStorage.getItem("userLogin")
        });

        if (activeUser.length > 0) {
            setUser(activeUser[0]);
        } else {
            history.push('/login');
        }
        console.log(' activeUser ', activeUser);

    }, []);


    // logout 
    const logOutHandler = () => {
        localStorage.removeItem('userLogin');
        history.push('/login');
    }

    return (
        <>
            <main className="main dashboard-wrapper">

                <div class="jumbotron">
                    <h1 class="display-4">Hello, {user && user.email}!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

                    <button className="btn btn-danger" onClick={logOutHandler}>Logout</button>

                </div>

                {
                    user &&
                    <div class="container">
                        <div className="row">
                            <div class="col-md-12">
                                <div class="card profile-card-2">
                                    <div class="card-img-block">
                                        <img class="img-fluid" src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="Card image cap" />
                                    </div>
                                    <div class="card-body pt-5">
                                        {
                                            user.picture && <img src={user.picture.thumbnail} alt="profile-image" class="profile" />
                                        }

                                        {
                                            user.name && 
                                            <h5 class="card-title">{user.name.first} {user.name.last}</h5>
                                        }
                                       
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                    </div>
                                </div>
                                <p class="mt-3 w-100 float-left text-center"><strong>Social Profile Card</strong></p>
                            </div>
                        </div>
                    </div>
                }

            </main>
        </>
    );
}

export default Dashboard;