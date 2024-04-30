import "./ElementsContainer.css";

function ElementsContainer(props) {
  console.log(props);
  return (
    <div className="elements-container">
      <h3>Available Elements: </h3>
      {/* Stay tuned for the next season, we'll need to use children in future labs/assessments */}
      {props.children}
    </div>
  );
}

export default ElementsContainer;
