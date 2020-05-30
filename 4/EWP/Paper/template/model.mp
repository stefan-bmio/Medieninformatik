outputtemplate := "%j-%c.mps";
input metauml;
input boxes;
beginfig(1);
iClass.foreColor := white;
iInstance.foreColor := white;
iInterface.foreColor := white;

Class.clock("Clock")
  ()
  ("+tick()");
clock.info.iAttributeStack.top := 0;
clock.info.iAttributeStack.bottom := 0;

Class.main("Main")
  ("-dateTimeAppStateContainer:AppStateContainer",
   "-dateAppState:DateAppState",
   "-timeAppState:TimeAppState",
   "-dateFormatOptions:DateFormatOptions",
   "-timeFormatOptions:TimeFormatOptions")
  ("+tick()", "-scheduleProcess()", "-initState()","-initGui()");

Class.appStateContainer("AppStateContainer")
  ()
  ("+register(Class, AppState)", "+get(Class)");
appStateContainer.info.iAttributeStack.top := 0;
appStateContainer.info.iAttributeStack.bottom := 0;
classStereotypes.appStateContainer("<<interface>>");

Class.appState("AppState")
  ()
  ();
appState.info.iAttributeStack.top := 0;
appState.info.iAttributeStack.bottom := 0;
appState.info.iMethodStack.top := 0;
appState.info.iMethodStack.bottom := 0;
classStereotypes.appState("<<interface>>");

Class.dateTimeAppStateContainer("DateTimeAppStateContainer")
  ("-appStates:Map")
  ("+register(Class, AppState)", "+get(Class)");

Class.dateAppState("DateAppState")
("+year:int", "+month:int", "+monthName:String", "+day")
();
dateAppState.info.iMethodStack.top := 0;
dateAppState.info.iMethodStack.bottom := 0;

Class.timeAppState("TimeAppState")
("+hours", "+minutes", "+seconds", "+amPm:String")
();
timeAppState.info.iMethodStack.top := 0;
timeAppState.info.iMethodStack.bottom := 0;

topToBottom(40)(clock, main);
leftToRight(40)(appStateContainer, appState);
leftToRight(40)(dateAppState, timeAppState);
topToBottom(40)(appStateContainer, dateTimeAppStateContainer, dateAppState);

main.s = .5[appStateContainer.nw, appState.ne] + (0, 40);

drawObjects(clock, main, appStateContainer, appState, dateAppState, dateTimeAppStateContainer, timeAppState);

clink(realization)(main, clock);
link(associationUni)(rpathVertical(appStateContainer.n, main.bottom));
link(associationUni)(rpathVertical(appState.n, main.bottom));
clink(realization)(dateTimeAppStateContainer, appStateContainer);
link(associationUni)(pathStepY(dateTimeAppStateContainer.n + (dateTimeAppStateContainer.width / 4, 0), appState.sw + (10, 0), 15));
link(realization)(rpathStepY(appState.s, dateAppState.n, -130));
link(realization)(rpathVertical(appState.se + (-10, 0), timeAppState.top));
endfig;
end;
