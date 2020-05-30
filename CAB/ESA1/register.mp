outputtemplate := "%j.mps";

input roundrect;

input mp-colors;

beginfig(1)
  draw (60, 0)--(220, 0) withcolor myblue;
  draw (220, 0)..(234, 6)..(240, 20) withcolor myblue;
  draw (240, 20)--(240, 80) withcolor myblue;
  draw (240, 80)..(234, 94)..(220, 100) withcolor myblue;
  draw (220, 100)--(60, 100) withcolor myblue;
  draw (60, 100)..(46, 94)..(40, 80) withcolor myblue;
  draw (40, 80)--(40, 20) withcolor myblue;
  draw (40, 20)..(46, 6)..(60, 0) withcolor myblue;

  % Input line arrows
  label ("Input", (144, 130));

  for i := 74 step 20 until 214:
    drawarrow (i, 120)--(i, 70);
  endfor

  % Select line
  label ("Select", (15, 93)) withcolor orange;

  draw (0, 85)--(210, 85) withcolor orange;

  % Select line arrows
  for i := 70 step 20 until 210:
    drawarrow (i, 85)--(i, 70) withcolor orange;
  endfor

  % Write line
  label ("Write", (15, 70)) withcolor mygreen;

  draw (0, 79)--(206, 79) withcolor mygreen;

  % Write line arrows
  for i := 66 step 20 until 206:
    drawarrow (i, 79)--(i, 70) withcolor mygreen;
  endfor

  % Bit boxes
  for i := 60 step 20 until 200:
    draw (i + 1, 70)--(i + 19, 70)--(i + 19, 30)--(i + 1, 30)--cycle;
  endfor

  % Bit values
  for i := 70 step 20 until 210:
    label ("0", (i, 50));
  endfor

  % Output line arrows
  for i := 74 step 20 until 214:
    drawarrow (i, 30)--(i, -20);
  endfor

  label ("Output", (144, -30));
endfig
end
