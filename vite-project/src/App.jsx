const Card =({title})=>{
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}
const App =()=>{
  return (
    <div className="card-container">
      <Card title="Start Wars" rating={4} actors={[{name: 'Actor'}]} />
      <Card title="Avatar" rating={4} actors={[{name: 'Actor'}]} />

      <Card title="The Lion King" rating={4} actors={[{name: 'Actor'}]} />

    </div>
  )
}
export default App
