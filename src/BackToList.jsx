const BackToList = (props) => {
  return (
    <button onClick={() => { props.setSelectedContact({})}}>Return back to list</button>
  )
}

export default BackToList