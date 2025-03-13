"use client"

// Actualizar las importaciones para usar los componentes con exportación nombrada
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactoPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "informacion",
    mensaje: "",
    aceptaTerminos: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      motivo: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación básica
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast({
        title: "Error en el formulario",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive",
      })
      return
    }

    if (!formData.aceptaTerminos) {
      toast({
        title: "Términos y condiciones",
        description: "Debes aceptar los términos y condiciones para enviar el formulario.",
        variant: "destructive",
      })
      return
    }

    // Simulación de envío exitoso
    console.log("Formulario enviado:", formData)
    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    })

    // Resetear formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      motivo: "informacion",
      mensaje: "",
      aceptaTerminos: false,
    })
  }

  const infoContacto = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Dirección",
      content: "Av. Principal 123, Ciudad, CP 12345",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Teléfono",
      content: "+123 456 7890",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "info@fitzone.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horario de Atención",
      content: "Lun-Vie: 8:00 - 21:00, Sáb-Dom: 9:00 - 14:00",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-lg max-w-2xl">
              Estamos aquí para responder tus preguntas y ayudarte en todo lo que necesites.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {infoContacto.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        placeholder="Tu número de teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Motivo de contacto *</Label>
                      <RadioGroup
                        value={formData.motivo}
                        onValueChange={handleRadioChange}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="informacion" id="informacion" />
                          <Label htmlFor="informacion">Información general</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="membresia" id="membresia" />
                          <Label htmlFor="membresia">Membresías</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="clases" id="clases" />
                          <Label htmlFor="clases">Clases y horarios</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="otro" id="otro" />
                          <Label htmlFor="otro">Otro</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        placeholder="¿En qué podemos ayudarte?"
                        rows={5}
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terminos"
                        name="aceptaTerminos"
                        checked={formData.aceptaTerminos}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, aceptaTerminos: checked === true }))
                        }
                      />
                      <label
                        htmlFor="terminos"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Acepto los términos y condiciones y la política de privacidad
                      </label>
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map */}
              <div className="h-full min-h-[400px] rounded-lg overflow-hidden border">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Nuestra Ubicación</h3>
                    <p className="text-muted-foreground">Estamos ubicados en una zona céntrica y de fácil acceso.</p>
                    <p className="text-sm text-muted-foreground mt-4">(Aquí se mostraría un mapa interactivo)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Respuestas a las preguntas más comunes sobre nuestros servicios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  pregunta: "¿Cómo puedo inscribirme en el gimnasio?",
                  respuesta:
                    "Puedes inscribirte directamente en nuestras instalaciones o a través de nuestra página web. Solo necesitas completar un formulario y elegir el plan que mejor se adapte a tus necesidades.",
                },
                {
                  pregunta: "¿Ofrecen prueba gratuita?",
                  respuesta:
                    "Sí, ofrecemos un pase de día gratuito para que puedas conocer nuestras instalaciones y servicios antes de tomar una decisión.",
                },
                {
                  pregunta: "¿Cuál es la política de cancelación?",
                  respuesta:
                    "Puedes cancelar tu membresía con un preaviso de 30 días. Para más detalles, consulta los términos y condiciones de tu contrato o habla con nuestro equipo de atención al cliente.",
                },
                {
                  pregunta: "¿Necesito reservar para las clases?",
                  respuesta:
                    "Sí, recomendamos reservar tu plaza con al menos 2 horas de antelación, especialmente para las clases más populares. Puedes hacerlo a través de nuestra app o en recepción.",
                },
                {
                  pregunta: "¿Ofrecen planes corporativos?",
                  respuesta:
                    "Sí, tenemos planes especiales para empresas. Contacta con nuestro departamento comercial para más información sobre tarifas y beneficios.",
                },
                {
                  pregunta: "¿Hay estacionamiento disponible?",
                  respuesta:
                    "Sí, contamos con estacionamiento gratuito para nuestros miembros durante su tiempo de entrenamiento. El estacionamiento está ubicado en el subterráneo del edificio.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-sm border">
                  <h3 className="font-bold mb-2">{faq.pregunta}</h3>
                  <p className="text-muted-foreground text-sm">{faq.respuesta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para unirte a nuestra comunidad?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Comienza tu viaje fitness hoy mismo y transforma tu vida con FitZone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Prueba Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
              >
                Ver Planes
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

