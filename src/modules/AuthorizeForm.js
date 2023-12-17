function AutorizeForm(){

    return (

        `
            <form id="auth-form" class="mui-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input required id="auth-email" type="email">
                    <label for="auth-email">Enter e-mail </label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input required id="auth-password" type="password">
                    <label for="auth-password">Enter password</label>
                </div>
                <button  id="auth-submit" type="submit" class=" mui-btn mui-btn--primary mui-btn--raised">Sign in</button>
            </form>
      `
    )
}

export default AutorizeForm;