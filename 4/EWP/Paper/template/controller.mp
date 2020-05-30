outputtemplate := "%j-%c.mps";
input metauml;
input boxes;
beginfig(1);
iClass.foreColor := white;
iInstance.foreColor := white;
iInterface.foreColor := white;
iAbstractClass.foreColor := white;

Class.controller("Controller")
  ()
  ("+onClick()");
controller.info.iAttributeStack.top := 0;
controller.info.iAttributeStack.bottom := 0;
classStereotypes.controller("<<interface>>");

Class.dateFormatController("DateFormatController")
  ("-updateService")
  ("+onClick()");

Class.timeFormatController("TimeFormatController")
  ("-updateService")
  ("+onClick()");

Class.updateService("UpdateService")
  ()
  ("+refresh()");
updateService.info.iAttributeStack.top := 0;
updateService.info.iAttributeStack.bottom := 0;
classStereotypes.updateService("<<interface>>");

Class.dateTimeUpdateService("DateTimeUpdateService")
("-app: Clock")
("+refresh()");

leftToRight(40)(dateFormatController, timeFormatController);
topToBottom(40)(updateService, dateTimeUpdateService);

controller.s = .5[dateFormatController.nw, timeFormatController.ne] + (0, 40);
updateService.n = .5[dateFormatController.sw, timeFormatController.se] + (0, -40);

drawObjects(controller, dateFormatController, timeFormatController, updateService, dateTimeUpdateService);

%boxit.translate("validate(message:ViewState)" infont metauml_defaultFontOblique);
%translate.sw = validator.sw + (11, 0.5);
%translate.dx = 1;
%translate.dy = 1;
%fill bpath translate withcolor white;
%drawunboxed(translate);

link(realization)(dateFormatController.n -- controller.s + (-controller.width / 4, 0));
link(realization)(timeFormatController.n -- controller.s + (controller.width / 4, 0));
clink(associationUni)(controller, updateService);
clink(realization)(dateTimeUpdateService, updateService)

endfig;
end;
