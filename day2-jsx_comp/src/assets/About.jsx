const About = ({name, width, num=10}) => {
    console.log("Name: " + name, "Width: " + width, "Number: " + num);

    return (
        <div >
            <h1>About Us</h1>
            <p>Number: {num}</p>
        </div>
    );
}

export default About;