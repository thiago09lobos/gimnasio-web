import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Mail } from "lucide-react"

export default function EntrenadoresPage() {
  const entrenadores = [
    {
      nombre: "Carlos Ruiz",
      especialidad: "Entrenamiento Funcional y Spinning",
      experiencia: "8 años",
      descripcion:
        "Especialista en entrenamiento funcional y ciclismo indoor. Carlos es conocido por sus clases de spinning llenas de energía y sus efectivos entrenamientos funcionales que mejoran la fuerza y resistencia.",
      certificaciones: [
        "Certificado en Entrenamiento Personal NSCA",
        "Instructor de Spinning",
        "Especialista en Nutrición Deportiva",
      ],
      imagen: "/placeholder.svg?height=400&width=300",
      instagram: "#",
      linkedin: "#",
      email: "carlos@fitzone.com",
    },
    {
      nombre: "Ana Martínez",
      especialidad: "Yoga y Pilates",
      experiencia: "10 años",
      descripcion:
        "Instructora certificada de yoga y pilates con enfoque en la conexión mente-cuerpo. Ana te ayudará a mejorar tu flexibilidad, postura y reducir el estrés a través de sus clases adaptadas a todos los niveles.",
      certificaciones: [
        "Certificación de Yoga Vinyasa 500h",
        "Instructora de Pilates Mat y Reformer",
        "Especialista en Yoga Terapéutico",
      ],
      imagen: "/placeholder.svg?height=400&width=300",
      instagram: "#",
      linkedin: "#",
      email: "ana@fitzone.com",
    },
    {
      nombre: "Javier Sánchez",
      especialidad: "HIIT y Entrenamiento de Fuerza",
      experiencia: "6 años",
      descripcion:
        "Experto en entrenamientos de alta intensidad y fuerza. Javier diseña rutinas desafiantes que maximizan la quema de calorías y el desarrollo muscular, siempre adaptadas al nivel de cada persona.",
      certificaciones: [
        "Certificado en Entrenamiento Personal ACE",
        "Especialista en HIIT",
        "Certificado en Levantamiento Olímpico",
      ],
      imagen: "/placeholder.svg?height=400&width=300",
      instagram: "#",
      linkedin: "#",
      email: "javier@fitzone.com",
    },
    {
      nombre: "Laura Gómez",
      especialidad: "Pilates y Rehabilitación",
      experiencia: "12 años",
      descripcion:
        "Especialista en pilates terapéutico y rehabilitación. Con formación en fisioterapia, Laura ayuda a sus clientes a recuperarse de lesiones y mejorar su calidad de vida a través del movimiento controlado.",
      certificaciones: [
        "Grado en Fisioterapia",
        "Certificación Pilates Clínico",
        "Especialista en Rehabilitación Deportiva",
      ],
      imagen: "/placeholder.svg?height=400&width=300",
      instagram: "#",
      linkedin: "#",
      email: "laura@fitzone.com",
    },
    {
      nombre: "María López",
      especialidad: "Zumba y Baile Fitness",
      experiencia: "7 años",
      descripcion:
        "Instructora de zumba y baile fitness con gran carisma. Las clases de María son divertidas y enérgicas, perfectas para quienes buscan ponerse en forma mientras disfrutan del ritmo de la música.",
      certificaciones: [
        "Instructora Certificada de Zumba",
        "Especialista en Baile Fitness",
        "Certificación en Strong Nation",
      ],
      imagen: "/placeholder.svg?height=400&width=300",
      instagram: "#",
      linkedin: "#",
      email: "maria@fitzone.com",
    },
    {
      nombre: "Roberto Díaz",
      especialidad: "Boxeo y Artes Marciales",
      experiencia: "15 años",
      descripcion:
        "Ex boxeador profesional convertido en entrenador. Roberto enseña técnicas de boxeo y artes marciales para mejorar la condición física, la coordinación y la confianza en uno mismo.",
      certificaciones: [
        "Entrenador de Boxeo Federado",
        "Cinturón Negro en Kickboxing",
        "Certificado en Defensa Personal",
      ],
      imagen: "/placeholder.svg?height=400&width=300",
      instagram: "#",
      linkedin: "#",
      email: "roberto@fitzone.com",
    },
    {
      nombre: "Elena Ruiz",
      especialidad: "Body Pump y Entrenamiento con Pesas",
      experiencia: "9 años",
      descripcion:
        "Especialista en entrenamiento con pesas y body pump. Elena te ayudará a tonificar tu cuerpo, ganar fuerza y mejorar tu composición corporal con rutinas efectivas y seguras.",
      certificaciones: [
        "Certificada en Les Mills Body Pump",
        "Entrenadora Personal NASM",
        "Especialista en Nutrición Deportiva",
      ],
      imagen: "/placeholder.svg?height=400&width=300",
      instagram: "#",
      linkedin: "#",
      email: "elena@fitzone.com",
    },
    {
      nombre: "Miguel Torres",
      especialidad: "Nutrición Deportiva",
      experiencia: "11 años",
      descripcion:
        "Nutricionista deportivo especializado en planes alimenticios para deportistas y personas que buscan mejorar su composición corporal. Miguel te ayudará a optimizar tu alimentación según tus objetivos.",
      certificaciones: [
        "Grado en Nutrición Humana y Dietética",
        "Máster en Nutrición Deportiva",
        "Certificado en Suplementación Deportiva",
      ],
      imagen: "/placeholder.svg?height=400&width=300",
      instagram: "#",
      linkedin: "#",
      email: "miguel@fitzone.com",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="h-[400px] bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}
          />
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Entrenadores</h1>
            <p className="text-lg max-w-2xl">
              Conoce al equipo de profesionales que te guiarán en tu camino hacia una vida más saludable y en forma.
            </p>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Equipo de Profesionales</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nuestros entrenadores son expertos certificados en sus áreas, apasionados por ayudarte a alcanzar tus
                objetivos fitness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {entrenadores.map((entrenador, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={entrenador.imagen || "/placeholder.svg"}
                      alt={entrenador.nombre}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-1">{entrenador.nombre}</h3>
                    <p className="text-primary text-sm mb-2">{entrenador.especialidad}</p>
                    <p className="text-sm text-muted-foreground mb-4">Experiencia: {entrenador.experiencia}</p>

                    <div className="flex space-x-2 mt-4">
                      <a
                        href={entrenador.instagram}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href={entrenador.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${entrenador.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trainer Details */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Conoce Más a Nuestros Entrenadores</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Información detallada sobre la experiencia y especialidades de nuestro equipo.
              </p>
            </div>

            <div className="space-y-8">
              {entrenadores.slice(0, 4).map((entrenador, index) => (
                <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm border">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4">
                      <img
                        src={entrenador.imagen || "/placeholder.svg"}
                        alt={entrenador.nombre}
                        className="w-full h-full object-cover aspect-square md:aspect-auto"
                      />
                    </div>
                    <div className="p-6 md:w-3/4">
                      <h3 className="font-bold text-2xl mb-2">{entrenador.nombre}</h3>
                      <p className="text-primary font-medium mb-2">{entrenador.especialidad}</p>
                      <p className="text-muted-foreground mb-4">{entrenador.descripcion}</p>

                      <h4 className="font-medium mb-2">Certificaciones:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                        {entrenador.certificaciones.map((cert, i) => (
                          <li key={i}>{cert}</li>
                        ))}
                      </ul>

                      <Button variant="outline" size="sm">
                        Reservar Sesión
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">Ver Todos los Entrenadores</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">¿Buscas un entrenamiento personalizado?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Nuestros entrenadores pueden crear un plan adaptado específicamente a tus necesidades y objetivos.
            </p>
            <Button size="lg" variant="secondary">
              Solicitar Entrenador Personal
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

