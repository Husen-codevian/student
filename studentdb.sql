-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 09, 2020 at 06:43 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studentdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(6) UNSIGNED NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `pocket_money` int(10) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `first_name`, `last_name`, `email`, `pocket_money`, `password`, `is_deleted`) VALUES
(1, 'husen', 'shikalgar', 'husen@gmail.com', 55000, '81dc9bdb52d04dc20036dbd8313ed055', 0),
(2, 'raj', 'sharam', 'raj@gmail.com', 24000, 'c460dc0f18fc309ac07306a4a55d2fd6', 0),
(3, 'rahul', 'singh', 'rahul@gmail.com', 6521, '9b6b49274600928e603580cb381b299e', 0),
(4, 'mukesh', 'kashid', 'mukesh@gmail.com', 42000, '3531d0b9e7d83caaef7ecf9ec9b363f2', 0),
(5, 'suyash', 'kadam', 'suyash@gmail.com', 5632, '0e4996ce1ba7f629bb900d7a38b2dc48', 0),
(6, 'vasim', 'naik', 'vasim@gmail.com', 12000, 'd92d7ec47187a662aacda2d4b4c7628e', 0),
(7, 'salim', 'khan', 'salim@gmail.com', 14200, '299fb2142d7de959380f91c01c3a293c', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD KEY `p_money` (`pocket_money`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
