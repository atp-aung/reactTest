const Total = ({ course }) => {
  let a = 0;
  course.parts.forEach((element) => {
    a += element.exercises;
  });
  console.log(a);
  return <div>total of {a} exercises</div>;
};

export default Total;
