const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = ({part}) => {
  console.log(part);
  return (
    <>
      <p>
        {part.name} {part.exercise}
      </p>
    </>
  );
};

const Content = ({parts}) => {
  console.log({ parts});
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  );
};

const Total = ({parts}) => {
  console.log(parts);
  return (
    <>
      <p>
        Number of exercises{" "}
        {parts[0].exercise + parts[1].exercise + parts[2].exercise}
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercise: 10,
    },
    {
      name: "Using props to pass data",
      exercise: 7,
    },
    {
      name: "State of a component",
      exercise: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
