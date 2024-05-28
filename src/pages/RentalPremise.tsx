import { ImageSlider } from "../components/common/ImageSlider";
import "./styles/RentalPremise.css";
import { ArrowRight } from "lucide-react";

interface RentalPremiseProps {
  data: {
    rentalPremiseName: string;
    images: { url: string; alt: string }[];
    mapLink: string;
    address: string;
    zipCode: string;
    apartmentDescription: string;
    keyInfo: string[][];
    facilities: string[][];
    calendarLink: string;
    contactInfo: {
      contactName: string;
      phoneNumber: string;
      email: string;
    };
    priceDescription: string;
  };
}

const RentalPremise: React.FC<RentalPremiseProps> = ({ data }) => (
  <div className="page-container">
    <div className="top-content-background">
      <div className="wide-container-top">
        <TopText title={data.rentalPremiseName} />
        <ImageSliderWrapper images={data.images} />
        <MapLink
          mapLink={data.mapLink}
          address={data.address}
          zipCode={data.zipCode}
        />
        <ApartmentDescription description={data.apartmentDescription} />
      </div>
    </div>
    <div className="wide-container-bottom">
      <InfoSection title="Nøkkelinfo" content={data.keyInfo} />
      <InfoSection title="Fasiliteter" content={data.facilities} />
      <CalendarSection link={data.calendarLink} />
      <ContactInfo {...data.contactInfo} />
      <PriceSection description={data.priceDescription} />
      <LocationSection />
    </div>
  </div>
);

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
}) => <p className="semi-bold-inter">{description}</p>;

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
}) => (
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

const InfoLists: React.FC<InfoListsProps> = ({ keyInfo }) => (
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

interface CustomListItemProps {
  children: React.ReactNode;
}

const CustomListItem: React.FC<CustomListItemProps> = ({ children }) => (
  <li className="custom-list-item">
    <ArrowRight color="black" size={16} />
    {children}
  </li>
);

interface InfoBoxHeaderProps {
  title: string;
}

const InfoBoxHeader: React.FC<InfoBoxHeaderProps> = ({ title }) => (
  <div>
    <div className="info-box-header-br">
      <header className="header-info-box">{title}</header>
      <hr />
    </div>
  </div>
);

export default RentalPremise;
