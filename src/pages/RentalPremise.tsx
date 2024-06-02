import { ImageSlider } from "../components/common/ImageSlider";
import styles from "./styles/RentalPremise.module.css";
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

const RentalPremise: React.FC<RentalPremiseProps> = ({
  data: {
    rentalPremiseName,
    images,
    mapLink,
    address,
    zipCode,
    apartmentDescription,
    keyInfo,
    facilities,
    calendarLink,
    contactInfo,
    priceDescription,
  },
}) => (
  <div className={styles.pageContainer}>
    <div className={styles.topContentBackground}>
      <div className={styles.wideContainerTop}>
        <TopText title={rentalPremiseName} />
        <ImageSliderWrapper images={images} />
        <MapLink mapLink={mapLink} address={address} zipCode={zipCode} />
        <ApartmentDescription description={apartmentDescription} />
      </div>
    </div>
    <div className={styles.wideContainerBottom}>
      <InfoSection title="Nøkkelinfo" content={keyInfo} />
      <InfoSection title="Fasiliteter" content={facilities} />
      <CalendarSection link={calendarLink} />
      <ContactInfo {...contactInfo} />
      <PriceSection description={priceDescription} />
      <LocationSection />
    </div>
  </div>
);

interface ImageSliderWrapperProps {
  images: { url: string; alt: string }[];
}

const ImageSliderWrapper: React.FC<ImageSliderWrapperProps> = ({ images }) => (
  <div className={styles.imgSlider}>
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
    <div className={styles.addressContainer}>
      <span>{address}</span>
      <span>{zipCode}</span>
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
    <div className={styles.bottomInfoBox}>
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
    <div className={styles.bottomInfoBox}>
      <div className={styles.justifySpaceBetween}>
        <div>
          <p>Noe du lurer på?</p>
        </div>
        <div className={styles.contactInfoBuilding}>
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
    <div className={styles.bottomInfoBox}>
      <p>{description}</p>
    </div>
  </div>
);

const LocationSection: React.FC = () => (
  <div>
    <InfoBoxHeader title="Beliggenhet" />
    <div className={styles.bottomInfoBox}>
      <p>Kanskje kart her</p>
    </div>
  </div>
);

interface TopTextProps {
  title: string;
}

const TopText: React.FC<TopTextProps> = ({ title }) => (
  <div className={styles.topTextBox}>
    <h1 className="extra-bold-inter">{title}</h1>
  </div>
);

interface InfoListsProps {
  keyInfo: string[][];
}

const InfoLists: React.FC<InfoListsProps> = ({ keyInfo }) => (
  <div className={styles.listRows}>
    {keyInfo.map((list, index) => (
      <ul key={index} className={styles.customList}>
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
  <li className={styles.customListItem}>
    <ArrowRight color="black" size={16} />
    {children}
  </li>
);

interface InfoBoxHeaderProps {
  title: string;
}

const InfoBoxHeader: React.FC<InfoBoxHeaderProps> = ({ title }) => (
  <div>
    <div className={styles.hrHeader}>
      <hr className={styles.headerLine} />
      <h1 className={styles.headerTitle}>{title}</h1>
      <hr className={styles.headerLine} />
    </div>
  </div>
);

export default RentalPremise;
