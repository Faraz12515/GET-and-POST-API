import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function Fetch() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {data.map((v, i) => {
            return (
              <Text key={i}>
                {v.title}, {v.releaseYear}
              </Text>
            );
          })}
        </View>
      )}
    </View>
  );
}
