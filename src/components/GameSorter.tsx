import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  selectedOrder: string;
  onSelectedOrder: (order: string) => void;
}
const GameSorter = ({ selectedOrder, onSelectedOrder }: Props) => {
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
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order BY: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectedOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GameSorter;
