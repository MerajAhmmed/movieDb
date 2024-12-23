"use client";

import { useState } from "react";
import AddMovieBtn from "./AddMovieBtn";
import CompareCard from "./CompareCard";
import CSModal from "./CSModal";

export default function Compare() {
  const [addSlots, setAddSlots] = useState([0]);
  const [showModal, setShowModal] = useState(false);

  function handlSlot() {
    setAddSlots((prevSlots) => [...addSlots, prevSlots.length]);
  }
  function handleRemoveSlot(remove) {
    setAddSlots((prevSlot) => prevSlot?.filter((_, index) => index !== remove));
  }

  function handleShowModal(type) {
    setShowModal(type);
  }

  return (
    <>
      {showModal && <CSModal handleModal={handleShowModal} />}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Compare Movies</h1>
        <AddMovieBtn handlSlot={handlSlot} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {addSlots?.map((slot, index) => (
          <CompareCard
            key={index}
            index={index}
            onDelet={handleRemoveSlot}
            handleModal={handleShowModal}
          />
        ))}
      </div>
    </>
  );
}
