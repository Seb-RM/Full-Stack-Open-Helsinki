const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = ({name, exercise}) => {
  console.log({name, exercise});
  return (
    <>
      <p>
        {name} {exercise}
      </p>
    </>
  );
};

const Content = ({part1, part2, part3}) => {
  console.log({ part1, part2, part3 });
  return (
    <>
      <Part name={part1.name} exercise={part1.exercise} />
      <Part name={part2.name} exercise={part2.exercise} />
      <Part name={part3.name} exercise={part3.exercise}/>
    </>
  );
};

const Total = ({exercises1,exercises2,exercises3}) => {
  console.log({exercises1, exercises2, exercises3});
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercise: 10
    };
  const part2 = {
    name: "Using props to pass data",
    exercise: 7
    };
  const part3 = {
    name: "State of a component",
    exercise: 14
    } 

  return (
    <div>
      <Header course={course} />
      <Content
        part1= {part1}
        part2= {part2}
        part3= {part3}
      />
      <Total
        exercises1={part1.exercise}
        exercises2={part2.exercise}
        exercises3={part3.exercise}
      />
    </div>
  );
};

export default App;
