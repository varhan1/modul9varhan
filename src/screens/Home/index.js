import React, { useState, useEffect } from "react";
import { Box, FlatList } from "@gluestack-ui/themed";
import { CategoryTab, ListNote } from "../../components";
import { getNote } from "../../actions/AuthAction"; //tambah impor komponen dari AuthAction

const Home = ({ navigation }) => {
  // ditambahkan beberapa state
  // State untuk menyimpan catatan pengguna, kategori unik, dan kategori terpilih
  const [userNotes, setUserNotes] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ditambah beberapa fungsi
  // Fungsi useEffect yang dijalankan saat komponen dijalankan
  useEffect(() => {
    // Fungsi fetchData untuk mengambil catatan dari penyimpanan lokal
    const fetchData = async () => {
      const notes = await getNote();
      const categories = notes.map((note) => note.category);
      const uniqueCategories = Array.from(new Set(categories));
      setUserNotes(notes);
      setCategory(uniqueCategories);
    };

    const unsubscribe = navigation.addListener("focus", fetchData);

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onCategoryPress = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  // Membuat daftar catatan yang telah difilter berdasarkan kategori terpilih
  const filteredNotes = selectedCategory ? userNotes.filter((note) => note.category === selectedCategory) : userNotes;

  return (
    <Box py="$3" px="$2" marginTop="$10">
      <FlatList data={category} renderItem={({ item, index }) => <CategoryTab key={index} title={item} padding="$2" margin="$2" onPress={() => onCategoryPress(item)} />} horizontal={true} mb={"$4"} />
      {/* Daftar catatan yang telah difilter */}
      <FlatList
        data={filteredNotes}
        renderItem={({ item }) => <ListNote key={item.noteId} judul={item.title} isi={item.content} tanggal="tanggal" status={item.status} category={item.category} noteId={item.noteId} />}
        keyExtractor={(item) => item.noteId}
      />
    </Box>
  );
};

export default Home;







// import React, { useState, useEffect } from "react";
// import { Box, FlatList } from "@gluestack-ui/themed";
// import { CategoryTab, ListNote } from "../../components";
// // tmabah
// import { getNote } from "../../actions/AuthAction";

// const Home = ({ navigation }) => {
//   // tambah state dan fungsi
//   // const [userNotes, setUserNotes] = useState([
//   //   { noteId: 1, title: 'Note 1', content: 'Lorem ipsum...', status: 'Active', category: 'Work' },
//   //   { noteId: 2, title: 'Note 2', content: 'Lorem ipsum...', status: 'Inactive', category: 'Personal' },
//   //   { noteId: 3, title: 'Note 3', content: 'Lorem ipsum...', status: 'Active', category: 'Work' },
//   //   { noteId: 4, title: 'Note 4', content: 'Lorem ipsum...', status: 'Active', category: 'Study' },
//   // ]);
//   // const [category, setCategory] = useState(['Work', 'Personal', 'Study', 'Others']); 
//   // const [selectedCategory, setSelectedCategory] = useState(null);

//   const [userNotes, setUserNotes] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const notes = await getNote();
//       const categories = notes.map((note) => note.category);
//       const uniqueCategories = Array.from(new Set(categories));
//       setUserNotes(notes);
//       setCategory(uniqueCategories);
//     };

//     const unsubscribe = navigation.addListener("focus", fetchData);

//     return () => {
//       unsubscribe();
//     };
//   }, [navigation]);

//   const onCategoryPress = (selectedCategory) => {
//     setSelectedCategory(selectedCategory);
//   };
  
//   const filteredNotes = selectedCategory ? userNotes.filter((note) => note.category === selectedCategory) : userNotes;

//   return (
//     <Box py="$3" px="$2" marginTop="$10">
//       <FlatList data={category} renderItem={({ item, index }) => <CategoryTab key={index} title={item} padding="$2" margin="$2" onPress={() => onCategoryPress(item)} />} horizontal={true} mb={"$4"} />
//       <FlatList
//         data={filteredNotes}
//         renderItem={({ item }) => <ListNote key={item.noteId} judul={item.title} isi={item.content} tanggal="tanggal" status={item.status} category={item.category} noteId={item.noteId} />}
//         keyExtractor={(item) => item.noteId}
//       />
//     </Box>
//   );
// };

// export default Home;