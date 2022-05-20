const InfoElement = (props) => {
    return (
        <article className="App-info-element">
          <img src={props.img} alt="icon" />
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </article>
    )
}

export default InfoElement;