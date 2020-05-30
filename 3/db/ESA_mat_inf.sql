# Aufg. 1
SELECT
  kdbra.GRUP_TXT,
  round(sum((ap.menge - ap.mengegel) * ap.preis), 0) AUFTRAGSBESTAND
FROM aufpos ap
  JOIN aufkopf ak ON ap.aufnr = ak.aufnr
  JOIN kdst ON ak.kdnr = kdst.kdnr
  JOIN kdbra ON kdst.branche = kdbra.branche
  JOIN aufstat a ON ak.status = a.status
WHERE ap.mengegel <= ap.menge
GROUP BY kdbra.GRUP_TXT;

# Aufg. 2
SELECT
  concat(artnr, ': ', artbez) ARTIKEL,
  BESTAND
FROM artst
WHERE artnr NOT IN (
  SELECT artnr
  FROM aufpos
)
ORDER BY bestand;

# Aufg. 3
SELECT
  kdst.firma                                 FIRMA,
  ak.aufnr                                   AUFNR,
  ar.artbez                                  ARTBEZ,
  round(ap.menge * (ap.preis - ar.vpreis)) ABWEICHUNG
FROM artst ar
  JOIN aufpos ap ON ar.artnr = ap.artnr
  JOIN aufkopf ak ON ap.aufnr = ak.aufnr
  JOIN kdst ON ak.kdnr = kdst.kdnr
WHERE ar.vpreis <> ap.preis;

# Aufg. 4
SELECT
  kdst.KDNR,
  firma,
  concat(plz, ' ', ort, ', ', strasse) ADRESSE,
  if(ak.aufnr IS NULL, 0, ak.aufnr)    AUFNR
FROM kdst
  LEFT JOIN aufkopf ak ON kdst.kdnr = ak.kdnr;
