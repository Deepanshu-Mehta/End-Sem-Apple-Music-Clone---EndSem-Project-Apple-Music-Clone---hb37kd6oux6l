import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Home = ({ setButtonText, setButtonPath }) => {
    const router = useNavigate();
    const scrollAmount = 265;

    setButtonText('Sign In');
    setButtonPath('/signin');

    const [loading, setLoading] = useState(true);

    const [trending, setTrendingSongs] = useState([]);
    const [week20, setWeek20] = useState([]);
    const [month50, setMonth50] = useState([]);
    const [evergreen, setEvergreen] = useState([]);
    const [happy, setHappy] = useState([]);
    const [romantic, setRomantic] = useState([]);
    const [excited, setExcited] = useState([]);
    const [sad, setSad] = useState([]);

    const refs = {
        trending: useRef(null),
        week20: useRef(null),
        month50: useRef(null),
        evergreen: useRef(null),
        happy: useRef(null),
        romantic: useRef(null),
        excited: useRef(null),
        sad: useRef(null),
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        setLoading(true);
        try {
            const responses = await Promise.all([
                fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs', { headers: { 'accept': 'application/json', 'projectID': 'hb37kd6oux6l' } }),
                fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 20 of this week', { headers: { 'accept': 'application/json', 'projectID': 'hb37kd6oux6l' } }),
                fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 50 of this month', { headers: { 'accept': 'application/json', 'projectID': 'hb37kd6oux6l' } }),
                fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen melodies', { headers: { 'accept': 'application/json', 'projectID': 'hb37kd6oux6l' } }),
                fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=happy', { headers: { 'accept': 'application/json', 'projectID': 'hb37kd6oux6l' } }),
                fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic', { headers: { 'accept': 'application/json', 'projectID': 'hb37kd6oux6l' } }),
                fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=excited', { headers: { 'accept': 'application/json', 'projectID': 'hb37kd6oux6l' } }),
                fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=sad', { headers: { 'accept': 'application/json', 'projectID': 'hb37kd6oux6l' } })
            ]);

            const data = await Promise.all(responses.map(response => response.json()));

            setTrendingSongs(data[0].data);
            setWeek20(data[1].data);
            setMonth50(data[2].data);
            setEvergreen(data[3].data);
            setHappy(data[4].data);
            setRomantic(data[5].data);
            setExcited(data[6].data);
            setSad(data[7].data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderCategory = (title, songs, ref) => (
        <div className='category'>
            <h1 className='font-[900] text-4xl px-5 py-2'>{title}</h1>
            <div className='flex flex-row justify-center'>
                <button className="text-inherit cursor-pointer bg-transparent h-[250px] w-[30px] m-[5px] rounded-md border-[none]"
                    onClick={() => {
                        const container = ref.current;
                        container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                    }}>
                    <h1 className='text-white text-2xl'>{'◀'}</h1>
                </button>
                <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' ref={ref}>
                    {songs.map((item) => (
                        <div key={item._id} className='m-2' onClick={() => router(`/song/${item._id}`)}>
                            <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[250px] w-[250px] max-w-none' />
                            <h2 className='font-[900]'>{item.title}</h2>
                            {item.artist.map((artist) => (
                                <span key={artist._id} className='text-slate-400'>{artist.name}, </span>
                            ))}
                        </div>
                    ))}
                </div>
                <button className="text-inherit cursor-pointer bg-transparent h-[250px] w-[30px] m-[5px] rounded-md border-[none]"
                    onClick={() => {
                        const container = ref.current;
                        container.scrollLeft += scrollAmount; // Scroll right by the specified amount
                    }}>
                    <h1 className='text-white text-2xl'>{'▶'}</h1>
                </button>
            </div>
        </div>
    );

    return (
        <div className='bg-[#262628] text-white pt-[70px]'>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    {renderCategory('Trending Songs', trending, refs.trending)}
                    {renderCategory('Top 20 of this week', week20, refs.week20)}
                    {renderCategory('Top 50 of this month', month50, refs.month50)}
                    {renderCategory('Evergreen melodies', evergreen, refs.evergreen)}
                    {renderCategory('Happy Mood', happy, refs.happy)}
                    {renderCategory('Romantic Mood', romantic, refs.romantic)}
                    {renderCategory('Excited Mood', excited, refs.excited)}
                    {renderCategory('Sad Mood', sad, refs.sad)}
                </>
            )}
            <Footer/>
        </div>
    );
};

export default Home;
