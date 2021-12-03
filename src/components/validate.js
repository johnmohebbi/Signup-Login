export const validate = (data,type) =>{

    const errors = {}
    
    if(type === "signup") {

        if(!data.username.trim()) {
            errors.username = "Username required.";
        }else {
            delete errors.username;
        }
        
        if (!data.password) {
            errors.password = "Password required."
        } else if(data.password.length <6) {
            errors.password = "password need to be 6 character or more.";
        }else {
            delete errors.password;
        }
        if (!data.confirmpassword) {
            errors.confirmpassword = "Confirmpassword required."
        } else if (data.confirmpassword !== data.password) {
            errors.confirmpassword = 'password do not match.';

        }else {
            delete errors.confirmpassword;
        }
        
    }
    if (!data.email) {
        errors.email = "Email required";
    } else if (!/\S+@\w+\.com/.test(data.email))  {
        errors.email = "Your email address is invalid.";
    }else {
        delete errors.email
    }
    if (data.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "Accepte our regulations.";
    }

    return errors ;

}