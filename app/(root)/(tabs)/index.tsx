import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl font-rubik-light p-4">Welcome to Waterbnb</Text>
      <Link
        className="p-3 m-2 border-[.5px] w-1/2 text-center"
        href={"/sign-in"}
      >
        Sign In Page
      </Link>
      <Link
        className="p-3 m-2 border-[.5px] w-1/2 text-center"
        href={"/explore"}
      >
        {" "}
        Explore Page
      </Link>
      {/* <Link href={"/profile"}>Profile page</Link> */}
      <Link
        className="p-3 m-2 border-[.5px] w-1/2 text-center"
        href={"/properties/1"}
      >
        Propert page
      </Link>
    </View>
  );
}
