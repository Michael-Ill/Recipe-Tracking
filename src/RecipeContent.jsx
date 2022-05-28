import React from "react";

function RecipeContent({ recipes, setRecipes }) {
  const handleDelete = (name) => {
    const filtered = recipes.filter((recipe) => recipe.name !== name);
    setRecipes(filtered);
  };

  return (
    <tbody>
      {recipes.map(
        ({ name, cuisine, photo, ingredients, preparation }, index) => (
          <tr key={index}>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td>
              <img src={photo} alt="" />
            </td>
            <td className="content_td">
              <p>{ingredients}</p>
            </td>
            <td className="content_td">
              <p>{preparation}</p>
            </td>
            <td>
              <button name="delete" onClick={() => handleDelete(name)}>
                Delete
              </button>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
}

export default RecipeContent;
