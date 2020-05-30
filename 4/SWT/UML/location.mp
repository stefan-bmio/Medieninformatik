def location(expr artlbl, lbl, locx, locy, locw, loch) =
begingroup;
%save locx, locy, locw, loch;

draw (locx, locy)--(locx + locw, locy)--(locx + locw, locy + loch)--(locx, locy + loch)--cycle;
draw (locx, locy)--(locx + 5, locy + 5)--(locx + locw + 5, locy + 5)--(locx + locw + 5, locy + loch + 5)--(locx + locw, locy + loch);
draw (locx + locw, locy)--(locx + locw + 5, locy + 5);\
label (("<<" & artlbl & ">>") infont "ptmr8r" scaled .8, (locx + .5locw, locy - 9));
label (lbl infont "ptmb8r", (locx + .5locw, locy - 21));
endgroup;
enddef;
