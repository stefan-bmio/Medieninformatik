outputtemplate := "%j.mps";

verbatimtex
%&latex
\documentclass[10pt]{article}
\begin{document}
etex

input mp-colors;

beginfig(1)
%Steuerwerk
pickup pensquare scaled 2;
fill (0, 75)--(50, 75)--(50, 15)--(0, 15)--cycle withcolor myblue;
draw (0, 75)--(50, 75)--(50, 15)--(0, 15)--cycle withcolor mydarkerblue;
label (btex \begin{tabular}{c}Steuer-\\werk\\ \end{tabular} etex, (25, 45));

%Daten
pickup pensquare scaled 2;
fill (60, 87)--(160, 87)--(160, 62)--(60, 62)--cycle withcolor myblue;
draw (60, 87)--(160, 87)--(160, 62)--(60, 62)--cycle withcolor mydarkerblue;
label ("Daten", (110, 62 + 25 / 2));

%Rechenwerke
for i := 0 upto 3:
  x := 61 + i * 27;
  if i = 2:
    pickup pencircle scaled 2;
    for j := 0 upto 2:
      drawdot (x + 2 + j * 17 / 3, 35 + 17 / 2);
    endfor
  else:
    %Rechenwerk
    pickup pensquare scaled 2;
    fill (x, 52)--(x + 17, 52)--(x + 17, 35)--(x, 35)--cycle withcolor myblue;
    draw (x, 52)--(x + 17, 52)--(x + 17, 35)--(x, 35)--cycle withcolor mydarkerblue;

    %Pfeile
    pickup defaultpen;
    xmid := 17 / 2;
    drawarrow (x + xmid, 62)--(x + xmid, 53);
    drawarrow (x + xmid, 25)--(x + xmid, 34);
  fi
endfor
label.rt ("Rechenwerke", (160, 35 + 17 / 2));

%Befehle
pickup pensquare scaled 2;
fill (60, 25)--(160, 25)--(160, 0)--(60, 0)--cycle withcolor myblue;
draw (60, 25)--(160, 25)--(160, 0)--(60, 0)--cycle withcolor mydarkerblue;
label ("Befehle", (110, 25 / 2));
endfig
verbatimtex
\end{document}
etex
end
