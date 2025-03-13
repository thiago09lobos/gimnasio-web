import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Calendar } from "lucide-react"

export default function HorariosPage() {
  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

  const clases = {
    Lunes: [
      {
        hora: "07:00 - 08:00",
        clase: "Yoga Matutino",
        instructor: "Ana Martínez",
        sala: "Sala 1",
        nivel: "Todos los niveles",
        color: "bg-orange-100 border-orange-300",
      },
      {
        hora: "09:00 - 10:00",
        clase: "Spinning",
        instructor: "Carlos Ruiz",
        sala: "Sala Cycling",
        nivel: "Intermedio",
        color: "bg-red-100 border-red-300",
      },
      {
        hora: "12:00 - 13:00",
        clase: "Pilates",
        instructor: "Laura Gómez",
        sala: "Sala 2",
        nivel: "Principiante",
        color: "bg-blue-100 border-blue-300",
      },
      {
        hora: "17:00 - 18:00",
        clase: "HIIT",
        instructor: "Javier Sánchez",
        sala: "Sala 3",
        nivel: "Avanzado",
        color: "bg-purple-100 border-purple-300",
      },
      {
        hora: "19:00 - 20:00",
        clase: "Zumba",
        instructor: "María López",
        sala: "Sala 1",
        nivel: "Todos los niveles",
        color: "bg-green-100 border-green-300",
      },
      {
        hora: "20:30 - 21:30",
        clase: "Boxeo",
        instructor: "Roberto Díaz",
        sala: "Sala 3",
        nivel: "Intermedio",
        color: "bg-yellow-100 border-yellow-300",
      },
    ],
    Martes: [
      {
        hora: "07:00 - 08:00",
        clase: "Funcional",
        instructor: "Javier Sánchez",
        sala: "Sala 3",
        nivel: "Intermedio",
        color: "bg-purple-100 border-purple-300",
      },
      {
        hora: "09:00 - 10:00",
        clase: "Body Pump",
        instructor: "Elena Ruiz",
        sala: "Sala 1",
        nivel: "Todos los niveles",
        color: "bg-pink-100 border-pink-300",
      },
      {
        hora: "12:00 - 13:00",
        clase: "Estiramientos",
        instructor: "Ana Martínez",
        sala: "Sala 2",
        nivel: "Principiante",
        color: "bg-blue-100 border-blue-300",
      },
      {
        hora: "17:00 - 18:00",
        clase: "Spinning",
        instructor: "Carlos Ruiz",
        sala: "Sala Cycling",
        nivel: "Avanzado",
        color: "bg-red-100 border-red-300",
      },
      {
        hora: "19:00 - 20:00",
        clase: "GAP",
        instructor: "Laura Gómez",
        sala: "Sala 1",
        nivel: "Todos los niveles",
        color: "bg-green-100 border-green-300",
      },
      {
        hora: "20:30 - 21:30",
        clase: "Yoga",
        instructor: "María López",
        sala: "Sala 2",
        nivel: "Intermedio",
        color: "bg-orange-100 border-orange-300",
      },
    ],
    Miércoles: [
      {
        hora: "07:00 - 08:00",
        clase: "Pilates",
        instructor: "Laura Gómez",
        sala: "Sala 2",
        nivel: "Todos los niveles",
        color: "bg-blue-100 border-blue-300",
      },
      {
        hora: "09:00 - 10:00",
        clase: "HIIT",
        instructor: "Javier Sánchez",
        sala: "Sala 3",
        nivel: "Avanzado",
        color: "bg-purple-100 border-purple-300",
      },
      {
        hora: "12:00 - 13:00",
        clase: "Yoga",
        instructor: "Ana Martínez",
        sala: "Sala 1",
        nivel: "Principiante",
        color: "bg-orange-100 border-orange-300",
      },
      {
        hora: "17:00 - 18:00",
        clase: "Zumba",
        instructor: "María López",
        sala: "Sala 1",
        nivel: "Todos los niveles",
        color: "bg-green-100 border-green-300",
      },
      {
        hora: "19:00 - 20:00",
        clase: "Spinning",
        instructor: "Carlos Ruiz",
        sala: "Sala Cycling",
        nivel: "Intermedio",
        color: "bg-red-100 border-red-300",
      },
      {
        hora: "20:30 - 21:30",
        clase: "Boxeo",
        instructor: "Roberto Díaz",
        sala: "Sala 3",
        nivel: "Intermedio",
        color: "bg-yellow-100 border-yellow-300",
      },
    ],
    Jueves: [
      {
        hora: "07:00 - 08:00",
        clase: "Body Pump",
        instructor: "Elena Ruiz",
        sala: "Sala 1",
        nivel: "Intermedio",
        color: "bg-pink-100 border-pink-300",
      },
      {
        hora: "09:00 - 10:00",
        clase: "Funcional",
        instructor: "Javier Sánchez",
        sala: "Sala 3",
        nivel: "Todos los niveles",
        color: "bg-purple-100 border-purple-300",
      },
      {
        hora: "12:00 - 13:00",
        clase: "Estiramientos",
        instructor: "Ana Martínez",
        sala: "Sala 2",
        nivel: "Principiante",
        color: "bg-blue-100 border-blue-300",
      },
      {
        hora: "17:00 - 18:00",
        clase: "GAP",
        instructor: "Laura Gómez",
        sala: "Sala 1",
        nivel: "Todos los niveles",
        color: "bg-green-100 border-green-300",
      },
      {
        hora: "19:00 - 20:00",
        clase: "Spinning",
        instructor: "Carlos Ruiz",
        sala: "Sala Cycling",
        nivel: "Avanzado",
        color: "bg-red-100 border-red-300",
      },
      {
        hora: "20:30 - 21:30",
        clase: "Yoga",
        instructor: "María López",
        sala: "Sala 2",
        nivel: "Intermedio",
        color: "bg-orange-100 border-orange-300",
      },
    ],
    Viernes: [
      {
        hora: "07:00 - 08:00",
        clase: "Yoga",
        instructor: "Ana Martínez",
        sala: "Sala 1",
        nivel: "Todos los niveles",
        color: "bg-orange-100 border-orange-300",
      },
      {
        hora: "09:00 - 10:00",
        clase: "Spinning",
        instructor: "Carlos Ruiz",
        sala: "Sala Cycling",
        nivel: "Intermedio",
        color: "bg-red-100 border-red-300",
      },
      {
        hora: "12:00 - 13:00",
        clase: "Pilates",
        instructor: "Laura Gómez",
        sala: "Sala 2",
        nivel: "Principiante",
        color: "bg-blue-100 border-blue-300",
      },
      {
        hora: "17:00 - 18:00",
        clase: "HIIT",
        instructor: "Javier Sánchez",
        sala: "Sala 3",
        nivel: "Avanzado",
        color: "bg-purple-100 border-purple-300",
      },
      {
        hora: "19:00 - 20:00",
        clase: "Zumba",
        instructor: "María López",
        sala: "Sala 1",
        nivel: "Todos los niveles",
        color: "bg-green-100 border-green-300",
      },
      {
        hora: "20:30 - 21:30",
        clase: "Body Pump",
        instructor: "Elena Ruiz",
        sala: "Sala 1",
        nivel: "Intermedio",
        color: "bg-pink-100 border-pink-300",
      },
    ],
    Sábado: [
      {
        hora: "09:00 - 10:00",
        clase: "Yoga",
        instructor: "Ana Martínez",
        sala: "Sala 1",
        nivel: "Todos los niveles",
        color: "bg-orange-100 border-orange-300",
      },
      {
        hora: "10:30 - 11:30",
        clase: "Spinning",
        instructor: "Carlos Ruiz",
        sala: "Sala Cycling",
        nivel: "Intermedio",
        color: "bg-red-100 border-red-300",
      },
      {
        hora: "12:00 - 13:00",
        clase: "Zumba",
        instructor: "María López",
        sala: "Sala 1",
        nivel: "Todos los niveles",
        color: "bg-green-100 border-green-300",
      },
      {
        hora: "13:30 - 14:30",
        clase: "HIIT",
        instructor: "Javier Sánchez",
        sala: "Sala 3",
        nivel: "Avanzado",
        color: "bg-purple-100 border-purple-300",
      },
    ],
    Domingo: [
      {
        hora: "09:00 - 10:00",
        clase: "Pilates",
        instructor: "Laura Gómez",
        sala: "Sala 2",
        nivel: "Todos los niveles",
        color: "bg-blue-100 border-blue-300",
      },
      {
        hora: "10:30 - 11:30",
        clase: "Body Pump",
        instructor: "Elena Ruiz",
        sala: "Sala 1",
        nivel: "Intermedio",
        color: "bg-pink-100 border-pink-300",
      },
      {
        hora: "12:00 - 13:00",
        clase: "Yoga",
        instructor: "Ana Martínez",
        sala: "Sala 1",
        nivel: "Principiante",
        color: "bg-orange-100 border-orange-300",
      },
    ],
  }

  const horarioGimnasio = [
    { dia: "Lunes - Viernes", horario: "06:00 - 22:00" },
    { dia: "Sábados", horario: "08:00 - 20:00" },
    { dia: "Domingos y Festivos", horario: "08:00 - 14:00" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Horarios</h1>
            <p className="text-lg max-w-2xl">
              Consulta los horarios de nuestras instalaciones y clases para planificar tu rutina de entrenamiento.
            </p>
          </div>
        </section>

        {/* Gym Hours */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Horario de Apertura</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                FitZone está abierto todos los días para adaptarse a tu agenda y estilo de vida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {horarioGimnasio.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.dia}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center gap-2 text-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>{item.horario}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/30 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Nota:</strong> El horario puede variar en días festivos. Consulta nuestras redes sociales o
                llámanos para confirmar horarios especiales.
              </p>
            </div>
          </div>
        </section>

        {/* Class Schedule */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Horario de Clases</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explora nuestras clases dirigidas y encuentra las que mejor se adapten a tus objetivos y disponibilidad.
              </p>
            </div>

            <Tabs defaultValue="Lunes" className="w-full">
              <TabsList className="grid grid-cols-7 mb-8">
                {diasSemana.map((dia) => (
                  <TabsTrigger key={dia} value={dia} className="text-sm md:text-base">
                    {dia}
                  </TabsTrigger>
                ))}
              </TabsList>

              {diasSemana.map((dia) => (
                <TabsContent key={dia} value={dia}>
                  <div className="grid grid-cols-1 gap-4">
                    {clases[dia].map((clase, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-l-4 ${clase.color} transition-all hover:shadow-md`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex items-center mb-2 md:mb-0">
                            <div className="bg-white p-2 rounded-md mr-4">
                              <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold">{clase.clase}</h3>
                              <p className="text-sm text-muted-foreground">{clase.hora}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 md:mt-0">
                            <div className="text-sm">
                              <span className="font-medium">Instructor:</span> {clase.instructor}
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">Sala:</span> {clase.sala}
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">Nivel:</span> {clase.nivel}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Legend */}
        <section className="py-8">
          <div className="container">
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <h3 className="font-bold mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Información sobre las clases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Reservas</h4>
                  <p className="text-sm text-muted-foreground">
                    Recomendamos reservar tu plaza con al menos 2 horas de antelación. Puedes hacerlo a través de
                    nuestra app o en recepción.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cancelaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Si no puedes asistir, cancela tu reserva con al menos 1 hora de antelación para liberar tu plaza.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Material</h4>
                  <p className="text-sm text-muted-foreground">
                    Todo el material necesario para las clases está incluido. Solo necesitas traer ropa deportiva y una
                    toalla.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Puntualidad</h4>
                  <p className="text-sm text-muted-foreground">
                    Te recomendamos llegar 5-10 minutos antes del inicio de la clase. No se permitirá el acceso pasados
                    10 minutos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

