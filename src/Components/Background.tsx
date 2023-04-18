

/*
    Background component, will add given gradient to any component

    ex1: The following will give a default background

                <Background>
                    <Dugma/>
                </Background>

     ex2: you can change the colors, and angle as follows

            angle - angle of the gradient line
            color1/color2 - the color to change (must be a string properly formatted)

                <Background angle={100} color1={"green"} color2={"rgba(210,100,43,50)"}>
                   <Dugma />
                </Background>


 */


// @ts-ignore
function Background({children, angle = 180 , color1 = "blue" , color2 = "black" } ) {
    console.log("angle:", angle);
    console.log("color1:", color1);
    console.log("color2:", color2);

    const gradient = "linear-gradient("+angle+"deg, "+color1+", "+color2+")";

    return (
        <div style={{
            backgroundImage: gradient,
            height: "100vh",
            width: "100vw"
        }} >
            {children}
        </div>
    );
}

export default Background