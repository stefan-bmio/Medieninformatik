prologues := 2;
outputtemplate := "%j.mps";

verbatimtex
%&latex
\documentclass[10pt]{article}
\begin{document}
etex

input mp-colors;

beginfig(1);
%CPU
pickup pensquare scaled 2;
fill (0, 110)--(145, 110)--(145, 40)--(0, 40)--cycle withcolor myblue;
draw (0, 110)--(145, 110)--(145, 40)--(0, 40)--cycle withcolor mydarkerblue;
label ("CPU", (145 / 2, 85 + 25 / 2));
for i := 10 step 10 + 57 until 97:
  fill (i, 85)--(i + 57, 85)--(i + 57, 50)--(i, 50)--cycle withcolor white;
  draw (i, 85)--(i + 57, 85)--(i + 57, 50)--(i, 50)--cycle withcolor mydarkerblue;
endfor
label ("Steuerwerk", (10 + 57 / 2, 50 + 35 / 2));
label ("Rechenwerk", (10 + 57 + 10 + 57 / 2, 50 + 35 / 2));

%Speicherwerk
fill (155, 110)--(155 + 135 / 2, 110)--(155 + 135 / 2, 40)--(155, 40)--cycle withcolor myblue;
draw (155, 110)--(155 + 135 / 2, 110)--(155 + 135 / 2, 40)--(155, 40)--cycle withcolor mydarkerblue;
label ("Speicherwerk", (155 + 135 / 4, 75));

%Ein-/ Ausgabewerk
fill (165 + 135 / 2, 110)--(300, 110)--(300, 40)--(165 + 135 / 2, 40)--cycle withcolor myblue;
draw (165 + 135 / 2, 110)--(300, 110)--(300, 40)--(165 + 135 / 2, 40)--cycle withcolor mydarkerblue;
label (
  btex
    \begin{tabular}{c} Ein-/ \\ Ausgabewerk \\ \end{tabular}
  etex,
  (300 - 135 / 4, 75)
);

% Bus arrows
pickup defaultpen;
drawdblarrow (10 + 57 / 2, 37)--(10 + 57 / 2, 23);
drawdblarrow (77 + 57 / 2, 37)--(77 + 57 / 2, 23);

drawdblarrow (155 + 135 / 4, 37)--(155 + 135 / 4, 23);
drawdblarrow (165 + 135 / 2 + 135 / 4, 37)--(165 + 135 / 2 + 135 / 4, 23);

% Bus system
pickup pensquare scaled 2;
fill (0, 20)--(300, 20)--(300, 0)--(0, 0)--cycle withcolor mydarkblue;
draw (0, 20)--(300, 20)--(300, 0)--(0, 0)--cycle withcolor mydarkerblue;
label ("Bus-System", (150, 10)) withcolor white;
\endfig
verbatimtex
\end{document}
etex
\end
