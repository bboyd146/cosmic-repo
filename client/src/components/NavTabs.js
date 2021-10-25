

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
        </a>
            </li>
            <li className="nav-item">
                <a
                    href="#inventory"
                    onClick={() => handlePageChange('Inventory')}
                    className={currentPage === 'Inventory' ? 'nav-link active' : 'nav-link'}
                >
                    Inventory
        </a>
            </li>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
        </a>
            </li>
            
            <li className="nav-item" >
                <a
                    href="#cart" 
                    onClick={() => handlePageChange('Cart')}
                    className={currentPage === 'Cart' ? 'nav-link active' : 'nav-link'}
                > 
                    Cart
        </a>
            </li>
        </ul>
    );
}

export default NavTabs;
