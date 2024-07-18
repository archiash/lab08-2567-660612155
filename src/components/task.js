export default function Task(task) {
    
    let mystyle = {

    };
    if(task.isDone == true){
        mystyle = {"text-decoration": "line-through"};
    }
    return (
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span style={mystyle}>{task.title}</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
    );
  }
  