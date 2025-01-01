import { Card, FeaturedCard } from "@/components/cards";
import Filters from "@/components/filters";
import SearchBar from "@/components/SearchBar";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        className="pb-32"
        columnWrapperStyle={{
          display: "flex",
          gap: "10",
          paddingHorizontal: 20,
        }}
        ListHeaderComponent={
          <View className="pl-5 pr-5">
            {/* Header */}

            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image
                  source={{ uri: user?.avatar }}
                  className="size-12 rounded-full"
                />
                <View className="flex flex-row justify-between items-center mx-4">
                  <View className="flex flex-col">
                    <Text className="font-rubik-light">Good Morning</Text>
                    <Text className="font-rubik-medium text-xl">
                      {user?.name}
                    </Text>
                  </View>
                </View>
              </View>
              <Image source={icons.bell} className="size-7" />
            </View>

            {/* Searchbar */}
            <SearchBar />

            {/* Homepage featured section */}

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={[5, 6, 7]}
                renderItem={({ item }) => <FeaturedCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                contentContainerStyle={{ display: "flex", gap: 10 }}
              />
            </View>

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Our Recommendations
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <Filters />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
