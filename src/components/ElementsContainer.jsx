import './ElementsContainer.css'

function ElementsContainer(props) {
  console.log(props);
  return (
    <div className="elements-container">
      <h3>Available Elements: </h3>
      {/* Stay tuned for the next season */}
      {props.children}
    </div>
  );
}

export default ElementsContainer;
