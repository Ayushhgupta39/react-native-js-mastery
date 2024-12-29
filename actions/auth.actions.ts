import { account, avatar } from "@/lib/appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import { OAuthProvider } from "react-native-appwrite";

export async function login() {
  try {
    const redirectUri = Linking.createURL("/");

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );

    if (!response) {
      throw new Error("Failed to login. Unable to create OAuth2 token");
    }

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );

    if (browserResult.type !== "success") {
      throw new Error("Failed to login. Unable to open async auth session");
    }

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) {
      throw new Error("Failed to login. secret or userId is missing.");
    }

    const session = await account.createSession(userId, secret);

    if (!session) {
      throw new Error("Error while login: Failed to create session.");
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
    try {
        const response = await account.deleteSession("current");
        return response;
    } catch (error) {
        console.error("Error while logging out: ", error);
        return false;
    }
}

export async function getCurrentUser() {
    try {
        const response = await account.get();

        if (response.$id) {
            const userAvatar = avatar.getInitials(response.name);
            return {
                ...response,
                avatar: userAvatar.toString()
            }
        }
    } catch (error) {
        console.log("Error while fetching user details: ", error)
        return null;
    }
}