
import SessionButtons from "@/components/SessionButtons";

const Navbar: React.FC = () => {
    

    return (
        <nav className="bg-[#23344E] p-4">
            <div className="flex justify-between items-center">
            
                <div>
                    <img src="https://cdn.gameboost.com/games/logos/pokemon-go.png" alt="Pokemon Logo" className="h-12" />
                </div>    


                <ul className="flex space-x-8">
                    <li><a href="/home" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="/products" className="text-white hover:text-gray-300">Products</a></li>
                    

                </ul>
                <div>
                    <SessionButtons/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

