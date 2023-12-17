
class Question {
    static url = "https://podcast-3e160-default-rtdb.europe-west1.firebasedatabase.app/questions.json";



    static async create(question){
        let response;
        try {
            const request = await fetch(Question.url, {
                method: "POST",
                body: JSON.stringify(question),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            
            response = await request.json();
          
        
        }
        catch(e){
            throw new e;
        }

        return response;
    }


    static renderList(){
        let html;
        let questions = Question.getQuestionsFromLS();

        if(questions.length){
            html = questions.map((item) => {

                return (
                    `<div class="mui--text-black-54">
                        ${new Date(item.date).toLocaleDateString()}
                        ${new Date(item.date).toLocaleTimeString()}
                    </div>
                    <div class="query">${item.text}</div>
                    <br />`
                )
            }).join("");
        }
        else {
            html = `<div class="mui--text-black-54 resp">Вы ничего не спрашивали</div>`;
        }
        console.log(html)
        return html;
    }


    static async getQuestions(token){

        const request = await fetch(Question.url + `?auth=${token}`);
        const response = await request.json();

        return response ? Object.keys(response).map(key => {
            return {
                ...response[key],
                id: key
            }
        }): [];
    }

    static LS(question){

        const data = Question.getQuestionsFromLS();
        data.push(question);

       localStorage.setItem("questions", JSON.stringify(data))
    }

    static getQuestionsFromLS(){

        return JSON.parse(localStorage.getItem("questions") || "[]")
    }

    static renderAfterAuthBase(query){

        if(query.length){

            const data = query.map(item => {
                return (
                    `
                    <div class="mui--text-black-54 frombase">
                        ${new Date(item.date).toLocaleDateString()}
                        ${new Date(item.date).toLocaleTimeString()}
                    </div>
                    <div class="query">${item.text}</div>
                    <br />`
                )
            }).join("");

            return data;
        }

  
    }

  
}

export {Question};