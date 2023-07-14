CREATE DATABASE IF NOT EXISTS `iot_data` CHARACTER SET utf8mb4;

USE `iot_data`;

CREATE TABLE IF NOT EXISTS oil_well_events (
        id INT AUTO_INCREMENT PRIMARY KEY,
        clientid VARCHAR(255),
        event VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE IF NOT EXISTS oil_well_data (
        id INT AUTO_INCREMENT PRIMARY KEY,
        oil_well_id VARCHAR(50),
        name VARCHAR(20),
        oilPressure DECIMAL(10, 2),
        casingPressure DECIMAL(10, 2),
        backPressure DECIMAL(10, 2),
        wellheadTemperature DECIMAL(10, 2),
        voltage DECIMAL(10, 2),
        current DECIMAL(10, 2),
        flowRate DECIMAL(10, 2),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );