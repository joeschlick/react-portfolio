import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button} from "@material-ui/core";
import Navbar from "./Navbar";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  mainContainer: {
    background: "rgba(38,50,56,0.7)",
    color: "white",
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "white",
    marginBottom: "1rem",
    paddingTop: "1rem",
  },
  text: {
    color: "#E3E3E3",
    marginTop: 0,
    maxWidth: "80%",
    margin: "auto",
    marginBottom: "2rem",
  },
  typedContainer: {
    //marginTop: "3rem",
    background: "rgba(38,50,56,0.7)",
    borderRadius: 5,
    position: "absolute",
    //top: "50%",
    //left: "50%",
    //transform: "translate( -50%, -50%)",
    width: "100vw",
    //textAlign: "center",
    zIndex: 1,
  },
  button: {
    color: "#4A4A4A",
    fontSize: "24px",
    marginTop: "1rem",
    marginBottom: "1rem",
    borderColor: "white"
  },
  strong: {
    color: "white",
    fontSize: "24px",
    textDecoration: "underline",
  },
  stronga: {
    color: "white",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />

      <Box className={classes.typedContainer}>
        <Typography align="center"> 
        <Button className={classes.button} href="https://www.dropbox.com/s/07berl05qv02uq2/Joe-Schlick-Developer-Resume-1.6.2021%20-%20Google%20Docs.pdf?dl=0" variant="contained" size="large" >
              Download Full Resume
            </Button>
        </Typography>
      
        <Typography className={classes.subtitle} variant="h4" align="center">
          Technical Skills
        </Typography>
        <Typography className={classes.text} variant="h6">
          <strong className={classes.strong}>Languages:</strong> React,
          Mongoose, Mongo DB, Sequelize, MySQL, Express, Node JS, JavaScript,
          HTML, CSS, Bootstrap, Material UI
          <br />
          <strong className={classes.strong}>Applications:</strong> Mac OS, VS
          Code, G Suite, Microsoft Office, Windows 10, Sketchup, Illustrator,
          Photoshop
        </Typography>
        <Typography className={classes.subtitle} variant="h4" align="center">
          Work Experience
        </Typography>
        <Typography className={classes.text} variant="h6">
          <strong className={classes.strong}>
            Freelance Event Producer: 2011-2021
          </strong>
          <br />
          <strong className={classes.stronga}>
            Companies: Jack Morton Worldwide, Freeman, George P. Johnson, The XD
            Agency
          </strong>
          <br />
          Client facing project manager for corporate events with 10,000+
          attendees. Inspiring client and creative team to create visual,
          interactive, and presentation content. Creating and managing budgets.
          Hiring crew leads and engaging vendors. Managing onsite execution of
          all planned events and last minute additions.
          <br />
          <strong className={classes.stronga}>Key Accomplishments:</strong>
          <br />
          ● Building relationships with all departments on an event to achieve a
          common goal
          <br />
          ● Reliably staying on or under budget for projects with constant
          changes
          <br />
          ● Effective and respectful communication with all stakeholders
          <br />
          ● Delegating tasks to responsible parties with respect, and total
          willingness to jump in where needed to get the job done.
          <br />
          <strong className={classes.stronga}>
            Clients Include: Google, VMware, T-Mobile, Cisco, HP, Kia, IBM,
            Square Enix, Capcom
          </strong>
        </Typography>
        <Typography className={classes.text} variant="h6">
          <strong className={classes.strong}>
          Freelance Stage Manager: 2015-2021
          </strong>
          <br />
          <strong className={classes.stronga}>
            Companies: Jack Morton Worldwide, Freeman, Opus Agency, EMN8 Creative
          </strong>
          <br />
          Assisting producer in talent management, cueing, and other related needs for running show and rehearsals. Planning and managing onstage furniture placement and stage moves. Supervising stage hands/carpenters as needed for all stage moves.
          <br />
          <strong className={classes.stronga}>Key Accomplishments:</strong>
          <br />
          ● Performing flawlessly while staying calm, focused, and respectful in high-pressure, live situations
          <br />
          ● Working directly with high profile personalities such as: Michelle Obama, Joe Biden, John Legend, Brene
Brown, Gwynneth Paltrow, Natalie Portman, and Kanye West
          <br />
          <strong className={classes.stronga}>
            Clients Include: Google, VMware, T-Mobile, Cisco, HP, Kia, IBM,
            Square Enix, Capcom
          </strong>
        </Typography>
        <Typography className={classes.text} variant="h6">
          <strong className={classes.strong}>
            Freelance Speaker Coordinator: 2015-2021
          </strong>
          <br />
          <strong className={classes.stronga}>
            Companies: FNTech, Jack Morton Worldwide
          </strong>
          <br />
          Point of contact for all speakers. Managing speaker information on the
          show website and in the registration database. Managing speaker slide
          decks and submitting them for client approval. Scheduling rehearsal
          times and relaying logistics information to presenters before they
          arrive onsite. Managing speaker support onsite, ensuring that all
          speakers have successful sessions.
          <br />
          <strong className={classes.stronga}>Key Accomplishments:</strong>
          <br />
          ● Successfully managing international events, with hundreds of
          speakers, from start to finish
          <br />
          ● Working diligently to meet speaker needs while staying in scope
          established by client
          <br />
          ● Collaborating with all departments to set up speakers for successful
          sessions
          <br />
          <strong className={classes.stronga}>
            Clients Include: Facebook, OpenStack, Oculus, Open Compute Project
          </strong>
        </Typography>
        <Typography className={classes.subtitle} variant="h4" align="center">
          Education
        </Typography>
        <Typography className={classes.text} variant="h6">
          ● UC Davis Continuing and Professional Education Bootcamp - Full Stack Web Development

          <br />
          ● Santa Fe University of Art and Design (formerly College of Santa Fe) - B.A., Moving Image Arts
          <br />
          ● Lewis & Clark College - Art Major
        </Typography>
      </Box>
    </>
  );
};

export default Resume;
