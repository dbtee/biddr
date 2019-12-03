import React from "react";

import FormErrors from "./FormErrors/FormErrors";

function NewAuctionForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    props.onSubmit({
      title: fd.get("title"),
      body: fd.get("body"),
      reserve_price: fd.get("reserve_price"),
      ends_at: fd.get("ends_at")
    });

    currentTarget.reset();
  }
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Title</label>
        <input type="text" name="title" id="title" />
        <FormErrors forField="title" errors={props.errors} />
      </div>
      <div className="field">
        <label>Body</label>
        <textarea name="body" rows="2" id="body" />
        <FormErrors forField="body" errors={props.errors} />
      </div>
      <div className="field">
        <label>Reserve Price</label>
        <input type="number" name="reserve_price" rows="2" id="reserve_price" />
        <FormErrors forField="reserve_price" errors={props.errors} />
      </div>
      <div className="field">
        <label>End Date</label>
        <input type="date" name="ends_at" id="ends_at" />
        <FormErrors forField="ends_at" errors={props.errors} />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewAuctionForm;
