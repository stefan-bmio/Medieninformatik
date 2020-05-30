outputtemplate := "%j-%c.mps";
input metauml;
input boxes;
beginfig(1);
iClass.foreColor := white;
iInstance.foreColor := white;
iInterface.foreColor := white;

Class.modelObserver("ModelObserver")
  ("-view:View")
  ("+notify(appData:AppData)");
ClassTemplate.tObserver("AppData")(modelObserver);
tObserver.info.background := white;

EClass.view(iInterface)("View")
  ("-children:View[]", "-validator:Validator")
  ("+update()");

leftToRight.bottom(30)(modelObserver, view);

drawObjects(modelObserver, tObserver, view);

boxit.abstractMethod("update()" infont metauml_defaultFontOblique);
abstractMethod.sw = view.sw + (11, .5);
abstractMethod.dx = 1;
abstractMethod.dy = 1;
fill bpath abstractMethod withcolor white;
drawunboxed(abstractMethod);

link(transition)(rpathHorizontal(view.w, modelObserver.right));
endfig;
end;
