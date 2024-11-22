import { useState } from "react"

const Profile = () => {
    const [profile, setProfile] = useState({name: '', age: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;

        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    }

  return (
    <>
        <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Add name"/>
        <input type="text" name="age" value={profile.age} onChange={handleChange} placeholder="Add age"/>

        <h3>Profile information</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>

    </>
  )
}

export default Profile