export const LocationInfoBox = ({info}) => {
  return (
    <div className="location-info">
        <h2>Event Location info</h2>
        <ul>
            <l1>Id: <strong>{info.id}</strong></l1>
            <l1>Title: <strong>{info.title}</strong></l1>
        </ul>
    </div>
  )
}
