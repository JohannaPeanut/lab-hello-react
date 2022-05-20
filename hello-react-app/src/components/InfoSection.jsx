import icon1 from './../images/icon1.png'
import icon2 from './../images/icon2.png'
import icon3 from './../images/icon3.png'
import icon4 from './../images/icon4.png'
import InfoElement from './InfoElement.jsx'


const InfoSection = () => {
    return (
        <section className="info-section">
        <InfoElement img={icon1} title="Declarative" text="React makes it painless to create interactive UIs."/>
        <InfoElement img={icon2} title="Single-Watch" text="Build encapsulated compenents that manage their state."/>
        <InfoElement img={icon3} title="Single-Watch" text="A set of immutable values are passed to the Components."/>
        <InfoElement img={icon4} title="JSX" text="Statically-typed, designed to run on modern browser."/>
      </section>
    )
}

export default InfoSection;