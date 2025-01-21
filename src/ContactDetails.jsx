import BackToList from "./BackToList"
const ContactDetails = (props) =>{
console.log(props)
return(
  <>
  <h1>User Details</h1>
  <h2 id="user-name"> 
    Name: {props.selectedContact.name}
  </h2>
  <p>
    <b>Username:</b> {props.selectedContact.username}<br/>
    <b>Email:</b> {props.selectedContact.email}<br/>
    <b>Address:</b> {props.selectedContact.address.suite}, {props.selectedContact.address.street} Str, {props.selectedContact.address.city}
    , {props.selectedContact.address.zipcode}


  </p>
    <BackToList setSelectedContact={props.setSelectedContact} />
  </>
)
}
export default ContactDetails 