import React from "react";

const MenuCard = ( { MenuData } ) => {
    return (
        <>
        <section className="main-card--container">
            {MenuData.map((currElem)=>{

                const {IdleDeadline,name,category,image,description}=currElem;

                return (
                    <>
                    
                        <div className="card-contanier" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className="card-author subtle">{category}</span> 
                                    <h2 className="card-title">{name}</h2>
                                    <span className="card-description subtle">
                                        {description}
                                    </span>
                                    <div className="card-read">Read More</div>
                                </div>
                                <img src={image} alt="image" className="card-media" />
                                <span className="card-tag subtle">Order now!!</span> 
                            </div>
                        </div>
                    </>
                );
            })}
        </section>
        </>
    );
};

export default MenuCard;