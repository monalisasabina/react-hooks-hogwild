
function HogsCard({hog}){

    console.log({hog})

    const{name,specialty,image}=hog

    return(
        <div className="ui card eight wide column pigTile">
            <div>
                <img src={image} />
            </div>

            <div className="content">
                <h3>{name}</h3>
            </div>

            <div className="Description"> specialty: {specialty}</div>

        </div>
    )
}

export default HogsCard