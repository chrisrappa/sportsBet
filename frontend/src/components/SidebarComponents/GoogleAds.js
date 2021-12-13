import React, { useEffect } from 'react';

export default function GoogleAds(props){

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return (
        <ins className='adsbygoogle'
            style={{ display: 'block' }}
            data-ad-client= '7486514602731792'
            data-ad-slot={props.slot}
            data-ad-format= 'auto'
            data-full-width-responsive="true"
        >
        </ins>
    );
}