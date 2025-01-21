/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useGetPuppiesQuery } from "./puppySlice";

export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query
  // const [puppies, setPuppies] = useState([]);
  // const navigate = useNavigate();
  const { data, isLoading } = useGetPuppiesQuery();

  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}

        {data &&
          data.map((p) => (
            <li key={p.id}>
              <h3>
                {p.name} #{p.id}
              </h3>
              <figure>
                <img src={p.imageUrl} alt={p.name} />
              </figure>
              <button onClick={() => setSelectedPuppyId(p.id)}>
                See details
              </button>
            </li>
          ))}
      </ul>
    </article>
  );
}
