import React from 'react';

const Signup = () => {
    return (
        <div>
            <form>
                <div>
                    <label>username</label>
                    <input type="text"  />
                </div>
                <div>
                    <label>email</label>
                    <input type="email"  />
                </div>
                <div>
                    <label>password</label>
                    <input type="password"  />
                </div>
                <div>
                    <label>confirmpassword</label>
                    <input type="password"  />
                </div>
                <div>
                    <label>your accept our rules</label>
                    <input type="checkbox"  />
                </div>
                <div>
                    <a href="/#">login</a>
                    <button type="submit">signUp</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;