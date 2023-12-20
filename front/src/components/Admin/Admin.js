import React, { useEffect } from 'react'
import "./Admin.css"
// import StadiumCards from './zidenkeryet/Cards/StadiumCards'
import {useNavigate} from 'react-router-dom'
// import AjoutStadium from './zidenkeryet/AjoutStadium/AjoutStatdium'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCategorie } from '../../api/Cathegories/Cath'
import { setCategorie } from '../../redux/categorieSlice'

const Admin = ({auth,logout}) => {
const dispatch = useDispatch()
  const authUser = useSelector(state=>state.auth)
const categ = useSelector(state=>state.categorie)
  const navigate = useNavigate()
  console.log('nthbtou foil aut',authUser)
  const gotoaddstadiums = async()=>{

    navigate("/adding")
  }
  const gotoaddcath = async()=>{
    navigate('/addCath')
  }


const fetchcate=async()=>{
  const data = await fetchCategorie()
  console.log('data jib cat',data.getAll)
  dispatch(setCategorie(data.getAll))

}
 useEffect(()=>{
  fetchcate()
 },[])
console.log('sdfghjklsdfghjklsdfghjklsdfghjkl',categ)


/* jiben produits  */


  return (
    <div className='bodyAdmin'>
    <header className="headerAdmin">
      <div className="header-content responsive-wrapper">
        <div className="header-logo">
        
            <h3> {authUser.role}</h3>        
        </div>
        <div className="header-navigation">
          <nav className="header-navigation-links">
            <a href="#"> {authUser.name} </a>
            <a href="#"> Dashboard </a>
            <a href="#"> Projects </a>
            <a href="#"> Tasks </a>
            <a href="#"> Reporting </a>
            <a href="#"> Users </a>
          </nav>
          <div className="header-navigation-actions">
            <a href="#" className="buttonAdmin">
              <i className="ph-lightning-bold" />
              <span onClick={()=>logout()}   >Logout </span>
            </a>
           
            <a href="#" className="avatar">
             <img src="https://assets.codepen.io/285131/hat-man.png" alt="" />
            </a>
          </div>
        </div>
        <a href="#" className="buttonAdmin">
          <i className="ph-list-bold" />
          <span>Menu</span>
        </a>
      </div>
    </header>
    <main className="main">
      <div className="responsive-wrapper">
        <div lassName="main-header">
          <h1>ya Welcome </h1>

        </div>
        <div className="horizontal-tabs">
          <a href="#">My Stadiums</a>
          <a href="#"  onClick={()=>gotoaddstadiums()}  >Add Product </a>
          <a href="#">view users </a>
          <a href="#">view reservations </a>
          <a href="#">Plan</a>
          <a href="#">Billing</a>
          <a href="#">Email</a>
          <a href="#">Notifications</a>
          <a href="#" className="active">
            Integrations
          </a>
        </div>
        <div className="content-headerAdmin">
       
          <div className="content-headerAdmin-actions">
            <a href="#" className="buttonAdmin">
              <i className="ph-faders-bold" />
              <span>Filters</span>
            </a>
            <a href="#" className="buttonAdmin">
              <i className="ph-plus-bold" />
             <button onClick={()=>gotoaddcath()}>Add Cathegories</button>
            </a>
          </div>
        </div>
        <div className="content">
          <div className="content-panel">
            <div className="vertical-tabs">
              <a href="#" className="active">
                View all
              </a>
              {
                categ.map((el)=> (<a href={`/jibproduit/${el._id}`}>{el.name}</a>))
              }
           
            </div>
          </div>
          <div className="content-main">
            <div className="card-grid">
{/*               <StadiumCards/>
 */}             
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  
  )
}
export default Admin
