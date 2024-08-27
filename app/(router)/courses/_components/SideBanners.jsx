import React, { useEffect, useState } from 'react';
import { getSideBanner } from '../../../_utils/GlobalApi';
import Image from 'next/image';

function SideBanners() {
    const [bannersList, setBannersList] = useState([]);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const banners = await getSideBanner();
                console.log(banners);
                setBannersList(banners?.sideBannners);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };

        fetchBanner();
    }, []);

    return (
        <div className='flex flex-col gap-4'>
            {bannersList.map((item, index) => (
                <div key={index} className='bg-white p-4 rounded-xl shadow-md'>
                    <Image 
                        src={item.banner.url} 
                        alt='banner' 
                        width={500}  
                        height={500}  
                        className='rounded-xl cursor-pointer'
                        onClick={() => window.open(item?.url)}
                    />
                </div>
            ))}
        </div>
    );
}

export default SideBanners;
