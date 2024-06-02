function Card({name,head,description,background}){
    return(
        <div className="card" style={{ backgroundImage: `url(${background})` }}>
<div className="card-body">
    <h6>{name}</h6>
    <h3>{head}</h3>
    <p>{description}</p>
</div>
        </div>
    )
}
export  default Card