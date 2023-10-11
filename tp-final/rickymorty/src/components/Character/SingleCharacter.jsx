export function SingleCharacter({props}){
const 
const {status, species, name, type, image, origin}
    return(
        character.map((item, index)=>(
            <li className="personaje" key={index}>
                <img className="imggg" src={item.image} alt="" />
                <div className="hola">
                    <h3 className="letra">{item.name}</h3>
                    {item.status === 'Alive' ?<p className="letra"> 🟢 {item.status} - {item.species} </p>:<p className="letra"> 🔴 {item.status} - {item.species} </p>}
                
                    <p className="letraos">Last known location:</p>
                    <p className="letra">{item.origin.name}</p>
                    <p className="letraos">First seen in:</p>
                    <p className="letra">{item.episode}</p>
                </div>
            </li>
        )
    )
    )
}