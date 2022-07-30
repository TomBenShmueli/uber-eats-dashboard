import { useNavigate } from "react-router-dom";
import { Image } from "antd";

const SiteLogo = () => {
  const navigate = useNavigate();
  return (
    <Image
      src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
      preview={false}
      onClick={() => {
        navigate("/");
      }}
    ></Image>
  );
};

export default SiteLogo;
