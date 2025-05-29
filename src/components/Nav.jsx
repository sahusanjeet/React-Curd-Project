import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <div className='flex justify-end gap-10 p-10  '>

        <NavLink className={(e)=> (e.isActive ? "text-pink-300":"")} to="/">
         Home
        </NavLink>
        <NavLink  className={(e)=> (e.isActive ? "text-pink-300":"")} to="/Product">
          Product
          </NavLink>
        <NavLink className={(e)=> (e.isActive ? "text-pink-300":"")}  to="/Service">
          Service
          </NavLink>
        <NavLink className={(e)=> (e.isActive ? "text-pink-300":"")} to="/About">
          About
        </NavLink>
    </div>
  )
}

export default Nav