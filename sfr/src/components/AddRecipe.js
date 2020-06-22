import React from 'react'


const AddRecipe = () => {


    //all form fields still need a value, and onChange. 
  //form needs an onSubmit
  //state needs to be added
    return (
        <>

            <h2>Add a Recipe to Your Collection</h2>
            <form>
                <label>Title:</label>
                <input 
                    type='text'
                    name='title'
                />
                <label>Category:</label>
                <input 
                    type='text'
                    name='category'
                />
                <label>Source:</label>
                <input 
                    type='text'
                    name='source'
                />
                <label>Ingredients:</label>
                <textarea 
                    cols='25'
                    rows='4'
                    type='text'
                    name='ingredients'
                />
                <label>Instructions:</label>
                <textarea 
                    cols='25'
                    rows='4'
                    type='text'
                    name='instructions'
                />
                <button>Add Recipe</button>
            </form>
        </>
    )
}
export default AddRecipe