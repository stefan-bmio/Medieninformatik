package sb.net.dev.mvc.model;

public interface ControllerObserver<AppData> {
    void notify(AppData appData);
}
