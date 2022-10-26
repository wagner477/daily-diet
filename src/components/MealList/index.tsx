import { MealsCard } from "@components/MealsCard";
import { FlatList, Text, View } from "react-native";

import { useState } from "react";
import { Date } from "./styled";

interface Props {
  data: {
    id: number;
    hour: string;
    meal: string;
    date: string;
  }[];
}

export const MealList = ({ data }: Props) => {
  const [meals, setMeals] = useState(data);

  const dates = meals.map((meal) => meal.date);

  const uniqueDates = [...new Set(dates)];

  const mealsByDate = uniqueDates.map((date) => {
    return meals.filter((meal) => meal.date === date);
  });

  return (
    <FlatList
      style={{ marginTop: 32 }}
      data={mealsByDate}
      keyExtractor={(item) => String(item[0].id)}
      renderItem={({ item }) => (
        <View>
          <Date>{item[0].date}</Date>
          <FlatList
            data={item}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <MealsCard hour={item.hour} meal={item.meal} />
            )}
          />
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
