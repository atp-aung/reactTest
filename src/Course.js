const Course = ({ courses }) => {
  const aa = courses.map((c, id) => {
    let a = 0;
    return (
      <div key={id}>
        <h1>{c.name}</h1>
        {c.parts.map((k, i) => {
          a += k.exercises;
          return (
            <p key={i}>
              {k.name}: {k.exercises}
            </p>
          );
        })}
        <p>total:{a}</p>
      </div>
    );
  });

  return <div>{aa}</div>;
};

//   return (
//     <div>
//       {courses.map((c, id) => {
//         let a = 0;
//         return (
//           <div key={id}>
//             <h1>{c.name}</h1>
//             {c.parts.map((k, i) => {
//               a += k.exercises;
//               return (
//                 <p key={i}>
//                   {k.name}: {k.exercises}
//                 </p>
//               );
//             })}
//             <p>total:{a}</p>
//           </div>
//         );
//       })}
//     </div>
//   );

export default Course;
