import { Text, Pressable, Box } from "@gluestack-ui/themed";
import React from "react";
import { IconHome, IconHomeActive, IconProfile, IconProfileActive, IconAdd, IconAddActive } from "../../../assets";

// deklarasi fungsional komponen TabItem
const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  // Fungsi nested (Icon) yang mengembalikan komponen ikon sesuai label dan status fokus
  const Icon = () => {
    // Logika pemilihan ikon berdasarkan label dan status fokus
    if (label === "Home") {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }
    if (label === "Add") {
      return isFocused ? <IconAddActive /> : <IconAdd />;
    }
    if (label === "Profile") {
      return isFocused ? <IconProfileActive /> : <IconProfile />;
    }
    // Mengembalikan ikon Home jika label tidak sesuai 
    return <IconHome />;
  };
  
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} alignItems="center" flexDirection="column" justifyContent="space-between">
        {/* Memanggil fungsi Icon untuk menampilkan ikon */}
        <Icon />
        <Text color={isFocused ? "$white" : "$lightBlue400"} fontSize={"$md"} marginTop={"$2"}>{label}</Text>
    </Pressable>
  );
};

export default TabItem;