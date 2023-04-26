
const List = ({ people,removePerson }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <div className="person-left">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </div>
            <button onClick={()=>removePerson(id)} className="delete">Delete</button>
          </article>)
      })}
    </>
  );
};


export default List

