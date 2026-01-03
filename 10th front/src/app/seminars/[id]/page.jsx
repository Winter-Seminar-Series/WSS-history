import { notFound } from 'next/navigation';
import { fetchSeminars } from '../../../lib/api/events/seminar';
import Footer from '../../../ui/components/Footer';
import Navbar, { NavbarPlaceholder } from '../../../ui/components/Navbar';
import Seminar from './Seminar';

export default async function WorkshopPage({ params }) {
  const { id } = await params;

  const seminars = await fetchSeminars();
  const seminar = seminars.find((seminar) => seminar.id === parseInt(id));

  if (!seminar) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <NavbarPlaceholder />
      <Seminar seminar={seminar} />
      <Footer />
    </>
  );
}
