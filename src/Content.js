const Content = (pcont) => {
  const pa = pcont.course.parts.map((p) => {
    return (
      <div key={p.id}>
        {p.name}
        {p.exercises}
      </div>
    );
  });
  return <div>{pa}</div>;
};

export default Content;
