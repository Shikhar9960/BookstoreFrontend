import React from 'react'

const Cards = ({item}) => {
    return (
        <>
            <div>
                <div className="card w-80 h-[26rem] bg-base-100 shadow-xl my-10 hover:scale-105 duration-200">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge px-3 py-3 badge-outline">${item.price}</div>
                            <div className="badge px-3 py-3  badge-outline hover:bg-pink-500 hover:text-white duration-200">BUY</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
