import React from "react";
// IMPORTANTE: Deberás reemplazar estas imágenes por capturas reales de tus proyectos
import magicworldImg from '../assets/images/magicworld.png'; // Ej: Captura de tu noria 3D
import pandemicImg from '../assets/images/pandemic.png';     // Ej: Captura del tablero web
import steamImg from '../assets/images/steam.png';           // Ej: Captura de la interfaz de SteamGamesHub
import meerkattersImg from '../assets/images/meerkatters.png'; // Ej: Captura de la app móvil

import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://github.com/ManuelAB09/magicworld" target="_blank" rel="noreferrer">
                        <img src={magicworldImg} className="zoom" alt="MagicWorld thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/ManuelAB09/magicworld" target="_blank" rel="noreferrer">
                        <h2>MagicWorld (TFG)</h2>
                    </a>
                    <p>An amusement park management system developed from scratch. Features interactive 3D models of rides (roller coasters, Ferris wheels), AI administration chatbot, monitoring dashboard, and more. Built with Spring Boot and Angular.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/gii-is-DP1/DP1-2024-2025--l3-4" target="_blank" rel="noreferrer">
                        <img src={pandemicImg} className="zoom" alt="Pandemic thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/gii-is-DP1/DP1-2024-2025--l3-4" target="_blank" rel="noreferrer">
                        <h2>Pandemic: Web Game</h2>
                    </a>
                    <p>A collaborative web-based video game inspired by Pandemic Hot Zone. Awarded as the best project in the "Software Design and Testing I" course, earning Highest Honors. Includes an online demo <a href="https://www.youtube.com/watch?v=gxbQsZ0weaUÍ" target="_blank" rel="noreferrer">in the following link</a>.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/steamgames-hub/steamgames-hub" target="_blank" rel="noreferrer">
                        <img src={steamImg} className="zoom" alt="SteamGamesHub thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/steamgames-hub/steamgames-hub" target="_blank" rel="noreferrer">
                        <h2>SteamGamesHub</h2>
                    </a>
                    <p>A web application for managing Steam game data. This project focuses heavily on modern infrastructure, utilizing Docker containers and automated CI/CD pipelines.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/ManuelAB09/ISPP" target="_blank" rel="noreferrer">
                        <img src={meerkattersImg} className="zoom" alt="Study Communities thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/ManuelAB09/ISPP" target="_blank" rel="noreferrer">
                        <h2>Meerkatters</h2>
                    </a>
                    <p>A cross-platform mobile and web application connecting students, teachers and academies based on courses and subjects. Features hybrid geolocation for study spots and a freemium content repository. Built with React , Spring Boot, and PostgreSQL.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;