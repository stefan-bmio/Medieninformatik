outputtemplate := "%j.%c";
input metauml;
input artifact;
input location;
beginfig(1);
iComponent.foreColor := white;
iNote.foreColor := white;

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Product Review Web Service %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
px := 130; py := 15; w := 305; h := -185;
location("service", "Product Review Web Service", px, py, w, h);

Component.rest("RESTful Service")();
Component.logserver("Log Server")();

Component.dbms("DBMS            ")();
dbms.w := dbms.w + (-10, 0);
dbms.e := dbms.e + (10, 0);

Component.nas("Backup NAS")();
Component.userman("User Management GUI")();

rest.nw = (px + .5w - .5(rest.width + 20 + userman.width), py - 35);
userman.ne = (px + .5w + .5(rest.width + 20 + userman.width), py - 35);
logserver.n = (px + .5w, py - 137);

topToBottom(20)(rest, dbms);
topToBottom(20)(userman, nas);

drawObjects(rest, userman, dbms, nas, logserver);

boxit.restlabel("RESTful Service" infont "ptmr8r");
restlabel.nw = rest.nw + (1, -1);
restlabel.dx = 12;
restlabel.dy = 10;
fill bpath restlabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, rest.n + (0, -9));
label ("RESTful Service" infont "ptmb8r", rest.n + (0, -21));

%% artifact
boxit.usermanlabel("User Management GUI" infont "ptmr8r");
usermanlabel.nw = userman.nw + (1, -1);
usermanlabel.dx = 23;
usermanlabel.dy = 10;
fill bpath usermanlabel withcolor white;
label ("<<artifact>>" infont "ptmr8r" scaled .8, userman.n + (0, -9));
label ("User Management GUI" infont "ptmb8r", userman.n + (0, -21));

boxit.dbmslabel("DBMS" infont "ptmr8r");
dbmslabel.nw = dbms.nw + (1, -1);
dbmslabel.dx = 12;
dbmslabel.dy = 10;
fill bpath dbmslabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, dbms.n + (0, -9));
label ("DBMS" infont "ptmb8r", dbms.n + (0, -21));

boxit.naslabel("Backup NAS" infont "ptmr8r");
naslabel.nw = nas.nw + (1, -1);
naslabel.dx = 12;
naslabel.dy = 10;
fill bpath naslabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, nas.n + (0, -9));
label ("Backup NAS" infont "ptmb8r", nas.n + (0, -21));

boxit.logserverlabel("Log Server" infont "ptmr8r");
logserverlabel.nw = logserver.nw + (1, -1);
logserverlabel.dx = 12;
logserverlabel.dy = 10;
fill bpath logserverlabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, logserver.n + (0, -9));
label ("Log Server" infont "ptmb8r", logserver.n + (0, -21));

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

%%%%%%%%%%%%%
% Customers %
%%%%%%%%%%%%%
px := -55; py := 100; w := 150; h := -75;
location ("device", "Home PC / Mobile / Tablet", px, py, w, h);

Component.browser("Web Client   ")();
browser.n = (px + .5w, py - 35);
drawObject(browser);

link(association)((px + .5w + 3, py + h)--(px + .5w + 3, py + h - 10)--(23, -3));

boxit.browserlabel("Web Client" infont "ptmr8r");
browserlabel.nw = browser.nw + (1, -1);
browserlabel.dx = 12;
browserlabel.dy = 10;
fill bpath browserlabel withcolor white;
label ("<<component>>" infont "ptmr8r" scaled .8, browser.n + (0, -9));
label ("Web Client" infont "ptmb8r", browser.n + (0, -21));

%%%%%%%%%%%%%
% Merchants %
%%%%%%%%%%%%%
px := -30; py := -5; w := 100; h := -30;
location("device", "Web Server", px, py, w, h);
Note.nwebserver("Online Shop");
nwebserver.n = (px + .5w, py + h - 15);
drawObject(nwebserver);

link (association)((px + w + 2, py + .5h + 1)--(130, py + .5h + 1));
link (association)(pathVertical(nwebserver.n, py + h));

%%%%%%%%%%%%%%%%
% Translations %
%%%%%%%%%%%%%%%%
px := -55; py := -95; w := 150; h := -75;
location("device", "Home PC", px, py, w, h);

Component.translation("Translation GUI")();
translation.n = (px + .5w, py - 35);
drawObject(translation);

%% artifact
boxit.translationlabel("Translation GUI" infont "ptmr8r");
translationlabel.nw = translation.nw + (1, -1);
translationlabel.dx = 23;
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
%% artifact

link (association)((px + w + 2, py + .5h)--(130, py + .5h));



endfig;
end;
