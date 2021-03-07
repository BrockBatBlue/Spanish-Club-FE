import React from "react";
import "../../Styles/Pages/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5">
          <div className="media aboutUs">
            <h1>About Babel Library</h1>
            <hr />
            <p>
              Babel Library is an online language education provider for
              students of all ages in Mexico. Are you new around here? We have
              qualified Spanish teachers to help you transition into Mexico
              life. We also provide English and German to all age ranges.
            </p>
            <p>
              Babel Library es un proveedor de educación de idiomas en línea
              para estudiantes de todas las edades en México. ¿Eres nuevo por
              aquí? Contamos con profesores de español calificados para ayudarte
              en la transición a la vida en México. También ofrecemos inglés y
              alemán para todos los rangos de edad.
            </p>
            <p>
              Die Babel Library ist ein Online-Anbieter für Sprachunterricht für
              Schüler jeden Alters in Mexiko. Bist du neu hier? Wir haben
              qualifizierte Spanischlehrer, die Ihnen beim Übergang in das
              mexikanische Leben helfen. Wir bieten auch Englisch und Deutsch
              für alle Altersgruppen.
            </p>
            <hr />
            <img src="computersInClassroom.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="media-body">
            <h2 className="mt-0">Our Services</h2>
            <hr />
            <p>
              We provide entirely online language education in English, Spanish,
              and German. The students will be a live group provided through
              Zoom. Students will work together in a virtual classroom setting.
              All lessons are geared toward specifice age ranges and language
              level - Basic 1-2, Intermediate 1-2, and Advanced 1-2.
            </p>
            <p>
              Ofrecemos educación de idiomas completamente en línea en inglés,
              español y alemán. Los estudiantes serán un grupo en vivo
              proporcionado a través de Zoom. Los estudiantes trabajarán juntos
              en un salón de clases virtual. Todas las lecciones están
              orientadas a rangos de edad y nivel de idioma específicos: básico
              1-2, intermedio 1-2 y avanzado 1-2.
            </p>
            <p>
              Wir bieten vollständig Online-Sprachunterricht in Englisch,
              Spanisch und Deutsch an. Die Schüler werden eine Live-Gruppe sein,
              die über Zoom bereitgestellt wird. Die Schüler arbeiten in einem
              virtuellen Klassenzimmer zusammen. Alle Lektionen sind auf
              bestimmte Altersgruppen und Sprachniveaus ausgerichtet - Basic
              1-2, Intermediate 1-2 und Advanced 1-2.
            </p>
            <hr />
            <h3>Our Schedule</h3>
            <hr />
            <Link to="/contact" className="signUp">
              Spring Semester: February 15 - May 25
            </Link>
            <Link to="/contact" className="signUp">
              Summer Semester: June 1 - September 10
            </Link>
            <Link to="/contact" className="signUp">
              Autumn Semester: September 25 - December 16
            </Link>
            <hr />
            <h3> Contact Us!</h3>
            <Link to="contact" className="inquiry">
              Find out More here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
