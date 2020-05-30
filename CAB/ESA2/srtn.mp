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

order1 := 4;
order2 := 1;
order3 := 5;
order4 := 3;
order5 := 2;

runtime1 := 2;
runtime2 := 3;
runtime3 := 6;
runtime4 := 10;
runtime5 := 19;

counter := 0;
elapsed := 0;
i := 0;
forever: exitif (elapsed = 40);
  if i mod 2 = 0:
    counter := counter + 1;
    if counter = 6: counter := 1; fi
  fi
  index := order[counter];
  show decimal index & ":" & decimal runtime[index];
  if (min(runtime1, runtime2, runtime3, runtime4, runtime5) = runtime[index]) and (runtime[index] < 100):
    x := 10 + elapsed * 15;
    y := 72 - index * 12;
    x1 := x + 15;
    y1 := y + 10;
    fill ((x, y)--(x1, y)--(x1, y1)--(x, y1)--cycle) withcolor color[index];
    elapsed := elapsed + 1;
    runtime[index] := runtime[index] - 1;
    if runtime[index] = 0: runtime[index] := 100; fi
  fi
  i := i + 1;
endfor

endfig
verbatimtex
\end{document}
etex
end
