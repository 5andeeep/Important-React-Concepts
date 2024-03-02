import axios from 'axios';
import { useEffect, useState } from 'react';

const Test = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
            // console.log(data.results);
            setData(data.results);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="App">
            {
                data?.map((item, key) => (
                    <div key={key} className='card-style flex p-10 mx-auto mt-48 gap-10'>
                        <div className='my-shadow-1 flex w-full gap-12 p-10'>
                            <div className='my-shadow-2 w-48 h-48'>
                                <img src={item.picture.large} alt={item.name.first} className='w-full h-full' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className='flex gap-6'>
                                    <p className='text-3xl font-semibold'>{item.name.first}</p>
                                    <p className='text-3xl font-semibold'>{item.name.last}</p>
                                </div>
                                <p className='text-3xl font-semibold'>{item.gender}</p>
                                <p className='text-3xl font-semibold'>{item.phone}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Test