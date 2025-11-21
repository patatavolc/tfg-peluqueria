import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import './ContactInfo.css';

interface ContactInfoProps {
  address: string;
  tlfNumber: string;
  email: string;
}

export default function ContactInfo({
  address,
  tlfNumber,
  email,
}: ContactInfoProps) {
  return (
    <div className="contact-info__content">
      <div className="contact-info__info">
        <MapPinIcon className="contact-info__icon"/>
        <p>{address}</p>
      </div>
      <div className="contact-info__info">
        <PhoneIcon className="contact-info__icon"/>
        <p>{tlfNumber}</p>
      </div>
      <div className="contact-info__info">
        <EnvelopeIcon className="contact-info__icon"/>
        <p>{email}</p>
      </div>
    </div>
  );
}
