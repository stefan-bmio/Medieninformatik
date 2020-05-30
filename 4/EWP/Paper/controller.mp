outputtemplate := "%j-%c.mps";
input metauml;
input boxes;
beginfig(1);
iClass.foreColor := white;
iInstance.foreColor := white;
iInterface.foreColor := white;

EClass.validator(iInterface)("Validator")
  ("-controller:Controller")
  ("+validate(message:ViewState)");
ClassTemplate.tValidator("ViewState")(validator);
tValidator.info.background := white;

EClass.controller(iInterface)("Controller")
  ("-view:View", "-model:ControllerObserver")
  ("+register(model:ControllerObserver)");
ClassTemplate.tController("ViewState")(controller);
tController.info.background := white;

leftToRight(40)(validator, controller);

drawObjects(validator, tValidator, controller, tController);

boxit.translate("validate(message:ViewState)" infont metauml_defaultFontOblique);
translate.sw = validator.sw + (11, 0.5);
translate.dx = 1;
translate.dy = 1;
fill bpath translate withcolor white;
drawunboxed(translate);

clink(transition)(validator, controller);
endfig;
end;
