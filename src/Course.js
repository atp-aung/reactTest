//import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((c, id) => {
        return (
          <div key={id}>
            <h1>{c.name}</h1>
            {c.parts.map((k, i) => {
              return <p key={i}>ex:{k.exercises}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Course;
