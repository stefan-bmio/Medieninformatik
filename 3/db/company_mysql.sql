-- phpMyAdmin SQL Dump
-- 
--  

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `company`
--

-- --------------------------------------------------------

--
-- 
--

CREATE TABLE IF NOT EXISTS `dept` (
  `DEPTNO` int(5) NOT NULL DEFAULT '0',
  `DEPTNAME` varchar(14) DEFAULT NULL,
  `LOCATION` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`DEPTNO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 
--

INSERT INTO `dept` (`DEPTNO`, `DEPTNAME`, `LOCATION`) VALUES
(10, 'ACCOUNTING', 'NEW YORK'),
(20, 'RESEARCH', 'DALLAS'),
(30, 'SALES', 'CHICAGO'),
(40, 'OPERATIONS', 'BOSTON');

-- --------------------------------------------------------

--
-- 
--

CREATE TABLE IF NOT EXISTS `emp` (
  `EMPNO` int(5) NOT NULL DEFAULT '0',
  `EMPNAME` varchar(10) DEFAULT NULL,
  `JOB` varchar(9) DEFAULT NULL,
  `MANAGER` int(5) DEFAULT NULL,
  `HIREDATE` date DEFAULT NULL,
  `SALARY` int(5) DEFAULT NULL,
  `COMMISSION` int(5) DEFAULT NULL,
  `DEPTNO` int(5) DEFAULT NULL,
  PRIMARY KEY (`EMPNO`),
  KEY `EMP_DEPT_FK1` (`DEPTNO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 
--

INSERT INTO `emp` (`EMPNO`, `EMPNAME`, `JOB`, `MANAGER`, `HIREDATE`, `SALARY`, `COMMISSION`, `DEPTNO`) VALUES
(7369, 'SMITH', 'CLERK', 7902, '2007-12-17', 800, NULL, 20),
(7499, 'ALLEN', 'SALESMAN', 7698, '2008-02-20', 1600, 300, 30),
(7521, 'WARD', 'SALESMAN', 7698, '2009-02-22', 1250, 500, 30),
(7566, 'JONES', 'MANAGER', 7839, '2010-04-02', 2975, NULL, 20),
(7654, 'MARTIN', 'SALESMAN', 7698, '2010-09-28', 1250, 1400, 30),
(7698, 'BLAKE', 'MANAGER', 7839, '2007-05-01', 2850, NULL, 30),
(7782, 'CLARK', 'MANAGER', 7839, '2004-06-09', 2450, NULL, 10),
(7788, 'SCOTT', 'ANALYST', 7566, '2010-04-19', 3000, NULL, 20),
(7839, 'KING', 'PRESIDENT', NULL, '1999-11-17', 5000, NULL, 10),
(7844, 'TURNER', 'SALESMAN', 7698, '2007-09-08', 1500, 0, 30),
(7876, 'ADAMS', 'CLERK', 7788, '2004-05-23', 1100, NULL, 20),
(7900, 'JAMES', 'CLERK', 7698, '2007-12-03', 950, NULL, 30),
(7902, 'FORD', 'ANALYST', 7566, '2008-12-03', 3000, NULL, 20),
(7934, 'MILLER', 'CLERK', 7782, '2011-01-23', 1300, NULL, 10);

-- --------------------------------------------------------

--
-- 
--

CREATE TABLE IF NOT EXISTS `job` (
  `JOBNO` varchar(2) NOT NULL DEFAULT '',
  `JOBNAME` varchar(20) DEFAULT NULL,
  `CITY` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`JOBNO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 
--

INSERT INTO `job` (`JOBNO`, `JOBNAME`, `CITY`) VALUES
('J1', 'Sorter', 'Paris'),
('J2', 'Punch', 'Rome'),
('J3', 'Reader', 'Athens'),
('J4', 'Console', 'Athens'),
('J5', 'Collator', 'London'),
('J6', 'Terminal', 'Oslo'),
('J7', 'Tape', 'London');

-- --------------------------------------------------------

--
-- 
--

CREATE TABLE IF NOT EXISTS `part` (
  `PARTNO` varchar(2) NOT NULL DEFAULT '',
  `PARTNAME` varchar(10) DEFAULT NULL,
  `COLOR` varchar(10) DEFAULT NULL,
  `WEIGHT` int(5) DEFAULT NULL,
  `CITY` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`PARTNO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 
--

INSERT INTO `part` (`PARTNO`, `PARTNAME`, `COLOR`, `WEIGHT`, `CITY`) VALUES
('P1', 'Nut', 'Red', 12, 'London'),
('P2', 'Bolt', 'Green', 17, 'Paris'),
('P3', 'Screw', 'Blue', 17, 'Rome'),
('P4', 'Screw', 'Red', 14, 'London'),
('P5', 'Cam', 'Blue', 12, 'Paris'),
('P6', 'Cog', 'Red', 19, 'London');

-- --------------------------------------------------------

--
-- 
--

CREATE TABLE IF NOT EXISTS `supplier` (
  `SUPPNO` varchar(2) NOT NULL DEFAULT '',
  `SUPPNAME` varchar(10) DEFAULT NULL,
  `STATUS` int(5) DEFAULT NULL,
  `CITY` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`SUPPNO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 
--

INSERT INTO `supplier` (`SUPPNO`, `SUPPNAME`, `STATUS`, `CITY`) VALUES
('S1', 'Smith', 20, 'London'),
('S2', 'Jones', 10, 'Paris'),
('S3', 'Blake', 30, 'Paris'),
('S4', 'Clark', 20, 'London'),
('S5', 'Adams', 30, 'Athens');

-- --------------------------------------------------------

--
-- 
--

CREATE TABLE IF NOT EXISTS `supp_part` (
  `SUPPNO` varchar(2) NOT NULL DEFAULT '',
  `PARTNO` varchar(2) NOT NULL DEFAULT '',
  `QUANTITY` int(5) DEFAULT NULL,
  PRIMARY KEY (`SUPPNO`,`PARTNO`),
  KEY `SUPP_PART_PART_FK1` (`PARTNO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 
--

INSERT INTO `supp_part` (`SUPPNO`, `PARTNO`, `QUANTITY`) VALUES
('S1', 'P1', 300),
('S1', 'P2', 200),
('S1', 'P3', 400),
('S1', 'P4', 200),
('S1', 'P5', 100),
('S1', 'P6', 100),
('S2', 'P1', 300),
('S2', 'P2', 400),
('S3', 'P2', 200),
('S4', 'P2', 200),
('S4', 'P4', 300),
('S4', 'P5', 400);

-- --------------------------------------------------------

--
-- 
--

CREATE TABLE IF NOT EXISTS `supp_part_job` (
  `SUPPNO` varchar(2) NOT NULL DEFAULT '',
  `PARTNO` varchar(2) NOT NULL DEFAULT '',
  `JOBNO` varchar(2) NOT NULL DEFAULT '',
  `QUANTITY` int(5) DEFAULT NULL,
  PRIMARY KEY (`SUPPNO`,`PARTNO`,`JOBNO`),
  KEY `SUPP_PART_JOB_JOB_FK1` (`JOBNO`),
  KEY `SUPP_PART_JOB_PART_FK1` (`PARTNO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 
--

INSERT INTO `supp_part_job` (`SUPPNO`, `PARTNO`, `JOBNO`, `QUANTITY`) VALUES
('S1', 'P1', 'J1', 200),
('S1', 'P1', 'J4', 700),
('S2', 'P3', 'J1', 400),
('S2', 'P3', 'J2', 200),
('S2', 'P3', 'J3', 200),
('S2', 'P3', 'J4', 500),
('S2', 'P3', 'J5', 600),
('S2', 'P3', 'J6', 400),
('S2', 'P3', 'J7', 800),
('S2', 'P5', 'J2', 100),
('S3', 'P3', 'J1', 200),
('S3', 'P4', 'J2', 500),
('S4', 'P6', 'J3', 300),
('S4', 'P6', 'J7', 300),
('S5', 'P1', 'J4', 100),
('S5', 'P2', 'J2', 200),
('S5', 'P2', 'J4', 100),
('S5', 'P2', 'J5', 500),
('S5', 'P3', 'J4', 200),
('S5', 'P4', 'J4', 800),
('S5', 'P5', 'J4', 400),
('S5', 'P5', 'J7', 100),
('S5', 'P6', 'J2', 200),
('S5', 'P6', 'J4', 500);

--
-- 
--

--
-- 
--
ALTER TABLE `emp`
  ADD CONSTRAINT `EMP_DEPT_FK1` FOREIGN KEY (`DEPTNO`) REFERENCES `dept` (`DEPTNO`);

--
-- 
--
ALTER TABLE `supp_part`
  ADD CONSTRAINT `SUPP_PART_PART_FK1` FOREIGN KEY (`PARTNO`) REFERENCES `part` (`PARTNO`),
  ADD CONSTRAINT `SUPP_PART_SUPPLIER_FK1` FOREIGN KEY (`SUPPNO`) REFERENCES `supplier` (`SUPPNO`);

--
-- 
--
ALTER TABLE `supp_part_job`
  ADD CONSTRAINT `SUPP_PART_JOB_JOB_FK1` FOREIGN KEY (`JOBNO`) REFERENCES `job` (`JOBNO`),
  ADD CONSTRAINT `SUPP_PART_JOB_PART_FK1` FOREIGN KEY (`PARTNO`) REFERENCES `part` (`PARTNO`),
  ADD CONSTRAINT `SUPP_PART_JOB_SUPPLIER_FK1` FOREIGN KEY (`SUPPNO`) REFERENCES `supplier` (`SUPPNO`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
