-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Jeu 12 Janvier 2023 à 09:07
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `gestion_des_commandes`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `num_categorie` int(11) NOT NULL,
  `nom_categorie` varchar(20) NOT NULL,
  `cat_remise` int(11) NOT NULL,
  PRIMARY KEY (`num_categorie`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `categories`
--


-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE IF NOT EXISTS `clients` (
  `client_id` int(11) NOT NULL,
  `client_civilite` varchar(20) NOT NULL,
  `client_nom` varchar(20) NOT NULL,
  `client_prenom` varchar(20) NOT NULL,
  `client_dep` int(11) NOT NULL,
  `client_ville` varchar(20) NOT NULL,
  `client_tel` int(11) NOT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `clients`
--


-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

CREATE TABLE IF NOT EXISTS `commandes` (
  `com_num` int(11) NOT NULL,
  `com_date` date NOT NULL,
  `com_montant` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `produit_ref` int(11) NOT NULL,
  PRIMARY KEY (`com_num`),
  KEY `produit_ref` (`produit_ref`),
  KEY `client_id` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `commandes`
--


-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE IF NOT EXISTS `produits` (
  `produit_ref` int(11) NOT NULL,
  `produit_nom` int(20) NOT NULL,
  `produit_prix` int(11) NOT NULL,
  `produit_poids` int(11) NOT NULL,
  `produit_vues` int(11) NOT NULL,
  `produit_stock` int(11) NOT NULL,
  `produit_code` int(11) NOT NULL,
  `num_categorie` int(11) NOT NULL,
  PRIMARY KEY (`produit_ref`),
  KEY `num_categorie` (`num_categorie`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `produits`
--


--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`Client_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `commandes_ibfk_2` FOREIGN KEY (`produit_ref`) REFERENCES `produits` (`produit_ref`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `produits_ibfk_1` FOREIGN KEY (`num_categorie`) REFERENCES `categories` (`num_categorie`) ON DELETE CASCADE ON UPDATE CASCADE;
