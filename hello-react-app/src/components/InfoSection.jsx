import icon1 from './../images/icon1.png'
import icon2 from './../images/icon2.png'
import icon3 from './../images/icon3.png'
import icon4 from './../images/icon4.png'


const InfoSection = () => {
    return (
        <section className="info-section">
        <article className="App-info-element">
          <img src={icon1} alt="icon" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </article>
        <article className="App-info-element">
          <img src={icon2} alt="icon" />
          <h2>Components</h2>
          <p>Build encapsulated compenents that manage their state</p>
        </article>
        <article className="App-info-element">
          <img src={icon3} alt="icon" />
          <h2>Single-Watch</h2>
          <p>A set of immutable values are passed to the Components</p>
        </article>
        <article className="App-info-element">
          <img src={icon4} alt="icon" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browser</p>
        </article>
      </section>
    )
}

export default InfoSection;