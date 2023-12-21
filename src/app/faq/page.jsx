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
                  What makes BB Caviar unique?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      BB Caviar stands out for its commitment to quality and
                      sustainability. Our caviar is free from hormones,
                      antibiotics, dyes, or preservatives, ensuring a pure and
                      authentic taste experience.
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
                  How should I store my caviar after purchase?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      For optimal freshness, store your caviar in the coldest
                      part of your refrigerator, ideally at 32°F to 36°F. Avoid
                      freezing it, as this can compromise the texture and
                      flavor.
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
                  Can I return a product if I’m not satisfied?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      Yes, customer satisfaction is paramount to us. If you’re
                      not satisfied with your purchase, please review our return
                      and refund policy on our website for detailed
                      instructionske Aldus PageMaker including versions of Lorem
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
                  How long does the caviar last once opened?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      Once opened, we recommend consuming the caviar within
                      three days. Keep it tightly sealed and refrigerated when
                      not in use.
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
                  What payment methods do you accept?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      We accept various payment methods, including major credit
                      cards, PayPal, and other secure payment options. Check our
                      website for a complete list of acceptable payment methods.
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
                  Do you offer any discounts or promotions?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      We occasionally offer special promotions and discounts to
                      our customers. The best way to stay informed about these
                      offers is to subscribe to our newsletter.
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
                  How can I learn more about caviar and its culinary uses?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div className={styles.pEdit}>
                    <p>
                      We have a wealth of information on our blog, including
                      culinary tips, recipes, and insights into the world of
                      caviar. It’s a great resource for both beginners and
                      seasoned caviar enthusiasts.
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
