import { Question } from "./questions";

class UserAuth {

    static apiKey = "AIzaSyDisvvwkrEH_PZdGJ48Umwyqixxkxr39L4";
    static authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${UserAuth.apiKey}`;
 

    static async authWithEmailAndPassword(email, password){
        let response;
        
        try {

            const request = await fetch(UserAuth.authUrl, {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            });
    
            response = await request.json();
        }

        catch(e){
            console.log(e);
        }

      return response;
    }
}

export default UserAuth;