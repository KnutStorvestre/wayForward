import { ImageSlider } from "./components/ImageSlider";
import "./styles/Building.css";
import { ArrowRight } from "lucide-react";
import {
  rentalPremiseName,
  images,
  keyInfo,
  facilities,
  apartmentDescription,
  contactInfo,
  mapLink,
  address,
  zipCode,
  calenderLink,
  priceDescription,
} from "./data/FemmerenData";

const RentalPremise: React.FC = () => {
  return (
    <div className="wide-container">
      <TopText title={rentalPremiseName} />
      <ImageSliderWrapper images={images} />
      <MapLink mapLink={mapLink} address={address} zipCode={zipCode} />
      <ApartmentDescription description={apartmentDescription} />
      <InfoSection title="Nøkkelinfo" content={keyInfo} />
      <InfoSection title="Fasiliteter" content={facilities} />
      <CalendarSection link={calenderLink} />
      <ContactInfo
        contactName={contactInfo.contactName}
        phoneNumber={contactInfo.phoneNumber}
        email={contactInfo.email}
      />
      <PriceSection description={priceDescription} />
      <LocationSection />
    </div>
  );
};

interface ImageSliderWrapperProps {
  images: { url: string; alt: string }[];
}

const ImageSliderWrapper: React.FC<ImageSliderWrapperProps> = ({ images }) => (
  <div className="img-slider">
    <ImageSlider images={images} />
  </div>
);

interface MapLinkProps {
  mapLink: string;
  address: string;
  zipCode: string;
}

const MapLink: React.FC<MapLinkProps> = ({ mapLink, address, zipCode }) => (
  <a href={mapLink} target="_blank" rel="noopener noreferrer">
    <div className="address-container">
      <span className="address">{address}</span>
      <span className="address">{zipCode}</span>
    </div>
  </a>
);

interface ApartmentDescriptionProps {
  description: string;
}

const ApartmentDescription: React.FC<ApartmentDescriptionProps> = ({
  description,
}) => {
  return <p className="semibold-inter">{description}</p>;
};

interface InfoSectionProps {
  title: string;
  content: string[][];
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, content }) => (
  <>
    <InfoBoxHeader title={title} />
    <InfoLists keyInfo={content} />
  </>
);

interface CalendarSectionProps {
  link: string;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({ link }) => (
  <div>
    <InfoBoxHeader title="Kalender" />
    <div className="bottom-infobox">
      <p>
        Se vår kalender for når lokalet er ledig{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          her
        </a>
        .
      </p>
    </div>
  </div>
);

interface ContactInfoProps {
  contactName: string;
  phoneNumber: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  contactName,
  phoneNumber,
  email,
}) => {
  return (
    <div>
      <InfoBoxHeader title="Kontakt" />
      <div className="bottom-infobox">
        <div className="justify-space-between">
          <div>
            <p>Noe du lurer på?</p>
          </div>
          <div className="contact-info-building">
            <span>Kontakt: {contactName}</span>
            <span>tlf: {phoneNumber}</span>
            <span>e-post: {email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PriceSectionProps {
  description: string;
}

const PriceSection: React.FC<PriceSectionProps> = ({ description }) => (
  <div>
    <InfoBoxHeader title="Pris" />
    <div className="bottom-infobox">
      <p>{description}</p>
    </div>
  </div>
);

const LocationSection: React.FC = () => (
  <div>
    <InfoBoxHeader title="Beliggenhet" />
    <div className="bottom-infobox">
      <p>Kanskje kart her</p>
    </div>
  </div>
);

interface TopTextProps {
  title: string;
}

const TopText: React.FC<TopTextProps> = ({ title }) => (
  <div className="top-text-box">
    <h1 className="extra-bold-inter">{title}</h1>
  </div>
);

interface InfoListsProps {
  keyInfo: string[][];
}

const InfoLists: React.FC<InfoListsProps> = ({ keyInfo }) => {
  return (
    <div className="list-rows">
      {keyInfo.map((list, index) => (
        <ul key={index} className="custom-list">
          {list.map((item, idx) => (
            <CustomListItem key={idx}>{item}</CustomListItem>
          ))}
        </ul>
      ))}
    </div>
  );
};

interface CustomListItemProps {
  children: React.ReactNode;
}

const CustomListItem: React.FC<CustomListItemProps> = ({ children }) => {
  return (
    <li className="custom-list-item">
      <ArrowRight color="black" size={16} />
      {children}
    </li>
  );
};

interface InfoBoxHeaderProps {
  title: string;
}

const InfoBoxHeader: React.FC<InfoBoxHeaderProps> = ({ title }) => {
  return (
    <div>
      <div className="info-box-header-br">
        <header className="header-info-box">{title}</header>
        <hr />
      </div>
    </div>
  );
};

export default RentalPremise;
