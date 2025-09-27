import {
  Menu,
  X,
  Clock,
  MapPin,
  Phone,
  Dumbbell,
  Shield,
  Target,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ibiramaSchedule = {
    "Segunda e Quarta": [
      { time: "16:10H", activity: "MUAY THAI" },
      { time: "17:10H", activity: "BOXE" },
      { time: "18:10H", activity: "JIU-JÍTSU" },
      { time: "19:15H", activity: "MUAY THAI" },
      { time: "20:15H", activity: "MUAY THAI FEMININO" },
      {
        time: "22:15H",
        activity: "MUAY THAI (HORÁRIO ESPECIAL PRA FACULDADE)",
      },
    ],
    "Terça e Quinta": [
      { time: "10:10H", activity: "MUAY THAI" },
      { time: "12:00H", activity: "BOXE" },
      { time: "18:00H", activity: "JIU-JÍTSU KIDS (6 A 8 ANOS)" },
      { time: "19:15H", activity: "JIU-JÍTSU KIDS (9 A 12 ANOS)" },
    ],
    Sexta: [
      { time: "16:10H", activity: "MUAY THAI" },
      { time: "17:10H", activity: "MUAY THAI KIDS" },
      { time: "18:10H", activity: "JIU-JÍTSU KIDS" },
      { time: "19:15H", activity: "MUAY THAI MISTO" },
      { time: "20:15H", activity: "JIU-JÍTSU SEM KIMONO" },
    ],
    "Quinta e Sexta": [{ time: "15:00H", activity: "JIU-JÍTSU SEM KIMONO" }],
  };

  const getulioSchedule = {
    "Terça e Quinta": [
      { time: "06:00H", activity: "MUAY THAI" },
      { time: "07:20H", activity: "JIU-JÍTSU" },
      { time: "15:00H", activity: "JIU-JÍTSU" },
      { time: "16:00H", activity: "BOXE" },
      { time: "17:00H", activity: "MUAY THAI" },
      { time: "18:00H", activity: "JIU-JÍTSU KIDS" },
      { time: "19:10H", activity: "MUAY THAI" },
      { time: "20:15H", activity: "MUAY THAI MASCULINO" },
      { time: "20:15H", activity: "MUAY THAI FEMININO" },
      { time: "21:15H", activity: "JIU-JÍTSU" },
    ],
    Sábado: [{ time: "09:00H", activity: "MUAY THAI FEMININO" }],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logokaveira.jpeg"
                alt="Equipe Kaveira"
                className="w-12 h-12 rounded-full"
              />
              <h1 className="text-2xl font-bold text-red-500">
                EQUIPE KAVEIRA
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#inicio"
                className="hover:text-red-500 transition-colors"
              >
                Início
              </a>
              <a
                href="#horarios"
                className="hover:text-red-500 transition-colors"
              >
                Horários
              </a>
              <a
                href="#modalidades"
                className="hover:text-red-500 transition-colors"
              >
                Modalidades
              </a>
              <a
                href="#contato"
                className="hover:text-red-500 transition-colors"
              >
                Contato
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <a
                href="#inicio"
                className="block hover:text-red-500 transition-colors py-2"
              >
                Início
              </a>
              <a
                href="#horarios"
                className="block hover:text-red-500 transition-colors py-2"
              >
                Horários
              </a>
              <a
                href="#modalidades"
                className="block hover:text-red-500 transition-colors py-2"
              >
                Modalidades
              </a>
              <a
                href="#contato"
                className="block hover:text-red-500 transition-colors py-2"
              >
                Contato
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative bg-gradient-to-br from-gray-900 via-black to-red-900 py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <img
              src="/logokaveira.jpeg"
              alt="Equipe Kaveira Logo"
              className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              EQUIPE <span className="text-red-500">KAVEIRA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Forjando campeões através do Muay Thai, Boxe e Jiu-Jítsu
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/554796184529?text=Olá! Tenho interesse em agendar uma aula experimental.",
                    "_blank"
                  )
                }
                className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Agendar Aula Experimental
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all">
                Ver Horários
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades Section */}
      <section id="modalidades" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nossas <span className="text-red-500">Modalidades</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all">
              <div className="text-red-500 mb-4">
                <Target size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">MUAY THAI</h3>
              <p className="text-gray-300 mb-4">
                A arte marcial tailandesa que desenvolve força, resistência e
                técnica através de chutes, socos, joelhadas e cotoveladas.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Aulas para iniciantes e avançados</li>
                <li>• Turmas masculinas e femininas</li>
                <li>• Preparação para competições</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all">
              <div className="text-red-500 mb-4">
                <Dumbbell size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">BOXE</h3>
              <p className="text-gray-300 mb-4">
                Nobre arte que aprimora reflexos, coordenação e condicionamento
                físico através de técnicas de punho e movimentação.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Técnica e estratégia de combate</li>
                <li>• Condicionamento físico</li>
                <li>• Desenvolvimento da disciplina</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all">
              <div className="text-red-500 mb-4">
                <Shield size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">JIU-JÍTSU</h3>
              <p className="text-gray-300 mb-4">
                Arte suave que ensina leverage, técnica e estratégia para vencer
                oponentes maiores e mais fortes.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Turmas infantis e adultos</li>
                <li>• Com e sem kimono</li>
                <li>• Autodefesa e competição</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Horários Section */}
      <section id="horarios" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nossos <span className="text-red-500">Horários</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ibirama Schedule */}
            <div className="bg-black rounded-lg p-6">
              <div className="flex items-center mb-6">
                <MapPin className="text-red-500 mr-3" size={24} />
                <h3 className="text-2xl font-bold">IBIRAMA</h3>
              </div>

              {Object.entries(ibiramaSchedule).map(([day, classes]) => (
                <div key={day} className="mb-6">
                  <h4 className="text-red-500 font-bold text-lg mb-3">
                    {day.toUpperCase()}
                  </h4>
                  <div className="space-y-2">
                    {classes.map((cls, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-gray-800 p-3 rounded"
                      >
                        <span className="font-mono text-white">{cls.time}</span>
                        <span className="text-gray-300">{cls.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Presidente Getúlio Schedule */}
            <div className="bg-black rounded-lg p-6">
              <div className="flex items-center mb-6">
                <MapPin className="text-red-500 mr-3" size={24} />
                <h3 className="text-2xl font-bold">PRESIDENTE GETÚLIO</h3>
              </div>

              {Object.entries(getulioSchedule).map(([day, classes]) => (
                <div key={day} className="mb-6">
                  <h4 className="text-red-500 font-bold text-lg mb-3">
                    {day.toUpperCase()}
                  </h4>
                  <div className="space-y-2">
                    {classes.map((cls, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-gray-800 p-3 rounded"
                      >
                        <span className="font-mono text-white">{cls.time}</span>
                        <span className="text-gray-300">{cls.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-red-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Entre em <span className="text-white">Contato</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Unidade Ibirama</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-3" size={20} />
                  <span>Endereço: Ibirama - SC</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3" size={20} />
                  <span>Telefone: (47)9618-4529</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>Funcionamento: Segunda à Sexta</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">
                Unidade Presidente Getúlio
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-3" size={20} />
                  <span>Endereço: Presidente Getúlio - SC</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3" size={20} />
                  <span>Telefone: (47)9618-4529</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>Funcionamento: Terça, Quinta e Sábado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/554796184529?text=Olá! Tenho interesse em agendar uma aula experimental.",
                  "_blank"
                )
              }
              className="bg-white text-red-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Agendar Aula Experimental
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <img
              src="/logokaveira.jpeg"
              alt="Equipe Kaveira"
              className="w-8 h-8 rounded-full mr-3"
            />
            <span className="text-xl font-bold">
              EQUIPE <span className="text-red-500">KAVEIRA</span>
            </span>
          </div>
          <p className="text-gray-400">
            © 2024 Equipe Kaveira. Todos os direitos reservados. Forjando
            campeões desde sempre.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
