import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Heart, Weight, Flame, Utensils, Users } from "lucide-react"

export default function ServiciosPage() {
  const servicios = [
    {
      icon: <Dumbbell className="h-8 w-8 text-primary" />,
      title: "Entrenamiento con Pesas",
      description:
        "Acceso a nuestra amplia zona de pesas con equipamiento de última generación. Incluye máquinas de resistencia, pesas libres y zonas especializadas para diferentes grupos musculares.",
      features: ["Máquinas modernas", "Pesas libres", "Zona de levantamiento olímpico", "Entrenadores especializados"],
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Cardio",
      description:
        "Amplia zona de cardio con cintas de correr, elípticas, bicicletas estáticas y escaladoras. Todas nuestras máquinas cuentan con pantallas integradas y conectividad.",
      features: [
        "Cintas de última generación",
        "Elípticas y bicicletas",
        "Remo y escaladoras",
        "Monitoreo de frecuencia cardíaca",
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Clases Grupales",
      description:
        "Más de 30 clases semanales dirigidas por instructores certificados. Desde yoga hasta HIIT, tenemos opciones para todos los niveles y objetivos.",
      features: ["Yoga y Pilates", "Zumba y baile", "HIIT y CrossTraining", "Spinning"],
    },
    {
      icon: <Weight className="h-8 w-8 text-primary" />,
      title: "Entrenamiento Personal",
      description:
        "Trabaja uno a uno con nuestros entrenadores certificados para alcanzar tus objetivos más rápido. Incluye evaluación inicial, plan personalizado y seguimiento continuo.",
      features: ["Evaluación física completa", "Plan personalizado", "Seguimiento de progreso", "Ajustes periódicos"],
    },
    {
      icon: <Flame className="h-8 w-8 text-primary" />,
      title: "Programas de Pérdida de Peso",
      description:
        "Programas específicos para quienes buscan perder peso de forma saludable y sostenible. Combinamos entrenamiento, nutrición y seguimiento.",
      features: ["Evaluación corporal", "Plan de entrenamiento", "Asesoría nutricional", "Seguimiento semanal"],
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: "Asesoría Nutricional",
      description:
        "Consultas con nutricionistas especializados en deporte que te ayudarán a optimizar tu alimentación según tus objetivos fitness.",
      features: [
        "Evaluación nutricional",
        "Plan alimenticio personalizado",
        "Seguimiento mensual",
        "Ajustes según progreso",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="h-[400px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://etenonfitness.com/wp-content/uploads/2021/08/achievement-muscle-gym-man-active-1-1024x683.jpg')",
            }}
          />
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-lg max-w-2xl">
              Descubre todo lo que FitZone tiene para ofrecerte en tu camino hacia una vida más saludable y en forma.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Servicios Completos para Todos los Niveles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                En FitZone ofrecemos una amplia gama de servicios diseñados para ayudarte a alcanzar tus objetivos
                fitness, sin importar tu nivel de experiencia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((servicio, index) => (
                <Card
                  key={index}
                  className="h-full flex flex-col border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mb-4">{servicio.icon}</div>
                    <CardTitle>{servicio.title}</CardTitle>
                    <CardDescription className="mt-2">{servicio.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-medium mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {servicio.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16 section-alt">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Planes de Membresía</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Elige el plan que mejor se adapte a tus necesidades y objetivos fitness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Básico",
                  price: "29,99€",
                  period: "mes",
                  description: "Perfecto para principiantes",
                  features: [
                    "Acceso a zona de pesas",
                    "Acceso a zona de cardio",
                    "Horario limitado (8:00 - 16:00)",
                    "1 clase grupal por semana",
                  ],
                  popular: false,
                },
                {
                  title: "Premium",
                  price: "49,99€",
                  period: "mes",
                  description: "Nuestra opción más popular",
                  features: [
                    "Acceso completo 24/7",
                    "Todas las clases grupales",
                    "1 sesión con entrenador personal",
                    "1 consulta nutricional mensual",
                    "Acceso a la app de seguimiento",
                  ],
                  popular: true,
                },
                {
                  title: "Elite",
                  price: "79,99€",
                  period: "mes",
                  description: "Para quienes buscan resultados rápidos",
                  features: [
                    "Todo lo incluido en Premium",
                    "4 sesiones con entrenador personal",
                    "Plan nutricional personalizado",
                    "Seguimiento semanal",
                    "Acceso a eventos exclusivos",
                  ],
                  popular: false,
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden shadow-md hover:shadow-lg transition-shadow ${plan.popular ? "border-primary" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                      Más Popular
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle>{plan.title}</CardTitle>
                    <div className="mt-4 flex items-baseline justify-center">
                      <span className="text-4xl font-extrabold">{plan.price}</span>
                      <span className="ml-1 text-xl text-muted-foreground">/{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full mt-6 ${plan.popular ? "bg-primary" : ""}`}>Elegir Plan</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 fitness-gradient text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
            <p className="max-w-2xl mx-auto mb-8">Prueba FitZone sin compromiso con nuestro pase de día gratuito.</p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Obtener Pase Gratuito
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

