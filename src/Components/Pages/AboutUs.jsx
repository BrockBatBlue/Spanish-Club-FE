import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Pages/AboutUs.css";

function AboutUs() {
  return (
    <section className="text-dark pt-5 pb-5">
      <div id="cardContainer" className="container pb-5 ">
        <div className="row text-center justify-content-sm-center no-gutters">
          <div className="col-12 col-md-4    ">
            <div className="card shadow-sm h-100">
              <div className=" card-body   p-md-5 ">
                <img
                  id="englandFlag"
                  alt="Flag of England"
                  className="languageFlags img-fluid d-block mx-auto rounded-circle mt-md-3 mb-4 mt-sm-2"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                />
                <h2>English</h2>
                <p>
                  Babel Library is an online language education provider for
                  students of all ages in Mexico. Are you new around here? We
                  have qualified Spanish teachers to help you transition into
                  Mexico life. We also provide English and German to all age
                  ranges.
                </p>
                <p className="mt-4">
                  <a href={Link}>Learn More &gt;</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4    ">
            <div className="card shadow-sm h-100">
              <div className=" card-body   p-md-5 ">
                <img
                  alt="Mexico Flag"
                  className="languageFlags img-fluid d-block mx-auto rounded-circle mt-md-3 mb-4 mt-sm-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png"
                />
                <h2>Español</h2>
                <p>
                  Babel Library es un proveedor de educación de idiomas en línea
                  para estudiantes de todas las edades en México. ¿Eres nuevo
                  por aquí? Contamos con profesores de español calificados para
                  ayudarte en la transición a la vida en México. También
                  ofrecemos inglés y alemán para todos los rangos de edad.
                </p>
                <p className="mt-4">
                  <a href={Link}>Learn More &gt;</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4    ">
            <div className="card shadow-sm h-100">
              <div className=" card-body   p-md-5 ">
                <img
                  alt="Flag of Germany"
                  className="languageFlags img-fluid d-block mx-auto rounded-circle mt-md-3 mb-4 mt-sm-2"
                  src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
                />
                <h2>Deutsch</h2>
                <p>
                  Die Babel Library ist ein Online-Anbieter für Sprachunterricht
                  für Schüler jeden Alters in Mexiko. Bist du neu hier? Wir
                  haben qualifizierte Spanischlehrer, die Ihnen beim Übergang in
                  das mexikanische Leben helfen. Wir bieten auch Englisch und
                  Deutsch für alle Altersgruppen.
                </p>
                <p className="mt-4">
                  <a href={Link}>Learn More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
