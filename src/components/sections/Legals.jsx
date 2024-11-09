import React from "react";
import LegalIntro from "../renders/texts-renders/legals-renders/LegalIntro.jsx";
import LegalInfoCollec from "../renders/texts-renders/legals-renders/InfoCollec.jsx";
import UseOfInfo from "../renders/texts-renders/legals-renders/UseOfInfo.jsx";
import SharingOfInfo from "../renders/texts-renders/legals-renders/SharingOfInfo.jsx";
import AnalyAdver from "../renders/texts-renders/legals-renders/AnalyAdver.jsx";
import RightsChoices from "../renders/texts-renders/legals-renders/RightsChoices.jsx";
import DataSecurity from "../renders/texts-renders/legals-renders/DataSecurity.jsx";
import ChangesPP from "../renders/texts-renders/legals-renders/ChangesPP.jsx";
import ContactUs from "../renders/texts-renders/legals-renders/ContactUs.jsx";
import TermsIntro from "../renders/texts-renders/terms-renders/TermsIntro.jsx";
import UseOfService from "../renders/texts-renders/terms-renders/UseOfService.jsx";
import UserContent from "../renders/texts-renders/terms-renders/UserContent.jsx";
import UCLicenseGrant from "../renders/texts-renders/terms-renders/UCLicenseGrant.jsx";
import ProprietaryRights from "../renders/texts-renders/terms-renders/ProprietaryRights.jsx";
import Privacy from "../renders/texts-renders/terms-renders/Privacy.jsx";
import Security from "../renders/texts-renders/terms-renders/Security.jsx";
import ThirdPartyLinks from "../renders/texts-renders/terms-renders/ThirdPartyLinks.jsx";
import Warranty from "../renders/texts-renders/terms-renders/Warranty.jsx";
import LimitOfLiability from "../renders/texts-renders/terms-renders/LimitOfLiability.jsx";
import GovLawAndArbit from "../renders/texts-renders/terms-renders/GovLawAndArbit.jsx";
import Termination from "../renders/texts-renders/terms-renders/Termination.jsx";
import General from "../renders/texts-renders/terms-renders/General.jsx";
const Legals = ({ prop }) => {
  if (prop === "LegalIntro") {
    return <LegalIntro />;
  }
  if (prop === "LegalInfoCollec") {
    return <LegalInfoCollec />;
  }
  if (prop === "UseOfInfo") {
    return <UseOfInfo />;
  }
  if (prop === "SharingOfInfo") {
    return <SharingOfInfo />;
  }
  if (prop === "AnalyAdver") {
    return <AnalyAdver />;
  }
  if (prop === "RightsChoices") {
    return <RightsChoices />;
  }
  if (prop === "DataSecurity") {
    return <DataSecurity />;
  }
  if (prop === "ChangesPP") {
    return <ChangesPP />;
  }
  if (prop === "ContactUs") {
    return <ContactUs />;
  }
  if (prop === "TermsIntro") {
    return <TermsIntro />;
  }
  if (prop === "UseOfService") {
    return <UseOfService />;
  }
  if (prop === "UserContent") {
    return <UserContent />;
  }
  if (prop === "UCLicenseGrant") {
    return <UCLicenseGrant />;
  }
  if (prop === "ProprietaryRights") {
    return <ProprietaryRights />;
  }
  if (prop === "Privacy") {
    return <Privacy />;
  }
  if (prop === "Security") {
    return <Security />;
  }
  if (prop === "ThirdPartyLinks") {
    return <ThirdPartyLinks />;
  }
  if (prop === "Warranty") {
    return <Warranty />;
  }
  if (prop === "LimitOfLiability") {
    return <LimitOfLiability />;
  }
  if (prop === "GovLawAndArbit") {
    return <GovLawAndArbit />;
  }
  if (prop === "Termination") {
    return <Termination />;
  }
  if (prop === "General") {
    return <General />;
  }
  return null;
};

export default Legals;
