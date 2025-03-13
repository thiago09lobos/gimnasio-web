import { ArrowRight, Dumbbell, Users, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div
            className="h-[600px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://fotografias.larazon.es/clipping/cmsimages02/2024/09/17/7DC0CE8F-868A-4FC8-AE3C-2ED57EBDF028/este-gimnasio-mas-grande-europa-que-esta-media-hora-barcelona_69.jpg?crop=1024,576,x0,y52&width=1280&height=720&optimize=low&format=webply')",
            }}
          />
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            {/* Eslogan removido temporalmente */}
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Únete a nuestra comunidad fitness y alcanza tus metas con entrenadores profesionales y equipamiento de
              última generación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Empieza Ahora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Conoce Más
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 section-alt">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Por qué elegir FitZone?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos una experiencia fitness completa con instalaciones modernas, entrenadores certificados y una
                comunidad motivadora.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Dumbbell className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Equipamiento Moderno</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Contamos con máquinas de última generación y áreas especializadas para cada tipo de entrenamiento.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Entrenadores Expertos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Nuestro equipo de profesionales certificados te guiará en cada paso de tu viaje fitness.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Clases Variadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Desde yoga hasta HIIT, ofrecemos una amplia variedad de clases para todos los niveles.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Classes Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Nuestras Clases</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Descubre la variedad de clases diseñadas para ayudarte a alcanzar tus objetivos fitness.
                </p>
              </div>
              <Button className="mt-4 md:mt-0" variant="outline">
                Ver Todas <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Entrenamiento Funcional",
                  description:
                    "Mejora tu fuerza, resistencia y movilidad con ejercicios que imitan movimientos cotidianos.",
                  image:
                    "https://img.freepik.com/fotos-premium/entrenamiento-funcional-bandas-resistencia-primer-plano-persona-que-usa-bandas-fuerza_1204896-32874.jpg",
                  time: "Lun, Mié, Vie - 18:00",
                },
                {
                  title: "Spinning",
                  description:
                    "Quema calorías y mejora tu resistencia cardiovascular con nuestras energéticas clases de ciclismo indoor.",
                  image:
                    "https://media.istockphoto.com/id/1500451524/es/foto/mujer-atleta-entrenando-en-bicicleta-est%C3%A1tica-en-gimnasio-fitness.jpg?s=612x612&w=0&k=20&c=azjYCbdgLaJzW65FyukWvI14AmqFS6tJSm4kF3xYEg4=",
                  time: "Mar, Jue - 19:00",
                },
                {
                  title: "Yoga",
                  description:
                    "Conecta cuerpo y mente, mejora tu flexibilidad y reduce el estrés con nuestras sesiones de yoga.",
                  image: "https://www.yogisvara.com/wp-content/uploads/2020/09/yoga-o-gimnasio-2-1-min.jpeg",
                  time: "Lun a Vie - 08:00",
                },
              ].map((cls, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg border bg-card shadow-md transition-all hover:shadow-lg"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={cls.image || "/placeholder.svg"}
                      alt={cls.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{cls.title}</h3>
                    <p className="mt-2 text-muted-foreground">{cls.description}</p>
                    <div className="mt-4 flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{cls.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 section-alt">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Lo Que Dicen Nuestros Miembros</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Historias reales de personas que han transformado sus vidas con FitZone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "María García",
                  role: "Miembro desde 2022",
                  content:
                    "Desde que me uní a FitZone, he perdido 15kg y ganado mucha más energía. Los entrenadores son increíbles y siempre están dispuestos a ayudar.",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Carlos Rodríguez",
                  role: "Miembro desde 2021",
                  content:
                    "Las instalaciones son de primera clase y el ambiente es muy motivador. He logrado superar mis límites gracias al apoyo de todo el equipo.",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Laura Martínez",
                  role: "Miembro desde 2023",
                  content:
                    "Las clases de yoga han transformado mi bienestar físico y mental. Recomiendo FitZone a todos los que buscan un cambio real en su vida.",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="rounded-full h-12 w-12 object-cover border-2 border-primary"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-muted-foreground">"{testimonial.content}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 fitness-gradient text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu transformación?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Únete hoy y obtén acceso a todas nuestras instalaciones, clases y programas personalizados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Prueba Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Ver Planes
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

