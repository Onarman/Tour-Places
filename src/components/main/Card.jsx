

const Card = (data) => {
  console.log("what", data);
  const {id, title, image, desc} = data;
  return (
    <div className="cards">

      <div className="title">
        <h1>{title}</h1>
      </div>
    
      <img src={image} alt="img" />

      <div className="card-p">
        <p>
          {desc}
        </p>
      </div>

    </div>
  )
}

export default Card;