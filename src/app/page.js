import Task from "./../components/task";
import Header from "./../components/header";
import TaskInput from "./../components/taskInput";
import Footer from "./../components/footer";
export default function Home() {
  const tasks = [
    { id: 1, title: "Read a book", isDone: true },
    { id: 2, title: "Take a shower", isDone: false },
    { id: 3, title: "Sleep", isDone: false },
  ];
  return (
    <div className="container mx-auto">
      <Header />
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput />
        <Task {...tasks[0]} />
        <Task {...tasks[1]} />
        <Task {...tasks[2]} />
      </div>
      <Footer year = "2024" fullName = "Paisit Lerdananpipat" studentId = "660612155"/>
    </div>
  );
}
