const Header = ({name}) => {
    return <h2>{name}</h2>;
};

const Total = (props) => {
    const sumOfExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
    return <h4>{`Total of ${sumOfExercises } exercises`}</h4>;
};

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    );
};

const Content = ({parts}) => {
    return (
        <div>
            {parts.map((part)=><Part key={part.id} part={part} />)}
        </div>
    );
};

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default Course;
