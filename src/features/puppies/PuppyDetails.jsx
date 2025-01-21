/**
 * @component
 * Shows comprehensive information about the selected puppy, if there is one.
 * Also provides a button for users to remove the selected puppy from the roster.
 */
// TODO: Grab data from the `getPuppy` query

import { useDeletePuppyMutation, useGetPuppyQuery } from "./puppySlice";
import { useDispatch } from "react-redux";
export default function PuppyDetails({ selectedPuppyId, setSelectedPuppyId }) {
  // TODO: Use the `deletePuppy` mutation to remove a puppy when the button is clicked
  const { data, isLoading } = useGetPuppyQuery(selectedPuppyId);
  function removePuppy(id) {
    setSelectedPuppyId();
    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(useDeletePuppyMutation(puppy.id));
    };
  }

  // There are 3 possibilities:
  let $details;
  // 1. A puppy has not yet been selected.
  if (!selectedPuppyId) {
    $details = <p>Please select a puppy to see more details.</p>;
  }
  //  2. A puppy has been selected, but results have not yet returned from the API.
  else if (isLoading) {
    $details = <p>Loading puppy information...</p>;
  }
  // 3. Information about the selected puppy has returned from the API.
  else {
    $details = (
      <>
        <h3>
          {data.name} #{data.id}
        </h3>
        <p>{data.breed}</p>
        <p>Team {data.team?.name ?? "Unassigned"}</p>
        <button onClick={() => removePuppy(data.id)}>Remove from roster</button>
        <figure>
          <img src={data.imageUrl} alt={data.name} />
        </figure>
      </>
    );
  }

  return (
    <aside>
      <h2>Selected Puppy</h2>

      {data && $details}
    </aside>
  );
}
