function Form(){

    return (

        `<form id="form" class="mui-form">
          <div class="mui-textfield mui-textfield--float-label">
            <input  maxlength="256" id="user-query" type="text">
            <label for="user-query">Your query:</label>
          </div>
          <button disabled id="ask-query" type="submit" class=" mui-btn mui-btn--primary mui-btn--raised">Ask us</button>
        </form>`
    );
}

export default Form;