import { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";

export default function Index() {
  const [tanks, setTanks] = useState([1, 2, 3, 4, 5]);
  const [tankLevels, setTankLevels] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const MAX_HEIGHT = 100;
  const STEP = 20;

  const handleAddTank = () => {
    setTanks((prevTanks) => {
      const newTankNumber = prevTanks.length + 1;
      setTankLevels((prev) => ({ ...prev, [newTankNumber]: 0 }));
      return [...prevTanks, newTankNumber];
    });
  };

  const handleAddWater = () => {
    setTankLevels((prevLevels) => {
      const updatedLevels = { ...prevLevels };
      for (let tank of tanks) {
        if (updatedLevels[tank] < MAX_HEIGHT) {
          updatedLevels[tank] = Math.min(
            updatedLevels[tank] + STEP,
            MAX_HEIGHT
          );
          break;
        }
      }
      return updatedLevels;
    });
  };

  const handleDrainWater = () => {
    setTankLevels((prevLevels) => {
      const updatedLevels = { ...prevLevels };
      for (let i = tanks.length - 1; i >= 0; i--) {
        const tank = tanks[i];
        if (updatedLevels[tank] > 0) {
          updatedLevels[tank] = Math.max(updatedLevels[tank] - STEP, 0);
          break;
        }
      }
      return updatedLevels;
    });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 12,
      }}
    >
      <Button title="Add Tank" onPress={handleAddTank} color={"blue"} />
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
        <Button title="Add Water" onPress={handleAddWater} color={"green"} />
        <Button title="Drain Water" onPress={handleDrainWater} color={"red"} />
      </View>
      {/* Add tanks on click of Add Tank */}
      <View
        style={{
          padding: 10,
          marginVertical: 5,
          width: "100%",
          backgroundColor: "#f0f0f0",
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
              // backgroundColor: "lightgray",
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
              backgroundColor: "#9999",
            }}
          >
            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: tankLevels[tank],
                width: "100%",
                backgroundColor: "#00BFFF", // Water blue
              }}
            />
            <Text style={{ fontSize: 16, color: "black" }}>Tank {tank}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
