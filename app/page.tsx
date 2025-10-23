import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Users, Clock, Phone, Mail, Utensils, Building, Waves, BookOpen, Award, ShieldCheck, Calendar } from "lucide-react"
import Link from "next/link"

const tours = [
  {
    id: 1,
    name: "Trilha Lagoinha do Leste",
    provider: "Barnnuns Experiences",
    price: 150,
    duration: "6 horas",
    difficulty: "Moderada",
    rating: 4.8,
    image: "/trilha-lagoinha-leste-florianopolis.png",
    description: "Uma das trilhas mais famosas de Florianópolis, com vista deslumbrante da praia selvagem.",
  },
  {
    id: 2,
    name: "Passeio de Caiaque",
    provider: "Barnnuns Experiences",
    price: 200,
    duration: "4 horas",
    difficulty: "Fácil",
    rating: 4.9,
    image: "/caiaque-florianopolis-lagoa.png",
    description: "Explore as águas cristalinas da lagoa da Conceição remando em caiaques.",
  },
  {
    id: 3,
    name: "Passeio de Cavalo Premium",
    provider: "Floripa Cavalgada",
    price: 280,
    duration: "3 horas",
    difficulty: "Fácil",
    rating: 4.7,
    image: "/cavalgada-praia-florianopolis.png",
    description: "Cavalgada exclusiva pelas praias e dunas com guia especializado.",
  },
  {
    id: 4,
    name: "Ilha do Campeche",
    provider: "Andorinha",
    price: 150,
    duration: "8 horas",
    difficulty: "Fácil",
    rating: 4.6,
    image: "/ilha-campeche-florianopolis-barco.png",
    description: "Passeio de barco para a paradisíaca Ilha do Campeche com águas cristalinas.",
  },
  {
    id: 5,
    name: "Pub Crawl Floripa",
    provider: "Barnnuns Experiences",
    price: 120,
    duration: "5 horas",
    difficulty: "Fácil",
    rating: 4.5,
    image: "/pub-crawl-florianopolis-noite.png",
    description: "Conheça a vida noturna de Floripa visitando os melhores bares e pubs.",
  },
  {
    id: 6,
    name: "Passeio de Barco Costa da Lagoa",
    provider: "Barnnuns Experiences",
    price: 200,
    duration: "6 horas",
    difficulty: "Fácil",
    rating: 4.8,
    image: "/costa-lagoa-florianopolis-barco.png",
    description: "Navegue pela Costa da Lagoa e conheça a cultura açoriana local.",
  },
]

const restaurants = [
  {
    id: 1,
    name: "Ostradamus",
    cuisine: "Frutos do Mar",
    location: "Ribeirão da Ilha",
    rating: 4.9,
    priceRange: "R$ 80-150",
    image: "/restaurant-seafood-florianopolis.jpg",
    description: "Especializado em ostras frescas e frutos do mar da região.",
  },
  {
    id: 2,
    name: "Artusi Ristorante",
    cuisine: "Italiana",
    location: " Centro",
    rating: 4.7,
    priceRange: "R$ 60-120",
    image: "/Artusi_restaurante.jpg",
    description: "Restaurante verdadeiramente italiano, com a alta qualidade.",
  },
  {
    id: 3,
    name: "Fogo e Mar",
    cuisine: "Frutos do Mar",
    location: "Jurerê Internacional",
    rating: 4.8,
    priceRange: "R$ 140-200",
    image: "/fogo_e_mar.jpg",
    description: "Representa a culinária contemporânea do mar à brasa.",
  },
]

const hotels = [
  {
    id: 1,
    name: "Jurerê Beach Village",
    category: "4 Estrelas",
    location: "Jurerê Leste",
    rating: 4.8,
    priceRange: "R$ 490",
    image: "/jurere-beach-village.jpg",
    description: "Este hotel descontraído com acesso direto à praia de Jurerê fica a 11 km do parque aquático Água Show Park.",
  },
  {
    id: 2,
    name: "Lagoa Nômade",
    category: "Lagoa",
    location: "Lagoa da Conceição",
    rating: 4.6,
    priceRange: "R$ 123",
    image: "/lagoanomade.jpg",
    description: "Área à beira do lago com restaurantes vegetarianos, bares animados, esportes aquáticos e uma feira de artesanato aos domingos.",
  },
  {
    id: 3,
    name: "Sea Wolf Surf Hostel",
    category: "Hostel",
    location: "Barra da Lagoa",
    rating: 4.7,
    priceRange: "R$ 147",
    image: "/seawolfsurfhostel.jpg",
    description: "Pousada charmosa no coração da Lagoa da Conceição.",
  },
]

const beaches = [
  {
    id: 1,
    name: "Praia da Joaquina",
    type: "Surf",
    location: "Sul da Ilha",
    rating: 4.8,
    features: ["Surf", "Dunas", "Restaurantes"],
    image: "/Praia da Joaquina.webp",
    description: "Famosa praia de surf com dunas e campeonatos internacionais.",
  },
  {
    id: 2,
    name: "Praia Mole",
    type: "Jovem",
    location: "Leste da Ilha",
    rating: 4.7,
    features: ["Vida Noturna", "Esportes", "Beach Clubs"],
    image: "/PraiaMole.jpg",
    description: "Praia badalada frequentada por jovens e surfistas.",
  },
  {
    id: 3,
    name: "Praia de Jurerê",
    type: "Família",
    location: "Norte da Ilha",
    rating: 4.6,
    features: ["Águas Calmas", "Infraestrutura", "Família"],
    image: "/florianopolis-praia-jurere-internacional.jpg",
    description: "Praia tranquila ideal para famílias com excelente infraestrutura.",
  },
]

const credibilityItems = [
  {
    id: 1,
    title: "Experiências Memoráveis",
    description: "Criamos roteiros personalizados para que cada momento em Florianópolis seja inesquecível.",
    icon: "Star",
  },
  {
    id: 2,
    title: "Guias Locais Especializados",
    description: "Nossos guias são profundos conhecedores da ilha, garantindo segurança e informações valiosas.",
    icon: "BookOpen",
  },
  {
    id: 3,
    title: "Suporte 24/7",
    description: "Estamos sempre disponíveis para ajudar, antes, durante e depois da sua viagem.",
    icon: "Phone",
  },
  {
    id: 4,
    title: "Segurança e Conforto",
    description: "Priorizamos sua segurança e oferecemos o máximo conforto em todos os nossos serviços.",
    icon: "ShieldCheck",
  },
  {
    id: 5,
    title: "Avaliações Excelentes",
    description: "Orgulhamo-nos das avaliações positivas de nossos clientes satisfeitos.",
    icon: "Users",
  },
  {
    id: 6,
    title: "Flexibilidade e Adaptação",
    description: "Adaptamos nossos serviços às suas necessidades, garantindo uma experiência perfeita.",
    icon: "Calendar",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Barnnuns Experiences</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#tours" className="text-muted-foreground hover:text-foreground transition-colors">
              Passeios
            </Link>
            <Link href="#restaurants" className="text-muted-foreground hover:text-foreground transition-colors">
              Restaurantes
            </Link>
            <Link href="#hotels" className="text-muted-foreground hover:text-foreground transition-colors">
              Hotéis
            </Link>
            <Link href="#beaches" className="text-muted-foreground hover:text-foreground transition-colors">
              Praias
            </Link>
            <Link href="#credibility" className="text-muted-foreground hover:text-foreground transition-colors">
              Credibilidade
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
            <Button asChild>
              <a
                href="https://wa.me/5548991416788?text=Olá! Gostaria de fazer uma reserva em Florianópolis."
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve Agora
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/florianopolis.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Descubra a Magia de <span className="text-accent">Florianópolis</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">
            Viva experiências únicas na Ilha da Magia com nossos passeios exclusivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#tours">Ver Todos os Passeios</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <a
                href="https://wa.me/5548991416788?text=Olá! Gostaria de mais informações sobre os passeios em Florianópolis."
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Nossos Passeios Exclusivos</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Escolha entre as melhores experiências que Florianópolis tem a oferecer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img src={tour.image || "/placeholder.svg"} alt={tour.name} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{tour.difficulty}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-balance">{tour.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-pretty">{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>Grupos</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">R$ {tour.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">por pessoa</span>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
                      <a
                        href={`https://wa.me/5548991416788?text=Olá! Gostaria de reservar o passeio: ${encodeURIComponent(tour.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="restaurants" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Utensils className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-4xl font-bold text-foreground">Restaurantes Imperdíveis</h3>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Saboreie a autêntica culinária de Florianópolis nos melhores restaurantes da ilha
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {restaurant.cuisine}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-balance">{restaurant.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-pretty">{restaurant.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1 mb-1">
                        <MapPin className="h-4 w-4" />
                        <span>{restaurant.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary">{restaurant.priceRange}</span>
                      <span className="text-sm text-muted-foreground ml-1">por pessoa</span>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
                      <a
                        href={`https://wa.me/5548991416788?text=Olá! Gostaria de informações sobre o restaurante: ${encodeURIComponent(restaurant.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Cardápio
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hotels" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-4xl font-bold text-foreground">Hospedagem de Qualidade</h3>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Descanse com conforto nos melhores hotéis e pousadas de Florianópolis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img src={hotel.image || "/placeholder.svg"} alt={hotel.name} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{hotel.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-balance">{hotel.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-pretty">{hotel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1 mb-1">
                        <MapPin className="h-4 w-4" />
                        <span>{hotel.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary">{hotel.priceRange}</span>
                      <span className="text-sm text-muted-foreground ml-1">por noite</span>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
                      <a
                        href={`https://wa.me/5548991416788?text=Olá! Gostaria de reservar no hotel: ${encodeURIComponent(hotel.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="beaches" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Waves className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-4xl font-bold text-foreground">Praias Paradisíacas</h3>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Conheça as praias mais belas de Florianópolis, cada uma com sua personalidade única
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beaches.map((beach) => (
              <Card key={beach.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img src={beach.image || "/placeholder.svg"} alt={beach.name} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{beach.type}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-balance">{beach.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{beach.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-pretty">{beach.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{beach.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {beach.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
                    <a
                      href={`https://wa.me/5548991416788?text=Olá! Gostaria de informações sobre a praia: ${encodeURIComponent(beach.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Localização
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="credibility" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-4xl font-bold text-foreground">Por Que Escolher a Barnnuns Experiences?</h3>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Sua confiança é a nossa prioridade. Conheça os pilares da nossa credibilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {credibilityItems.map((item) => {
              const iconComponents = {
                Star,
                BookOpen,
                Phone,
                ShieldCheck,
                Users,
                Calendar,
              };

              const IconComponent = iconComponents[item.icon as keyof typeof iconComponents];

              return (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardHeader className="flex flex-col items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                    </div>
                    <CardTitle className="text-xl text-balance">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-pretty">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6 text-balance">Pronto para Sua Próxima Aventura?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Entre em contato conosco e planeje a experiência perfeita em Florianópolis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <a href="https://wa.me/5548991416788" target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 mr-2" />
                (48) 99141-6788
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <a
                href="https://wa.me/5548991416788?text=Olá! Gostaria de planejar minha viagem para Florianópolis."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5 mr-2" />
                Enviar WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h4 className="text-lg font-semibold">Barnnuns Experiences</h4>
              </div>
              <p className="text-muted-foreground text-pretty">
                Sua porta de entrada para as melhores experiências em Florianópolis.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📱 (48) 99141-6788</p>
                <p>✉️ contato@floripaaventures.com</p>
                <p>📍 Florianópolis, SC</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Passeios e Trilhas</p>
                <p>Restaurantes</p>
                <p>Hospedagem</p>
                <p>Credibilidade</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Barnnuns Experiences. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5548991416788?text=Olá! Gostaria de saber mais sobre os passeios em Florianópolis."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-6 shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Falar no WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106" />
        </svg>
        <span className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco no WhatsApp
        </span>
      </a>
    </div>
  )
}
