function ActorsItem({name, movies, id}){
    let li = movies.map(movie=>{
        return <li key={id}>{movie}</li>
    })
    return (
        <div>
            <p>{name}</p>
            <ul>
                {li}
            </ul>
        </div>
    )
}

export default ActorsItem;