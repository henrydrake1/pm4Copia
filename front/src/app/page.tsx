import Link from 'next/link';

export default function Landing() {
  return (
    <div className="bg-gray-300 h-screen flex items-center justify-center p-4 md:p-8 lg:p-12">
      <div className="flex justify-center items-center w-full gap-6">
        <div className="flex items-center text-left space-x-4">
          <img className="mr-6" src="https://mx.redmagic.gg/cdn/shop/files/1367_600x600.png?v=1722335251" alt="imagen celular" />
          <div className="text-left">
            <h1 className="text-gray-100 text-4xl">RedMagic 9s Pro</h1>
            <p className="paragraph-style">Libera al guerrero interior</p>
            <p className="paragraph-style">Experimenta el poder del juego a su máxima expresión</p>
            <p className="paragraph-style">Desde 60 USD</p>
            
            <Link href="/home">
              <button className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition">
                Comprar Ahora
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center text-right space-x-4">
          <div>
            <img src="https://i.pinimg.com/736x/f9/8f/bb/f98fbb984886bc393dd6b375345a0091.jpg" alt="" />
          </div>
          <div>
            <p className="paragraph-style">Entra al mundo de la tecnología</p>
          </div>
        </div>
      </div>
    </div>
  );
}
