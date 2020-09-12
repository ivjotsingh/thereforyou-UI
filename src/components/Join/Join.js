import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom'

const Join = () =>{

    const [name, setName] = useState('');
    const [companion, setCompanion] = useState('');

    return (
        <div className="joinOuterContainer">
        <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={} />
        </div>
        <Link onClick={}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
    );
}

export default Join;