import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({ setButtonText, setButtonPath }) => {

    const router = useNavigate();

    const sliderRef = useRef(null);
    const scrollAmount = 100;

    setButtonText('Sign In')
    setButtonPath('/signin')

    const [tranding, setTrandingSongs] = useState([]);
    const [week20, setWeek20] = useState([]);
    const [month50, SetMonth50] = useState([]);
    const [evergreen, setEvergreen] = useState([]);
    const [happy, SetHappy] = useState([]);
    const [romantic, setRomantic] = useState([]);
    const [excited, setExcited] = useState([]);
    const [sad, setSad] = useState([]);

    useEffect(() => {
        fetchVideos1();
        fetchVideos2();
        fetchVideos3();
        fetchVideos4();
        fetchVideos5();
        fetchVideos6();
        fetchVideos7();
        fetchVideos8();
    }, []);

    const fetchVideos1 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'jscjwatei3cb'
                }
            });
            const data = await response.json();

            setTrandingSongs(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos2 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 20 of this week', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'jscjwatei3cb'
                }
            });
            const data = await response.json();
            console.log('setWeek20', data)
            setWeek20(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos3 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured= Top 50 of this month', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'jscjwatei3cb'
                }
            });
            const data = await response.json();
            console.log('SetMonth50', data)
            SetMonth50(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos4 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen melodies', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'jscjwatei3cb'
                }
            });
            const data = await response.json();
            console.log('setEvergreen', data)
            setEvergreen(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos5 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=happy', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'jscjwatei3cb'
                }
            });
            const data = await response.json();
            console.log('SetHappy', data)
            SetHappy(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const fetchVideos6 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'jscjwatei3cb'
                }
            });
            const data = await response.json();
            console.log('setRomantic', data)
            setRomantic(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const fetchVideos7 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=excited', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'jscjwatei3cb'
                }
            });
            const data = await response.json();
            console.log('setExcited', data)
            setExcited(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const fetchVideos8 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=sad', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'jscjwatei3cb'
                }
            });
            const data = await response.json();
            console.log('setSad', data)
            setSad(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='bg-[#262628] text-white pt-[70px]'>
            <div className='tranding '>
                <h1 className='font-[900] text-4xl px-5 py-2'>Trending Songs</h1>
                <div className='flex flex-roww justify-center '>
                    <button
                        className="text-inherit cursor-pointer bg-[#c3c3c3] h-[250px] w-[30px] m-[5px] rounded-md border-[none]"
                        onClick={() => {
                            const container = sliderRef.current;
                            container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                        }}
                    > <h1 className='text-black'>Left</h1>
                    </button> 
                <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' ref={sliderRef}>
                    {tranding.map((item) => {
                        return (
                            <div 
                            className='m-2'
                            onClick={()=> {
                                router(`/song/${item._id}`)
                            }}>
                                <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[250px] w-[250px] max-w-none' />
                                <h2 className=' font-[900]'>{item.title}</h2>
                                {item.artist.map((items) => {
                                    return (
                                        <span className='text-slate-400'>{items.name}, </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                    <button
                        className="text-inherit cursor-pointer bg-[#c3c3c3] h-[250px] w-[30px] m-[5px]  rounded-md border-[none]"
                        onClick={() => {
                            const container = sliderRef.current;
                            container.scrollLeft += scrollAmount; // Scroll right by the specified amount
                        }}
                    > <h1 className='text-black'>Right</h1>
                    </button>
                </div>
            </div>
            <div className='week20 '>
                <h1 className='font-[900] text-4xl px-5 py-2'>Top 20 of this Week</h1>
                <div className='flex flex-roww justify-center '>
                    <button
                        className="text-inherit cursor-pointer bg-[#c3c3c3] h-[250px] w-[30px] m-[5px] rounded-md border-[none]"
                        onClick={() => {
                            const container = sliderRef.current;
                            container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                        }}
                    > <h1 className='text-black'>Left</h1>
                    </button> 
                <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' ref={sliderRef}>
                    {week20.map((item) => {
                        return (
                            <div
                            className='m-2'
                            onClick={()=> {
                                router(`/song/${item._id}`)
                            }}>
                                <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[250px] w-[250px] max-w-none' />
                                <h2 className=' font-[900]'>{item.title}</h2>
                                {item.artist.map((items) => {
                                    return (
                                        <span className='text-slate-400'>{items.name}, </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <button
                        className="text-inherit cursor-pointer bg-[#c3c3c3] h-[250px] w-[30px] m-[5px]  rounded-md border-[none]"
                        onClick={() => {
                            const container = sliderRef.current;
                            container.scrollLeft += scrollAmount; // Scroll right by the specified amount
                        }}
                    > <h1 className='text-black'>Right</h1>
                    </button>
                </div>
            </div>
            <div className='month50'>
                <h1 className='font-[900] text-4xl px-5 py-2'>Top 50 of this Month</h1>
                <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' ref={sliderRef}>
                    {month50.map((item) => {
                        return (
                            <div 
                            className='m-2'
                            onClick={()=> {
                                router(`/song/${item._id}`)
                            }}>
                                <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[250px] w-[250px] max-w-none' />
                                <h2 className=' font-[900]'>{item.title}</h2>
                                {item.artist.map((items) => {
                                    return (
                                        <span className='text-slate-400'>{items.name}, </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='evergreen'>
                <h1 className='font-[900] text-4xl px-5 py-2'>Evergreen Melodies</h1>
                <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' ref={sliderRef}>
                    {evergreen.map((item) => {
                        return (
                            <div className='m-2'
                            onClick={()=> {
                                router(`/song/${item._id}`)
                            }}>
                                <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[250px] w-[250px] max-w-none' />
                                <h2 className=' font-[900]'>{item.title}</h2>
                                {item.artist.map((items) => {
                                    return (
                                        <span className='text-slate-400'>{items.name}, </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='happy'>
                <h1 className='font-[900] text-4xl px-5 py-2'>Happy Songs</h1>
                <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' ref={sliderRef}>
                    {happy.map((item) => {
                        return (
                            <div className='m-2'
                            onClick={()=> {
                                router(`/song/${item._id}`)
                            }}>
                                <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[250px] w-[250px] max-w-none' />
                                <h2 className=' font-[900]'>{item.title}</h2>
                                {item.artist.map((items) => {
                                    return (
                                        <span className='text-slate-400'>{items.name}, </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='romantic'>
                <h1 className='font-[900] text-4xl px-5 py-2'>Romantic Songs</h1>
                <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' ref={sliderRef}>
                    {romantic.map((item) => {
                        return (
                            <div className='m-2'
                            onClick={()=> {
                                router(`/song/${item._id}`)
                            }}>
                                <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[250px] w-[250px] max-w-none' />
                                <h2 className=' font-[900]'>{item.title}</h2>
                                {item.artist.map((items) => {
                                    return (
                                        <span className='text-slate-400'>{items.name}, </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='excited'>
                <h1 className='font-[900] text-4xl px-5 py-2'>Excited Songs</h1>
                <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' ref={sliderRef}>
                    {excited.map((item) => {
                        return (
                            <div className='m-2'
                            onClick={()=> {
                                router(`/song/${item._id}`)
                            }}>
                                <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[250px] w-[250px] max-w-none' />
                                <h2 className=' font-[900]'>{item.title}</h2>
                                {item.artist.map((items) => {
                                    return (
                                        <span className='text-slate-400'>{items.name}, </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='sad'>
                <h1 className='font-[900] text-4xl px-5 py-2'>Sad Songs</h1>
                <div className='flex flex-row overflow-scroll scroll-smooth transition-[scroll] duration-[0.3s] ease-[ease-in-out]' ref={sliderRef}>
                    {sad.map((item) => {
                        return (
                            <div className='m-2'
                            onClick={()=> {
                                router(`/song/${item._id}`)
                            }}>
                                <img src={item.thumbnail} alt={(item.name) + 'thumbnail'} className='h-[250px] w-[250px] max-w-none' />
                                <h2 className=' font-[900]'>{item.title}</h2>
                                {item.artist.map((items) => {
                                    return (
                                        <span className='text-slate-400'>{items.name}, </span>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
