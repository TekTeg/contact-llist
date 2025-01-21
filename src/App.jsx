import { useState } from 'react'
import ContactList from './ContactList.jsx'
import ContactDetails from './ContactDetails.jsx'
function App() {
  const [selectedContact, setSelectedContact] = useState({});
  console.log(selectedContact)

  return (
    <>
      {console.log(selectedContact)}

      {
        selectedContact.id ? <ContactDetails selectedContact={selectedContact} setSelectedContact={setSelectedContact} /> : <ContactList setSelectedContact={setSelectedContact} />
      }
      {/* <ContactDetails selectedContact={selectedContact} />
      <ContactList setSelectedContact={setSelectedContact} /> */}

    </>
  )
}

export default App
