import React, { useState, useEffect } from "react";
import "./Episodes.css";

const Episodes = ({ character }) => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function fetchEpisodes() {
            const promises = character.episode.map(url =>
                fetch(url).then(response => response.json())
            );
            const episodesData = await Promise.all(promises);
            setEpisodes(episodesData);
        }

        fetchEpisodes();
    }, [character.episode]);

    return (
        <div className="episodes">
            <h2>Episodes {episodes.length}/{character.episode.length}</h2>
            <div className="episodes__section">
                {episodes.map(episode => (
                    <div className="episode__item" key={episode.id}>
                        <h3>{episode.name}</h3>
                        <p>{episode.episode}</p>
                        <p>{episode.air_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Episodes;
