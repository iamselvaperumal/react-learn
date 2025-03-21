// contional rendering

function Course(props) {
  if (props.show == true) {
    // returning the datas using props
    return (
      <div className="card">
        <img src={props.image} alt="reload" />
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <b>{props.rating}</b>
      </div>
    );
  } else {
    return <div className="card">CourseNot Available</div>;
  }
}

export default Course;
