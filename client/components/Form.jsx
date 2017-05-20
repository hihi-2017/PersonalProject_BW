import React from 'react'
import { Link } from 'react-router'

//import * as localDb from '../localDb'
import Home from './Home'

const Form = props => {
    return (
      <span>
        <Home/>
        <div className="container">
           <form>
              <div className="row">
                 <div className="six columns">
                    <label for="nameInput">Name</label>
                    <input className="u-full-width" type="text" placeholder="Mia Nameo" id="nameInput" />
                 </div>

                 <div className="six columns">
                    <label for="exampleEmailInput">Email</label>
                    <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
                 </div>
              </div>
              <div className="row">
                 <div className="six columns">
                    <label for="phoneInput">Phone</label>
                    <input className="u-full-width" type="tel" placeholder="012 345 6789" id="phoneInput" />
                 </div>

                 <div className="six columns">
                    <label for="addressInput">Address</label>
                    <input className="u-full-width" type="text" placeholder="1 Home Place, Welivehere, Wellington" id="addressInput" />
                 </div>
              </div>
              <div className="row">
                 <div className="twelve columns">
                    <input className="PButton" type="submit" value="Submit" />
                 </div>
              </div>
           </form>
        </div>
      </span>
 )
}

export default Form
