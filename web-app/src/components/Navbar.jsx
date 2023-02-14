import logo from "../../images/logo.png";

const NavItem = ({ title }) => {
  return <li className="mx-4 cursor-pointer">{title}</li>;
};

const Navbar = () => {
  return (
    <div className="w-full text-white flex flex-row md:justify-center justify-between p-4">
      <div style={{flex:'0.5'}}>
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="flex flex-row items-center flex-initial">
        {["About", "Exchange", "Services", "My"].map((title, index) => (
          <NavItem title={title} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
