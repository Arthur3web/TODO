import { $authHost, $host } from ".";

export const registration = async (email, password, timezone) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    timezone,
  });
  localStorage.setItem("token", data.token);
  return data;
};
export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  // console.log('data.token', data.token)
  localStorage.setItem("token", data.token);
  return data;
};
export const check = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found");
    }
    const { data } = await $authHost.get("api/user/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(token);
    // console.log(data);
    return data;
  } catch (error) {
    // Обработка ошибок при проверке авторизации
    throw new Error("Unauthorized");
  }
};
