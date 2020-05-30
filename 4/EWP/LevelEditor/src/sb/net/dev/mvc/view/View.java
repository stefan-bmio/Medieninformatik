package sb.net.dev.mvc.view;

import sb.net.dev.mvc.controller.Validator;

public abstract class View<AppData> {
    protected Validator validator;

    public View() {
        this.validator = new Validator(this);
    }

    public abstract void update(AppData appData);
}
