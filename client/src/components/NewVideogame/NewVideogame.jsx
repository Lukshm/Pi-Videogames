import React from 'react'

const NewVideogame = () => {
  return (
    <div>
    <section>
    <div className='form-box'>
      <div className='form-value'>
        <form>
          <div className='inputbox'>
           <label>Name</label>
           <input type='text' name="name"></input>
         </div>

         <div className='inputbox'>
           <label>Image</label>
           <input type='text' name="name"></input>
         </div>

         <div className='inputbox'>
           <label>Description</label>
           <input type='text' name="name"></input>
         </div>

         <div className='inputbox'>
           <label>Platform</label>
           <input type='text' name="name"></input>
         </div>

         <div className='inputbox'>
           <label>ReleaseDate</label>
           <input type='text' name="name"></input>
         </div>

         <div className='inputbox'>
           <label>Rating</label>
           <input type='text' name="name"></input>
         </div>

          <button className='submit'>Submit</button>
        </form>
      </div>
    </div>
  </section>
  </div>
  )
}

export default NewVideogame