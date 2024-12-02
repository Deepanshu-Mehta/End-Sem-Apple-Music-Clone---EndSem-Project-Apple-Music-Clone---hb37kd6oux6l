
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Songs = ({ token }) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [song, setSong] = useState(null);

    useEffect(() => {
        fetchSong();
        // eslint-disable-next-line
    }, []);

    const fetchSong = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/musicx/song/${id}`, {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'hb37kd6oux6l',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setSong(data.data);
        } catch (error) {
            console.error('Error fetching song:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-[#262628] text-white pt-[70px] flex justify-center items-center h-screen'>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <p>Loading...</p>
                </div>
            ) : (
                song && (
                    <div>
                        <h1 className='font-[900] text-4xl'>{song.title}</h1>
                        <img src={song.thumbnail} alt={song.title + ' thumbnail'} />
                        <p>{song.description}</p>
                        <div>
                            {song.artist.map((artist) => (
                                <span key={artist._id}>{artist.name}, </span>
                            ))}
                        </div>
                        <audio src={song.audio_url} controls className='mb-3 '></audio>
                    </div>
                )
            )}
        </div>
    );
};

export default Songs;
