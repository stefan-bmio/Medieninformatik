#Aufg. 1
SELECT
  s1.suppno WEITERERLIEFERANT,
  s1.CITY,
  s2.suppno LIEFERANT
FROM supplier s1
  JOIN supplier s2 ON s1.city = s2.city AND s2.suppno IN ('S1', 'S2')
WHERE s1.suppno NOT IN ('S1', 'S2');

#Aufg. 2
SELECT
  EMPNAME,
  JOB,
  SALARY
FROM emp
WHERE job = (
  SELECT job
  FROM emp
  WHERE empname = 'FORD'
)
      AND empname <> 'FORD';

#Aufg. 3
SELECT
  SALARY,
  JOB,
  EMPNAME,
  DEPTNO
FROM emp
WHERE salary > (
  SELECT max(salary)
  FROM emp
  WHERE deptno = 30
)
ORDER BY salary DESC;

#Aufg. 4
SELECT
  EMPNAME,
  JOB
FROM emp
WHERE deptno = 10
      AND job IN (
  SELECT job
  FROM emp
  WHERE deptno = 30
);

/* Eigene Aufgabenstellung
 * Lassen Sie sich bitte die Wertmäßige Abweichung des Gehalts vom Durchschnittsgehalt der jeweiligen Abteilung
 * von denjenigen Mitarbeitern auflisten, die vor 2010 eingestellt wurden. In der Tabelle soll weiterhin das 
 * Durchschnittsgehalt und der Name der Abteilung und die Nummer, der Name, das Anstellungsdatum und das Gehalt 
 * des Mitarbeiters  angezeigt werden. Die Tabelle soll nach Abteilungsname und Höhe der Abweichung sortiert sein.
 */
SELECT
  d.DEPTNAME,
  sub_e.avg_salary            DURCHSCHNITTSGEHALT,
  e.EMPNO,
  e.EMPNAME,
  HIREDATE,
  e.SALARY,
  e.SALARY - sub_e.avg_salary ABWEICHUNG
FROM emp e
  JOIN (
         SELECT
           deptno,
           round(avg(salary), 2) avg_salary
         FROM emp
         GROUP BY deptno
       ) sub_e ON e.deptno = sub_e.deptno
  JOIN dept d ON e.deptno = d.deptno
WHERE year(hiredate) < 2010
ORDER BY d.deptname, abweichung;

