import React from "react";
import { useQuery } from "react-query";

export default function useUserData(userId) {
  const usersData = useQuery(["users", userId], () =>
    fetch(`/api/users/${userId}`).then((res) => res.json())
  );
  return usersData;
}
