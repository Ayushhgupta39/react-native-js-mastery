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
      <Text className="font-bold text-3xl p-4">Welcome to Re-State</Text>
      <Link href={"/sign-in"}>Sign In Page</Link>
      <Link href={"/explore"}> Explore Page</Link>
      {/* <Link href={"/profile"}>Profile page</Link> */}
      <Link href={"/properties/1"}>Propert page</Link>
    </View>
  );
}