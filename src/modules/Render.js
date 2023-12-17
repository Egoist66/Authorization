function Render({app}, root){
    
    this.render = () => {
        document.querySelector(root).insertAdjacentHTML("beforeend", app);
      
    }

}

export default Render;