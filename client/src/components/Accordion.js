import React from "react";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import "./Accordion.css";

// const useStyles = makeStyles((theme) => ({
//   title: {
//     color: "white",
//     borderColor: "white",
//     textAlign: "left",
//     fontSize: "24px",
//     margin: "20px"
//   },
//   accordionSection: {
//     display: "flex",
//     flexDirection: "column",
    
//   }

// }))

function Accordion(props) {
  // const classes = useStyles()
 return (
   <div className="accordion__section">
     <button variant="outlined" className="accordion">
       <p  className="accordion__title">{props.title}
         </p>
       <ChevronLeftIcon />
     </button>
     <div className="accordion__content">
       <div
         className="accordion__text"
         dangerouslySetInnerHTML={{ __html: props.content }}
       />
     </div>
   </div>
 );
}

export default Accordion;