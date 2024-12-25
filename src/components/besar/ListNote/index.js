import React from "react";
import { Text, Pressable, Box, VStack, HStack, Heading } from "@gluestack-ui/themed";
import { IconDelete, IconEdit } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
import { deleteNote } from "../../../actions/AuthAction"; //ditambahkan impor untuk mengahpus

const ListNote = ({ judul, isi, tanggal, status, category, noteId }) => {
  const navigation = useNavigation();

  // Fungsi dijalankan ketika tombol edit diklik
  const handleEditClick = () => {
    navigation.navigate("EditNote", {
      judul,
      isi,
      category,
      status,
      noteId,
    });
  };

  const handleDeleteClick = () => {
    deleteNote(noteId);
    navigation.replace("MainApp");
  };

  return (
      <Box
        shadowColor="$black"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={"$25"}
        shadowRadius={"$3.5"}
        elevation={"$5"}
        backgroundColor="$white"
        padding={"$2"}
        width={"$full"}
        borderRadius={"$xl"}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        my={"$2"}
        px={"$5"}
        py={"$3"}
      >
        <VStack>
          <Heading size="2xl">{judul}</Heading>
          <Text size="md" maxWidth={"$64"}>{isi}</Text>
          <Box
            shadowColor="$black"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={"$25"}
            shadowRadius={"$3.5"}
            elevation={"$5"}
            backgroundColor="$green700"
            borderRadius={"$lg"}
            py={"$2"}
            px={"$3"}
            alignItems="center"
            justifyContent="center"
            mt={"$3"}
          >
            <Text color="$white" fontWeight="$bold">
              {status}
            </Text>
          </Box>
        </VStack>
        <HStack>
          <Pressable onPress={handleEditClick}>
            <IconEdit />
          </Pressable>
          <Pressable onPress={handleDeleteClick}>
            <IconDelete />
          </Pressable>
        </HStack>
      </Box>
  );
};

export default ListNote;




// import React from "react";
// import { Text, Pressable, Box, VStack, HStack, Heading } from "@gluestack-ui/themed";
// import { IconDelete, IconEdit } from "../../../assets";
// import { useNavigation } from "@react-navigation/native";
// // tambah
// import { deleteNote } from "../../../actions/AuthAction";

// const ListNote = ({ judul, isi, tanggal, status, category, noteId }) => {
//   // Menggunakan hook useNavigation untuk navigation
//   const navigation = useNavigation();

//   // Fungsi dijalankan ketika tombol edit diklik
//   const handleEditClick = () => {
//     // Navigasi ke halaman EditNote 
//     navigation.navigate("EditNote", {
//       judul,
//       isi,
//       category,
//       status,
//       noteId,
//     });
//   };

//   // Fungsi dijalankan ketika tombol hapus diklik
//   const handleDeleteClick = () => {
//     // memanggil fungsi deleteNote dengan parameter noteId untuk menghapus catatan
//     deleteNote(noteId);
//     // Navigasi ulang ke halaman utama (MainApp)
//     navigation.replace("MainApp");
//   };

//   return (
//       <Box
//         shadowColor="$black"
//         shadowOffset={{ width: 0, height: 2 }}
//         shadowOpacity={"$25"}
//         shadowRadius={"$3.5"}
//         elevation={"$5"}
//         backgroundColor="$white"
//         padding={"$2"}
//         width={"$full"}
//         borderRadius={"$xl"}
//         flexDirection="row"
//         justifyContent="space-between"
//         alignItems="center"
//         my={"$2"}
//         px={"$5"}
//         py={"$3"}
//       >
//         {/* VStack mengatur/mengelompokkan secara vertikal */}
//         <VStack>
//           <Heading size="2xl">{judul}</Heading>
//           <Text size="md" maxWidth={"$64"}>{isi}</Text>
//           <Box
//             shadowColor="$black"
//             shadowOffset={{ width: 0, height: 2 }}
//             shadowOpacity={"$25"}
//             shadowRadius={"$3.5"}
//             elevation={"$5"}
//             backgroundColor="$green700"
//             borderRadius={"$lg"}
//             py={"$2"}
//             px={"$3"}
//             alignItems="center"
//             justifyContent="center"
//             mt={"$3"}
//           >
//             <Text color="$white" fontWeight="$bold">
//               {status}
//             </Text>
//           </Box>
//         </VStack>
//         {/* HStack mengatur/mengelompokkan secara horizontal */}
//         <HStack>
//           {/* Tombol Pressable dengan ikon Edit yang memanggil fungsi handleEditClick saat diklik */}
//           <Pressable onPress={handleEditClick}>
//             <IconEdit />
//           </Pressable>
//           {/* Tombol Pressable dengan ikon Delete yang memanggil fungsi handleDeleteClick saat diklik */}
//           <Pressable onPress={handleDeleteClick}>
//             <IconDelete />
//           </Pressable>
//         </HStack>
//       </Box>
//   );
// };

// export default ListNote;