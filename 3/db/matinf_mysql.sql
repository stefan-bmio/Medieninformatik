-- phpMyAdmin SQL Dump
-- 
-- Erstellungszeit: 07. Dez 2016 um 09:54
-- 

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `matinf`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `artgru`
--

CREATE TABLE IF NOT EXISTS `artgru` (
  `GRUPPE` varchar(2) NOT NULL DEFAULT '',
  `GRUP_TXT` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`GRUPPE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `artgru`
--

INSERT INTO `artgru` (`GRUPPE`, `GRUP_TXT`) VALUES
('10', 'Workstation'),
('18', 'Auto'),
('20', 'Server'),
('30', 'Monitor'),
('40', 'Drucker'),
('50', 'Software'),
('60', 'Zubehör');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `artst`
--

CREATE TABLE IF NOT EXISTS `artst` (
  `ARTNR` varchar(5) NOT NULL DEFAULT '',
  `ARTBEZ` varchar(25) DEFAULT NULL,
  `EKPREIS` double(7,2) DEFAULT NULL,
  `VPREIS` double(7,2) DEFAULT NULL,
  `MGEHT` varchar(5) DEFAULT NULL,
  `GRUPPE` varchar(2) DEFAULT NULL,
  `KW` int(11) DEFAULT NULL,
  `BESTAND` int(11) DEFAULT NULL,
  PRIMARY KEY (`ARTNR`),
  KEY `ARTST_ARTGRU_FK1` (`GRUPPE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `artst`
--

INSERT INTO `artst` (`ARTNR`, `ARTBEZ`, `EKPREIS`, `VPREIS`, `MGEHT`, `GRUPPE`, `KW`, `BESTAND`) VALUES
('1000', 'transtec 800', 720.00, 749.00, 'Stck', '10', 10, 56),
('1100', 'Trinitron 17', 375.00, 399.00, 'Stck', '30', 10, 47),
('1200', 'transtec 1300', 965.00, 999.00, 'Stck', '10', 20, -5),
('1300', 'hamstation U10', 5340.00, 5499.00, 'Stck', '10', 25, 10),
('1400', 'hamstation U60', 10100.00, 10299.00, 'Stck', '10', 40, 2),
('1500', 'Stylus Photo', 215.00, 249.00, 'Stck', '40', 10, 28),
('1600', 'Stylus Color', 128.00, 149.00, 'Stck', '40', 3, 30),
('1700', 'Trinitron 19', 550.00, 599.00, 'Stck', '30', 5, 17),
('2000', 'Networker Power Edition', 10260.00, 10299.00, 'Stck', '50', 5, 6),
('2100', 'hamserver U220', 9270.00, 9349.00, 'Stck', '20', 3, 6),
('2200', 'hamserver U280', 16290.00, 16399.00, 'Stck', '20', 30, 3),
('2300', 'SCSI-Kabel', 25.00, 29.00, 'm', '60', 34, 350);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `aufkopf`
--

CREATE TABLE IF NOT EXISTS `aufkopf` (
  `AUFNR` int(11) NOT NULL DEFAULT '0',
  `KDNR` int(11) DEFAULT NULL,
  `STATUS` varchar(1) DEFAULT NULL,
  `LS_DATUM` date DEFAULT NULL,
  `LS_NR` int(11) DEFAULT NULL,
  `RG_DATUM` date DEFAULT NULL,
  `RG_NR` int(11) DEFAULT NULL,
  PRIMARY KEY (`AUFNR`),
  KEY `AUFKOPF_AUFSTAT_FK1` (`STATUS`),
  KEY `AUFKOPF_KDST_FK1` (`KDNR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `aufkopf`
--

INSERT INTO `aufkopf` (`AUFNR`, `KDNR`, `STATUS`, `LS_DATUM`, `LS_NR`, `RG_DATUM`, `RG_NR`) VALUES
(1, 500, '3', '2011-12-06', 219, '2011-12-09', 845),
(2, 600, '1', NULL, 0, NULL, 0),
(3, 900, '2', '2011-11-30', 187, '2011-11-30', 107),
(4, 700, '2', '2011-11-17', 198, '2011-11-18', 95),
(5, 100, '0', NULL, 0, NULL, 0),
(6, 100, NULL, NULL, 0, NULL, 0);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `aufpos`
--

CREATE TABLE IF NOT EXISTS `aufpos` (
  `AUFNR` int(11) NOT NULL DEFAULT '0',
  `POSNR` int(11) NOT NULL DEFAULT '0',
  `MENGE` int(11) DEFAULT NULL,
  `MENGEGEL` int(11) DEFAULT NULL,
  `ARTNR` varchar(5) DEFAULT NULL,
  `TERMIN` date DEFAULT NULL,
  `PREIS` double(7,2) DEFAULT NULL,
  PRIMARY KEY (`AUFNR`,`POSNR`),
  KEY `AUFPOS_ARTST_FK1` (`ARTNR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `aufpos`
--

INSERT INTO `aufpos` (`AUFNR`, `POSNR`, `MENGE`, `MENGEGEL`, `ARTNR`, `TERMIN`, `PREIS`) VALUES
(1, 1, 8, 5, '2000', '2012-02-13', 10299.00),
(1, 2, 4, 6, '1000', '2012-02-16', 699.00),
(1, 3, 1, 1, '1200', '2012-02-28', 999.00),
(2, 1, 3, 0, '1200', '2011-12-12', 999.00),
(2, 2, 2, 0, '1700', '2011-12-14', 599.00),
(3, 1, 5, 5, '1500', '2012-01-12', 249.00),
(3, 2, 50, 45, '2300', '2012-01-13', 29.00),
(4, 1, 12, 13, '1400', '2012-03-01', 10000.00),
(5, 1, 6, 0, '1100', '2012-01-31', 399.00),
(5, 2, 15, 0, '2300', '2012-01-25', 29.00),
(5, 3, 4, 0, '1700', '2012-01-25', 599.00),
(5, 4, 9, 0, '1600', '2012-01-31', 149.00);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `aufstat`
--

CREATE TABLE IF NOT EXISTS `aufstat` (
  `STATUS` varchar(1) NOT NULL DEFAULT '',
  `STAT_TXT` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`STATUS`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `aufstat`
--

INSERT INTO `aufstat` (`STATUS`, `STAT_TXT`) VALUES
('0', 'erfasst'),
('1', 'bestätigt'),
('2', 'fakturiert'),
('3', 'geliefert');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kdbra`
--

CREATE TABLE IF NOT EXISTS `kdbra` (
  `BRANCHE` varchar(2) NOT NULL DEFAULT '',
  `GRUP_TXT` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`BRANCHE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `kdbra`
--

INSERT INTO `kdbra` (`BRANCHE`, `GRUP_TXT`) VALUES
('1', 'Hardware'),
('2', 'Software'),
('3', 'Zubehör');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kdgru`
--

CREATE TABLE IF NOT EXISTS `kdgru` (
  `KDGRUPPE` varchar(2) NOT NULL DEFAULT '',
  `GRUP_TXT` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`KDGRUPPE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `kdgru`
--

INSERT INTO `kdgru` (`KDGRUPPE`, `GRUP_TXT`) VALUES
('1', 'Großabnehmer'),
('2', 'Normalkunde'),
('3', 'Kleinabnehmer');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kdst`
--

CREATE TABLE IF NOT EXISTS `kdst` (
  `KDNR` int(11) NOT NULL DEFAULT '0',
  `FIRMA` varchar(25) DEFAULT NULL,
  `PLZ` varchar(5) DEFAULT NULL,
  `ORT` varchar(25) DEFAULT NULL,
  `STRASSE` varchar(25) DEFAULT NULL,
  `VERTRETER` int(11) DEFAULT NULL,
  `SALDO` double(8,2) DEFAULT NULL,
  `UMSSOLL` double(8,2) DEFAULT NULL,
  `UMSHABEN` double(8,2) DEFAULT NULL,
  `KDGRUPPE` varchar(2) DEFAULT NULL,
  `BRANCHE` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`KDNR`),
  KEY `KDST_KDBRA_FK1` (`BRANCHE`),
  KEY `KDST_KDGRU_FK1` (`KDGRUPPE`),
  KEY `KDST_VERT_FK1` (`VERTRETER`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `kdst`
--

INSERT INTO `kdst` (`KDNR`, `FIRMA`, `PLZ`, `ORT`, `STRASSE`, `VERTRETER`, `SALDO`, `UMSSOLL`, `UMSHABEN`, `KDGRUPPE`, `BRANCHE`) VALUES
(100, 'American Megatrends Inc.', '80678', 'München', 'Bahnhofstr. 3', 3, -5000.00, 5000.00, 0.00, '3', '3'),
(200, 'Knürr AG', '70184', 'Stuttgart', 'Feldstr. 82', 5, 500.00, 2500.00, 3000.00, '3', '3'),
(300, 'Powerware GmbH', '81929', 'München', 'Karlsstr. 25', 4, -3000.00, 3000.00, 0.00, '3', '2'),
(400, 'Datalogic GmbH', '90431', 'Nürnberg', 'Uferweg 20', 1, 500.00, 0.00, 500.00, '3', '2'),
(500, 'ICP Vortex', '70327', 'Stuttgart', 'Hauptstr. 33', 1, -150000.00, 150000.00, 0.00, '1', '1'),
(600, 'transtec AG', '50769', 'Köln', 'Oberweg 47', 1, -17440.00, 30000.00, 12560.00, '2', '1'),
(700, 'Lantronix', '01217', 'Dresden', 'Grüner Weg 1', 2, -75000.00, 125000.00, 50000.00, '1', '3'),
(800, 'Tandberg', '44388', 'Dortmund', 'Industriestr. 6', 7, 234.00, 1000.00, 1234.00, '3', '3'),
(900, 'Tektronix', '50999', 'Köln', 'Hauptstr. 153', 6, 0.00, 0.00, 0.00, '3', '3');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `vert`
--

CREATE TABLE IF NOT EXISTS `vert` (
  `VERTRETER` int(11) NOT NULL DEFAULT '0',
  `NAME` varchar(15) DEFAULT NULL,
  `VORNAME` varchar(15) DEFAULT NULL,
  `PLZ` varchar(5) DEFAULT NULL,
  `ORT` varchar(25) DEFAULT NULL,
  `STADTTEIL` varchar(20) DEFAULT NULL,
  `STRASSE` varchar(25) DEFAULT NULL,
  `PROV` double(6,2) DEFAULT NULL,
  `CHEF` int(11) DEFAULT NULL,
  PRIMARY KEY (`VERTRETER`),
  KEY `VERT_VERT_FK1` (`CHEF`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `vert`
--

INSERT INTO `vert` (`VERTRETER`, `NAME`, `VORNAME`, `PLZ`, `ORT`, `STADTTEIL`, `STRASSE`, `PROV`, `CHEF`) VALUES
(1, 'Fischer', 'Paul', '12157', 'Berlin', 'Friedenau', 'Menzelstr. 3', 3.30, 4),
(2, 'Grimm', 'Mario', '12209', 'Berlin', 'Lichterfelde', 'Koloniestr. 57', 4.20, 7),
(3, 'Kaufmann', 'Fred', '12487', 'Berlin', 'Johannisthal', 'Eschenweg 12', 4.90, 4),
(4, 'Lehmann', 'Bernd', '13597', 'Berlin', 'Spandau', 'Freiheit 34', 5.40, 4),
(5, 'Leistner', 'Peter', '13159', 'Berlin', 'Blankenfelde', 'Talweg 21', 3.70, 7),
(6, 'List', 'Michael', '13595', 'Berlin', 'Spandau', 'Ulmenstr. 10', 4.20, 7),
(7, 'Meier', 'Hans', '12487', 'Berlin', 'Johannisthal', 'Südostallee 8', 5.40, 7),
(8, 'Müller', 'Peter', '80000', 'München', NULL, 'Hauptstr. 5', 2.00, 1);

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `artst`
--
ALTER TABLE `artst`
  ADD CONSTRAINT `ARTST_ARTGRU_FK1` FOREIGN KEY (`GRUPPE`) REFERENCES `artgru` (`GRUPPE`);

--
-- Constraints der Tabelle `aufkopf`
--
ALTER TABLE `aufkopf`
  ADD CONSTRAINT `AUFKOPF_AUFSTAT_FK1` FOREIGN KEY (`STATUS`) REFERENCES `aufstat` (`STATUS`),
  ADD CONSTRAINT `AUFKOPF_KDST_FK1` FOREIGN KEY (`KDNR`) REFERENCES `kdst` (`KDNR`);

--
-- Constraints der Tabelle `aufpos`
--
ALTER TABLE `aufpos`
  ADD CONSTRAINT `AUFPOS_ARTST_FK1` FOREIGN KEY (`ARTNR`) REFERENCES `artst` (`ARTNR`),
  ADD CONSTRAINT `AUFPOS_AUFKOPF_FK1` FOREIGN KEY (`AUFNR`) REFERENCES `aufkopf` (`AUFNR`);

--
-- Constraints der Tabelle `kdst`
--
ALTER TABLE `kdst`
  ADD CONSTRAINT `KDST_KDBRA_FK1` FOREIGN KEY (`BRANCHE`) REFERENCES `kdbra` (`BRANCHE`),
  ADD CONSTRAINT `KDST_KDGRU_FK1` FOREIGN KEY (`KDGRUPPE`) REFERENCES `kdgru` (`KDGRUPPE`),
  ADD CONSTRAINT `KDST_VERT_FK1` FOREIGN KEY (`VERTRETER`) REFERENCES `vert` (`VERTRETER`);

--
-- Constraints der Tabelle `vert`
--
ALTER TABLE `vert`
  ADD CONSTRAINT `VERT_VERT_FK1` FOREIGN KEY (`CHEF`) REFERENCES `vert` (`VERTRETER`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
