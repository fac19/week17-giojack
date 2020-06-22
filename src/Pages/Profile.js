import React from "react";
import { useAuth } from "./../auth";
import  firebase  from '../firebase';
import 'firebase/firestore';


function Profile() {

    const user = useAuth();
  const [form, setForm] = React.useState({
    country: "",
    gender: "",
    dob: "",
  })
    // use the hook to get the user anywhere in the component tree
    // just dump the whole Firebase user to the page

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }
   
  const handleSubmit = (event) => {
    event.preventDefault();
    const db = firebase.firestore();
    db.collection("survey").doc(user.email).set(form);
  }

    return (
        <>
          <form onSubmit={handleSubmit}> 
          <label htmlFor="country">Country</label>
          <select id="country" name="country" defaultValue="select-option" required onChange={handleChange}>
            <option value="select-option" disabled>Select option</option>
            <option value="India">India</option>
            <option value="Nepal">Nepal</option>
            <option value="UK">UK</option>
            <option value="other">Other</option>
          </select>
          
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" defaultValue="select-option" required onChange={handleChange}>
              <option value="select-option" disabled>Select option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="na">Prefer not to say</option>
          </select>

          <label htmlFor="dob">Date of birth</label>
          <input id="dob" type="date" name="dob" required onChange={handleChange}/>
          
          <button type="submit">Submit</button>
          </form>

          <p>Whoa you were created at {user.metadata.creationTime}! </p>
        </>
      );
  }

  export default Profile;