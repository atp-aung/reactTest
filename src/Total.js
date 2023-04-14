const Total = ({ courses }) => {
  let a = 0;
  courses.parts.forEach((element) => {
    a += element.exercises;
  });
  console.log(a);
  return <div>total of {a} exercises</div>;
};

export default Total;
