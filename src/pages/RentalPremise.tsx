import { ImageSlider } from "../components/common/ImageSlider";
import MapComponent from "../components/common/MapComponent";
import { SectionHeader } from "./Util";
import styles from "./styles/RentalPremise.module.css";
import { ArrowRight, MapPin } from "lucide-react";

interface RentalPremiseProps {
  images: { url: string; alt: string }[];
  rentalPremiseName: string;
  location: string;
  address: string;
  zipCode: string;
  textParagraphs: { content: string; isStrong: boolean }[];
  keyInfo: string[][];
  facilities: string[][];
  calendarLink: string;
  contactInfo: {
    contactName: string;
    phoneNumber: string;
    email: string;
  };
  priceDescription: string;
  longLatMarker: { lat: number; lng: number };
}

const RentalPremise: React.FC<RentalPremiseProps> = ({
  images,
  rentalPremiseName,
  location,
  address,
  zipCode,
  textParagraphs,
  keyInfo,
  facilities,
  calendarLink,
  contactInfo,
  priceDescription,
  longLatMarker,
}) => (
  <div className="page-container">
    <div className={styles.topContentBackground + " padding-top-7rem"}>
      <div className="max-width-container">
        <ImageSliderWrapper images={images} />
        <div className={"horizontal-padding padding-top-2rem"}>
          <TopText
            title={rentalPremiseName}
            location={location}
            address={address}
            zipCode={zipCode}
          />
          <TextParagraphCreator textParagraphs={textParagraphs} />
        </div>
      </div>
    </div>
    <div className="max-width-container horizontal-padding">
      <InfoSection title="Nøkkelinfo" content={keyInfo} />
      <InfoSection title="Fasiliteter" content={facilities} />
      <CalendarSection link={calendarLink} />
      <ContactInfo {...contactInfo} />
      <PriceSection description={priceDescription} />
    </div>
    <SectionHeader title="Kart" />
    <MapComponent center={longLatMarker} />
  </div>
);

interface TopTextProps {
  title: string;
  location: string;
  address: string;
  zipCode: string;
}

const TopText: React.FC<TopTextProps> = ({
  title,
  location,
  address,
  zipCode,
}) => (
  <div className={styles.topText}>
    <p>
      <span className={styles.mainHeader}>{title},</span>
      <span className={styles.location}> {location}</span>
    </p>
    <a
      aria-label="Gå til WayForward sin Instagram-side"
      href={`https://www.google.com/maps/place/${address}+${zipCode}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className={styles.address}>
        <MapPin color="black" size={16} />
        {address}, {zipCode}
      </p>
    </a>
  </div>
);

interface TextParagraphCreatorProps {
  textParagraphs: { content: string; isStrong: boolean }[];
}

const TextParagraphCreator: React.FC<TextParagraphCreatorProps> = ({
  textParagraphs,
}) => (
  <div className={styles.bodyText}>
    {textParagraphs.map((text, index) => (
      <p
        key={index}
        className={
          text.isStrong ? styles.strongTextParagraph : styles.lightTextParagraph
        }
      >
        {text.content}
      </p>
    ))}
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

interface InfoSectionProps {
  title: string;
  content: string[][];
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, content }) => (
  <>
    <SectionHeader title={title} />
    <InfoLists keyInfo={content} />
  </>
);

interface CalendarSectionProps {
  link: string;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({ link }) => (
  <div>
    <SectionHeader title="Kalender" />
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
    <SectionHeader title="Kontakt" />
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
    <SectionHeader title="Pris" />
    <div className={styles.bottomInfoBox}>
      <p>{description}</p>
    </div>
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

export type { RentalPremiseProps };
export default RentalPremise;
