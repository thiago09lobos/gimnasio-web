import Link from "next/link"
import { Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">FitZone</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="font-medium text-muted-foreground hover:text-primary">
            Inicio
          </Link>
          <Link href="/servicios" className="font-medium text-muted-foreground hover:text-primary">
            Servicios
          </Link>
          <Link href="/horarios" className="font-medium text-muted-foreground hover:text-primary">
            Horarios
          </Link>
          <Link href="/entrenadores" className="font-medium text-muted-foreground hover:text-primary">
            Entrenadores
          </Link>
          <Link href="/contacto" className="font-medium text-muted-foreground hover:text-primary">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Iniciar Sesión
          </Button>
          <Button>Membresía</Button>
        </div>
      </div>
    </header>
  )
}

