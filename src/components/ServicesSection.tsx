import serviceBarber from "@/assets/service-barber.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";

const services = [
  {
    title: "Barbería",
    description: "Cortes clásicos, degradados de precisión, perfilado de barba con toalla caliente y rituales de afeitado tradicional con navaja.",
    image: serviceBarber,
  },
  {
    title: "Peluquería",
    description: "Colorimetría avanzada, mechas balayage, tratamientos capilares y peinados de autor para cada ocasión.",
    image: serviceHair,
  },
  {
    title: "Uñas & Estética",
    description: "Uñas esculpidas, kapping, nail art minimalista de larga duración y tratamientos de belleza integral.",
    image: serviceNails,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6" id="servicios">
      <div className="container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-heading text-3xl md:text-4xl font-light tracking-[0.08em] mb-4">
            Servicios de <span className="text-gradient-gold">Autor</span>
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-muted-foreground font-body text-sm tracking-wider max-w-md mx-auto">
            Cada servicio es una experiencia diseñada con precisión artesanal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="fade-in-up group cursor-pointer"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden mb-5 aspect-[4/5]">
                <img
                  src={s.image}
                  alt={`${s.title} en Stella Estudio`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-2xl text-primary mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
