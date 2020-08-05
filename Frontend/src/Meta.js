import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Meta = () => {
  const pathname = useLocation().pathname.split("/")[1];
  var location;
  switch (pathname) {
    case "":
      break;
    case "faqs":
      location = "FAQs";
      break;
    case "press-room":
      location = "Press Room";
      break;
    case "terms-and-conditions":
      location = "Terms & Conditions";
      break;
    case "privacy-policy":
      location = "Privacy Policy";
      break;
    case "gallery":
      location = "Gallery";
      break;
    case "✨THANKYOU✨":
      location = "✨THANKYOU✨";
      break;
    default:
      location = "Page Not Found";
  }

  return (
    <Helmet>
      <title>
        {location
          ? `${location} | The Next Stage - A Fundraising
        Initiative by Esplanade`
          : `The Next Stage - A Fundraising
        Initiative by Esplanade`}
      </title>
      <link
        rel="canonical"
        href={
          location === "Page Not Found"
            ? "https://thenextstage.sg/"
            : `https://thenextstage.sg${pathname}`
        }
      />
    </Helmet>
  );
};

export default Meta;
