let a = 0;
const Total = ({ course }) => {
  course.parts.forEach((element) => {
    a += element.exercises;
  });
  console.log(a);
  return <div>total of {a} exercises</div>;
};

export default Total;
