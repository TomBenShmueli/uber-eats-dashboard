import { Layout } from "antd";
import SideMenu from "./components/SideMenu";
import SiteLogo from "./components/SiteLogo";
import AppRoutes from "./components/AppRoutes";

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <SiteLogo />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: "center" }}>Uber Eats Dashboard!</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
