outputtemplate := "%j-%c.mps";
input metauml;
input boxes;
beginfig(1);
iClass.foreColor := white;
iInstance.foreColor := white;
iInterface.foreColor := white;

Class.controllerObserver("ControllerObserver")
  ("-model:Model")
  ("+notify(appData:AppData)");
ClassTemplate.tObserver("AppData")(controllerObserver);
tObserver.info.background := white;

EClass.model(iInterface)("Model")
  ("-view:modelObserver")
  ("+register(view:ModelObserver)")
;
model.info.iMethodStack.top := 0;
model.info.iMethodStack.bottom := 0;

leftToRight.bottom(30)(controllerObserver, model);

drawObjects(controllerObserver, tObserver, model);

link(transition)(rpathHorizontal(model.w, controllerObserver.right));
endfig;
end;
