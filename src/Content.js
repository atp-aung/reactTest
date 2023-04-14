const Content = ({ courses }) => {
  const pa = courses.parts.map((p) => {
    return (
      <div key={p.id}>
        {p.name}: {p.exercises}
      </div>
    );
  });
  return <div>{pa}</div>;
};

export default Content;
