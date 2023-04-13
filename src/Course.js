import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (p) => {
  return (
    <>
      <Header course={p.course} />
      <Content course={p.course} />
      <Total course={p.course} />
    </>
  );
};

export default Course;
