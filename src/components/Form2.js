import React, {useState} from "react";

function Form2(){
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false

  })

  //instead of using two change functions, we can use one
 /* function handleFirstNameChange(event){
    setFormData({
      ...formData,
      firstName: event.target.value
    })
  }

  function handleLastNameChange(event){
    setFormData({
      ...formData,
      lastName: event.target.value
    })
  }
  */

  function handleChange(event){
    const name = event.target.name
    let value = event.target.value

    //use 'checked' instead of value
    if (event.target.type === "checkbox"){
      value = event.target.checked
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
export default Form2