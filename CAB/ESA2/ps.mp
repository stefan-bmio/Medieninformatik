outputtemplate := "%j.mps";

verbatimtex
%&latex
\documentclass[10pt]{article}
\begin{document}
etex

beginfig(1)
for i := 0 upto 41:
  label(decimal i, (10 + i * 15, 0));
endfor
pickup pensquare;
draw(10, 10)--(625, 10) withcolor (0, 0, 0);

string alpha[];
alpha[1] := "A";
alpha[2] := "B";
alpha[3] := "C";
alpha[4] := "D";
alpha[5] := "E";

for i := 1 upto 5:
  labelY := 70 - i * 12;
  label.top(alpha[i], (0, labelY));
endfor

color color[];
color1 := (1, 0, 0);
color2 := (0, 1, 0);
color3 := (0, 0, 1);
color4 := (1, 1, 0);
color5 := (1, 0, 1);

runtime1 := 12;
runtime2 := 7;
runtime3 := 4;
runtime4 := 8;
runtime5 := 10;

order1 := 1;
order2 := 2;
order3 := 3;
order4 := 4;
order5 := 5;

prio1 := 1;
prio2 := 0;
prio3 := 2;
prio4 := 2;
prio5 := 1;

elapsed := 0;
counter := 0;
elapsed := 0;
i := 0;
forever: exitif (elapsed = 41);
  if i mod 2 = 0:
    counter := counter + 1;
    if counter = 6: counter := 1; fi
  fi
  index := order[counter];
  if max(prio1, prio2, prio3, prio4, prio5) = prio[index]:
    x := 10 + elapsed * 15;
    y := 72 - index * 12;
    x1 := x + 15;
    y1 := y + 10;
    fill ((x, y)--(x1, y)--(x1, y1)--(x, y1)--cycle) withcolor color[index];
    elapsed := elapsed + 1;
    runtime[index] := runtime[index] - 1;
    if runtime[index] = 0: prio[index] := -1; fi
  fi
  i := i + 1;
endfor

endfig
verbatimtex
\end{document}
etex
end
