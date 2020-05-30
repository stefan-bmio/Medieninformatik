outputtemplate := "%j-%c.mps";
input metauml;
input boxes;
beginfig(1);
iClass.foreColor := (.8, 1, .8);
iInstance.foreColor := white;
iInterface.foreColor := white;
iAbstractClass.foreColor := white;

Class.observer("Observer")
  ()
  ("+notify(AppState)");
observer.info.iAttributeStack.top := 0;
observer.info.iAttributeStack.bottom := 0;
classStereotypes.observer("<<interface>>");
observer.info.foreColor := (1, .82, .86);

Class.dateTimeObserver("DateTimeObserver")
("-view:Updatable")
("+notify(AppState)");

Class.view("View")
  ()
  ("+show(AppState)");
view.info.iAttributeStack.top := 0;
view.info.iAttributeStack.bottom := 0;
classStereotypes.view("<<interface>>");
view.info.foreColor := (1, .82, .86);

Class.updatable("Updatable")
  ()
  ("+update(AppState)");
updatable.info.iAttributeStack.top := 0;
updatable.info.iAttributeStack.bottom := 0;
classStereotypes.updatable("<<interface>>");
updatable.info.foreColor := (1, .82, .86);

EClass.compositeView(iAbstractClass)("CompositeView")
  ("-children:List", "controller:Controller")
  ("+update(AppState)", "+getChildren():List", "+addChild(CompositeView)");
  compositeView.info.foreColor := (.82, .89, .96);

Class.dateTimeView("DateTimeView")
("-jFrame:JFrame")
("+show(AppState)", "+update(AppStateContainer)");

Class.dateView("DateView")
("-dateLabel:JLabel")
("+update(AppStateContainer)");

Class.timeView("TimeView")
("-timeLabel:JLabel")
("+update(AppStateContainer)");

topToBottom(40)(observer, dateTimeObserver);
dateTimeObserver.s = .5[view.nw, updatable.ne] + (0, 40);
leftToRight(40)(view, updatable);
compositeView.n = .5[view.sw, updatable.se] + (0, -40);
topToBottom(40)(compositeView, dateTimeView);
dateTimeView.s = .5[dateView.nw, timeView.ne] + (0, 40);
leftToRight(40)(dateView, timeView);


drawObjects(observer, dateTimeObserver, view, updatable, compositeView, dateTimeView);

%boxit.abstractMethod("update()" infont metauml_defaultFontOblique);
%abstractMethod.sw = view.sw + (11, .5);
%abstractMethod.dx = 1;
%abstractMethod.dy = 1;
%fill bpath abstractMethod withcolor white;
%drawunboxed(abstractMethod);

link(realization)(pathVertical(dateTimeObserver.n, observer.bottom));
link(associationUni)(dateTimeObserver.s -- compositeView.n);
link(realization)(rpathVertical(updatable.s + (-updatable.width / 4, 0), compositeView.top));
link(realization)(rpathVertical(view.s + (view.width / 4, 0), compositeView.top));
clink(inheritance)(dateTimeView, compositeView);

endfig;
end;
