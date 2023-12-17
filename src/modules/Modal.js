class Modal {
    constructor() {

        this.modal = document.createElement("div");
        this.modalProps = this.describeModal();
    
     

    }

    describeModal(title, content = function(){}){
        this.modal.classList.add("modal");
        this.modal.innerHTML = `
            <h1 class="modal-title">${title}</h1>
            <div class="modal-content">${content()}</div>
    
    
        `.trim();




        return {
            classList:  this.modal.classList,
            muiOverlay: mui.overlay("on", this.modal),
           
        }
    }
}

export default Modal;