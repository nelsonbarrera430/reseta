'use client';

import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
} from "@nextui-org/react";

const recipes = {
  chuleta: "Recipe for Chuleta: Marinate and grill until cooked through.",
  tacos: "Recipe for Tacos: Fill tortillas with your favorite ingredients.",
  pollo: "Recipe for Pollo: Season and roast until golden brown.",
  lemonPie: "Recipe for Lemon Pie: Make crust, fill with lemon custard and bake.",
  cafe: "Recipe for Cafe: Brew coffee and serve hot.",
  helados: "Recipe for Helados: Blend ingredients and freeze until firm.",
  bandeja: "Recipe for Bandeja Paisa: Serve with beans, rice, meat, and avocado.",
  jugos: "Recipe for Jugos: Blend fresh fruits with water and sugar to taste.",
};

export default function App() {
  const list = [
    {
      title: "chuleta",
      img: "https://mandolina.co/wp-content/uploads/2024/03/chuleta-de-cerdo-glaseada-1080x550-1-1200x900.jpg",
      price: "$5.50",
    },
    {
      title: "tacos",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyCMoWDQibIAbAOrdGghPN3df0ItePuj80A&s",
      price: "$3.00",
    },
    {
      title: "pollo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeu9bNd9O49nZEjCrEu4Kb689Ii4vf1QvQAg&s",
      price: "$10.00",
    },
    {
      title: "lemonPie",
      img: "https://www.vvsupremo.com/wp-content/uploads/2019/11/Dulce-Maria-de-Lim%C3%B3n-1.jpg",
      price: "$5.30",
    },
    {
      title: "cafe",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
      price: "$15.70",
    },
    {
      title: "helados",
      img: "https://madridsalud.es/wp-content/uploads/2024/03/helados.webp",
      price: "$8.00",
    },
    {
      title: "bandeja",
      img: "https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif",
      price: "$7.50",
    },
    {
      title: "jugos",
      img: "https://irp.cdn-website.com/586fb047/dms3rep/multi/jugos+naturales.jpg",
      price: "$12.20",
    },
  ];

  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePress = (title) => {
    const recipe = recipes[title];
    if (recipe) {
      setSelectedRecipe(recipe);
      setModalOpen(true);
    } else {
      console.error("No recipe found for:", title);
    }
  };

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onClick={() => handlePress(item.title)}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}

      {/* Modal para mostrar la receta */}
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <ModalHeader>Recipe</ModalHeader>
        <ModalBody>{selectedRecipe}</ModalBody>
        <ModalFooter>
          <Button auto flat onClick={() => setModalOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
