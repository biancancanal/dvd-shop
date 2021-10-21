import { useState } from "react";


function MovieForm() {
  const [formData, setFormData] = useState({
    title: "",
    year: new Date().getFullYear(),
    length: "0",
    director: "",
    description: "",
    poster_url: "",
    category: "",
    discount: false,
    female_director: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.id]: value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            min="1888"
            max={new Date().getFullYear()}
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="length">Length</label>
          <input
            type="number"
            id="length"
            value={formData.length}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="director">Director</label>
          <input
            type="text"
            id="director"
            value={formData.director}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="poster_url">Poster</label>
          <input
            type="text"
            id="poster_url"
            value={formData.poster_url}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="discount">
            Discount?
            <input
              type="checkbox"
              id="discount"
              checked={formData.discount}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="female_director">
            Female Director?
            <input
              type="checkbox"
              id="female_director"
              checked={formData.female_director}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
 


export default MovieForm;
