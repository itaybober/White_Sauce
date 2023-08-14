// @ts-ignore
function Background_loser({
  children,
  className = "",
  id = "",
  angle = 125,
  colors = "#6D505B,#232A3D,#232A3D,#232B3E,#6D505B",
}) {
  const gradient = "linear-gradient(" + angle + "deg, " + colors + ")";

  return (
    <div
      className={className}
      id={id}
      style={{
        backgroundImage: gradient,
      }}
    >
      {children}
    </div>
  );
}

export default Background_loser;
