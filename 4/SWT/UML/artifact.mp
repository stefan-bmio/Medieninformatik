def artifact(expr lbl, ax, ay) =
begingroup;
save iconx, icony, iconw, iconh, earsize, earx, eary, alabel;

boxit.alabel(lbl infont "ptmr8r");
alabel.n = (ax, ay);
alabel.dx = 25;
alabel.dy = 11;
fill bpath alabel withcolor white;
drawboxed(alabel);

iconw := 8;
iconh := -12;
z0 = alabel.ne + (-(iconw + 5), -3);
iconx := x0;
icony = y0;
earsize := .5iconw;
earx := iconx + earsize;
eary := icony - earsize;
draw (iconx, icony)--(earx, icony)--(iconx + iconw, eary)--(iconx + iconw, icony + iconh)--(iconx, icony + iconh)--cycle;
draw (earx, icony)--(earx, icony - earsize)--(iconx + iconw, icony - earsize);
endgroup;
enddef;
