import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs/BasicBreadcrumbs";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <BasicBreadcrumbs />
      <div className="MA-contact-page">
        <div className="MA-Contact-part1">
          <div className="MA-Contact-Part1-left">
            <h2>Need A Direct Line?</h2>
            <p>
              Cras massa at odio donec faucibus in. Vitae pretium massa dolor
              ullamcorper lectus elit quam.
            </p>
            <FontAwesomeIcon icon="fa-solid fa-phone" style={{color: "##FF782D",}} />
            <p>
            
              Phone  <a href="tel:(123) 456 7890">(123) 456 7890</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:contact@himpress.com">contact@himpress.com</a>
            </p>
          </div>
          <div className="MA-Contact-map-container">
            <img src="./imges/Map.png" alt="" />
          </div>
        </div>

        <div className="MA-Contact-contact-us">
          <h2>Contact Us</h2>
          <form>
            <div className="MA-Contact-input-name-email">                   
             <input className="MA-Contact-input-name" type="text" style={{width:"450px"}} placeholder="Name" name="name" required />                             
             <input type="email" style={{width:"450px"}} placeholder="Email" name="email" required />
            </div>
          
           
              <textarea name="comment" placeholder="Comments"></textarea>
           
            <label style={{marginTop:"20px"}}>
              <input type="checkbox" name="save-info" />
              <label htmlFor="" style={{margin:"0 10px"}}>Save my name, email, and website in this browser for the next time
              I comment.</label>
            </label>
            <button type="submit">Post Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
}
