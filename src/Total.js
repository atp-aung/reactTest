let a = 0;
const Total = ({ parts }) => {
  parts.forEach((element) => {
    a += element.exercises;
  });
  console.log(a);
  return <div>Number of exercises {a}</div>;
};

export default Total;
