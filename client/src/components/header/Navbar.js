import { useState, useContext } from "react";
import { Layout, Menu, Row, Col, Typography} from "antd";
import { useHistory } from "react-router-dom";
import { Badge } from "antd";
import { ShoppingCartOutlined, BookOutlined } from "@ant-design/icons";
import { AuthContext } from "../../context/AuthContext";

const { Header } = Layout;
const { Title, Link } = Typography;

const Navbar = () => {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const [current, setCurrent] = useState("home");
  const history = useHistory();

  const handleLogoClick = (e) => {
    history.push(`/`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  const handleClick = (e) => {
    setCurrent({ current: e.key });
    if (e.key === "logout") {
      handleLogout();
    } else history.push(`/${e.key}`);
  };

  return (
    <Header>
      {/* <img
        className="logo"
        src="https://clarusway.com/wp-content/uploads/2020/09/cw_son_editted.png"
        alt="logo"
        onClick={handleLogoClick}
      /> */}
      <Link href="/">
        <Row>
          <Col span={4}>
            <BookOutlined style={{color: "white", fontSize: 50}} />
          </Col>
          <Col span={20}>
            <Title level={2} style={{color: "white"}}>Yasin's Book Store</Title>
          </Col>
        </Row>
      </Link>
      <Menu
        onClick={handleClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[current]}
      >
        <Menu.Item key="books">Books</Menu.Item>

        <a href="/cart" className="cart-navbar-link">
          <Badge count={1}>
            <ShoppingCartOutlined className="cart-icon" />
          </Badge>
        </a>
        {isLoggedIn ? (
          <Menu.Item key="logout" onClick={handleLogout}>
            Logout
          </Menu.Item>
        ) : (
          <>
            <Menu.Item key="signin">Sign In</Menu.Item>
            <Menu.Item key="signup">Sign Up</Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;
