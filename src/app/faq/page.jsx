import React from "react";
import styles from "./styles.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Faq() {
  return (
    <>
      <div className={styles.Faq}>
        <h2>FAQ</h2>
        <div className={styles.Faqbox}>
          <div className={styles.faqContent}>
            <Accordion
              className={styles.line}
              style={{
                marginTop: "10px",
                backgroundColor: "#2b2b2b",
                paddingTop: "20px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "#fff" }}>
                  What is Lorem Ipsum?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.line}
              style={{
                marginTop: "0px",
                backgroundColor: "#2b2b2b",
                paddingTop: "20px",
              }}
            >
              <AccordionSummary
                className={styles.muContent}
                style={{ borderColor: "#fff" }}
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "#fff" }}>
                  {" "}
                  What is Lorem Ipsum?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.line}
              style={{
                marginTop: "0px",
                backgroundColor: "#2b2b2b",
                paddingTop: "20px",
              }}
            >
              <AccordionSummary
                className={styles.muContent}
                style={{ borderColor: "#fff" }}
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "#fff" }}>
                  {" "}
                  What is Lorem Ipsum?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.line}
              style={{
                marginTop: "0px",
                backgroundColor: "#2b2b2b",
                paddingTop: "20px",
              }}
            >
              <AccordionSummary
                className={styles.muContent}
                style={{ borderColor: "#fff" }}
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "#fff" }}>
                  {" "}
                  What is Lorem Ipsum?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.line}
              style={{
                marginTop: "0px",
                backgroundColor: "#2b2b2b",
                paddingTop: "20px",
              }}
            >
              <AccordionSummary
                className={styles.muContent}
                style={{ borderColor: "#fff" }}
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "#fff" }}>
                  {" "}
                  What is Lorem Ipsum?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.line}
              style={{
                marginTop: "0px",
                backgroundColor: "#2b2b2b",
                paddingTop: "20px",
              }}
            >
              <AccordionSummary
                className={styles.muContent}
                style={{ borderColor: "#fff" }}
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "#fff" }}>
                  {" "}
                  What is Lorem Ipsum?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.line}
              style={{
                marginTop: "0px",
                backgroundColor: "#2b2b2b",
                paddingTop: "20px",
              }}
            >
              <AccordionSummary
                className={styles.muContent}
                style={{ borderColor: "#fff" }}
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{ color: "#fff" }}>
                  {" "}
                  What is Lorem Ipsum?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
