import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

let data = [
  {
    question: "How long does it take?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Do you offer in-home-services?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Do I have to buy the items right away?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "What happens once I select the wining design?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "How do I receive your exclusive furniture discounts?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "How much does it cost to run a projects?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Are top interior designers available on Decorilla?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },

  {
    question: "What is your 100% satisfaction guarantee?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const FrequentlyAskedQuestions = () => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h2"
        color="text.main"
        sx={{ textAlign: "center", mb: 6.5 }}
      >
        Frequently Asked Questions
      </Typography>
      {data?.map((item, i) => (
        <Accordion key={i} sx={{ background: "#F6F6F6", mb: 3.125 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ color: "#2E2E2E", px: 4, py: 1 }}
          >
            <Typography sx={{ fontSize: "24px", color: "#2E2E2E" }}>
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Typography sx={{ color: "#2E2E2E", px: 2 }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default FrequentlyAskedQuestions;
