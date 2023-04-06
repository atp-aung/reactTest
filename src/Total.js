let a = 0;
const Total = ({ parts }) => {
  parts.forEach((element) => {
    a += element.exercises;
  });
  console.log(a);

  return <div>{a}</div>;
};

export default Total;
