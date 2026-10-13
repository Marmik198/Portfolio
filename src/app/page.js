import Box from '@mui/material/Box';
import Backdrop from '@/components/Backdrop';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Internships from '@/components/Internships';
import Freelancing from '@/components/Freelancing';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Backdrop />
      <Cursor />
      <Navbar />
      <Box component="main" sx={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Internships />
        <Education />
        <Projects />
        <Achievements />
        <Freelancing />
        {/* <Certifications /> */}
        <Contact />
      </Box>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Footer />
      </Box>
    </>
  );
}
