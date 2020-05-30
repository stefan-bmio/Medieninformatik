outputtemplate := "%j.%c";
input metauml;
beginfig(1);
iComponent.foreColor := white;
iNote.foreColor := white;

Component.translation("Translation GUI")();
Component.browser("Web Client")();
Component.rest("RESTful Service")();
Component.logserver("Log Server")();

Component.reviewdb("Review Database")();
Component.userdb("User Database")();
Note.users("Customers, Merchants,", "Manufacturers");
topToBottom(20)(reviewdb, userdb, users);

Component.dbms("DBMS")(reviewdb, userdb, users);

Component.nas("Backup NAS")();
Component.userman("User Management GUI")();

dbms.ne = (.5(dbms.width + 20 + userman.width), -35);
userman.nw = (-.5(dbms.width + 20 + userman.width), -35 - userman.height);

topToBottom.right(70)(translation, rest);
browser.n = translation.n + (10, -50);
topToBottom(30)(userman, logserver);
leftToRight(50)(rest, logserver);
topToBottom(20)(dbms, nas);

drawObjects(translation, browser, rest, logserver, dbms, nas, userman);

clink(association)(userdb, users);

link(transition)(pathVertical(translation.sw + (7, 0), rest.top));
link(transition)(pathVertical(browser.s, rest.top));
clink(transition)(rest, logserver);

link(transition)(pathCut(rest, dbms)(rest.s
                                      --rest.s + (0, -25)
                                      --dbms.s + (0, 24)));

clink(transition)(userman, logserver);
link(transition)(pathHorizontal(userman.e, dbms.left));
clink(transition)(dbms, nas);

boxit.translationlabel("Translation GUI" infont "ptmr8r");
translationlabel.nw = translation.nw + (1, -1);
translationlabel.dx = 22;
translationlabel.dy = 10;
fill bpath translationlabel withcolor white;
label ("<<artifact>>" infont "ptmr8r" scaled .8, translation.n + (0, -9));
label ("Translation GUI" infont "ptmb8r", translation.n + (0, -21));

tliconw := 8;
tliconh := -12;
z4 = translationlabel.ne + (-(tliconw + 5), -3);
tliconx := x4;
tlicony := y4;
tlearsize := .5tliconw;
tlearx := tliconx + tlearsize;
tleary := tlicony - tlearsize;
draw (tliconx, tlicony)--(tlearx, tlicony)--(tliconx + tliconw, tleary)--(tliconx + tliconw, tlicony + tliconh)--(tliconx, tlicony + tliconh)--cycle;
draw (tlearx, tlicony)--(tlearx, tlicony - tlearsize)--(tliconx + tliconw, tlicony - tlearsize);

boxit.usermanlabel("User Management GUI" infont "ptmr8r");
usermanlabel.nw = userman.nw + (1, -1);
usermanlabel.dx = 22;
usermanlabel.dy = 10;
fill bpath usermanlabel withcolor white;
label ("<<artifact>>" infont "ptmr8r" scaled .8, userman.n + (0, -9));
label ("User Management GUI" infont "ptmb8r", userman.n + (0, -21));

uliconw := 8;
uliconh := -12;
z3 = usermanlabel.ne + (-(uliconw + 5), -3);
uliconx := x3;
ulicony := y3;
ulearsize := .5uliconw;
ulearx := uliconx + ulearsize;
uleary := ulicony - ulearsize;
draw (uliconx, ulicony)--(ulearx, ulicony)--(uliconx + uliconw, uleary)--(uliconx + uliconw, ulicony + uliconh)--(uliconx, ulicony + uliconh)--cycle;
draw (ulearx, ulicony)--(ulearx, ulicony - ulearsize)--(uliconx + uliconw, ulicony - ulearsize);
%% artifact

boxit.browserlabel("Web Client" infont "ptmr8r");
browserlabel.nw = browser.nw + (1, -1);
browserlabel.dx = 12;
browserlabel.dy = 10;
fill bpath browserlabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, browser.n + (0, -9));
label ("Web Client" infont "ptmb8r", browser.n + (0, -21));

boxit.restlabel("RESTful Service" infont "ptmr8r");
restlabel.nw = rest.nw + (1, -1);
restlabel.dx = 12;
restlabel.dy = 10;
fill bpath restlabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, rest.n + (0, -9));
label ("RESTful Service" infont "ptmb8r", rest.n + (0, -21));

boxit.logserverlabel("Log Server" infont "ptmr8r");
logserverlabel.nw = logserver.nw + (1, -1);
logserverlabel.dx = 12;
logserverlabel.dy = 10;
fill bpath logserverlabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, logserver.n + (0, -9));
label ("Log Server" infont "ptmb8r", logserver.n + (0, -21));

boxit.naslabel("Backup NAS" infont "ptmr8r");
naslabel.nw = nas.nw + (1, -1);
naslabel.dx = 12;
naslabel.dy = 10;
fill bpath naslabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, nas.n + (0, -9));
label ("Backup NAS" infont "ptmb8r", nas.n + (0, -21));

boxit.dbmslabel("DBMS" infont "ptmr8r");
dbmslabel.nw = dbms.n + (-20, -1);
dbmslabel.dx = 12;
dbmslabel.dy = 10;
fill bpath dbmslabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, dbms.n + (0, -9));
label ("DBMS" infont "ptmb8r", dbms.n + (0, -20));

boxit.reviewlabel("Review Database" infont "ptmr8r");
reviewlabel.nw = reviewdb.nw + (1, -1);
reviewlabel.dx = 12;
reviewlabel.dy = 10;
fill bpath reviewlabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, reviewdb.n + (0, -9));
label ("Review Database" infont "ptmb8r", reviewdb.n + (0, -21));

boxit.userlabel("User Database" infont "ptmr8r");
userlabel.nw = userdb.nw + (1, -1);
userlabel.dx = 12;
userlabel.dy = 10;
fill bpath userlabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, userdb.n + (0, -9));
label ("User Database" infont "ptmb8r", userdb.n + (0, -21));

endfig;
end;
