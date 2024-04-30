import "./HeroSection.css"

function HeroSection(props){
    return(
        <section className="hero-section">
            <img className="profile-img" src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis delectus alias nemo deleniti laboriosam optio minima, accusantium consequatur ea rem qui id molestias sequi possimus eligendi distinctio dolores ab.</p>
        </section>
    )
}

export default HeroSection;