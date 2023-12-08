import { Dropdown } from "rsuite";
import useGameQueryStore from "../store";

const GameSorter = () => {
  const selectedOrder = useGameQueryStore((s) => s.gameQuery.order);
  const setOrder = useGameQueryStore((s) => s.setOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date Desc" },
    { value: "released", label: "Release Date Asc" },
    { value: "-metacritic", label: "Metacritic Score" },
  ];

  const currentOrder = sortOrders.find(
    (order) => order.value === selectedOrder
  );

  return (
    <Dropdown title={"Order BY: " + (currentOrder?.label || "Relevance")}>
      {sortOrders.map((order) => (
        <Dropdown.Item
          onClick={() => setOrder(order.value)}
          key={order.value}
          value={order.value}
        >
          {order.label}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default GameSorter;
