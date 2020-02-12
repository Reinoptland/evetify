import React from "react";

function EventForm(props) {
  const {
    handleChange,
    handleSubmit,
    values: { title, image, date }
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input onChange={handleChange} name="title" value={title} />
      <label>Image</label>
      <input onChange={handleChange} name="image" value={image} />
      <label>Date</label>
      <input
        onChange={handleChange}
        name="date"
        type="date"
        min={"2020-02-12"}
        value={date}
      />
      <input type="submit" />
    </form>
  );
}

export default EventForm;
