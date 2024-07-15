import '../App.css';

function NavBar() {
  return (
    
    <div className="navbar-container"> 
    <header>
        <h1>Top Products</h1>
    </header>
      <nav>
        <input type="checkbox" id="check" />
        <label className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">E-App</label>
        <ul>
        <li><a href="/">Home</a></li>
          <li><a className="active" href="/">ProductList</a></li>
          <li><a href="/product/:productId">Product Detail</a></li>
          <li><a href="/signup">SignUp</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      
    </div>
  );
}

export default NavBar;
