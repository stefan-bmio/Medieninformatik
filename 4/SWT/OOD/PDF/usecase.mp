outputtemplate := "%j.%c";
input metauml;
beginfig(1);
iUsecase.foreColor := white;
Actor.customer("Customer");
Actor.advertiser("Advertiser");
Actor.translator("Translator");
Actor.employee("Employee");

Usecase.read("read reviews");
Usecase.filter("filter reviews");
Usecase.sort("sort reviews");

Usecase.rate("rate products");
Usecase.writing("write reviews");

Usecase.control("control review lifecycle");
Usecase.create("create user");
Usecase.grant("grant user permissions");
Usecase.block("block user");
Usecase.delete("delete user");

Usecase.translate("translate reviews");
Usecase.duplicate("duplicate review");
Usecase.edit("edit review text");

Usecase.display("display reviews");
Usecase.offer("offer review form");


customer.human.w = (0, 25);
translator.human.w = (0, -75);
employee.human.e = (450, 25);
advertiser.human.e = (450, -75);

leftToRight(40)(read, sort);
filter.s = read.n + .5(sort.n - read.n) + (0, 30);

read.w = (75, 50);
topToBottom(15)(read, writing);
leftToRight(60)(writing, rate);

topToBottom(40)(writing, translate);
leftToRight(60)(translate, duplicate);
edit.n = translate.s + .5(duplicate.s - translate.s) + (30, -30);

control.se = employee.n + (-60, 50);
delete.ne = control.se + (-5, -15);
create.e = delete.w + (-10, -14);
topToBottom(10)(delete, block);
topToBottom.right(10)(block, grant);

display.e = advertiser.w + (-50, 0);
offer.n = display.s + (15, -10);

drawObjects(customer, translator, employee, advertiser, read, filter, sort, rate, writing, translate, duplicate, edit, control, create, grant, block, delete, display, offer);

clink(inheritance)(filter, read);
clink(inheritance)(sort, read);
clink(association)(customer.human, read);

clink(association)(customer.human, writing);
clink(dependency)(writing, rate);
item(iStereo)("<<include>>")(obj.s = writing.c + .5(rate.c - writing.c) + (-5, 2));

clink(association)(translator.human, translate);

clink(dependency)(translate, duplicate);
clink(dependency)(translate, edit);
item(iStereo)("<<include>>")(obj.s = translate.c + .5(duplicate.c - translate.c) + (-5, 2));
item(iStereo)("<<include>>")(obj.ne = translate.c + .5(edit.c - translate.c) + (5, -2));

clink(association)(employee.human, control);
clink(association)(employee.human, delete);
clink(association)(employee.human, create);
clink(association)(employee.human, block);
clink(association)(employee.human, grant);
clink(association)(advertiser.human, display);
clink(association)(advertiser.human, offer);

actordistance := 10;
draw customer.e + (actordistance, 125)
      -- employee.w + (-actordistance, 125)
      -- employee.w + (-actordistance, -190)
      -- customer.e + (actordistance, -190)
      -- cycle withcolor .67white;

endfig;
end;
