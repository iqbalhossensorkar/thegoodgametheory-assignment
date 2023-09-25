import React from 'react';

const Card = (props) => {
    const { name, image_url, tagline, first_brewed, description } = props.item;
    console.log(props.item);
    return (
        <div className='container'>
            <div className="card w-96 h-full bg-base-100 border-[1px] hover:cursor-pointer">
                <figure><img src={image_url ? image_url : "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"} alt="images" className='h-72 p-5' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name ? name : ''}</h2>
                    <p className='font-medium'>{tagline ? tagline : ''}</p>
                    <p className='text-lg'>First Brewed: <span className="badge badge-neutral font-bold">{first_brewed ? first_brewed : ''}</span></p>
                    <p>{description ? description : ''}</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-outline btn-info">View Details</button>
                        <button className="btn btn-outline btn-success">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;