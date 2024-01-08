function Dashborad(props){
    const {task} = props
    return(
        <div className="dash-board">
           <h2>{new Date().toDateString()}</h2>
           <p>{task}Tasks</p>
        </div>
    )
}

export default Dashborad