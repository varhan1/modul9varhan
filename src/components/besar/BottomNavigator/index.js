import TabItem from "../TabItem";
import { Box } from "@gluestack-ui/themed";

// BottomNavigator Function Component
const BottomNavigator = ({ state, descriptors, navigation }) => {
  // Return Statement
  return (
    <Box position="absolute" left={"$0"} right={"$0"} bottom={"$0"} paddingVertical={"$5"} paddingHorizontal={"$5"} margin={"$2"} flexDirection="row" backgroundColor="$blue" hardShadow="5" borderRadius={"$xl"} justifyContent="space-around">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // Opsi merge: true memastikan bahwa parameter di dalam layar tab tidak hilang ketika berpindah antar tab.
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return <TabItem key={index} label={label} isFocused={isFocused} onPress={onPress} onLongPress={onLongPress} />;
      })}
    </Box>
  );
};

export default BottomNavigator;