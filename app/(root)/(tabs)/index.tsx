import { Card, FeaturedCard } from "@/components/cards";
import Filters from "@/components/filters";
import SearchBar from "@/components/SearchBar";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="pl-5 pr-5">
        {/* Header */}
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-row justify-between items-center mx-4">
              <View className="flex flex-col">
                <Text className="font-rubik-light">Good Morning</Text>
                <Text className="font-rubik-medium text-xl">Ayush Gupta</Text>
              </View>
            </View>
          </View>
          <Image source={icons.bell} className="size-7" />
        </View>

        {/* Searchbar */}
        <SearchBar />

        {/* Homepage featured section */}
        <ScrollView className="h-full">
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

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex flex-row gap-5 mt-5">
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
              </View>
            </ScrollView>
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

            <View className="flex flex-row gap-5 mt-5">
              <Card />
              <Card />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
