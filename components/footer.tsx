import Link from "next/link"
import { Dumbbell } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12 fitness-gradient text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">FitZone</span>
            </div>
            <p className="text-white/80">Transformando vidas a través del fitness desde 2010.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-white/80 hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/horarios" className="text-white/80 hover:text-white">
                  Horarios
                </Link>
              </li>
              <li>
                <Link href="/entrenadores" className="text-white/80 hover:text-white">
                  Entrenadores
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/80 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <address className="not-italic text-white/80">
              <p>Av. Principal 123</p>
              <p>Ciudad, CP 12345</p>
              <p className="mt-2">info@fitzone.com</p>
              <p>+123 456 7890</p>
            </address>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Horario</h3>
            <ul className="text-white/80">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>6:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados:</span>
                <span>8:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos:</span>
                <span>8:00 - 14:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
          <p>© {new Date().getFullYear()} FitZone. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

