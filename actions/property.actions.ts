import { config, database } from "@/lib/appwrite";
import { Query } from "react-native-appwrite";

export async function getPropertyById({ id }: { id: string }) {
  try {
    const response = await database.getDocument(
      config.databaseId!,
      config.propertiesCollectionId!,
      id
    );

    console.log("Property details: ", response)
    return response;
  } catch (error) {
    console.error("Error while fetching property details: ", error);
  }
}

export async function getLatestProperties() {
  try {
    const response = await database.listDocuments(
      config.databaseId!,
      config.propertiesCollectionId!,
      [Query.orderAsc("$createdAt"), Query.limit(5)]
    );

    return response.documents;
  } catch (error) {
    console.error("Error while fetching latest properties: ", error);
    return [];
  }
}

export async function getProperties({
  filter,
  query,
  limit,
}: {
  filter: string;
  query: string;
  limit?: number;
}) {
  try {
    const buildQuery = [Query.orderDesc("$createdAt")];

    if (filter && filter !== "All") {
      buildQuery.push(Query.equal("type", filter));
    }

    if (query) {
      buildQuery.push(
        Query.or([
          Query.search("name", query),
          Query.search("address", query),
          Query.search("type", query),
        ])
      );
    }

    if (limit) {
      buildQuery.push(Query.limit(limit));
    }

    const response = await database.listDocuments(
      config.databaseId!,
      config.propertiesCollectionId!,
      buildQuery
    );

    return response.documents;
  } catch (error) {
    console.error("Error while fetching properties: ", error);
    return [];
  }
}
