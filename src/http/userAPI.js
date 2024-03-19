import { $authHost, $host } from ".";

export const registration = async (email, password, username) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    username,
  });
  return data;
};
export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return data;
};
export const check = async () => {
  const token = localStorage.getItem("token");
  try {
    if (!token) {
      throw new Error("Token not found");
    }
    const { data } = await $authHost.get("api/user/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Unauthorized");
  }
};
