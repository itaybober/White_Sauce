

/*
    Background component, will add given gradient to any component

    ex1: The following will give a default background (Mia Background)

                <Background>
                    <Dugma/>
                </Background>

     ex2: you can change the colors, and angle as follows

            angle - angle of the gradient line
            colors - the color to change (must be a string properly formatted)

                <Background angle={100} colors={"black,yellow,red,#db7093"}>
                   <Dugma />
                </Background>


 */


// @ts-ignore
function Background({ children, className = "", id = "", angle = 125, colors = "#254848,#232A3D,#232B3E,#254648" }) {
    const gradient = `linear-gradient(${angle}deg, ${colors})`;

    return (
        <div
            className={className}
            id={id}
            style={{
                backgroundImage: gradient,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {children}
        </div>
    );
}

export default Background;
