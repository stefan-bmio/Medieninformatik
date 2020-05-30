package sb.net.dev.mvc.view;

public class ModelObserver<AppData> {
    private View view;

    public ModelObserver(View view) {
        this.view = view;
    }

    public void notify(AppData appData) {
        this.view.update(appData);
    }

    
}
