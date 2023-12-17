import Form from "./Form";
import "../styles/style.css"
import { Question } from "../database/questions";
import Button from "./Button";

function App(){


  this.init = () => {

    return (

      `
      ${Button()}
      <div id="sidebar">
        <div class="mui--text-white mui--text-display1 mui--align-vertical">
          Podcast
          <br>
          <small>by Farid</small>
        </div>
      </div>
      <div id="content" class="mui-container-fluid">
        <div class="mui-row">
          <div class="mui-col-sm-10 mui-col-sm-offset-1">
            <br />
            <br />
            <div class="mui--text-black-54 mui--text-body2">Ask a question</div>
            <div class="mui-divider"></div>
            <br />
  
              <!-- Form -->
  
              ${Form()}
  
  
  
  
            <br />
            <br />
            <div class="mui--text-black-54 mui--text-body2">Your questions</div>
            <div class="mui-divider"></div>
            <br />
            <div id="list">${Question.renderList()}</div>
            
          
          </div>
        </div>
      </div>`
    );


  }
 
}

export default App;