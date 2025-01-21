import { useEffect, useState } from "react"
const ContactList = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getContactList = async () => {
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
      const result = await response.json()
      setUsers(result)
      console.log(users)
    }
    getContactList()
  }, [])
const clickedUser =(name)=>{
  return (
    props.setSelectedContact(name)
  )
}
  return (
    <>
    <h1> MY FAVORITE CONTACTS</h1>
    <ul>
      {
        users.map((user) => {
          return (
            <li onClick = {()=>{clickedUser(user)}}> {user.name}</li>
          )
        })
      }

    </ul>
    </>

  )
}
export default ContactList