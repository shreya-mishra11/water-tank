import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [tanks, setTanks] = useState([1, 2, 3, 4, 5]);
  return (
    <View
      style={{
        flex: 1,
        padding: 12,
      }}
    >
      <Button title="Add Tank" onPress={() => {}} color={"blue"} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          justifyContent: "space-between",
          width: "100%",
          marginVertical: 10,
        }}
      >
        <Button title="Add Water" onPress={() => {}} color={"green"} />
        <Button title="Drain Water" onPress={() => {}} color={"red"} />
      </View>
      {/* Add tanks on click of Add Tank */}
      <View
        // key={tank}
        style={{
          padding: 10,
          marginVertical: 5,
          width: "100%",
          backgroundColor: "red",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        {tanks.map((tank) => (
          <View
            key={tank}
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "lightgray",
              height: 100,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text style={{ fontSize: 16, color: "black" }}>Tank {tank}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
