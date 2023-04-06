const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p) => (
        <div key={p.name}>
          {p.name} {p.exercises}
        </div>
      ))}
    </div>
  );
};

export default Content;
