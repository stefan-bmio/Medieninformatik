outputtemplate := "%j.mps";

verbatimtex
%&latex
\documentclass[10pt]{article}
\begin{document}
etex

beginfig(1)
for i := 0 upto 40:
  label(decimal i, (10 + i * 15, 0));
endfor
pickup pensquare;
draw(10, 10)--(610, 10) withcolor (0, 0, 0);

color color[];
color1 := (1, 0, 0);
color2 := (0, 1, 0);
color3 := (0, 0, 1);
color4 := (1, 1, 0);
color5 := (1, 0, 1);

runtime1 := 2;
runtime2 := 3;
runtime3 := 6;
runtime4 := 10;
runtime5 := 19;
elapsed := 0;
for i := 1 upto 5:
  x := 10 + elapsed * 15;
  y := 70 - i * 12;
  label.top("P" & decimal i, (0, y));
  y := y + 2;
  fill((x, y)--(x + runtime[i] * 15, y)--(x + runtime[i] * 15, y + 10)--(x, y + 10)--cycle) withcolor color[i];
  elapsed := elapsed + runtime[i];
endfor

endfig
verbatimtex
\end{document}
etex
end
