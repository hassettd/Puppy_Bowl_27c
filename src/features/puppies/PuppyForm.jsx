import { useEffect, useState } from "react";

import { useAddPuppyMutation } from "./puppySlice";
/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */

export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [addPuppy, result] = useAddPuppyMutation();
  // TODO: Use the `addPuppy` mutation to add a puppy when the form is submitted

  function postPuppy(event) {
    event.preventDefault();
    const newPuppy = {
      name,
      breed,
      imageUrl: "https://loremflickr.com/200/300/dog",
    };
    addPuppy(newPuppy);
    // Placeholder image w/ random photos of dogs
  }

  return (
    <>
      <h2>Add a Puppy</h2>
      <form onSubmit={postPuppy}>
        <label>
          Name
          <input
            name="puppyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <button>Add to Roster</button>
        {/* {isLoading && <output>Uploading puppy information...</output>} */}
        {/* {error && <output>{error.message}</output>} */}
      </form>
    </>
  );
}
