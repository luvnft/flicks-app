import Layout from "constants/Layout";
import { padding } from "helpers/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    top: 0,
    flex: 1,
    left: 0,
    zIndex: 999,
    width: "100%",
    height: "100%",
    position: "absolute",
    flexDirection: "column",
  },

  historyContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  searched_keywords: {
    gap: 14,
    width: "100%",
    paddingVertical: 16,
    borderBottomWidth: 1,
    flexDirection: "column",
  },
  keyword: {
    paddingRight: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  keyword_details: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  keyword_icon: {
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  searched_profiles: {
    gap: 14,
    width: "100%",
    paddingVertical: 16,
    flexDirection: "column",
  },
});
