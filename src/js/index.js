import App from "../modules/App";
import Render from "../modules/Render";
import Service from "./service";


const root = new Render({
    app:  new App().init(),
}, "#app")


root.render();

const service = new Service({
    trigger: "#ask-query",
    form: "#form",
    input: "#user-query"
});

service.initForm();
service.WatchInput();
service.initModal();

