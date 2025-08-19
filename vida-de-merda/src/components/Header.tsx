export function Header() {
  return (
    <header className="text-center py-8 mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Vida de Merda
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Compartilhe seus momentos mais constrangedores de forma anônima. 
          Aqui você pode desabafar sobre aquelas situações que só acontecem com você!
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            100% Anônimo
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Sem Cadastro
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Entretenimento
          </span>
        </div>
      </div>
    </header>
  )
}