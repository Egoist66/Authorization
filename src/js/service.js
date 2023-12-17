import { Question } from "../database/questions";
import Modal from "../modules/Modal";
import AutorizeForm from "../modules/AuthorizeForm";
import UserAuth from "../database/auth";


class Service {

    constructor({form, trigger, input}) {
        this.form = document.querySelector(form);
        this.button = document.querySelector(trigger);
        this.input = this.form.querySelector(input);
        this.list = document.querySelector("#list");
        this.response = document.querySelector(".resp");
        this.modalBtn = document.querySelector("#modal-btn");
        
        

    }

    initModal(){
      
        this.modalBtn.addEventListener("click", () => {
            console.clear()
            const modal =  new Modal();
            console.log(modal);
            modal.describeModal("Authorization", AutorizeForm);


            this.authorizeForm = document.forms[1];
            this.overlay = document.querySelector("#mui-overlay");
            this.authSubmit = document.querySelector("#auth-submit");
            this.modalTitle = document.querySelector(".modal-title");


            this.authForm = document.querySelector("#auth-form");
            this.authForm.addEventListener("submit", async (e) => {
                e.preventDefault();

                this.initAuthForm(e);
            })
        });

       
    }

    initForm(){

        this.form.addEventListener("submit", async (e) => {

            e.preventDefault();
            await this.submitFormHandler();
        });
    };

    async initAuthForm(e){

        const email = e.target.querySelector("#auth-email").value;
        const password = e.target.querySelector("#auth-password").value;

        const response = await UserAuth.authWithEmailAndPassword(email, password);
        this.authSubmit.disabled = true;
        this.authSubmit.textContent = "Signing in...";

        const {idToken} = response;
        
        setTimeout(async () => {
            const query = await Question.getQuestions(idToken);

             
            if(!idToken){
                this.modalTitle.classList.add("wrong");
                this.modalTitle.textContent = "Access denied";
                this.authSubmit.disabled = false;
                this.authSubmit.textContent = "Sign in";
            }
            else {
                this.modalTitle.classList.remove("wrong");
                this.modalTitle.textContent = "Access granted";
                console.log(query);
                this.authSubmit.disabled = false;
                this.authSubmit.textContent = "Sign in";
            
                setTimeout(() => {
                    this.authorizeForm.reset();
                    this.overlay.remove();
                },1500);

              this.list.innerHTML = Question.renderAfterAuthBase(query);
            }
        }, 1500)
       
    
      
     
      
        return response;
        
    }

    async submitFormHandler(){
       
        if (this.isValidInput()) {

            const question = {
                text: this.input.value.trim(),
                date: new Date().toJSON()
            };

            /* ajax to server */
            const response =  await Question.create(question);
           
           console.log(response);

            question.id = await response.name;
            Question.LS(question);
            
            if(this.response){
                this.response.remove();
                
            }
            
            this.list.innerHTML = Question.renderList();
            
        
           
            

            this.clearInput();
            this.button.disabled = true;
            

           

            console.log(question);
        }

    };


    clearInput(){
        this.input.value = "";
    };

    isValidInput() {
        return this.input.value.length >= 10;
    };

    WatchInput(){
        this.input.addEventListener("input", () => {
            this.button.disabled = !this.isValidInput();
        });
    };
}

export default Service;