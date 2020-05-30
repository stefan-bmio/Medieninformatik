%% Do not edit, this file has been generated
%% automatically by class.tex via gmp.sty


input metauml;
outputtemplate:= "%j.mps";
beginfig(1);
 draw (0, 0)--(300, 0)--(300, -150)--(0, -150)--cycle;
 draw (0, 0)--(5, 5)--(305, 5)--(305, -145)--(300, -150);
 draw (300, 0)--(305, 5);
 label ("<<first>>" infont "ptmr8r" scaled .8, (150, -9));
 label ("My Node" infont "ptmb8r", (150, -21));
 
Component.comp("My Component")();
 comp.nw = (40, -40);
 drawObject(comp);
 
endfig;
end.
