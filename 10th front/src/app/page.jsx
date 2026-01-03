'use server';

import Header from '../ui/components/Header';
import Programs from '../ui/components/Programs';
import Seminar from '../ui/landing/seminar/Seminar';
import Staff from '../ui/landing/staff/Staff';
import Footer from '../ui/components/Footer';
import Timer from '../ui/components/Timer';

export default async function Home() {
  const authenticated = false;
  return (
    <>
      <Header />
      <Programs />
      {/* <Advisors /> */}
      <Seminar />
      <Staff />
      <Timer />
      <Footer />
    </>
  );
}
