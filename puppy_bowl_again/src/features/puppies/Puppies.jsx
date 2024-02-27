import { useGetPuppiesQuery } from "./puppySlice";

export default function Puppies() {
  const { data: puppies, isLoading } = useGetPuppiesQuery();

  function EachPuppy({ puppy }) {
    return (
      <li>
        <h1>{puppy.name}</h1>
        <img src={puppy.imageUrl} />
        //button to see more details //button to remove player
      </li>
    );
  }

  return (
    <article>
      {isLoading ? (
        <li> Loading... </li>
      ) : (
        <ul>
          {puppies.data.players.map((puppy) => (
            <EachPuppy key={puppy.id} puppy={puppy} />
          ))}
        </ul>
      )}
    </article>
  );
}
