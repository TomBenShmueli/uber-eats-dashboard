import { Routes, Route } from "react-router-dom";
import DetailedOrder from "../../modules/DetailedOrder";
import Orders from "../..//modules/Orders";
import RestaurantMenu from "../..//modules/RestaurantMenu";
import CreateMenuItem from "../..//modules/CreateMenuItem";
import OrderHistory from "../..//modules/OrderHistory";
import Settings from "../../modules/settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="/orderHistory" element={<OrderHistory />} />
      <Route path="/order/:id" element={<DetailedOrder />} />
      <Route path="/menu" element={<RestaurantMenu />} />
      <Route path="/menu/create" element={<CreateMenuItem />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
