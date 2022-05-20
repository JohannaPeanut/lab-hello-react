import logo from './../images/ironhack-logo-xs.png'
import menu from './../images/menu-top-xs.png'

const HeaderSection = () => {
    return (
        <section className="App-header">
            <img className='logo' src={logo} alt="logo" />
            <img className='menu' src={menu} alt="menu" />
            <h1>Say hello to <br /> ReactJS</h1>
            <h3>You will learn how to use <br /> the most popular frontend library, <br /> and become a super ninja developer.
            </h3>
            <button>Awesome!</button>
        </section>
    )
}

export default HeaderSection;