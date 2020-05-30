package sb.net.dev.mvc.controller;

import sb.net.dev.mvc.model.ControllerObserver;
import sb.net.dev.mvc.view.View;

public class Validator<E extends ViewState> {
    protected Controller controller;

    public Validator(View view) {
        this.controller = new Controller(view);
    }

    public void validate(E viewState) {
        if (viewState.isValidInput()) {
            this.controller.notfiyListeners(viewState);
        }
    }

    // OCP ftw
    private class Controller<AppData> {
        protected View view;
        private ControllerObserver model;

        // note the OCP (package private constructor)
        Controller(View view) {
            this.view = view;
        }

        public void register(ControllerObserver controllerObserver) {
            this.model = controllerObserver;
        }

        public void notfiyListeners(AppData appData) {
            this.model.notify(appData);
            this.view.update();
        }
    }
}
