import React from "react";

import FormErrors from "./FormErrors/FormErrors";

function NewBidForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    props.onSubmit({
      price: fd.get("price"),
    });

    currentTarget.reset();
  }
  return (
    <form className="ui form" onSubmit={handleSubmit}>

      <div className="field">
        <label>Reserve Price</label>
        <input type="number" name="price" rows="2" id="price" />
        <FormErrors forField="price" errors={props.errors} />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}
export default NewBidForm;
